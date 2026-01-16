# Done.ai Brand Guidelines Site — UX Redesign Proposal

**Document Version:** 1.0
**Date:** January 2026
**Status:** Proposal for Review

---

## Executive Summary

This proposal presents a comprehensive redesign of the Done.ai Brand Guidelines site's information architecture and user experience. Based on analysis of the current site, user persona research, and best practices from leading design systems (Atlassian, Shopify Polaris, Carbon, Primer), we recommend a role-based navigation approach with enhanced discoverability features.

**Key Recommendations:**
1. **Role-based entry points** — Quick paths for Developers, Designers, Writers, and New Employees
2. **Global search** — Cmd/Ctrl+K activated search across all content
3. **Copy-to-clipboard** — One-click copy for all code snippets and tokens
4. **Progressive disclosure** — Overview → Details → Deep Dive content layers
5. **Asset download hub** — Organized downloads by role and format

---

## Part 1: User Persona Analysis

### Persona 1: The Developer

**Name:** Alex Chen
**Role:** Frontend Developer
**Goal:** Implement UI components that match Done.ai brand specs

**Needs:**
- CSS tokens and variables (copy-paste ready)
- Component specifications (sizes, spacing, states)
- Dark mode implementation guide
- Code examples in React/CSS

**Pain Points with Current Site:**
- No copy buttons on code blocks
- Must navigate multiple pages to find all specs
- No search to quickly find specific tokens
- No framework-specific examples

**Ideal Journey:**
```
Homepage → "For Developers" → CSS Tokens page → Copy all tokens → Done
```

**Time Budget:** 2-5 minutes per task

---

### Persona 2: The Designer

**Name:** Sarah Kim
**Role:** Product Designer
**Goal:** Create pixel-perfect mockups following brand guidelines

**Needs:**
- Color palette with all values (Hex, RGB, CSS var)
- Typography scale with visual examples
- Spacing system and grid
- Figma library link
- Downloadable assets (logos, icons)

**Pain Points with Current Site:**
- No Figma library integration
- Asset Library has many "Coming Soon" items
- No color palette file downloads (.ase, .clr)
- Can't easily compare light/dark mode palettes

**Ideal Journey:**
```
Homepage → "For Designers" → Colors page → Download palette → Open in Figma
```

**Time Budget:** 5-15 minutes for initial setup, quick lookups afterward

---

### Persona 3: The Writer/Marketer

**Name:** Jordan Rivera
**Role:** Content Strategist
**Goal:** Write copy that matches Done.ai voice and avoids forbidden language

**Needs:**
- Tone of Voice principles and examples
- Forbidden Language list (searchable)
- The "Done." hook usage guide
- Before/after writing examples
- Copy templates

**Pain Points with Current Site:**
- Writing Guidelines page is "Coming Soon"
- No searchable forbidden word checker
- No copy templates or starters
- Limited channel-specific guidance (marketing vs. product)

**Ideal Journey:**
```
Homepage → "For Writers" → Tone of Voice → Check Forbidden Language → Write
```

**Time Budget:** 10-20 minutes for reference, ongoing quick checks

---

### Persona 4: The New Employee

**Name:** Taylor Martinez
**Role:** New Hire (any department)
**Goal:** Understand Done.ai brand quickly during onboarding

**Needs:**
- Quick overview (5-minute read)
- Core values and philosophy
- Essential visual identity basics
- "What makes us different" summary

**Pain Points with Current Site:**
- No dedicated onboarding path
- Brand DNA page is detailed but not scannable
- No "Start Here" or "Brand Essentials" page
- Long pages require scrolling through everything

**Ideal Journey:**
```
Homepage → "New to Done.ai?" → Brand Essentials (5-min read) → Done
```

**Time Budget:** 5-10 minutes maximum

---

## Part 2: Content Gap Analysis

### What's Missing for Developers

| Gap | Priority | Description |
|-----|----------|-------------|
| **Copy buttons** | HIGH | No one-click copy on any code blocks |
| **React components** | MEDIUM | No React component examples, only CSS |
| **Token JSON export** | MEDIUM | Can't download tokens as JSON for JS projects |
| **Motion/Animation specs** | MEDIUM | No timing, easing, or animation patterns |
| **Form patterns** | LOW | No form layout or validation pattern guidance |

### What's Missing for Designers

| Gap | Priority | Description |
|-----|----------|-------------|
| **Figma library** | HIGH | No Figma library or Community link |
| **Asset downloads** | HIGH | Most assets "Coming Soon" |
| **Palette files** | MEDIUM | No .ase, .clr, or Figma-ready palette |
| **Component library** | MEDIUM | No downloadable component kit |
| **Responsive specs** | LOW | No mobile-specific guidelines |

### What's Missing for Writers

| Gap | Priority | Description |
|-----|----------|-------------|
| **Writing Guidelines page** | HIGH | Listed in nav but shows "Coming Soon" |
| **Copy templates** | HIGH | No starter templates for common copy types |
| **Word checker tool** | MEDIUM | No interactive forbidden word detector |
| **Channel guidance** | MEDIUM | No guidance for email, social, product UI |
| **Voice examples library** | LOW | Limited real-world examples |

### What's Missing for New Employees

| Gap | Priority | Description |
|-----|----------|-------------|
| **Quick start guide** | HIGH | No dedicated onboarding path |
| **Brand essentials PDF** | MEDIUM | No downloadable summary |
| **Video introduction** | LOW | No video walkthrough option |
| **Quiz/checklist** | LOW | No way to verify understanding |

### Missing Site-Wide Features

| Gap | Priority | Description |
|-----|----------|-------------|
| **Global search** | HIGH | No way to search content |
| **Breadcrumbs** | MEDIUM | No navigation breadcrumbs |
| **Table of contents** | MEDIUM | Long pages lack TOC sidebar |
| **Last updated dates** | LOW | No version/update indicators |
| **Print styles** | LOW | Pages don't print well |

---

## Part 3: Proposed Information Architecture

### New Sitemap

```
HOME
├── Hero with animated gradient
├── Role-based quick links (4 cards)
│   ├── "I'm writing copy" → Verbal Identity hub
│   ├── "I'm building UI" → Design System hub
│   ├── "I'm designing" → Visual Identity hub
│   └── "I'm new here" → Brand Essentials
└── Quick Access grid (existing, refined)

BRAND ESSENTIALS (NEW)
├── The Done.ai Story (5-min read)
├── Core Values
├── Brand Principles
└── Quick Reference Card (downloadable)

VERBAL IDENTITY
├── Tone of Voice
├── Writing Guidelines (needs creation)
├── Forbidden Language
└── Copy Templates (NEW)

VISUAL IDENTITY
├── Logo
├── Colors
├── Typography
├── Dark Mode
├── Imagery Guidelines (NEW)
└── Asset Library

DESIGN SYSTEM
├── CSS Tokens
├── Spacing & Layout
├── Border Radius
├── Elevation & Shadows
├── Icons
└── Motion & Animation (NEW)

COMPONENTS
├── Buttons
├── Inputs
├── Cards
├── Forms (NEW)
└── Tables (NEW)

ACCESSIBILITY (NEW)
├── Contrast Requirements
├── Focus States
├── Keyboard Navigation
└── Screen Reader Guidelines

RESOURCES
├── Downloads Hub (reorganized)
│   ├── For Developers
│   ├── For Designers
│   └── Brand Assets
├── Figma Library (link)
├── Changelog (NEW)
└── Quality Checklists
```

### Navigation Structure

**Primary Navigation (Sidebar)**

```
┌─────────────────────────────┐
│ [Search] Cmd+K              │  ← Global search
├─────────────────────────────┤
│ QUICK START                 │
│   Brand Essentials          │
├─────────────────────────────┤
│ VERBAL IDENTITY             │
│   Tone of Voice             │
│   Writing Guidelines        │
│   Forbidden Language        │
│   Copy Templates            │
├─────────────────────────────┤
│ VISUAL IDENTITY             │
│   Logo                      │
│   Colors                    │
│   Typography                │
│   Dark Mode                 │
│   Imagery                   │
│   Asset Library             │
├─────────────────────────────┤
│ DESIGN SYSTEM               │
│   CSS Tokens                │
│   Spacing & Layout          │
│   Border Radius             │
│   Elevation                 │
│   Icons                     │
│   Motion                    │
├─────────────────────────────┤
│ COMPONENTS                  │
│   Buttons                   │
│   Inputs                    │
│   Cards                     │
│   Forms                     │
│   Tables                    │
├─────────────────────────────┤
│ ACCESSIBILITY               │
│   Overview                  │
│   Contrast                  │
│   Focus States              │
│   Keyboard Nav              │
├─────────────────────────────┤
│ RESOURCES                   │
│   Downloads                 │
│   Figma Library →           │
│   Changelog                 │
└─────────────────────────────┘
```

---

## Part 4: Wireframe Descriptions

### Homepage Redesign

```
┌─────────────────────────────────────────────────────────────────┐
│ [Sidebar]                      HEADER                           │
│                                                                 │
│                    ┌───────────────────────────────────┐        │
│                    │                                   │        │
│                    │   HERO SECTION (existing)         │        │
│                    │   Animated gradient background    │        │
│                    │   "Done.ai Brand Guidelines"      │        │
│                    │                                   │        │
│                    └───────────────────────────────────┘        │
│                                                                 │
│                    WHAT BRINGS YOU HERE? (NEW)                  │
│                    ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐
│                    │ Writer  │ │ Dev     │ │Designer │ │ New     │
│                    │ ✏️      │ │ </>     │ │ 🎨      │ │ 👋      │
│                    │ Tone,   │ │ Tokens, │ │ Colors, │ │ Start   │
│                    │ Voice   │ │ Code    │ │ Assets  │ │ Here    │
│                    └─────────┘ └─────────┘ └─────────┘ └─────────┘
│                                                                 │
│                    QUICK ACCESS (existing, refined)             │
│                    [Grid of 6 cards to major sections]          │
│                                                                 │
│                    ABOUT THESE GUIDELINES (existing)            │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Role-Based Landing Page (Example: For Developers)

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│   FOR DEVELOPERS                                                │
│   Everything you need to implement Done.ai's design system      │
│                                                                 │
│   ┌─────────────────────────────────────────────────────────┐   │
│   │ QUICK COPY: Full CSS Tokens                    [Copy All]│   │
│   │ ─────────────────────────────────────────────────────── │   │
│   │ :root {                                                 │   │
│   │   --color-midnight: #0B0425;                            │   │
│   │   --color-pearl: #FBFBFB;                               │   │
│   │   ...                                                   │   │
│   │ }                                                       │   │
│   └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│   ESSENTIAL PAGES                                               │
│   ┌───────────┐ ┌───────────┐ ┌───────────┐                    │
│   │CSS Tokens │ │Components │ │Dark Mode  │                    │
│   │Copy-paste │ │Buttons,   │ │Implement  │                    │
│   │ready code │ │Inputs...  │ │theming    │                    │
│   └───────────┘ └───────────┘ └───────────┘                    │
│                                                                 │
│   DOWNLOADS                                                     │
│   [tokens.css] [tokens.json] [tokens.scss]                     │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Code Block Component (Enhanced)

```
┌─────────────────────────────────────────────────────────────────┐
│ design-tokens.css                                    [📋 Copy] │
├─────────────────────────────────────────────────────────────────┤
│  1 │ :root {                                                   │
│  2 │   /* Colors - Light Mode */                               │
│  3 │   --color-pearl: #FBFBFB;                                 │
│  4 │   --color-midnight: #0B0425;                              │
│  5 │   --color-violet: #6A00D5;                                │
│  6 │   ...                                                     │
│  7 │ }                                                         │
└─────────────────────────────────────────────────────────────────┘
                                          ↓ Click Copy
┌─────────────────────────────────────────────────────────────────┐
│ design-tokens.css                                   [✓ Copied!]│
├─────────────────────────────────────────────────────────────────┤
```

### Color Swatch Component (Enhanced)

```
┌───────────────────────────────────────────┐
│  ┌─────────┐                              │
│  │         │  ROYAL VIOLET                │
│  │  #6A00D5│  ─────────────────────────   │
│  │         │  Hex: #6A00D5       [📋]     │
│  └─────────┘  RGB: 106, 0, 213   [📋]     │
│               CSS: --color-violet [📋]     │
│               ─────────────────────────   │
│               Usage: Active states, glows │
│               ⚠️ Small accents only       │
└───────────────────────────────────────────┘
```

### Search Modal

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│   ┌─────────────────────────────────────────────────────────┐   │
│   │ 🔍 Search documentation...                    ⌘K to close│   │
│   └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│   RECENT SEARCHES                                               │
│   • button variants                                             │
│   • dark mode                                                   │
│                                                                 │
│   ─────────────────────────────────────────────────────────     │
│                                                                 │
│   QUICK LINKS                                                   │
│   Colors          →  /colors                                    │
│   CSS Tokens      →  /css-tokens                                │
│   Typography      →  /typography                                │
│   Buttons         →  /buttons                                   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Table of Contents (Long Pages)

```
┌─────────────────────────────────────────────────────────────────┐
│ [Sidebar]    [MAIN CONTENT]                        [ON THIS PAGE]
│                                                                 │
│              Typography                            • Font Family │
│              ═══════════                           • Type Scale  │
│                                                    • Font Weights│
│              ## Font Family                        • Rules       │
│              DM Sans is our primary...             ────────────  │
│                                                    [Back to top] │
│              ## Type Scale                                       │
│              Our type scale creates...                           │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## Part 5: UX Improvement Recommendations

### 1. Global Search (Priority: HIGH)

**Implementation:** Use Fuse.js for client-side search

**Features:**
- Keyboard activation: `Cmd/Ctrl + K`
- Index: page titles, section headings, key terms (colors, tokens, components)
- Results categorized by section (Visual Identity, Components, etc.)
- Recent searches saved in localStorage

**Search Index Structure:**
```javascript
const searchIndex = [
  {
    title: "Royal Violet",
    section: "Colors",
    keywords: ["purple", "accent", "#6A00D5"],
    path: "/colors#royal-violet"
  },
  {
    title: "Primary Button",
    section: "Components",
    keywords: ["cta", "action", "submit"],
    path: "/buttons#primary"
  },
  // ...
];
```

### 2. Copy-to-Clipboard (Priority: HIGH)

**Implementation:** Custom `<CodeBlock>` component with copy functionality

**Features:**
- Copy button on all code blocks
- Copy individual values (hex codes, CSS variables)
- Visual feedback: "Copied!" for 2 seconds
- Keyboard accessible (Enter/Space to copy when focused)

**Code Example:**
```jsx
<CodeBlock
  language="css"
  filename="tokens.css"
  showLineNumbers={true}
  showCopy={true}
>
  {cssCode}
</CodeBlock>
```

### 3. Progressive Disclosure (Priority: MEDIUM)

**Implementation:** Expandable sections for detailed content

**Pattern:**
- **Layer 1 (Always visible):** Name, visual, primary use case
- **Layer 2 (Expandable):** Specs, variants, code examples
- **Layer 3 (Link to full page):** Complete documentation

**Example for Color Swatch:**
```
[Royal Violet swatch] #6A00D5
Use for: Active states, glows
[▼ Show details]

─── Expanded ───
Hex: #6A00D5
RGB: 106, 0, 213
HSL: 270°, 100%, 42%
CSS Variable: --color-violet

✓ Do: Focus rings, active nav items
✗ Don't: Backgrounds, body text

[View full color system →]
```

### 4. Role-Based Entry Points (Priority: HIGH)

**Implementation:** Cards on homepage linking to curated landing pages

**Cards:**
| Card | Target | Content |
|------|--------|---------|
| "I'm writing copy" | /for-writers | Tone, Forbidden Language, Templates |
| "I'm building UI" | /for-developers | CSS Tokens, Components, Dark Mode |
| "I'm designing" | /for-designers | Colors, Typography, Asset Downloads |
| "I'm new here" | /brand-essentials | 5-minute brand overview |

### 5. Downloads Hub (Priority: MEDIUM)

**Implementation:** Reorganized Asset Library with clear categories

**Structure:**
```
Downloads
├── For Developers
│   ├── CSS Tokens (tokens.css)
│   ├── Sass Variables (tokens.scss)
│   └── JSON Tokens (tokens.json)
├── For Designers
│   ├── Figma Library (external link)
│   ├── Color Palette (.ase)
│   └── Brand Assets (.zip)
└── Brand Materials
    ├── Logo Package
    ├── Brand Guidelines PDF
    └── Quick Reference Card
```

### 6. Table of Contents Sidebar (Priority: LOW)

**Implementation:** Auto-generated TOC for long pages

**Features:**
- Sticky right sidebar on desktop
- Shows all H2/H3 headings
- Highlights current section on scroll
- "Back to top" link at bottom
- Collapses on mobile (hamburger menu)

---

## Part 6: Implementation Plan

### Phase 1: Foundation (Weeks 1-2)

**Goal:** Core infrastructure for improved UX

| Task | Priority | Effort |
|------|----------|--------|
| Create reusable `<CodeBlock>` component with copy | HIGH | 4 hours |
| Add copy buttons to Colors page (hex codes) | HIGH | 2 hours |
| Implement global search (Fuse.js) | HIGH | 6 hours |
| Add keyboard shortcut (Cmd+K) for search | HIGH | 2 hours |
| Create search index for all pages | HIGH | 3 hours |

**Deliverables:**
- `<CodeBlock>` component with copy functionality
- `<SearchModal>` component
- Search index JSON

### Phase 2: Content Completion (Weeks 3-4)

**Goal:** Fill content gaps

| Task | Priority | Effort |
|------|----------|--------|
| Create Writing Guidelines page | HIGH | 4 hours |
| Create Brand Essentials page | HIGH | 3 hours |
| Create Motion & Animation page | MEDIUM | 4 hours |
| Complete Asset Library downloads | MEDIUM | 4 hours |
| Add Forms patterns to Components | LOW | 3 hours |

**Deliverables:**
- Writing Guidelines page (content + examples)
- Brand Essentials page (5-minute overview)
- Motion & Animation page (timing, easing)
- Downloadable assets (logos, tokens files)

### Phase 3: Role-Based Navigation (Weeks 5-6)

**Goal:** Persona-specific entry points

| Task | Priority | Effort |
|------|----------|--------|
| Design role-based cards for homepage | HIGH | 3 hours |
| Create "For Developers" landing page | MEDIUM | 4 hours |
| Create "For Designers" landing page | MEDIUM | 4 hours |
| Create "For Writers" landing page | MEDIUM | 4 hours |
| Update homepage with new quick start section | HIGH | 2 hours |

**Deliverables:**
- 4 role-based landing pages
- Updated homepage hero with quick start cards

### Phase 4: Enhanced Features (Weeks 7-8)

**Goal:** Polish and advanced features

| Task | Priority | Effort |
|------|----------|--------|
| Add table of contents sidebar | MEDIUM | 4 hours |
| Create Accessibility section | MEDIUM | 6 hours |
| Add breadcrumb navigation | LOW | 2 hours |
| Implement recent searches in search modal | LOW | 2 hours |
| Add "Last updated" dates to pages | LOW | 2 hours |

**Deliverables:**
- TOC sidebar component
- 4 Accessibility sub-pages
- Breadcrumbs component

### Phase 5: Downloads & Integration (Week 9)

**Goal:** Complete resource availability

| Task | Priority | Effort |
|------|----------|--------|
| Reorganize Downloads page | MEDIUM | 3 hours |
| Generate downloadable token files | MEDIUM | 3 hours |
| Create Brand Guidelines PDF export | LOW | 4 hours |
| Link to Figma library (if created) | LOW | 1 hour |

**Deliverables:**
- Reorganized Downloads hub
- tokens.css, tokens.scss, tokens.json files
- Brand Guidelines PDF

---

## Part 7: Success Metrics

### Quantitative Metrics

| Metric | Current | Target | Measurement |
|--------|---------|--------|-------------|
| Time to find CSS tokens | ~3 clicks | 1 click | User testing |
| Pages with copy buttons | 1 (CSS Tokens) | 100% | Audit |
| Asset downloads available | ~40% | 100% | Audit |
| Search available | No | Yes | Feature ship |
| Mobile-friendly pages | ~80% | 100% | Responsive audit |

### Qualitative Metrics

- **Developer satisfaction:** "I can copy code in one click"
- **Designer satisfaction:** "I can download everything I need"
- **Writer satisfaction:** "I can quickly check forbidden words"
- **New employee satisfaction:** "I understood the brand in 5 minutes"

### Tracking Implementation

Add analytics events for:
- Search queries (what are people looking for?)
- Copy button clicks (most-copied content)
- Download clicks (most-needed assets)
- Role-based card clicks (which persona is most common?)
- Page time on page (are people finding what they need?)

---

## Part 8: Technical Specifications

### New Components Required

```
src/components/
├── shared/
│   ├── CodeBlock.jsx         # Code display with copy
│   ├── SearchModal.jsx       # Global search
│   ├── CopyButton.jsx        # Reusable copy button
│   ├── TableOfContents.jsx   # Auto-generated TOC
│   ├── Breadcrumbs.jsx       # Navigation breadcrumbs
│   └── RoleCard.jsx          # Homepage role cards
├── pages/
│   ├── brand-essentials/     # New page
│   ├── writing-guidelines/   # New page
│   ├── motion-animation/     # New page
│   ├── for-developers/       # New landing page
│   ├── for-designers/        # New landing page
│   └── for-writers/          # New landing page
└── accessibility/            # New section
    ├── AccessibilityOverview.jsx
    ├── ContrastRequirements.jsx
    ├── FocusStates.jsx
    └── KeyboardNavigation.jsx
```

### Dependencies to Add

```json
{
  "dependencies": {
    "fuse.js": "^7.0.0",         // Client-side search
    "prismjs": "^1.29.0",        // Syntax highlighting
    "react-intersection-observer": "^9.0.0"  // TOC scroll tracking
  }
}
```

### Search Index Schema

```typescript
interface SearchItem {
  id: string;
  title: string;
  section: 'foundation' | 'verbal' | 'visual' | 'system' | 'components' | 'accessibility';
  keywords: string[];
  path: string;
  description?: string;
}
```

---

## Appendix A: Competitive Analysis Summary

| Feature | Atlassian | Polaris | Carbon | Done.ai (Current) | Done.ai (Proposed) |
|---------|-----------|---------|--------|-------------------|-------------------|
| Global search | ✅ | ✅ | ✅ | ❌ | ✅ |
| Copy buttons | ✅ | ✅ | ✅ | Partial | ✅ |
| Role-based nav | ✅ | ❌ | ❌ | ❌ | ✅ |
| Figma library | ✅ | ✅ | ✅ | ❌ | ✅ |
| Token downloads | ✅ | ✅ | ✅ | Partial | ✅ |
| Accessibility section | ✅ | ✅ | ✅ | ❌ | ✅ |
| Motion specs | ✅ | ✅ | ✅ | ❌ | ✅ |

---

## Appendix B: Content Recommendations by Page

### Brand Essentials (New Page)

**Purpose:** 5-minute onboarding for new employees

**Sections:**
1. **The Done.ai Story** (1 min read)
   - One paragraph: What we do
   - One paragraph: Why we're different

2. **Our Core Values** (1 min read)
   - Trust, Ownership, Clarity, Collaboration, Progress
   - One sentence each

3. **Brand Principles** (1 min read)
   - Authority through Simplicity
   - Resolution over Process
   - High Signal, Low Noise

4. **Visual Identity Snapshot** (1 min read)
   - 3 colors: Midnight, Pearl, Violet
   - 1 font: DM Sans
   - Key rule: Royal Violet is accent only

5. **Voice Snapshot** (1 min read)
   - Whisper-quiet confident
   - The "Done." hook
   - Top 3 forbidden words

**Downloads:**
- Quick Reference Card (PDF, 1 page)

---

### Writing Guidelines (New Page)

**Purpose:** Comprehensive guide for writers

**Sections:**
1. **The Done.ai Voice** - Core principles
2. **The "Done." Hook** - Format and examples
3. **Channel Guidelines**
   - Product UI copy
   - Marketing copy
   - Email copy
   - Social media
4. **Templates** - Starter copy for common needs
5. **Checklist** - Before publishing

**Interactive Feature:**
- "Check Your Copy" input field that highlights forbidden words

---

### Motion & Animation (New Page)

**Purpose:** Timing and easing specifications

**Sections:**
1. **Principles** - Purposeful, subtle, consistent
2. **Duration Scale**
   - Fast (100ms): Hover, focus
   - Normal (200ms): Transitions
   - Slow (300ms): Page transitions
3. **Easing Functions**
   - Default: cubic-bezier(0.4, 0, 0.2, 1)
   - In: cubic-bezier(0.4, 0, 1, 1)
   - Out: cubic-bezier(0, 0, 0.2, 1)
4. **Common Patterns**
   - Button hover
   - Card lift
   - Modal enter/exit
   - Toast notification
5. **Code Examples** - CSS and React

---

## Appendix C: Revised Navigation Labels

| Current | Proposed | Reason |
|---------|----------|--------|
| Introduction | Home | Standard convention |
| Brand DNA | Brand Essentials | More actionable |
| CSS Tokens | Design Tokens | More inclusive (not just CSS) |
| Asset Library | Downloads | Clearer purpose |
| - | For Developers | New persona entry |
| - | For Designers | New persona entry |
| - | For Writers | New persona entry |
| - | Accessibility | New section |
| - | Motion | New page |

---

## Summary

This UX proposal addresses the core needs of Done.ai's four primary user personas (Developers, Designers, Writers, New Employees) through:

1. **Role-based entry points** for faster time-to-value
2. **Global search** for quick content discovery
3. **Copy-to-clipboard** for developer efficiency
4. **Content completion** (Writing Guidelines, Motion, Accessibility)
5. **Downloads hub** with organized assets by role

The implementation is phased over 9 weeks, with the highest-impact features (search, copy buttons) delivered first.

**Next Steps:**
1. Review and approve this proposal
2. Prioritize phases based on team capacity
3. Begin Phase 1 implementation

---

*Document prepared for Done.ai Brand Guidelines Redesign Project*
