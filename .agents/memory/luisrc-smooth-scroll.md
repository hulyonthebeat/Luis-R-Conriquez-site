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

**Scroll-jank causes found on this site (and fixes):**
- Do NOT force-promote `.smoke-bg` to its own layer (`will-change`/`translateZ(0)`). It is sized to the full document height, so promotion creates a huge GPU texture that hurts more than it helps. Leave it in the normal paint layer.
- The autoplay/muted/loop hero `<video>` keeps decoding even when scrolled off-screen, stealing frames during scroll. Pause it via IntersectionObserver when out of view, resume when back in.
- Avoid `mix-blend-mode` on `position:fixed` full-viewport overlays (the film grain). A blend mode forces the browser to re-composite the whole viewport every scroll frame. Use a plain low-opacity overlay + `translateZ(0)` instead; on a near-black theme the visual difference is negligible.
