---
name: luisrc section background textures
description: How the alternating paper-texture section backgrounds work and the page-structure constraint they depend on
---

# luisrc alternating section textures

The site background is NOT a single global element. Three rotated dark paper
textures (`texture-bg-1/2/3.webp` in `public/media`) alternate across content
`.section` blocks via `.section:nth-of-type(3n+2 | 3n | 3n+4)`, each layering a
dark scrim gradient over `var(--tex-N)`.

The texture URLs are injected as CSS vars `--tex-1/2/3` from a `useEffect` in
`Layout.tsx` using `mediaUrl()` (so they respect `import.meta.env.BASE_URL` /
subpath deploys). Do not hardcode `url(/media/...)` in CSS — it breaks under a
base path.

**Constraint / Why:** the nth-of-type formulas assume **every page's first
`<section>` is a hero (`.hero` or `.page-hero`)**, so content sections always
start at DOM position 2 and the heroes stay untextured. **How to apply:** if you
add a page (or reorder) so a content `.section` lands at position 1, that first
content section will be intentionally untextured — keep the leading hero section
or adjust the formulas.
