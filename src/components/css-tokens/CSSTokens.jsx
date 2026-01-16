import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import styled from "styled-components";
import Callout from "../shared/Callout";

const PageContainer = styled.div`
  max-width: var(--container-md);
  padding: var(--space-7) var(--space-6);
`;

const PageTitle = styled.h1`
  font-size: var(--text-h1);
  font-weight: 500;
  color: var(--color-text-primary);
  margin-bottom: var(--space-3);
  padding-bottom: var(--space-3);
  border-bottom: 1px solid var(--color-border);
`;

const Section = styled.section`
  margin-top: var(--space-8);
`;

const SectionTitle = styled.h2`
  font-size: var(--text-h2);
  font-weight: 500;
  color: var(--color-text-primary);
  margin-bottom: var(--space-4);
`;

const SectionDescription = styled.p`
  font-size: var(--text-body);
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin-bottom: var(--space-5);
`;

const CodeBlock = styled.pre`
  background-color: var(--color-midnight);
  color: var(--color-pearl);
  padding: var(--space-5);
  border-radius: var(--radius-lg);
  overflow-x: auto;
  font-size: 13px;
  line-height: 1.6;
  margin: var(--space-4) 0;
  position: relative;
  font-family: "Courier New", monospace;
`;

const CopyButton = styled.button`
  position: absolute;
  top: var(--space-3);
  right: var(--space-3);
  padding: var(--space-2) var(--space-3);
  background-color: var(--color-midnight);
  color: var(--color-pearl);
  border: none;
  border-radius: var(--radius-md);
  font-size: var(--text-body-small);
  font-weight: 500;
  cursor: pointer;
  transition: all var(--duration-fast) var(--ease-default);

  &:hover {
    opacity: 0.9;
  }

  &:active {
    transform: scale(0.98);
  }
`;

const CSSTokens = () => {
  const [copiedSection, setCopiedSection] = useState(null);

  const handleCopy = (text, section) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(section);
    setTimeout(() => setCopiedSection(null), 2000);
  };

  const scssVariables = `// _variables.scss - Done.ai Design Tokens
// Import into your SCSS modules: @use '../styles/variables' as *;

// Core Colors
$pearl-white: #FBFBFB;
$midnight-violet: #0B0425;
$platinum: #F0F0F0;
$royal-violet: #6A00D5;
$lavender: #F4EFFF;

// Semantic Colors
$success: #006A4E;
$warning: #B45309;
$error: #DE350B;

// Dark Mode Colors
$dark-surface-primary: #0B0425;
$dark-surface-secondary: #1A1435;
$dark-surface-elevated: #2A2645;
$dark-border: #3A3655;
$dark-text-primary: #FBFBFB;
$dark-text-secondary: rgba(251, 251, 251, 0.7);
$dark-accent: #8B5CF6;

// Typography
$font-family: 'DM Sans', sans-serif;
$font-weight-default: 400;
$font-weight-medium: 500;
$font-weight-bold: 700;

$text-hero: 40px;
$text-h1: 32px;
$text-h2: 24px;
$text-h3: 20px;
$text-body: 16px;
$text-body-small: 14px;
$text-caption: 12px;

// Spacing (8pt grid)
$space-1: 4px;
$space-2: 8px;
$space-3: 16px;
$space-4: 24px;
$space-5: 32px;
$space-6: 40px;
$space-7: 48px;
$space-8: 64px;
$space-9: 80px;
$space-10: 120px;

// Border Radius
$radius-sm: 4px;
$radius-md: 8px;
$radius-lg: 16px;
$radius-xl: 24px;
$radius-full: 9999px;

// Shadows
$shadow-sm: 0 1px 2px rgba(11, 4, 37, 0.05);
$shadow-md: 0 4px 12px rgba(11, 4, 37, 0.08);
$shadow-lg: 0 8px 24px rgba(11, 4, 37, 0.12);
$shadow-xl: 0 16px 48px rgba(11, 4, 37, 0.16);

// Dark mode shadows
$shadow-dark-sm: 0 1px 2px rgba(0, 0, 0, 0.3);
$shadow-dark-md: 0 4px 12px rgba(0, 0, 0, 0.4);
$shadow-dark-lg: 0 8px 24px rgba(0, 0, 0, 0.5);
$shadow-dark-xl: 0 16px 48px rgba(0, 0, 0, 0.6);

// Motion
$duration-fast: 100ms;
$duration-normal: 200ms;
$duration-slow: 300ms;
$ease-default: cubic-bezier(0.4, 0, 0.2, 1);
$ease-in: cubic-bezier(0.4, 0, 1, 1);
$ease-out: cubic-bezier(0, 0, 0.2, 1);

// Containers
$container-sm: 640px;
$container-md: 960px;
$container-lg: 1200px;
$container-xl: 1440px;

// Breakpoints
$breakpoint-sm: 640px;
$breakpoint-md: 768px;
$breakpoint-lg: 1024px;
$breakpoint-xl: 1280px;
$breakpoint-2xl: 1536px;`;

  const cssCustomProps = `:root {
  /* Core Colors */
  --color-pearl: #FBFBFB;
  --color-midnight: #0B0425;
  --color-platinum: #F0F0F0;
  --color-violet: #6A00D5;
  --color-lavender: #F4EFFF;

  /* Semantic Colors */
  --color-success: #006A4E;
  --color-warning: #B45309;
  --color-error: #DE350B;

  /* Surface & Text (mode-aware - change in dark mode) */
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

  /* Border Radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 16px;
  --radius-xl: 24px;
  --radius-full: 9999px;

  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(11, 4, 37, 0.05);
  --shadow-md: 0 4px 12px rgba(11, 4, 37, 0.08);
  --shadow-lg: 0 8px 24px rgba(11, 4, 37, 0.12);
  --shadow-xl: 0 16px 48px rgba(11, 4, 37, 0.16);

  /* Motion */
  --duration-fast: 100ms;
  --duration-normal: 200ms;
  --duration-slow: 300ms;
  --ease-default: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Dark Mode - Class-based toggle */
:root.dark {
  --color-surface-primary: #0B0425;
  --color-surface-secondary: #1A1435;
  --color-surface-elevated: #2A2645;
  --color-border: #3A3655;
  --color-text-primary: #FBFBFB;
  --color-text-secondary: rgba(251, 251, 251, 0.7);
  --color-accent: #8B5CF6;

  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.3);
  --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.4);
  --shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.5);
  --shadow-xl: 0 16px 48px rgba(0, 0, 0, 0.6);
}`;

  const tailwindConfig = `// tailwind.config.js
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        pearl: '#FBFBFB',
        midnight: '#0B0425',
        platinum: '#F0F0F0',
        violet: '#6A00D5',
        lavender: '#F4EFFF',
        success: '#006A4E',
        warning: '#B45309',
        error: '#DE350B',

        // Dark mode colors (use with dark: prefix)
        'dark-surface': {
          primary: '#0B0425',
          secondary: '#1A1435',
          elevated: '#2A2645',
        },
      },

      spacing: {
        1: '4px',
        2: '8px',
        3: '16px',
        4: '24px',
        5: '32px',
        6: '40px',
        7: '48px',
        8: '64px',
        9: '80px',
        10: '120px',
      },

      borderRadius: {
        sm: '4px',
        md: '8px',
        lg: '16px',
        xl: '24px',
        full: '9999px',
      },

      boxShadow: {
        sm: '0 1px 2px rgba(11, 4, 37, 0.05)',
        md: '0 4px 12px rgba(11, 4, 37, 0.08)',
        lg: '0 8px 24px rgba(11, 4, 37, 0.12)',
        xl: '0 16px 48px rgba(11, 4, 37, 0.16)',
      },

      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
      },

      fontSize: {
        hero: '40px',
        h1: '32px',
        h2: '24px',
        h3: '20px',
        body: '16px',
        'body-small': '14px',
        caption: '12px',
      },

      transitionDuration: {
        fast: '100ms',
        normal: '200ms',
        slow: '300ms',
      },

      transitionTimingFunction: {
        default: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}`;

  const svelteExample = `<!-- Button.svelte -->
<script>
  let { variant = 'primary', size = 'md', children } = $props();
</script>

<button
  class="btn-{variant} size-{size}"
>
  {@render children()}
</button>

<style lang="scss">
  @use '../styles/variables' as *;

  .btn-primary {
    background-color: $midnight-violet;
    color: $pearl-white;
    border-radius: $radius-md;
    padding: $space-3 $space-4;
    font-size: $text-body;
    font-weight: $font-weight-medium;
    box-shadow: $shadow-sm;
    transition: all $duration-normal $ease-default;
    border: none;
    cursor: pointer;

    &:hover {
      box-shadow: $shadow-md;
      background-color: lighten($midnight-violet, 10%);
    }

    &:active {
      transform: scale(0.98);
    }

    &:focus-visible {
      outline: 2px solid $royal-violet;
      outline-offset: 2px;
    }
  }

  .btn-secondary {
    background-color: transparent;
    color: $midnight-violet;
    border: 1px solid $midnight-violet;
    border-radius: $radius-md;
    padding: $space-3 $space-4;

    &:hover {
      background-color: $lavender;
    }
  }

  .size-sm {
    padding: $space-2 $space-3;
    font-size: $text-body-small;
  }

  .size-lg {
    padding: $space-4 $space-5;
    font-size: $text-h3;
  }

  // Dark mode support
  :global(.dark) & {
    &.btn-primary {
      background-color: $pearl-white;
      color: $midnight-violet;
      box-shadow: $shadow-dark-sm;

      &:hover {
        box-shadow: $shadow-dark-md;
      }
    }
  }
</style>`;

  const svelteTailwind = `<!-- Card.svelte - Using Tailwind utilities -->
<script>
  let { title, children } = $props();
</script>

<div class="
  bg-platinum
  dark:bg-dark-surface-secondary
  rounded-lg
  p-5
  shadow-sm
  hover:shadow-md
  transition-shadow
  duration-normal
">
  <h3 class="text-h3 text-midnight dark:text-pearl mb-3">
    {title}
  </h3>
  <div class="text-body text-midnight/70 dark:text-pearl/70">
    {@render children()}
  </div>
</div>

<!-- No scoped styles needed when using Tailwind! -->`;

  const darkModeExample = `<!-- DarkModeToggle.svelte -->
<script>
  import { onMount } from 'svelte';

  let isDark = $state(false);

  onMount(() => {
    // Check localStorage or system preference
    isDark = localStorage.getItem('theme') === 'dark'
      || (!localStorage.getItem('theme')
          && window.matchMedia('(prefers-color-scheme: dark)').matches);

    applyTheme();
  });

  function toggleTheme() {
    isDark = !isDark;
    applyTheme();
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }

  function applyTheme() {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
</script>

<button onclick={toggleTheme} class="theme-toggle">
  {isDark ? '☀️' : '🌙'}
</button>

<style lang="scss">
  @use '../styles/variables' as *;

  .theme-toggle {
    padding: $space-2 $space-3;
    background: var(--color-surface-secondary);
    border: none;
    border-radius: $radius-md;
    cursor: pointer;
    font-size: $text-h3;
    transition: all $duration-fast $ease-default;

    &:hover {
      background: var(--color-surface-elevated);
      transform: scale(1.1);
    }
  }
</style>`;

  return (
    <PageContainer>
      <Helmet>
        <title>CSS Tokens | Done.ai Brand Guidelines</title>
      </Helmet>

      <PageTitle>CSS Tokens</PageTitle>

      <SectionDescription>
        Copy-paste ready design tokens for SvelteKit 5 + Tailwind CSS v4 + SCSS projects.
      </SectionDescription>

      <Callout type="info">
        These examples are for SvelteKit 5 with Tailwind CSS v4 and SCSS. This documentation site uses React, but your implementation should use Svelte.
      </Callout>

      {/* SCSS Variables */}
      <Section>
        <SectionTitle>1. SCSS Variables (_variables.scss)</SectionTitle>
        <SectionDescription>
          Create a _variables.scss file and import it into your SCSS modules.
        </SectionDescription>

        <div style={{ position: "relative" }}>
          <CodeBlock>
            <CopyButton onClick={() => handleCopy(scssVariables, "scss")}>
              {copiedSection === "scss" ? "Copied!" : "Copy"}
            </CopyButton>
            {scssVariables}
          </CodeBlock>
        </div>

        <Callout type="warning" title="Royal Violet Restriction">
          $royal-violet (#6A00D5) should only be used for small accents like focus rings and glows. Never as a primary background or large text block.
        </Callout>
      </Section>

      {/* CSS Custom Properties */}
      <Section>
        <SectionTitle>2. CSS Custom Properties</SectionTitle>
        <SectionDescription>
          Use CSS custom properties for runtime theme switching and Tailwind integration. Add this to your global CSS file (e.g., app.css).
        </SectionDescription>

        <div style={{ position: "relative" }}>
          <CodeBlock>
            <CopyButton onClick={() => handleCopy(cssCustomProps, "css")}>
              {copiedSection === "css" ? "Copied!" : "Copy"}
            </CopyButton>
            {cssCustomProps}
          </CodeBlock>
        </div>
      </Section>

      {/* Tailwind Config */}
      <Section>
        <SectionTitle>3. Tailwind CSS v4 Configuration</SectionTitle>
        <SectionDescription>
          Configure Tailwind to use Done.ai design tokens. Add this to your tailwind.config.js.
        </SectionDescription>

        <div style={{ position: "relative" }}>
          <CodeBlock>
            <CopyButton onClick={() => handleCopy(tailwindConfig, "tailwind")}>
              {copiedSection === "tailwind" ? "Copied!" : "Copy"}
            </CopyButton>
            {tailwindConfig}
          </CodeBlock>
        </div>

        <Callout type="info">
          With this config, you can use classes like bg-midnight, text-pearl, rounded-md, shadow-sm, etc.
        </Callout>
      </Section>

      {/* Svelte Usage */}
      <Section>
        <SectionTitle>4. Usage in Svelte 5 Components</SectionTitle>
        <SectionDescription>
          Examples showing how to use SCSS variables and Tailwind classes in Svelte 5 components with the new runes API.
        </SectionDescription>

        <div style={{ position: "relative" }}>
          <CodeBlock>
            <CopyButton onClick={() => handleCopy(svelteExample, "svelte")}>
              {copiedSection === "svelte" ? "Copied!" : "Copy"}
            </CopyButton>
            {svelteExample}
          </CodeBlock>
        </div>
      </Section>

      {/* Svelte with Tailwind */}
      <Section>
        <SectionTitle>Using Tailwind Utility Classes</SectionTitle>
        <SectionDescription>
          You can also use Tailwind utilities directly in Svelte components.
        </SectionDescription>

        <div style={{ position: "relative" }}>
          <CodeBlock>
            <CopyButton onClick={() => handleCopy(svelteTailwind, "svelte-tw")}>
              {copiedSection === "svelte-tw" ? "Copied!" : "Copy"}
            </CopyButton>
            {svelteTailwind}
          </CodeBlock>
        </div>
      </Section>

      {/* Project Structure */}
      <Section>
        <SectionTitle>Recommended File Structure</SectionTitle>

        <CodeBlock>
{`src/
├── lib/
│   ├── styles/
│   │   ├── _variables.scss    ← SCSS variables
│   │   ├── app.css             ← Global CSS + custom properties
│   │   └── globals.scss        ← Global SCSS imports
│   └── components/
│       └── Button.svelte       ← Your components
├── routes/
│   └── +layout.svelte          ← Import app.css here
└── tailwind.config.js          ← Tailwind configuration`}
        </CodeBlock>
      </Section>

      {/* Import Guide */}
      <Section>
        <SectionTitle>Setup Instructions</SectionTitle>

        <Callout type="info" title="Step 1: Create _variables.scss">
          Create src/lib/styles/_variables.scss and paste the SCSS variables from section 1.
        </Callout>

        <Callout type="info" title="Step 2: Add CSS Custom Properties">
          Add the CSS custom properties to your src/lib/styles/app.css file (section 2).
        </Callout>

        <Callout type="info" title="Step 3: Configure Tailwind">
          Update tailwind.config.js with the Done.ai tokens (section 3).
        </Callout>

        <Callout type="success" title="Step 4: Import in Layout">
          Import your app.css in src/routes/+layout.svelte: import '../lib/styles/app.css'
        </Callout>
      </Section>

      {/* Best Practices */}
      <Section>
        <SectionTitle>Best Practices</SectionTitle>

        <Callout type="success" title="✓ Do">
          Use SCSS variables for complex calculations and mixins. Use CSS custom properties for theme switching. Use Tailwind utilities for rapid prototyping and common patterns. Mix all three approaches based on what makes sense for each use case.
        </Callout>

        <Callout type="error" title="✗ Don't">
          Don't hardcode values like "16px" or "#FBFBFB" anywhere. Don't mix Tailwind's default colors with Done.ai brand colors. Don't use Royal Violet for large backgrounds or body text. Don't create component-specific tokens without documenting them.
        </Callout>
      </Section>

      {/* Dark Mode */}
      <Section>
        <SectionTitle>Dark Mode Implementation</SectionTitle>
        <SectionDescription>
          Add a dark mode toggle to your Svelte app using the :root.dark selector.
        </SectionDescription>

        <div style={{ position: "relative" }}>
          <CodeBlock>
            <CopyButton onClick={() => handleCopy(darkModeExample, "dark")}>
              {copiedSection === "dark" ? "Copied!" : "Copy"}
            </CopyButton>
            {darkModeExample}
          </CodeBlock>
        </div>
      </Section>
    </PageContainer>
  );
};

export default CSSTokens;
