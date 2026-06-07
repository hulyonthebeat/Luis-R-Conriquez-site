---
name: imgph placeholder label overflow
description: Why the .imgph ::after label must be absolutely positioned, not an in-flow flex child
---

The `.imgph` placeholder (luisrc `index.css`) renders its `data-label` via an `::after` pseudo-element and shows a real `<img>` on top when a media file exists.

**Rule:** `.imgph::after` must be `position:absolute` (bottom-left, `z-index:0`) so it is removed from flex flow and always sits behind the image (`.imgph img` is `z-index:1`).

**Why:** `.imgph` is `display:flex`. If `::after` is left in-flow, a full-width `<img>` flex sibling pushes the label sideways and it bleeds out past the cover (overflow clipping does not save it in every container). This only surfaces once cards that previously used placeholders get real images — e.g. all four release covers on `/musica`.

**How to apply:** Never make `.imgph::after` an in-flow flex item again. If adding new image cards, rely on the existing absolute label; the image covers it automatically.
