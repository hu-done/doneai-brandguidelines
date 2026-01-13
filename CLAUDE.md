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

Dark mode is "Command Mode" - where users go to work. Inspired by Claude and Notion: warm/neutral grays, not pure black or cold grays.

| Element | Light Mode | Dark Mode | CSS Variable |
|---------|-----------|-----------|--------------|
| Background | #FBFBFB | #1A1A1A | `--color-surface-primary` |
| Surface/Cards | #F0F0F0 | #2A2A2A | `--color-surface-secondary` |
| Elevated Surface | - | #333333 | `--color-surface-elevated` |
| Borders | #E0E0E0 | #3A3A3A | `--color-border` |
| Text Primary | #0B0425 | #EBEBEB | `--color-text-primary` |
| Text Secondary | #6B6B6B | #A0A0A0 | `--color-text-secondary` |
| Accent | #6A00D5 | #8B5CF6 | `--color-accent` |

**Dark Mode Notes:**
- Accent color shifts lighter (#8B5CF6) for contrast on dark backgrounds
- Background (#1A1A1A) is warm, not pure black - easier on eyes
- Surface hierarchy: Background → Cards → Elevated (hover/focus states)
- The inverse relationship should feel intentional, not simply swapped

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

**Base unit: 8px.** All spacing derives from this.

| Token | Value | Usage |
|-------|-------|-------|
| `--space-1` | 4px | Tight spacing |
| `--space-2` | 8px | Between related elements |
| `--space-3` | 16px | Default between elements |
| `--space-4` | 24px | Between groups |
| `--space-5` | 32px | Section padding (small) |
| `--space-6` | 40px | Section padding (medium) |
| `--space-7` | 48px | Section padding (large) |
| `--space-8` | 64px | Major section breaks |

### Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `--radius-sm` | 4px | Tags, badges |
| `--radius-md` | 8px | Buttons, inputs |
| `--radius-lg` | 16px | Cards, modals |
| `--radius-xl` | 24px | Large cards |
| `--radius-full` | 9999px | Pills, avatars |

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
| Variant | Background | Text | Usage |
|---------|------------|------|-------|
| Primary | `--color-midnight` | `--color-pearl` | Main CTAs |
| Secondary | Transparent | `--color-midnight` | Secondary actions (1px border) |
| Ghost | Transparent | `--color-midnight` | Tertiary, nav |
| Destructive | `--color-error` | `--color-pearl` | Delete actions |

**Sizing:**
| Size | Padding | Font | Height |
|------|---------|------|--------|
| Small | 8px × 16px | 14px | 32px |
| Medium | 12px × 20px | 16px | 40px |
| Large | 16px × 24px | 16px | 48px |

**States:**
- Hover: Opacity reduction or subtle shadow
- Active: Scale 0.98
- Focus: 2px violet ring, 2px offset
- Disabled: 50% opacity

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
  --color-surface-secondary: #F0F0F0;
  --color-surface-elevated: #FFFFFF;
  --color-border: #E0E0E0;
  --color-text-primary: #0B0425;
  --color-text-secondary: #6B6B6B;
  --color-accent: #6A00D5;
  
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
  --space-5: 32px;
  --space-6: 40px;
  --space-7: 48px;
  --space-8: 64px;
  --space-9: 80px;
  --space-10: 120px;
  
  /* Radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 16px;
  --radius-xl: 24px;
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

/* Dark Mode */
@media (prefers-color-scheme: dark) {
  :root {
    --color-surface-primary: #1A1A1A;
    --color-surface-secondary: #2A2A2A;
    --color-surface-elevated: #333333;
    --color-border: #3A3A3A;
    --color-text-primary: #EBEBEB;
    --color-text-secondary: #A0A0A0;
    --color-accent: #8B5CF6;
    
    /* Shadows need adjustment for dark mode */
    --shadow-sm: 0 1px 2px rgba(0,0,0,0.3);
    --shadow-md: 0 4px 12px rgba(0,0,0,0.4);
    --shadow-lg: 0 8px 24px rgba(0,0,0,0.5);
    --shadow-xl: 0 16px 48px rgba(0,0,0,0.6);
  }
}

/* Or use a class-based toggle */
.dark {
  --color-surface-primary: #1A1A1A;
  --color-surface-secondary: #2A2A2A;
  --color-surface-elevated: #333333;
  --color-border: #3A3A3A;
  --color-text-primary: #EBEBEB;
  --color-text-secondary: #A0A0A0;
  --color-accent: #8B5CF6;
  
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.3);
  --shadow-md: 0 4px 12px rgba(0,0,0,0.4);
  --shadow-lg: 0 8px 24px rgba(0,0,0,0.5);
  --shadow-xl: 0 16px 48px rgba(0,0,0,0.6);
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
