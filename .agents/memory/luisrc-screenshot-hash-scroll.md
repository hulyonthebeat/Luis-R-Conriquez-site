---
name: luisrc screenshot hash-scroll limitation
description: Why app_preview screenshots of /#section never scroll to that section on the luisrc site
---

The `screenshot` (app_preview) tool only captures the top viewport at the page's
current scroll position. On the luisrc site this means deep sections (e.g.
`#reconocimientos`, `#shows`) are unreachable via `path: "/#section"`.

**Why:** the hero is `100vh`, and hash navigation is handled in JS
(`Layout.tsx scrollToHash` uses `scrollIntoView({behavior:"smooth"})`, with a
~120ms `setTimeout` on direct load). The screenshot is captured before that
smooth scroll settles, so it always shows the hero. A taller viewport just makes
the `100vh` hero taller — it does not scroll past it.

**How to apply:** to verify a deep section, don't rely on `/#section`
screenshots. Instead confirm via: typecheck, `curl` the asset URLs through
`localhost:80` (expect `200 image/jpeg`), and checking the render pattern matches
known-working cards. Visual confirmation of below-fold sections is not reliable
with the screenshot tool here.
