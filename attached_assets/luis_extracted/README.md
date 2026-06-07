# Luis R Conriquez — Official Site

A high-fidelity, fully-navigable prototype of the official artist website. Dark, metallic, cinematic — built mobile-first.

## Pages
- `index.html` — Homepage (hero · latest release · featured video · tour · music · merch · recognition · gallery · newsletter)
- `music.html` — Discography (featured release + full catalog)
- `videos.html` — Featured video + grid
- `shows.html` — Tour dates with region filter + empty state
- `merch.html` — Featured drop, product grid, shop handoff
- `about.html` — Bio, stats, career timeline

## Editing content
All copy, links, dates and items live in **`assets/data.js`** — releases, shows, videos, merch, press, stats, socials, gallery. Edit there and every page updates. This mirrors the intended Next.js `data/*.ts` structure.

## Images
Image areas are drag-and-drop slots (`<image-slot>`) — drop your own photos/cover art directly onto them in the preview and they persist. Grid thumbnails use styled placeholders labeled with their content.

## Files
- `assets/styles.css` — design tokens, type, nav, footer, buttons
- `assets/interior.css` — interior-page components
- `assets/app.js` — nav/footer injection, icons, scroll reveals, renderers
- `assets/data.js` — **editable content**

## Handoff to Next.js
This is the design source of truth. To ship on Vercel: rebuild as Next.js (App Router) + TypeScript + Tailwind + Framer Motion, porting `data.js` to `data/*.ts`, each page to a route, and the rendered card markup to React components. The visual system, copy, layout and interactions are all specified here.
