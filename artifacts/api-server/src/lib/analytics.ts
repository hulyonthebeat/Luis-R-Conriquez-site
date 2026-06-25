import crypto from "node:crypto";
import { createRequire } from "node:module";
import { UAParser } from "ua-parser-js";
import type { Request } from "express";

/**
 * geoip-lite ships large binary .dat files and resolves them relative to its
 * own module directory, so it must stay EXTERNAL to the esbuild bundle (see
 * build.mjs). We load it lazily and defensively: if it is unavailable at
 * runtime we simply skip country lookup instead of crashing the server.
 */
type GeoLookup = (ip: string) => { country?: string } | null;
let geoip: { lookup: GeoLookup } | null = null;
let geoipLoaded = false;
function getGeoip(): { lookup: GeoLookup } | null {
  if (geoipLoaded) return geoip;
  geoipLoaded = true;
  try {
    const require = createRequire(import.meta.url);
    geoip = require("geoip-lite") as { lookup: GeoLookup };
  } catch {
    geoip = null;
  }
  return geoip;
}

/**
 * Matches automated traffic (search/SEO crawlers, security & audit scanners,
 * HTTP libraries, headless browsers). Empty user-agents are treated as bots
 * too — real browsers always send one. Keeps scanner noise (e.g. audit
 * scanners) out of the "real visitor" numbers.
 */
const BOT_RE =
  /bot|crawl|spider|scan|audit|slurp|monitor|probe|preview|headless|phantom|selenium|playwright|puppeteer|lighthouse|curl|wget|python-requests|python-httpx|httpclient|go-http|java\/|okhttp|axios\/|node-fetch|libwww|apache-httpclient|semrush|ahrefs|mj12|dotbot|bytespider|gptbot|claudebot|anthropic|ccbot|petalbot|dataforseo|censys|zgrab|masscan|nmap|nuclei|expanse|internet-?measurement|facebookexternalhit|whatsapp|telegrambot|discordbot|pingdom|uptimerobot|statuscake/i;

export function isBotUA(ua: string | undefined): boolean {
  if (!ua || ua.trim() === "") return true;
  return BOT_RE.test(ua);
}

export function clientIp(req: Request): string | null {
  const ip = req.ip || "";
  return ip.replace(/^::ffff:/, "") || null;
}

export function lookupCountry(ip: string | null): string | null {
  if (!ip) return null;
  const g = getGeoip();
  if (!g) return null;
  try {
    return g.lookup(ip)?.country || null;
  } catch {
    return null;
  }
}

export function parseUA(ua: string | undefined): {
  browser: string | null;
  os: string | null;
  deviceType: string;
} {
  const r = new UAParser(ua || "").getResult();
  return {
    browser: r.browser.name || null,
    os: r.os.name || null,
    deviceType: r.device.type || "desktop",
  };
}

/**
 * Privacy-preserving daily visitor fingerprint. We never store the raw IP;
 * instead we keep a salted hash that rotates every day, which lets us count
 * unique visitors without retaining personal data (cookieless, GDPR-friendly).
 * The salt MUST come from SESSION_SECRET — without a strong secret the hash
 * would be predictable/enumerable, so we skip it entirely (visitors simply go
 * uncounted as unique) rather than store a weak pseudonym.
 */
const HASH_SECRET = process.env.SESSION_SECRET || "";
export function visitorHash(
  ip: string | null,
  ua: string | undefined,
): string | null {
  if (!ip || !HASH_SECRET) return null;
  const day = new Date().toISOString().slice(0, 10);
  return crypto
    .createHash("sha256")
    .update(`${ip}|${ua || ""}|${day}|${HASH_SECRET}`)
    .digest("hex")
    .slice(0, 32);
}

export function referrerHost(
  referrer: string | undefined,
  selfHost: string | undefined,
): string | null {
  if (!referrer) return null;
  try {
    const host = new URL(referrer).hostname.replace(/^www\./, "");
    if (!host) return null;
    if (selfHost && host === selfHost.replace(/^www\./, "")) return null;
    return host;
  } catch {
    return null;
  }
}
