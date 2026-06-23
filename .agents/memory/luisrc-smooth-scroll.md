---
name: luisrc smooth scroll (native)
description: Scroll model for the luisrc artifact and the per-frame scroll-jank causes found/fixed on it.
---

# luisrc uses NATIVE browser scrolling (Lenis was removed)

Lenis smooth-scroll was added earlier and then **deliberately removed** (git: "Remove smooth scrolling library and revert to native browser scrolling" / "Improve website scrolling by removing Lenis library"). The site now relies on native scrolling.

**Rule:** programmatic scrolls use `window.scrollTo(...)` / `element.scrollIntoView(...)` directly. There is no Lenis instance — do NOT route scrolls through one.

**Why Lenis was dropped:** it was judged to hurt rather than help the scroll feel on this site. Re-adding it is a real direction change that was already reverted — confirm with the user before reintroducing.

**Scroll-jank causes found on this site (and fixes):**
- The fixed nav `backdrop-filter: blur(18px)` (active via `.nav.scrolled`) re-blurred the whole page behind the bar every scroll frame → page-wide stutter. Removed it; the nav bg is already ~90%+ opaque so the blur was nearly invisible. **Do not re-add backdrop-filter to the fixed nav.**
- The autoplay/muted/loop hero `<video>` keeps decoding/compositing and is the heaviest remaining per-frame cost during scroll near the top. It is paused via IntersectionObserver when off-screen; it is also GPU-isolated (`translateZ(0)`/`contain:paint`).
- Avoid `mix-blend-mode` on `position:fixed` full-viewport overlays — forces full-viewport recomposite every scroll frame.

**Comparison note:** titodoublep.com (a reference the user likes) is a Webflow + GSAP site on NATIVE scroll (no Lenis/ScrollSmoother). Its smoother feel comes from lower per-frame cost (static HTML, no heavy autoplay bg video), not a scroll library.
