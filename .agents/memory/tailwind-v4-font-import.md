---
name: Tailwind v4 Google Fonts @import
description: Why Google Fonts must be loaded via <link>, not CSS @import, in Tailwind v4 artifacts
---

In Tailwind v4, `@import "tailwindcss"` is inlined at build time, expanding into thousands of lines of CSS (including `@property` rules) BEFORE any `@import url(...fonts...)` placed after it in the same stylesheet.

**Rule:** Load Google Fonts via a `<link rel="stylesheet">` in `index.html`, not via `@import url(...)` in the CSS entry file.

**Why:** A font `@import` after `@import "tailwindcss"` ends up after non-@import statements in the compiled output, violating the CSS spec ("@import must precede all other statements"). PostCSS warns and browsers may drop the import, breaking fonts in production builds (dev may still appear to work).

**How to apply:** When an artifact uses Tailwind v4 and needs web fonts, put the `<link>` (plus preconnect) in `index.html`. Keep only `@import "tailwindcss"` / plugin imports in the CSS.
