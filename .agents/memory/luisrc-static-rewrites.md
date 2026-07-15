---
name: luisrc production static rewrites
description: Prod serving is Replit static hosting driven by artifact.toml rewrites; prerendered routes need explicit entries.
---
Production for `luisrc` is `serve = "static"` in `.replit-artifact/artifact.toml` (NOT vite preview). Only paths listed in `[[services.production.rewrites]]` map to their prerendered `dir/index.html`; everything else falls to the `/*` → `/index.html` SPA catch-all.

**Why:** `/musica/` silently served the homepage in prod even though `dist/public/musica/index.html` existed — the rewrite table didn't know about it.

**How to apply:** whenever prerender.mjs gains a route or redirect stub, add both `/route` and `/route/` rewrite entries via `verifyAndReplaceArtifactToml` (never edit artifact.toml directly). Test with `curl https://luisrconriquezofficial.com/<route>/` after publish.
