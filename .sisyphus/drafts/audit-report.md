# Brand Guidelines Audit Report

## Status: ROUND 1 COMPLETE

All identified discrepancies have been fixed. Implementation (index.css) was used as source of truth.

---

## Summary of Changes

### 1. BUTTONS ✅ FIXED
- CLAUDE.md: Updated sizing (12×32, 16×40, 20×48), states, border radius (100px pill)
- Buttons.jsx: Updated spec table and Svelte code examples
- index.css: Added `--color-button-primary-bg` and `--color-button-primary-text` tokens
- Dark mode: Primary buttons now invert (pearl bg, midnight text)

### 2. SPACING ✅ FIXED
- CLAUDE.md: Updated --space-5 through --space-10 values
- CSSTokens.jsx: Updated SCSS, CSS, and Tailwind examples
- Spacing.jsx: Updated display values
- Added --section-gap: 80px

| Token | Old Spec | New Spec (matches code) |
|-------|----------|-------------------------|
| --space-5 | 32px | 40px |
| --space-6 | 40px | 56px |
| --space-7 | 48px | 72px |
| --space-8 | 64px | 96px |
| --space-9 | 80px | 120px |
| --space-10 | 120px | 160px |

### 3. BORDER RADIUS ✅ FIXED
- CLAUDE.md: Added 4 new tokens (xxl, card, container, hero)
- CSSTokens.jsx: Updated all code examples
- BorderRadius.jsx: Added display items for new tokens

| Token | Value | Usage |
|-------|-------|-------|
| --radius-xxl | 32px | Large cards |
| --radius-card | 2.75rem (44px) | Card containers |
| --radius-container | 3rem (48px) | Section containers |
| --radius-hero | 100px | Hero sections |

### 4. COLORS / DARK MODE ✅ FIXED
- CLAUDE.md: Updated to violet-tinted dark mode palette
- CSSTokens.jsx: Updated dark mode examples
- DarkMode.jsx: Updated palette table and callouts

| Element | Old Dark | New Dark (matches code) |
|---------|----------|-------------------------|
| surface-primary | #1A1A1A | #0B0425 |
| surface-secondary | #2A2A2A | #1A1435 |
| surface-elevated | #333333 | #251A40 |
| border | #3A3A3A | #3A2A5A |
| text-primary | #EBEBEB | #FBFBFB |
| text-secondary | #A0A0A0 | rgba(251,251,251,0.7) |

### 5. SHADOWS ✅ FIXED
- CLAUDE.md: Updated dark mode shadow opacities
- CSSTokens.jsx: Updated examples
- Elevation.jsx: Updated description

| Token | Old Dark | New Dark (matches code) |
|-------|----------|-------------------------|
| shadow-sm | 0.3 | 0.4 |
| shadow-md | 0.4 | 0.5 |
| shadow-lg | 0.5 | 0.6 |
| shadow-xl | 0.6 | 0.7 |

### 6. TYPOGRAPHY
- CSS variables only define font-size (no change needed - this is by design)
- Weight and line-height are documented in spec tables but applied in components

---

## Files Modified

| File | Changes |
|------|---------|
| CLAUDE.md | Buttons, spacing, radius, colors, dark mode, shadows |
| src/index.css | Button color tokens (light + dark) |
| src/components/buttons/Buttons.jsx | Spec table, Svelte code, button tokens |
| src/components/css-tokens/CSSTokens.jsx | SCSS, CSS, Tailwind examples |
| src/components/spacing/Spacing.jsx | Display values |
| src/components/border-radius/BorderRadius.jsx | New token display items |
| src/components/dark-mode/DarkMode.jsx | Palette table, callouts, preview |
| src/components/elevation/Elevation.jsx | Dark mode description |

---

## Ready for Review

Please check the site and let me know if you spot any remaining discrepancies for Round 2.
