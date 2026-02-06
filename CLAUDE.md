# Done.ai Brand Guidelines Site - Project Context

This React project is the internal/public brand guidelines documentation site for Done.ai. Claude Code should use this file to understand the brand, the project goals, and how to implement updates correctly.

---

## PROJECT OVERVIEW

A simple static React site with sidebar navigation displaying Done.ai's brand guidelines. The site itself should embody the brand principles it documents.

### Current State
- Simple sidebar with pages like "Logo", "Colors", "Typography"
- Needs expansion with more guideline sections
- Needs better organization and potentially search functionality

### Goals
1. Add comprehensive brand documentation
2. Improve navigation (search + logical grouping)
3. Make the site itself an example of Done.ai design principles

---

## DONE.AI BRAND PHILOSOPHY

### The Core Mandate
**Authority through Simplicity.**

Done.ai makes complex business infrastructure feel simple and authoritative. The brand is whisper-quiet confident—it doesn't shout, it states.

### Key Principles
1. **Resolution over Process** - Focus on what's done, not how. The name says it: **Done.**
2. **Whisper-Quiet Confidence** - Authority doesn't need volume
3. **High Signal, Low Noise** - Every element earns its place
4. **One Unified Core** - The platform feels like one product, not stitched-together acquisitions

### The "Done." Hook
Our name is our message. Format: Question → "Done."
- "Need to manage leads without the mess? Done."
- "Want every deal in one place? Done."

### Forbidden Language
Kill these on sight:
- "Streamline" / "Optimize" / "Boost" / "Unleash"
- "Work smarter, not harder"
- "Game-changing" / "Revolutionary" / "Cutting-edge"
- "Empower" / "Elevate" / "Transform"
- "Seamless" (overused)
- Generic SaaS speak that could apply to any competitor

**Test:** If a competitor could say it, don't say it.

---

## VISUAL IDENTITY

### Color Palette

**Canvas (Environment) - Use for 90% of interface:**
| Name | Hex | CSS Variable | Usage |
|------|-----|--------------|-------|
| Pearl White | #FBFBFB | `--color-pearl` | Primary background |
| Midnight Violet | #0B0425 | `--color-midnight` | Primary text, dark sections |
| Platinum | #F0F0F0 | `--color-platinum` | Secondary surfaces, dividers |

**Brand Accent - Use sparingly:**
| Name | Hex | CSS Variable | Usage |
|------|-----|--------------|-------|
| Royal Violet | #6A00D5 | `--color-violet` | Active states, glows, focus rings. **Small accents only.** |
| Lavender | #F4EFFF | `--color-lavender` | Hover states, soft highlights |

**⚠️ CRITICAL: Royal Violet Restriction**
Never use #6A00D5 as a background for large areas or as body text. It's energy—use it sparingly. When everything glows, nothing does.

**Semantic (Status):**
| Name | Hex | CSS Variable | Usage |
|------|-----|--------------|-------|
| Success | #006A4E | `--color-success` | Completed, positive |
| Warning | #B45309 | `--color-warning` | Needs attention |
| Error | #DE350B | `--color-error` | Errors, destructive |

### Dark Mode Palette

Dark mode is "Command Mode" - where users go to work. Uses violet-tinted dark surfaces for brand cohesion.

| Element | Light Mode | Dark Mode | CSS Variable |
|---------|-----------|-----------|--------------|
| Background | #FBFBFB | #0B0425 | `--color-surface-primary` |
| Surface/Cards | #FBFBFB | #1A1435 | `--color-surface-secondary` |
| Elevated Surface | #FBFBFB | #251A40 | `--color-surface-elevated` |
| Borders | rgba(11,4,37,0.08) | #3A2A5A | `--color-border` |
| Text Primary | #0B0425 | #FBFBFB | `--color-text-primary` |
| Text Secondary | rgba(11,4,37,0.6) | rgba(251,251,251,0.7) | `--color-text-secondary` |
| Accent | #6A00D5 | #8B5CF6 | `--color-accent` |
| Lavender | #F4EFFF | rgba(138,92,246,0.2) | `--color-lavender` |

**Dark Mode Notes:**
- Accent color shifts lighter (#8B5CF6) for contrast on dark backgrounds
- Background uses Midnight Violet (#0B0425) for brand continuity
- Surfaces are violet-tinted, not neutral gray
- Lavender becomes a semi-transparent violet overlay in dark mode

### Typography

**Font:** DM Sans (all weights) - https://fonts.google.com/specimen/DM+Sans

**Type Scale:**
| Token | Size | Weight | Line Height | Usage |
|-------|------|--------|-------------|-------|
| `--text-hero` | 40px | 500 | 1.2 | Hero headlines |
| `--text-h1` | 32px | 500 | 1.3 | Section headings |
| `--text-h2` | 24px | 500 | 1.3 | Subsection headings |
| `--text-h3` | 20px | 500 | 1.4 | Card titles |
| `--text-body` | 16px | 400 | 1.5 | Body text |
| `--text-body-small` | 14px | 400 | 1.5 | Secondary text |
| `--text-caption` | 12px | 400 | 1.4 | Labels, helper text |

### Spacing

**Base unit: 8px.** Spacing scale grows progressively for generous whitespace.

| Token | Value | Usage |
|-------|-------|-------|
| `--space-1` | 4px | Tight spacing |
| `--space-2` | 8px | Between related elements |
| `--space-3` | 16px | Default between elements |
| `--space-4` | 24px | Between groups |
| `--space-5` | 40px | Section padding (small) |
| `--space-6` | 56px | Section padding (medium) |
| `--space-7` | 72px | Section padding (large) |
| `--space-8` | 96px | Major section breaks |
| `--space-9` | 120px | Page-level spacing |
| `--space-10` | 160px | Hero sections |

**Section Gap:** `--section-gap: 80px` for consistent vertical rhythm between major sections.

### Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `--radius-sm` | 4px | Tags, badges |
| `--radius-md` | 8px | Inputs, small buttons |
| `--radius-lg` | 16px | Dropdowns, tooltips |
| `--radius-xl` | 24px | Cards, modals |
| `--radius-xxl` | 32px | Large cards |
| `--radius-card` | 2.75rem (44px) | Standard card containers |
| `--radius-container` | 3rem (48px) | Section containers |
| `--radius-hero` | 100px | Hero sections, feature cards |
| `--radius-full` | 9999px | Pills, avatars, buttons |

**The Radius Rule:** When nesting elements:
> Inner radius = Outer radius − Padding between them

### Shadows

| Token | Value | Usage |
|-------|-------|-------|
| `--shadow-sm` | `0 1px 2px rgba(11,4,37,0.05)` | Subtle lift |
| `--shadow-md` | `0 4px 12px rgba(11,4,37,0.08)` | Cards, dropdowns |
| `--shadow-lg` | `0 8px 24px rgba(11,4,37,0.12)` | Modals |
| `--shadow-xl` | `0 16px 48px rgba(11,4,37,0.16)` | Critical overlays |

**Principle:** Levitation, not borders. Elements separate through subtle shadow, not hard lines.

### Buttons

**Variants:**
| Variant | Background | Text | Border | Usage |
|---------|------------|------|--------|-------|
| Primary | `--color-midnight` | `--color-pearl` | None | Main CTAs |
| Secondary | Transparent | `--color-text-primary` | 1px `--color-text-primary` | Secondary actions |
| Ghost | Transparent | `--color-text-primary` | None | Tertiary, nav |
| Destructive | `--color-error` | `--color-pearl` | None | Delete actions |

**Sizing:**
| Size | Padding (v × h) | Font | Approx Height |
|------|-----------------|------|---------------|
| Small | 12px × 32px | 16px | ~48px |
| Medium | 16px × 40px | 16px | ~56px |
| Large | 20px × 48px | 16px | ~64px |

**Border Radius:** `100px` (pill shape)

**States:**
| State | Primary | Secondary/Ghost | Destructive |
|-------|---------|-----------------|-------------|
| Hover | translateY(-2px) + violet shadow | Lavender background | opacity 0.9 + shadow |
| Active | translateY(0) | scale(0.98) | scale(0.98) |
| Focus | 2px violet ring, 2px offset | 2px violet ring, 2px offset | 2px violet ring, 2px offset |
| Disabled | 50% opacity | 50% opacity | 50% opacity |

---

## CSS TOKENS (Copy-Paste Ready)

```css
:root {
  /* Colors - Light Mode */
  --color-pearl: #FBFBFB;
  --color-midnight: #0B0425;
  --color-platinum: #F0F0F0;
  --color-violet: #6A00D5;
  --color-lavender: #F4EFFF;
  --color-success: #006A4E;
  --color-warning: #B45309;
  --color-error: #DE350B;
  
  /* Surface & Text (semantic, mode-aware) */
  --color-surface-primary: #FBFBFB;
  --color-surface-secondary: #FBFBFB;
  --color-surface-elevated: #FBFBFB;
  --color-surface-elevated-dark: #1A1435;
  --color-border: rgba(11, 4, 37, 0.08);
  --color-text-primary: #0B0425;
  --color-text-secondary: rgba(11, 4, 37, 0.6);
  --color-accent: #6A00D5;

  /* Nav and card backgrounds */
  --color-nav-bg: #0B0425;
  --color-card-bg: #FBFBFB;

  /* Button colors (invert in dark mode) */
  --color-button-primary-bg: #0B0425;
  --color-button-primary-text: #FBFBFB;

  /* Typography */
  --text-hero: 40px;
  --text-h1: 32px;
  --text-h2: 24px;
  --text-h3: 20px;
  --text-body: 16px;
  --text-body-small: 14px;
  --text-caption: 12px;
  
  /* Spacing */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 16px;
  --space-4: 24px;
  --space-5: 40px;
  --space-6: 56px;
  --space-7: 72px;
  --space-8: 96px;
  --space-9: 120px;
  --space-10: 160px;
  --section-gap: 80px;

  /* Radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 16px;
  --radius-xl: 24px;
  --radius-xxl: 32px;
  --radius-card: 2.75rem;
  --radius-container: 3rem;
  --radius-hero: 100px;
  --radius-full: 9999px;
  
  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(11,4,37,0.05);
  --shadow-md: 0 4px 12px rgba(11,4,37,0.08);
  --shadow-lg: 0 8px 24px rgba(11,4,37,0.12);
  --shadow-xl: 0 16px 48px rgba(11,4,37,0.16);
  
  /* Motion */
  --duration-fast: 100ms;
  --duration-normal: 200ms;
  --duration-slow: 300ms;
  --ease-default: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  
  /* Container Widths */
  --container-sm: 640px;
  --container-md: 960px;
  --container-lg: 1200px;
  --container-xl: 1440px;
  
  /* Breakpoints */
  --breakpoint-sm: 640px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1024px;
  --breakpoint-xl: 1280px;
  --breakpoint-2xl: 1536px;
}

/* Dark Mode - Class-based toggle (recommended) */
.dark {
  /* Violet-tinted dark surfaces */
  --color-surface-primary: #0B0425;
  --color-surface-secondary: #1A1435;
  --color-surface-elevated: #251A40;
  --color-surface-elevated-dark: #0A0320;
  --color-platinum: #1A1435;
  --color-border: #3A2A5A;
  --color-text-primary: #FBFBFB;
  --color-text-secondary: rgba(251, 251, 251, 0.7);
  --color-accent: #8B5CF6;
  --color-lavender: rgba(138, 92, 246, 0.2);

  /* Nav and card backgrounds */
  --color-nav-bg: #1A1435;
  --color-card-bg: #1A1435;

  /* Button colors inverted */
  --color-button-primary-bg: #FBFBFB;
  --color-button-primary-text: #0B0425;

  /* Shadows - higher opacity for dark backgrounds */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.4);
  --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.5);
  --shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.6);
  --shadow-xl: 0 16px 48px rgba(0, 0, 0, 0.7);
}
```

---

## SITE STRUCTURE (Recommended)

### Navigation Architecture
The sidebar should include all pages with logical grouping. Add a search function for quick access.

**Recommended Page Structure:**

```
FOUNDATION
├── Introduction (Brand North Star, Mission/Vision/Values)
├── Brand Evolution (Before/After, The "Two Stories" Problem)
└── Brand Architecture (Naming convention, sub-brands)

VERBAL IDENTITY  
├── Tone of Voice (Whisper-quiet confidence, principles)
├── Writing Guidelines (The "Done." hook, do/don't examples)
└── Forbidden Language (Words to kill, the competitor test)

VISUAL IDENTITY
├── Logo (Usage, clear space, don'ts)
├── Colors (Full palette with usage rules)
├── Typography (Scale, rules, hierarchy)
├── Dark Mode (Full dark palette, philosophy, CSS)
└── The Unified Core (The sphere, symbolism)

DESIGN SYSTEM
├── Spacing & Layout (8pt grid, containers)
├── Border Radius (Scale, the nesting rule)
├── Elevation & Shadows (Scale, levels)
├── Motion & Animation (Duration, easing, patterns)
└── CSS Tokens (Copy-paste ready code)

COMPONENTS
├── Buttons (Variants, sizes, states)
├── Inputs (Specs, states, labels)
├── Cards (Base, variants)
├── Modals (Specs, structure, animation)
├── Toast Notifications (Position, variants)
└── Tables (Header, rows, states)

CONTENT
├── UI Writing (Concise, direct, human)
├── Social Media (Do/don't, examples)
└── Imagery Guidelines (No AI, acceptable types)

ACCESSIBILITY
├── Contrast Requirements
├── Focus States
├── Keyboard Navigation
└── Screen Reader Guidelines

RESOURCES
├── Downloads (Logo files, tokens - when available)
└── Quality Checklists (Copy review, visual review)
```

### Quick Start Section
Consider adding role-based entry points at the top:
- "I'm writing copy" → Links to Tone, Writing Guidelines, Forbidden Language
- "I'm building UI" → Links to Components, CSS Tokens, Spacing
- "I'm creating assets" → Links to Colors, Typography, Logo, Imagery

---

## IMPLEMENTATION GUIDELINES FOR THIS SITE

### The Site Should Be An Example
This guidelines site should itself follow Done.ai brand principles:
- Clean, high-contrast design (Pearl White background, Midnight Violet text)
- DM Sans typography throughout
- Royal Violet only for accent elements (active nav item, focus states)
- Generous whitespace
- Shadows for elevation, not borders
- 8pt grid spacing

### Component Patterns
When building new pages or components:

**Page Layout:**
- Max content width: ~960px
- Page padding: 48px (adjust for mobile)
- Section spacing: 64px between major sections

**Navigation (Sidebar):**
- Fixed on desktop, collapsible on mobile
- Section headers for grouping (not clickable)
- Active state: Lavender background, Royal Violet left border
- Hover: Lavender background

**Content Blocks:**
- Use cards sparingly—only when content needs visual separation
- Code blocks: Midnight Violet background, monospace font
- Tables: Platinum header, subtle row borders

**Color Swatches:**
- Show the color as a filled square/circle
- Display: Name, Hex, CSS variable, Usage

**Before/After Examples:**
- Side-by-side columns where possible
- Clear labeling: ❌ Don't / ✓ Do
- Red-tinted background for "don't", green-tinted for "do"

### Accessibility on This Site
- All interactive elements keyboard accessible
- Color swatches must not rely on color alone (show hex values)
- Sufficient contrast on all text
- Focus states visible

---

## CONTENT TO ADD (Priority Order)

### High Priority (Core Guidelines)
1. **Colors page** - Full palette with swatches, hex codes, usage rules, the Royal Violet restriction
2. **Typography page** - Full scale, DM Sans specimen, hierarchy examples
3. **Tone of Voice page** - Core principles, the "Done." hook, examples
4. **Buttons page** - All variants, sizes, states with live examples
5. **Spacing page** - 8pt grid explanation, token reference

### Medium Priority (Design System)
6. **Writing Guidelines** - Forbidden language, do/don't examples
7. **Shadows & Elevation** - Scale, when to use which level
8. **Border Radius** - Scale and the nesting rule
9. **Inputs page** - Specs, states, validation patterns
10. **Cards page** - Base specs, variants

### Lower Priority (Reference)
11. **Brand Evolution** - Before/after comparisons
12. **CSS Tokens** - Full copy-paste reference
13. **Accessibility** - Requirements and patterns
14. **Motion** - Timing and easing values
15. **Checklists** - Copy review, visual review

---

## QUALITY CHECKLIST FOR THIS SITE

Before shipping any update:

**Visual:**
- [ ] Using DM Sans?
- [ ] Colors from the defined palette only?
- [ ] Royal Violet used sparingly (not as backgrounds)?
- [ ] Spacing on 8pt grid?
- [ ] Shadows instead of borders for elevation?

**Content:**
- [ ] Tone matches brand (direct, confident, not hype-y)?
- [ ] No forbidden words?
- [ ] Clear and scannable?

**Technical:**
- [ ] Keyboard navigable?
- [ ] Mobile responsive?
- [ ] Search working (if implemented)?

---

## NOTES FOR CLAUDE CODE

1. **Prioritize consistency** - Better to have fewer pages that look great than many that are inconsistent
2. **The site is the example** - Every design decision should demonstrate the guidelines it documents
3. **Use the CSS tokens** - Don't hardcode colors/spacing; use the variables
4. **Test the Royal Violet rule** - If you're tempted to use #6A00D5 for something large, don't
5. **Keep copy direct** - This is documentation. State, don't sell.

When in doubt about brand decisions, refer back to the core principle: **Authority through Simplicity.**

---

## HARD RULES (DO NOT BREAK)

These rules exist because they were broken before. Follow them exactly.

### Colors
- **The only background color is Pearl (#FBFBFB).** There is no #FFFFFF in this brand. Elevation is achieved through shadow, not background color shifts.
- **Never hardcode colors.** Always use CSS variables (`var(--color-card-bg)`, `var(--color-text-primary)`, etc.). If a color needs to change in dark mode, use a `.dark &` override on the styled component — not a ternary with hardcoded hex values.
- **The home page (home.jsx) is the reference implementation for cards.** When building or fixing card-like components anywhere on the site, match the home page pattern: `var(--color-card-bg)` background, `var(--color-text-primary)` text, `.dark &` override block. Do not invent a new pattern.

### Dark Mode
- Dark mode surfaces are **violet-tinted** (#0B0425, #1A1435, #251A40), never neutral grays.
- Use `.dark &` CSS overrides on styled-components. Do not use JS props to toggle between hardcoded light/dark color values — that breaks when CSS variables change.
- **Button colors use `var(--color-button-primary-bg)` and `var(--color-button-primary-text)`.** These variables automatically invert in dark mode. Never hardcode button colors.

### Typography
- **Headings are font-weight 500.** Not 600, not 700. The only weights in the brand are 400 (body) and 500 (headings).
- **Buttons are font-weight 400**, border-radius 100px (pill), padding 16px 40px (medium size).

### Visual Demos and Examples
- **Demo components must match the actual components they represent.** If the Cards page shows example cards, those cards must use the same styled-component patterns, spacing, font sizes, and colors as the real cards used on the home page. Do not create one-off styled components with different values for "demo purposes."
- **Before creating a visual example, read the existing working implementation first.** Copy its patterns.
- **Every code example is copy-pasted by developers.** Values in code blocks MUST match the CSS tokens in index.css exactly. Verify before committing.

### Process
- **Never introduce colors, values, or patterns that don't exist in this file.** If it's not defined here, don't use it.
- **When fixing something, trace the full chain.** A card has a background → text color → description color → button background → button text. If you change one, verify all of them still work in both light and dark mode.
- **No redundant examples.** If two demo cards look identical, one of them shouldn't exist.
