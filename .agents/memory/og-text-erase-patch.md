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

**luisrc OG specifics:** the original OG is a portrait on a vertical sunset→near-black gradient (bg sampled
at left column x60: y200≈(229,172,117) smoothly → y625≈(1,1,1)); the gold name (#CFA149) is centered at
x600 baseline ≈y502, the subtitle (#c6b796, DejaVu Serif p32 kerning28) centered ≈x605 cap-top y539
baseline ≈y562. Cleanest rebuild that keeps the UNCHANGED name pixel-identical: use the original OG as the
base, erase the chain+old subtitle by stretching a clean dark-bg column over that band (the "gradient that
darkens the bottom"), re-key the gold name glyphs back on top, then draw the new subtitle. Measure text rows
with a ruler, NOT just color-keying — gold/cream letters fade into the dark gradient so a fuzz key only
catches the brighter lower halves and reports a wrong (too-low) cap-top.

**Rebuild-from-scratch (preferred when user rejects "editing the original"):** compose the photo into 1200x630
(`-resize 1200x -gravity North -crop 1200x630+0+OFF`), then to copy the original's gradient EXACTLY, sample the
original OG's per-y tone at a left-edge column (all background) AND center, e.g. left x150 ≈ 176→144→112→84→57→38→16→1
from y300→625 — a smooth near-linear warm falloff that only hits black at the very bottom. Reproduce it with ONE
linear black gradient over the matching span (`-size 1200xH gradient:none-black` composited at +0+167, H≈463 so
alpha=0 at y167 → 1 at y630). Black-over-peach preserves warmth: result = photoColor*(1-alpha), so peach*(0.16) =
warm brown ≈ the original, NOT gray. A "ramp then solid-black slab" looks too dark — users notice. The OG NAME font
is a bold Times/Georgia-style serif (NOT the site's Cinzel); to match font/size/color/placement perfectly, EXTRACT
the original gold name glyphs (`-crop 1020x84+90+426`, gray `-level 38%,62%` as alpha, CopyOpacity) and composite
back at the SAME coords — don't re-typeset. Subtitle in DejaVu Serif (close match) is accepted; size it up if the
shorter new text looks small.
