// Search index for global search functionality
// Each entry contains: title, category, path, description, keywords, content

export const searchIndex = [
  // FOUNDATION
  {
    title: "Introduction",
    category: "Foundation",
    path: "/",
    description: "Brand North Star, Mission, Vision, and Values",
    keywords: ["brand", "mission", "vision", "values", "overview", "introduction", "north star", "home", "getting started"],
    content: "Done.ai brand guidelines design tokens components brand identity resources authority through simplicity"
  },
  {
    title: "Brand DNA",
    category: "Foundation",
    path: "/brand-dna",
    description: "Core brand identity and personality",
    keywords: ["dna", "identity", "personality", "core", "foundation", "brand evolution", "positioning", "promise"],
    content: "resolution over process whisper-quiet confidence high signal low noise unified core brand promise"
  },
  {
    title: "Brand Essentials",
    category: "Foundation",
    path: "/brand-essentials",
    description: "Essential brand elements and quick reference",
    keywords: ["essentials", "basics", "quick reference", "overview", "summary", "cheatsheet"],
    content: "quick reference essential elements brand summary core principles"
  },

  // VERBAL IDENTITY
  {
    title: "Tone of Voice",
    category: "Verbal Identity",
    path: "/tone-of-voice",
    description: "Whisper-quiet confidence, communication principles",
    keywords: ["tone", "voice", "writing", "communication", "confidence", "principles", "authority", "simplicity"],
    content: "authority through simplicity whisper-quiet confidence direct clear concise human"
  },
  {
    title: "Writing Guidelines",
    category: "Verbal Identity",
    path: "/writing-guidelines",
    description: "The 'Done.' hook and content best practices",
    keywords: ["writing", "content", "copy", "guidelines", "done hook", "messaging", "copywriting"],
    content: "done hook question answer format messaging content best practices copy"
  },
  {
    title: "Forbidden Language",
    category: "Verbal Identity",
    path: "/forbidden-language",
    description: "Words to kill and the competitor test",
    keywords: ["forbidden", "banned", "avoid", "language", "words", "competitor test", "streamline", "optimize", "boost", "unleash"],
    content: "streamline optimize boost unleash empower elevate transform seamless game-changing revolutionary cutting-edge"
  },

  // VISUAL IDENTITY
  {
    title: "Logo",
    category: "Visual Identity",
    path: "/logo",
    description: "Logo usage, clear space, and guidelines",
    keywords: ["logo", "branding", "mark", "usage", "clear space", "wordmark", "lockup", "svg", "png"],
    content: "logo wordmark clear space minimum size usage guidelines don'ts"
  },
  {
    title: "Colors",
    category: "Visual Identity",
    path: "/colors",
    description: "Full palette with swatches and usage rules",
    keywords: ["colors", "palette", "violet", "midnight", "pearl", "platinum", "hex", "royal violet", "lavender", "semantic", "success", "warning", "error"],
    content: "pearl white #FBFBFB midnight violet #0B0425 platinum #F0F0F0 royal violet #6A00D5 lavender #F4EFFF success #006A4E warning #B45309 error #DE350B color tokens css variables"
  },
  {
    title: "Typography",
    category: "Visual Identity",
    path: "/typography",
    description: "DM Sans scale, hierarchy, and rules",
    keywords: ["typography", "fonts", "dm sans", "type scale", "hierarchy", "text", "headings", "body", "clamp", "responsive"],
    content: "DM Sans font family type scale text-hero text-h1 text-h2 text-h3 text-body clamp responsive typography fluid sizing google fonts"
  },
  {
    title: "Dark Mode",
    category: "Visual Identity",
    path: "/dark-mode",
    description: "Command Mode palette and implementation",
    keywords: ["dark mode", "theme", "command mode", "dark theme", "colors", "toggle", "class", "prefers-color-scheme", "svelte", "implementation"],
    content: "dark mode command mode class-based toggle .dark prefers-color-scheme implementation svelte sveltekit theme switching css custom properties token overrides"
  },
  {
    title: "Asset Library",
    category: "Visual Identity",
    path: "/asset-library",
    description: "Download logos, icons, and brand assets",
    keywords: ["assets", "download", "library", "files", "resources", "logo files", "svg", "png", "tokens", "scss", "css"],
    content: "download assets logo files svg png tokens scss css variables brand resources"
  },

  // DESIGN SYSTEM
  {
    title: "Spacing & Layout",
    category: "Design System",
    path: "/spacing",
    description: "8pt grid system and spacing tokens",
    keywords: ["spacing", "layout", "grid", "8pt", "whitespace", "tokens", "padding", "margin", "gap"],
    content: "8pt grid system space-1 space-2 space-3 space-4 space-5 space-6 space-7 space-8 spacing tokens padding margin gap container widths"
  },
  {
    title: "Border Radius",
    category: "Design System",
    path: "/border-radius",
    description: "Radius scale and nesting rules",
    keywords: ["border", "radius", "rounded", "corners", "nesting rule", "radius-sm", "radius-md", "radius-lg", "radius-xl"],
    content: "border radius scale radius-sm 4px radius-md 8px radius-lg 16px radius-xl 24px radius-full nesting rule inner outer"
  },
  {
    title: "Elevation & Shadows",
    category: "Design System",
    path: "/elevation",
    description: "Shadow scale and usage hierarchy",
    keywords: ["elevation", "shadows", "depth", "levitation", "layers", "shadow-sm", "shadow-md", "shadow-lg", "shadow-xl", "z-index"],
    content: "shadow scale shadow-sm shadow-md shadow-lg shadow-xl z-index elevation levels levitation not borders box-shadow"
  },
  {
    title: "Motion & Animation",
    category: "Design System",
    path: "/motion",
    description: "Animation timing, easing, and patterns",
    keywords: ["motion", "animation", "transitions", "timing", "easing", "duration", "cubic-bezier", "keyframes", "svelte", "transition"],
    content: "animation timing duration-fast 100ms duration-normal 200ms duration-slow 300ms easing cubic-bezier ease-default ease-in ease-out keyframes transitions svelte animate fade slide scale"
  },
  {
    title: "Icons",
    category: "Design System",
    path: "/icons",
    description: "Icon library and usage guidelines",
    keywords: ["icons", "lucide", "symbols", "graphics", "lucide-svelte", "lucide-react", "stroke", "size"],
    content: "lucide icons lucide-svelte lucide-react icon library stroke width size guidelines usage"
  },
  {
    title: "CSS Tokens",
    category: "Design System",
    path: "/css-tokens",
    description: "Copy-paste SCSS variables, CSS custom properties, Tailwind config",
    keywords: ["css", "tokens", "variables", "code", "copy", "paste", "custom properties", "scss", "sass", "svelte", "sveltekit", "tailwind", "tailwindcss", "implementation", "setup"],
    content: "svelte sveltekit svelte 5 runes $props $state $derived $effect scss sass variables tailwind tailwindcss css custom properties tokens copy paste implementation setup configuration _variables.scss app.css tailwind.config.js DM Sans font family dark mode class toggle"
  },

  // COMPONENTS
  {
    title: "Buttons",
    category: "Components",
    path: "/buttons",
    description: "Button variants, sizes, and states with Svelte 5 examples",
    keywords: ["buttons", "cta", "primary", "secondary", "ghost", "destructive", "svelte", "component", "implementation"],
    content: "button component svelte sveltekit svelte 5 runes $props primary secondary ghost destructive small medium large hover active focus disabled states variants implementation code example"
  },
  {
    title: "Inputs",
    category: "Components",
    path: "/inputs",
    description: "Input fields, validation, and states with Svelte 5 examples",
    keywords: ["inputs", "forms", "fields", "validation", "text input", "textarea", "svelte", "component", "bindable"],
    content: "input component svelte sveltekit svelte 5 runes $props $bindable text input textarea form field validation error success disabled states focus hover label helper text implementation"
  },
  {
    title: "Cards",
    category: "Components",
    path: "/cards",
    description: "Card components and variants with Svelte 5 examples",
    keywords: ["cards", "containers", "surfaces", "panels", "svelte", "component", "slot"],
    content: "card component svelte sveltekit svelte 5 runes $props slot children container surface panel shadow radius implementation"
  }
];
