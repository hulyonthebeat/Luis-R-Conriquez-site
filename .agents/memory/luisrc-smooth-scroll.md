---
name: luisrc smooth scroll (Lenis)
description: How smooth scrolling is wired in the luisrc artifact and the constraint it imposes on any scroll call.
---

# luisrc uses Lenis for smooth scrolling

The `luisrc` site drives page scrolling through a single Lenis instance created in `Layout.tsx` (RAF loop, destroyed on unmount, held in a ref).

**Rule:** any programmatic scroll on this site must go through the Lenis instance, NOT `window.scrollTo` / `element.scrollIntoView`.
- Hash navigation → `lenis.scrollTo(el)`
- Route-change scroll-to-top → `lenis.scrollTo(0, { immediate: true })`

**Why:** native scroll calls fight Lenis's smoothing and cause a jump-then-glide stutter. Keep a `window.scrollTo` fallback only for when the ref is null.

**Compatibility:** Lenis here smooths the real document scroll (no transformed wrapper), so framer-motion `whileInView` and `window.scrollY` listeners keep working normally.

**GPU hints:** avoid persistent `will-change: transform` on `.smoke-bg` — it is sized to the full document height, so a permanent compositor layer wastes GPU texture memory on long pages. A bare `transform: translateZ(0)` is the accepted middle ground.
