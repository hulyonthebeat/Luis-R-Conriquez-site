---
name: luisrc media optimization conventions
description: Format/compression conventions for images and the hero video in the luisrc artifact.
---

# luisrc media conventions

All site media lives in `artifacts/luisrc/public/media/` and is referenced by bare filename from `src/data/content.ts` (via `mediaUrl`).

**Conventions to keep when adding media:**
- No photo PNGs. Convert photographic/product PNGs to WebP (`magick in.png -quality 80 out.webp`); keeps alpha, ~80% smaller. Logos with sharp edges → WebP at q90.
- JPGs: cap longest edge ~1600px and re-encode at q82, stripped (`magick in.jpg -resize '1600x1600>' -quality 82 -strip out.jpg`). Recompressing in place needs no code change (same filename); PNG→WebP requires updating the ref in `content.ts`.
- `hero.mp4` is a muted autoplay loop background → audio can be stripped (`-an`) and it is scaled to max 1280px wide, libx264 crf30, `+faststart`.

**Why:** the folder had ballooned to 15MB (heavy PNGs + a 2.8MB hero video + orphan/duplicate files), making the site feel slow vs. reference sites. After these conventions it was ~5.6MB.

**How to apply:** before committing new imagery, run it through the above; check for orphans/dupes with an `rg`-based reference scan + `md5sum` before deleting.
