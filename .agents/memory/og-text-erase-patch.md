---
name: OG/photo text erase-and-replace (ImageMagick)
description: How to remove baked-in text from a photographic OG image and redraw it without a flat slab
---

Task pattern: an OG/social image has text baked onto a photo (e.g. a subtitle over a portrait),
and you must change the wording while keeping it looking IDENTICAL (no visible scrim/slab).

Winning approach (PATCH, not erase):
- Find the text-free "clean plate" source photo, align it to the OG via face/landmark
  scale+translate, then replace ONLY the text band with the aligned clean pixels. Median/morphology
  erase ghosts badly — don't.
- Color-grade the clean plate to match the OG's grade (per-channel add) so the patched band blends.
- If the clean plate doesn't cover the full band (e.g. shoulder ends, leaving background), fill the
  uncovered sub-region with a vertical gradient sampled from the OG's local tone — NOT a flat color.

**Critical gotcha — feathered mask opacity:** a blurred (feathered) mask is only ~90% opaque a few px
inside its hard edge. If the hard edge sits at the text's cap-top/baseline, ~8-10% of the bright text
BLEEDS through at letter tops/bottoms and reads as faint ghost letters. Fix: make the hard rectangle
fully enclose the text with margin ≥ 2.3×blur-sigma on every side, so the text height is 100% opaque and
the feather transition happens OUTSIDE the text. Verify by sampling pixels at cap-top AND baseline rows
(not just the vertical center) — they must all be dark/background, no ~196 values.

**Why:** first attempt added a visible dark slab (rejected); second looked clean at center but had ghost
text because the feather ate the cap-tops/baselines.

Redraw text: render `label:` trimmed (all-caps has no descenders, so trimmed bottom = baseline), match the
original by measuring its on-image width/cap-height with a labeled coord-grid ruler, then composite at
x = center - W/2, y = baseline - H. Match font/color by sampling the original glyphs.
Bump the og:image cache-buster (?v=N) in index.html after overwriting the file.
