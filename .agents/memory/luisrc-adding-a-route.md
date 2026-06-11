---
name: luisrc adding a route
description: All the places a new page/route must be registered in the luisrc artifact, including the easy-to-miss SSR prerender duplicate router.
---

# Adding a new route to the luisrc site

The site has a **duplicate route list for SSR prerendering** that is separate from the
client router. Adding a route in only `App.tsx` makes it work in dev/preview but the
prerendered static HTML for that route comes out with the Layout (nav/footer) but an
**empty body** (no matching `<Route>`), silently killing SEO content.

**Why:** `src/entry-server.tsx` hardcodes its own `<Switch>` with its own imports —
it does NOT reuse `App.tsx`'s router. It also uses `<Router base="">` (no base path)
and a static location hook.

**How to apply — to add a route you must touch ALL of these:**
1. `src/App.tsx` — add the `<Route>` + import (client routing).
2. `src/entry-server.tsx` — add the SAME `<Route>` + import (SSR/prerender body). EASY TO MISS.
3. `prerender.mjs` — add a `{ url, outFile: "dist/public/<route>/index.html", meta }` entry.
4. `src/lib/pageMeta.ts` — add a `pageMeta["/<route>"]` entry; call `usePageMeta(pageMeta["/<route>"])` in the page.
5. `.replit-artifact/artifact.toml` — add two `[[services.production.rewrites]]` (`/<route>` and `/<route>/` → `/<route>/index.html`) ABOVE the `/*` catch-all. Edit via `verifyAndReplaceArtifactToml` (direct edits blocked).
6. `public/sitemap.xml` — add the `<url>` entry.
7. `src/data/content.ts` `navLinks` — add nav entry if it should appear in the menu.

**Verify** with a prod build (`PORT=24999 BASE_PATH=/ pnpm --filter @workspace/luisrc run build`)
then grep the prerendered `dist/public/<route>/index.html` for a string that ONLY appears
in the page BODY (not in meta tags) — meta/description text can false-positive a "rendered" check.
