---
name: luisrc analytics
description: First-party cookieless analytics for the luisrc site — non-obvious build/architecture decisions.
---

# luisrc first-party analytics

Private, cookieless web analytics. Site (static SPA) fires a `sendBeacon` to the
api-server on each route change; server derives UA/IP/country, filters bots, and
stores rows in the shared `page_views` table. Dashboard is a self-contained HTML
page served by the api-server, gated by an `ANALYTICS_TOKEN` secret.

## Decisions worth keeping

- **geoip-lite MUST be external in `artifacts/api-server/build.mjs`.** It reads
  large binary `.dat` files relative to its own module dir; bundling breaks those
  paths. It is loaded lazily via `createRequire` and degrades to null country.
  **Why:** country lookup silently breaks if this gets bundled.

- **Analytics endpoints deliberately bypass the OpenAPI/api-zod contract** and
  use inline `zod` validation instead. This is intentional (beacon + private
  dashboard, not a public typed API). Don't "fix" it by forcing it through the
  generated contract.

- **Visitor uniqueness = salted daily hash of IP+UA using `SESSION_SECRET`.** Raw
  IP is never stored. If `SESSION_SECRET` is absent the hash is skipped (returns
  null) rather than falling back to a weak constant salt — uniqueness just isn't
  counted. **Why:** a predictable salt would make the stored pseudonym
  enumerable and break the GDPR-safe claim.

- **Dashboard token is accepted ONLY via the `x-analytics-token` header**, never
  a `?token=` query param. **Why:** query tokens leak via logs/history/referrers.

- Bot filtering is a UA regex in `lib/analytics.ts` (covers scanner/audit/crawler
  signatures + empty UA). Summary aggregates always filter `is_bot = false`; bot
  count is reported separately. This is what keeps scanners (e.g. audit scanners)
  out of the real-visitor numbers.

- `app.set("trust proxy", true)` is required in `app.ts` so `req.ip` is the real
  client IP behind the Replit reverse proxy (used only transiently for country +
  the daily hash).
