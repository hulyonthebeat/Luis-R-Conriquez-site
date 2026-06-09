---
name: grep output garble (rg vs grep)
description: In this repo's bash environment, ripgrep (rg) output replaces the matched term with "n"; use grep or the read tool for exact strings.
---

In this environment, `rg` (ripgrep) tool output garbles matches: every occurrence of the
search term inside the printed lines is replaced with the letter "n". Example — searching
`merch` printed `.n-band`, `import n from "@/pages/n"`, and `label: "n Music"` (the literal
match text was swapped for "n"). Plain `grep` does NOT do this — it prints the real matched
text (e.g. `homeMerchBand: "portrait-throne.jpg"`).

**Why:** Something in the rg highlight/escape output path mangles the matched substring.
Observed repeatedly when searching `merch` / `Kartel` across the luisrc artifact.

**How to apply:** When you need EXACT strings (filenames, identifiers, surrounding code) out
of a search, use `grep -rn` instead of `rg`, or open the file with the read tool. `rg` is
still fine for *locating which files* match and for counts; just don't trust the spelling of
the highlighted token in its output.
