---
name: Newsletter signup capture
description: How newsletter form data is captured to DB and exported to CSV for the luisrc site
---

# Newsletter signup capture (luisrc)

Flow: luisrc `Newsletter` form → generated `useCreateNewsletterSignup` mutation → `POST /api/newsletter` on api-server → Drizzle `newsletter_signups` table. A CLI script exports the table to `deliverables/newsletter-signups.csv` for later handoff (e.g. Sony). Email/marketing-tool integration is intentionally deferred.

## CSV export must defend against formula injection
**Rule:** any CSV built from user-supplied fields must neutralize cells whose first char is one of `= + - @ \t \r` by prefixing with a single quote, in ADDITION to normal quote/comma/newline escaping.
**Why:** without it, opening the export in Excel/Sheets executes attacker-controlled formulas from name/email/phone/country. Caught in code review.
**How to apply:** see `csvCell()` in `scripts/src/export-newsletter.ts`; reuse the same pattern for any future export script.

## Conventions worth keeping consistent
- Orval only generates the request-body Zod (`CreateNewsletterSignupBody`) for this POST, NOT a response Zod. Shape the 201 response manually but annotate it with the generated `NewsletterSignup` type (`@workspace/api-zod`) so the response can't silently drift from the contract.
- Consent is enforced server-side (`consent !== true` → 400) — never trust the client checkbox alone.
- Server trims name/email/phone/country and lowercases email; rejects blank-after-trim. Note: Zod `.email()` runs on the RAW value before trim, so an email with surrounding whitespace 400s — the frontend trims before sending, so real users are unaffected.
- The export script runs from its package dir under `pnpm --filter`; it resolves the workspace root (cwd may end in `scripts`) so the CSV lands in repo-root `deliverables/`, not `scripts/deliverables/`.
