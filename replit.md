# Luis R Conriquez — Official Site

A cinematic, dark/metallic official artist website for Luis R Conriquez ("El Rey de los Corridos Bélicos") — music, videos, tour dates, merch, and bio. Spanish-language, six routes, built as a static React + Vite app.

## Run & Operate

- App runs via the `luisrc` workflow (preview pane). Do not run `pnpm dev` at the root.
- `pnpm --filter @workspace/luisrc run typecheck` — typecheck the site
- `pnpm run typecheck` — full typecheck across all packages

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- `luisrc` artifact: React + Vite, **wouter** routing, Tailwind v4, framer-motion, react-icons, shadcn/ui (NO Next.js)
- Other artifacts: `api-server` (Express), `mockup-sandbox` (design canvas)

## Where things live (luisrc)

- `artifacts/luisrc/src/data/content.ts` — single editable source of truth for ALL site content (site info, releases, videos, shows, merch, awards, socials, gallery, timeline, nav links, media mapping)
- `artifacts/luisrc/src/index.css` — full ported design system (tokens, fonts, smoke bg, grain/vignette overlays, every component class). Fonts via Google Fonts `@import`.
- `artifacts/luisrc/src/components/Layout.tsx` — nav, fullscreen burger menu, footer, smoke parallax, hash-nav, scroll-to-top
- `artifacts/luisrc/src/components/site/` — reusable pieces (Icons, Reveal, Img, HeroPlayer, FeaturedVideo, StreamRow, Newsletter, HashLink, cards.tsx)
- `artifacts/luisrc/src/pages/` — Home, Music, Videos, Shows, Merch, About
- `artifacts/luisrc/public/media/` — all imagery
- Routes: `/` `/musica` `/videos` `/shows` `/merch` `/acerca`

## Architecture decisions

- Faithful rebuild of an uploaded static HTML prototype (`attached_assets/luis_extracted/`). Markup/classes ported verbatim; the original per-page vanilla-JS render functions became React components.
- `Reveal` wraps content in framer-motion `whileInView` (replaces prototype's `[data-reveal]` CSS). The `[data-reveal]{opacity:0}` rule was intentionally NOT ported, so content is visible even without JS reveal.
- `Img` renders the prototype's `.imgph` labeled placeholder; when a real media file exists it overlays an `<img>` that covers the label. Releases/awards mostly use placeholders (only Vol. IV has a real cover); videos/merch/gallery use real images.
- Icons rendered without width/height so CSS controls sizing.
- Hash links (e.g. `/#suscribete`) navigate home first, then smooth-scroll.

## User preferences

_Populate as you build._

## Gotchas

- Do NOT re-add a global `[data-reveal]{opacity:0}` rule — reveals are handled by the `Reveal` component, not CSS.
- Media filenames in `content.ts` must match files in `public/media/`.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
