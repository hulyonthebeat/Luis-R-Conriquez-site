---
name: Code splitting incompatibility with prerender
description: React.lazy + Suspense cannot be used in this project's prerender setup without breaking the build.
---

## Rule
Do NOT use `React.lazy` or `Suspense` for route-level or section-level code splitting in `luisrc`.

**Why:** `entry-server.tsx` uses `renderToString`, which does not support Suspense-based lazy loading. Any `React.lazy` component encountered during prerender will throw, breaking the static HTML generation step.

**How to apply:** If code splitting is requested in the future, the prerequisite is migrating `entry-server.tsx` from `renderToString` to React 18's `renderToPipeableStream` (streaming SSR). That is a separate infrastructure change and should be scoped as its own task before any lazy-loading work begins.
