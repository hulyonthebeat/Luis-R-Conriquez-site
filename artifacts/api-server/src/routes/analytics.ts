import crypto from "node:crypto";
import { Router, type IRouter } from "express";
import { z } from "zod";
import { sql } from "drizzle-orm";
import { db, pageViewsTable } from "@workspace/db";
import {
  isBotUA,
  clientIp,
  lookupCountry,
  parseUA,
  visitorHash,
  referrerHost,
} from "../lib/analytics";
import { dashboardHtml } from "./analyticsDashboard";

const router: IRouter = Router();

const collectBody = z.object({
  path: z.string().min(1).max(512),
  referrer: z.string().max(2048).optional(),
});

/* ---------- collect: public beacon fired by the site on each page view ---------- */
router.post("/analytics/collect", async (req, res): Promise<void> => {
  // Always answer fast and never surface errors to the visitor's browser.
  res.status(204).end();
  try {
    const parsed = collectBody.safeParse(req.body);
    if (!parsed.success) return;

    let path = parsed.data.path.trim();
    if (!path.startsWith("/")) path = "/" + path;
    path = path.split("#")[0].split("?")[0].slice(0, 512);

    const ua = req.get("user-agent") || "";
    const ip = clientIp(req);
    const selfHost = (req.get("host") || "").split(":")[0];
    const { browser, os, deviceType } = parseUA(ua);

    await db.insert(pageViewsTable).values({
      path,
      referrerHost: referrerHost(parsed.data.referrer, selfHost),
      country: lookupCountry(ip),
      browser,
      os,
      deviceType,
      isBot: isBotUA(ua),
      visitorHash: visitorHash(ip, ua),
    });
  } catch (err) {
    req.log.warn({ err }, "analytics collect failed");
  }
});

/* ---------- auth helper for the private endpoints ---------- */
// Token is accepted ONLY via the x-analytics-token header — never a query
// string, which would leak into logs, history, and referrers.
function authorized(req: { get(name: string): string | undefined }): boolean | "unset" {
  const expected = process.env.ANALYTICS_TOKEN;
  if (!expected) return "unset";
  const provided = req.get("x-analytics-token") || "";
  if (!provided) return false;
  const a = Buffer.from(provided);
  const b = Buffer.from(expected);
  if (a.length !== b.length) return false;
  return crypto.timingSafeEqual(a, b);
}

// Cheap in-memory fixed-window limiter to blunt password brute-forcing.
const RL_WINDOW_MS = 60_000;
const RL_MAX = 20;
const rlHits = new Map<string, { count: number; resetAt: number }>();
function rateLimited(key: string): boolean {
  const now = Date.now();
  const e = rlHits.get(key);
  if (!e || now > e.resetAt) {
    rlHits.set(key, { count: 1, resetAt: now + RL_WINDOW_MS });
    return false;
  }
  e.count += 1;
  return e.count > RL_MAX;
}

const ALLOWED_DAYS = new Set([1, 7, 30, 90, 365]);

/* ---------- summary: token-gated aggregates (human traffic only) ---------- */
router.get("/analytics/summary", async (req, res): Promise<void> => {
  if (rateLimited(clientIp(req) || "unknown")) {
    res.status(429).json({ error: "Too many requests. Try again shortly." });
    return;
  }
  const auth = authorized(req);
  if (auth === "unset") {
    res
      .status(503)
      .json({ error: "Analytics dashboard password is not configured yet." });
    return;
  }
  if (!auth) {
    res.status(401).json({ error: "Invalid password." });
    return;
  }

  let days = Number(req.query.days ?? 30);
  if (!ALLOWED_DAYS.has(days)) days = 30;
  const since = sql`now() - make_interval(days => ${days})`;
  const human = sql`is_bot = false and created_at >= ${since}`;

  const num = (v: unknown): number => Number(v ?? 0);
  const rowsOf = async (q: ReturnType<typeof sql>): Promise<Record<string, unknown>[]> => {
    const r = (await db.execute(q)) as unknown as { rows: Record<string, unknown>[] };
    return r.rows ?? [];
  };

  const topList = async (col: string) => {
    const rows = await rowsOf(sql`
      select ${sql.raw(col)} as label, count(*)::int as count
      from page_views
      where ${human} and ${sql.raw(col)} is not null and ${sql.raw(col)} <> ''
      group by ${sql.raw(col)} order by count desc limit 8`);
    return rows.map((r) => ({ label: String(r.label), count: num(r.count) }));
  };

  try {
    const [totals] = await rowsOf(sql`
      select
        count(*) filter (where ${human})::int as human_views,
        count(distinct visitor_hash) filter (where ${human} and visitor_hash is not null)::int as visitors,
        count(*) filter (where is_bot = true and created_at >= ${since})::int as bot_views
      from page_views`);

    const daily = await rowsOf(sql`
      select to_char(date_trunc('day', created_at), 'YYYY-MM-DD') as day,
             count(*)::int as views,
             count(distinct visitor_hash)::int as visitors
      from page_views
      where ${human}
      group by 1 order by 1 asc`);

    const [topPages, topReferrers, topCountries, topBrowsers, topDevices] =
      await Promise.all([
        topList("path"),
        topList("referrer_host"),
        topList("country"),
        topList("browser"),
        topList("device_type"),
      ]);

    res.json({
      days,
      totals: {
        humanViews: num(totals?.human_views),
        visitors: num(totals?.visitors),
        botViews: num(totals?.bot_views),
      },
      daily: daily.map((r) => ({
        day: String(r.day),
        views: num(r.views),
        visitors: num(r.visitors),
      })),
      topPages,
      topReferrers,
      topCountries,
      topBrowsers,
      topDevices,
    });
  } catch (err) {
    req.log.error({ err }, "analytics summary failed");
    res.status(500).json({ error: "Failed to load analytics." });
  }
});

/* ---------- dashboard: private HTML page (password prompt + charts) ---------- */
router.get("/analytics/dashboard", (_req, res): void => {
  res.type("html").send(dashboardHtml());
});

export default router;
