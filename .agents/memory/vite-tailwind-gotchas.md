---
name: Vite + Tailwind v4 artifact gotchas
description: Non-obvious build/runtime quirks when building React+Vite artifacts with Tailwind v4 and Radix in this monorepo
---

# Tailwind v4 Google Fonts loading

See `tailwind-v4-font-import.md` — load Google Fonts via an `index.html` `<link>`,
NOT a CSS `@import url(...)`. Tailwind v4 inlines `@import "tailwindcss"` at build
time, so any later font `@import` ends up after non-@import rules and is dropped.
(A previous note here suggested putting the font `@import` first; that is unreliable
once `@import "tailwindcss"` expands — prefer the `<link>` approach.)

# Vite dep-optimize stale cache → duplicate-React / "useRef null" runtime error

After installing a new Radix-based dependency (e.g. `@radix-ui/react-dialog`), the
dev server may throw a runtime error like duplicate React or `useRef(...) is null`
inside the new component, even though imports and typecheck are correct.

**Why:** Vite's pre-bundled dependency optimize cache is stale and serves a second
copy of React to the newly added package.

**How to apply:** Restart the artifact's web workflow (e.g. `artifacts/<slug>: web`)
to force Vite to re-optimize deps. No code change needed.

# Verify artifacts with typecheck, not build

`pnpm --filter @workspace/<slug> run build` needs workflow-provided `PORT`/`BASE_PATH`
env vars and fails from a bare shell. Use `... run typecheck` to verify instead.
