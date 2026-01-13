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
  background-color: var(--color-violet);
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

  const fullCSS = `:root {
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
  --radius-md: 18px;
  --radius-lg: 16px;
  --radius-xl: 24px;
  --radius-xxl: 32px;
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
}`;

  const colorTokens = `/* Colors - Light Mode */
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
--color-accent: #6A00D5;`;

  const spacingTokens = `/* Spacing (8pt grid) */
--space-1: 4px;
--space-2: 8px;
--space-3: 16px;
--space-4: 24px;
--space-5: 32px;
--space-6: 40px;
--space-7: 48px;
--space-8: 64px;
--space-9: 80px;
--space-10: 120px;`;

  const typographyTokens = `/* Typography */
--text-hero: 40px;
--text-h1: 32px;
--text-h2: 24px;
--text-h3: 20px;
--text-body: 16px;
--text-body-small: 14px;
--text-caption: 12px;`;

  return (
    <PageContainer>
      <Helmet>
        <title>CSS Tokens | Done.ai Brand Guidelines</title>
      </Helmet>

      <PageTitle>CSS Tokens</PageTitle>

      <SectionDescription>
        Copy-paste ready CSS custom properties for the Done.ai design system.
        All tokens are defined in [src/index.css](src/index.css) and available
        globally.
      </SectionDescription>

      {/* Full Token Set */}
      <Section>
        <SectionTitle>Complete Token Set</SectionTitle>
        <SectionDescription>
          The full set of CSS custom properties. Copy this into your :root
          selector.
        </SectionDescription>

        <div style={{ position: "relative" }}>
          <CodeBlock>
            <CopyButton onClick={() => handleCopy(fullCSS, "full")}>
              {copiedSection === "full" ? "Copied!" : "Copy All"}
            </CopyButton>
            {fullCSS}
          </CodeBlock>
        </div>
      </Section>

      {/* Color Tokens */}
      <Section>
        <SectionTitle>Color Tokens</SectionTitle>

        <div style={{ position: "relative" }}>
          <CodeBlock>
            <CopyButton onClick={() => handleCopy(colorTokens, "colors")}>
              {copiedSection === "colors" ? "Copied!" : "Copy"}
            </CopyButton>
            {colorTokens}
          </CodeBlock>
        </div>

        <Callout type="warning" title="Royal Violet Restriction">
          --color-violet (#6A00D5) should only be used for small accents. Never
          as a primary background or large text.
        </Callout>
      </Section>

      {/* Spacing Tokens */}
      <Section>
        <SectionTitle>Spacing Tokens</SectionTitle>

        <div style={{ position: "relative" }}>
          <CodeBlock>
            <CopyButton onClick={() => handleCopy(spacingTokens, "spacing")}>
              {copiedSection === "spacing" ? "Copied!" : "Copy"}
            </CopyButton>
            {spacingTokens}
          </CodeBlock>
        </div>

        <Callout type="info">
          All spacing is based on an 8pt grid. Use these tokens exclusively - no
          hardcoded pixel values.
        </Callout>
      </Section>

      {/* Typography Tokens */}
      <Section>
        <SectionTitle>Typography Tokens</SectionTitle>

        <div style={{ position: "relative" }}>
          <CodeBlock>
            <CopyButton
              onClick={() => handleCopy(typographyTokens, "typography")}
            >
              {copiedSection === "typography" ? "Copied!" : "Copy"}
            </CopyButton>
            {typographyTokens}
          </CodeBlock>
        </div>
      </Section>

      {/* Usage Examples */}
      <Section>
        <SectionTitle>Usage Examples</SectionTitle>

        <CodeBlock>
          {`/* Button example */
.button {
  padding: var(--space-3) var(--space-4);
  background-color: var(--color-midnight);
  color: var(--color-pearl);
  border-radius: var(--radius-md);
  font-size: var(--text-body);
  box-shadow: var(--shadow-sm);
  transition: all var(--duration-normal) var(--ease-default);
}

.button:hover {
  box-shadow: var(--shadow-md);
}

/* Card example */
.card {
  padding: var(--space-5);
  background-color: var(--color-surface-secondary);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  max-width: var(--container-md);
}

/* Typography example */
h1 {
  font-size: var(--text-h1);
  color: var(--color-text-primary);
  margin-bottom: var(--space-4);
}

p {
  font-size: var(--text-body);
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin-bottom: var(--space-3);
}`}
        </CodeBlock>
      </Section>

      {/* Import Guide */}
      <Section>
        <SectionTitle>Implementation Guide</SectionTitle>

        <Callout type="success" title="Already Set Up">
          If you're working in this project, all tokens are already available in
          [src/index.css](src/index.css). Just use them with var(--token-name).
        </Callout>

        <Callout type="info" title="For New Projects">
          Copy the complete token set above into your global CSS file (typically
          index.css or styles.css). Make sure it's in a :root selector so tokens
          are available everywhere.
        </Callout>
      </Section>

      {/* Token Categories */}
      <Section>
        <SectionTitle>Token Categories</SectionTitle>

        <SectionDescription>
          <strong>Colors:</strong> Named colors (pearl, midnight, etc.) and
          semantic colors (surface, text, border)
          <br />
          <strong>Typography:</strong> Font sizes from hero (40px) to caption
          (12px)
          <br />
          <strong>Spacing:</strong> 8pt grid from 4px to 120px
          <br />
          <strong>Radius:</strong> Border radius from small (4px) to full
          (9999px)
          <br />
          <strong>Shadows:</strong> Four elevation levels with dark mode
          variants
          <br />
          <strong>Motion:</strong> Duration and easing for transitions
          <br />
          <strong>Containers:</strong> Max-width breakpoints for content
          <br />
          <strong>Breakpoints:</strong> Responsive design breakpoints
        </SectionDescription>
      </Section>

      {/* Best Practices */}
      <Section>
        <SectionTitle>Best Practices</SectionTitle>

        <Callout type="success" title="✓ Do">
          Use tokens for all spacing, colors, and typography. This ensures
          consistency and makes global changes easy. Tokens also make dark mode
          implementation simple - just override the values.
        </Callout>

        <Callout type="error" title="✗ Don't">
          Don't hardcode values like "16px" or "#FBFBFB". Don't create new
          tokens without documenting them here. Don't use tokens for one-off
          exceptions - that defeats the purpose.
        </Callout>
      </Section>
    </PageContainer>
  );
};

export default CSSTokens;
