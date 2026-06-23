---
name: luisrc smooth scroll (native)
description: Scroll model for the luisrc artifact and the per-frame scroll-jank causes found/fixed on it.
---

# luisrc uses NATIVE browser scrolling (Lenis was removed)

Lenis smooth-scroll was added earlier and then **deliberately removed** (git: "Remove smooth scrolling library and revert to native browser scrolling" / "Improve website scrolling by removing Lenis library"). The site now relies on native scrolling.

**Rule:** programmatic scrolls use `window.scrollTo(...)` / `element.scrollIntoView(...)` directly. There is no Lenis instance — do NOT route scrolls through one.

**Why Lenis was dropped:** it was judged to hurt rather than help the scroll feel on this site. Re-adding it is a real direction change that was already reverted — confirm with the user before reintroducing.

**DESKTOP-ONLY scroll stutter (mobile smooth) — the cluster of causes:** when only desktop stutters, the cause is per-frame render/composite cost that scales with the large desktop viewport (mobile touch-scroll + mobile browsers cheapening these effects mask it). The biggest lever found here was over-promotion to GPU layers, NOT a missing scroll library.

**Scroll-jank causes found on this site (and fixes):**
- **Over-promotion via `transform: translateZ(0)` is a TRAP here.** The textured `.section:nth-of-type(...)` rules each had `translateZ(0)`, promoting every tall section to its own compositor layer → many large GPU textures at once → desktop scroll stutter (layer churn). REMOVED. Background images scroll with the page natively and do not repaint per-frame, so promotion was never needed. **Do not re-add translateZ/will-change/contain to whole sections.**
- The full-viewport hero `<video>` had `will-change:transform; backface-visibility:hidden; contain:paint` added — REVERTED. A playing `<video>` is already its own compositor layer; permanently promoting a full-viewport element makes a huge GPU texture that hurts desktop more than it helps. Kept only `transform:translateZ(0)` to isolate it. It is still paused via IntersectionObserver when off-screen.
- `backdrop-filter: blur()` on elements that stay on-screen WHILE scrolling over moving content (`.ac-arrow` carousel arrows, `.lang-toggle`) re-blurs every frame → REMOVED, replaced with ~0.72 opaque bg. Mobile browsers cheapen/skip backdrop-filter, so this is desktop-only jank.
- The fixed nav `backdrop-filter: blur(18px)` (active via `.nav.scrolled`) re-blurred the whole page behind the bar every scroll frame → page-wide stutter. Removed it; nav bg is already ~90%+ opaque. **Do not re-add backdrop-filter to the fixed nav.**
- Global `html { scroll-behavior: smooth }` makes desktop mouse-wheel scrolling stutter (Chrome/Firefox animate every wheel notch); mobile touch is unaffected. REMOVED. Hash/anchor nav still scrolls smoothly via JS `scrollIntoView({behavior:"smooth"})`. **Do not re-add global scroll-behavior:smooth.**
- Avoid `mix-blend-mode` on `position:fixed` full-viewport overlays — forces full-viewport recomposite every scroll frame.

**Only remaining `backdrop-filter`:** the mobile-menu overlay (`.mobile-menu`, blur 10px) — fine because it only renders when the menu is open (not during scroll).

**To MEASURE jank in this env:** headless Chromium (Playwright) is blocked — missing system libs (`libglib-2.0.so.0`). Reason about per-frame cost from the CSS instead, or use real-device DevTools Performance traces.

**Comparison note:** titodoublep.com (a reference the user likes) is a Webflow + GSAP site on NATIVE scroll (no Lenis/ScrollSmoother). Its smoother feel comes from lower per-frame cost (static HTML, no heavy autoplay bg video), not a scroll library.
