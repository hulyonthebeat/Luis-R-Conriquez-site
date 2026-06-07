# Luis R Conriquez — Official Website

The official artist website for **Luis R Conriquez** ("El Rey de los Corridos Bélicos", label: Kartel Music) — a flagship, Spanish-language presentation site with discography, videos, tour dates, merch, and an editorial bio. Frontend-only (no backend/DB).

## Run & Operate

- `pnpm --filter @workspace/luisrc run dev` — run the website (the `artifacts/luisrc: web` workflow)
- `pnpm --filter @workspace/luisrc run typecheck` — typecheck the site (use this to verify, NOT `build`, which needs workflow-provided `PORT`/`BASE_PATH`)
- `pnpm run typecheck` — full typecheck across all packages

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- React + Vite SPA, Tailwind CSS v4, shadcn/ui components
- Routing: `wouter` (base from `import.meta.env.BASE_URL`)
- Animation: `framer-motion`
- Icons: `react-icons/si` (brand) + `lucide-react`

## Where things live

- `artifacts/luisrc/src/data/content.ts` — **single source of truth for all site content**: site info, releases, videos, shows (+ ticket URLs), merch, press, stats, awards, socials (+ URLs), streaming links, legal links. Edit here to update text, links, dates.
- `artifacts/luisrc/src/pages/` — `Home.tsx`, `Music.tsx`, `Videos.tsx`, `Shows.tsx`, `Merch.tsx`, `About.tsx`
- `artifacts/luisrc/src/components/Layout.tsx` — header (nav + mobile menu) and footer
- `artifacts/luisrc/src/index.css` — theme tokens + Google Fonts import
- `artifacts/luisrc/public/media/` — all images, referenced via `${import.meta.env.BASE_URL}media/<file>`
- `artifacts/luisrc/src/App.tsx` — router

## Architecture decisions

- **Frontend-only by design** — no backend, DB, or API. The newsletter form is a client-side success state only.
- **Content is fully data-driven** from `content.ts` so text/links/dates/images can be swapped without touching components.
- **Placeholder links** (tickets, legal) use `"#"` and are documented in `content.ts` for the owner to replace; socials/streaming use safe handle/search URLs.
- Video playback uses YouTube embeds inside a shadcn `Dialog`; dialog triggers are real `<button>` elements for keyboard accessibility.

## Aesthetic

Dark/charcoal backgrounds, muted gold accents, oversized blackletter/serif display type, grainy B&W cinematic photography, smoke/grain texture overlays, editorial spacing, restrained motion. Spanish-forward copy. No emojis.

## Gotchas

- In `index.css`, the Google Fonts `@import` MUST be the first line (before `@import "tailwindcss"`) — Tailwind v4 requires `url()` imports first.
- Verify with `typecheck`, not `build` (build needs `PORT`/`BASE_PATH` from the workflow).
- If a Vite "duplicate React / useRef null" runtime error appears after adding a Radix dependency, restart the `artifacts/luisrc: web` workflow to clear the stale dep-optimize cache.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
