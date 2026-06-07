---
name: Vite + Tailwind v4 artifact gotchas
description: Non-obvious build/runtime quirks when building React+Vite artifacts with Tailwind v4 and Radix in this monorepo
---

# Tailwind v4 font @import ordering

In a Tailwind v4 `index.css`, any `@import url(...)` (e.g. Google Fonts) MUST be the
FIRST line, before `@import "tailwindcss"`. CSS spec requires `@import` rules to
precede other rules, and Tailwind v4 emits rules at the `@import "tailwindcss"` site.

**Why:** If fonts are imported after Tailwind, the browser drops the font import and
the custom typography silently fails to load.

**How to apply:** Put url() imports at the very top of the entry CSS file.

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
