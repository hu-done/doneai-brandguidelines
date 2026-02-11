import React from "react";
import { Helmet } from "react-helmet-async";
import styled from "styled-components";
import { Check, X } from "lucide-react";
import * as S from "../commonStyles/index.js";
import Callout from "../shared/Callout";
import CodeBlock from "../shared/CodeBlock";

const TypeSpecimen = styled.div`
  margin-bottom: var(--space-6);
  padding: var(--space-5);
  border-radius: var(--radius-lg);
  background-color: var(--color-card-bg);
  box-shadow: var(--shadow-sm);
`;

const TypeExample = styled.div`
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight || 400};
  line-height: ${(props) => props.lineHeight || 1.5};
  color: var(--color-text-primary);
  margin-bottom: var(--space-4);
`;

const TypeSpecs = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: var(--space-3);
  padding-top: var(--space-3);
  border-top: 1px solid var(--color-border);
`;

const TypeSpec = styled.div`
  font-size: var(--text-body-small);
  color: var(--color-text-secondary);
`;

const TypeLabel = styled.span`
  font-weight: 500;
  color: var(--color-text-primary);
  display: block;
  margin-bottom: var(--space-1);
`;

const FontWeightDemo = styled.div`
  display: grid;
  gap: var(--space-3);
  margin-top: var(--space-4);
`;

const WeightExample = styled.div`
  font-size: var(--text-h3);
  font-weight: ${(props) => props.weight};
  color: var(--color-text-primary);
`;

const RulesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: var(--space-4) 0;
`;

const RuleItem = styled.li`
  padding: var(--space-3) 0;
  margin-bottom: 0;
  font-size: var(--text-body-small);
  color: var(--color-text-secondary);
  line-height: 1.6;
  display: flex;
  align-items: flex-start;
  gap: var(--space-2);
  border-bottom: 1px solid var(--color-border);

  &:last-child {
    border-bottom: none;
  }
`;

const RuleIconWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
  margin-top: 2px;
`;

const TitleWithIcon = styled.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
`;

const Typography = () => {
  return (
    <div>
      <Helmet>
        <title>Typography | Done.ai Brand Guidelines</title>
      </Helmet>

      <S.Title>Typography</S.Title>

      <S.Subtitle>Font Family</S.Subtitle>
      <S.Bodytext>
        DM Sans is our primary typeface. It's clean, modern, and highly readable
        across all sizes and weights. Use DM Sans for all text in the Done.ai
        interface and marketing materials.
      </S.Bodytext>

      <FontWeightDemo>
        <WeightExample weight="100">DM Sans Thin (100)</WeightExample>
        <WeightExample weight="200">DM Sans Extra Light (200)</WeightExample>
        <WeightExample weight="300">DM Sans Light (300)</WeightExample>
        <WeightExample weight="400">DM Sans Regular (400)</WeightExample>
        <WeightExample weight="500">DM Sans Medium (500)</WeightExample>
        <WeightExample weight="600">DM Sans Semi Bold (600)</WeightExample>
        <WeightExample weight="700">DM Sans Bold (700)</WeightExample>
      </FontWeightDemo>

      <Callout type="info" title="Google Fonts">
        DM Sans is available on Google Fonts:
        https://fonts.google.com/specimen/DM+Sans
      </Callout>

      <S.Subtitle>Type Scale</S.Subtitle>
      <S.Bodytext>
        Our type scale creates clear hierarchy and rhythm. Each level has a
        specific purpose and should be used consistently.
      </S.Bodytext>

      <TypeSpecimen>
        <TypeExample size="40px" weight="500" lineHeight="1.2">
          Hero Headline
        </TypeExample>
        <TypeSpecs>
          <TypeSpec>
            <TypeLabel>Size</TypeLabel>
            40px
          </TypeSpec>
          <TypeSpec>
            <TypeLabel>Weight</TypeLabel>
            500 (Medium)
          </TypeSpec>
          <TypeSpec>
            <TypeLabel>Line Height</TypeLabel>
            1.2
          </TypeSpec>
          <TypeSpec>
            <TypeLabel>CSS Variable</TypeLabel>
            --text-hero
          </TypeSpec>
          <TypeSpec>
            <TypeLabel>Usage</TypeLabel>
            Hero headlines, landing pages
          </TypeSpec>
        </TypeSpecs>
      </TypeSpecimen>

      <TypeSpecimen>
        <TypeExample size="32px" weight="500" lineHeight="1.3">
          H1 Section Heading
        </TypeExample>
        <TypeSpecs>
          <TypeSpec>
            <TypeLabel>Size</TypeLabel>
            32px
          </TypeSpec>
          <TypeSpec>
            <TypeLabel>Weight</TypeLabel>
            500 (Medium)
          </TypeSpec>
          <TypeSpec>
            <TypeLabel>Line Height</TypeLabel>
            1.3
          </TypeSpec>
          <TypeSpec>
            <TypeLabel>CSS Variable</TypeLabel>
            --text-h1
          </TypeSpec>
          <TypeSpec>
            <TypeLabel>Usage</TypeLabel>
            Page titles, major sections
          </TypeSpec>
        </TypeSpecs>
      </TypeSpecimen>

      <TypeSpecimen>
        <TypeExample size="24px" weight="500" lineHeight="1.3">
          H2 Subsection Heading
        </TypeExample>
        <TypeSpecs>
          <TypeSpec>
            <TypeLabel>Size</TypeLabel>
            24px
          </TypeSpec>
          <TypeSpec>
            <TypeLabel>Weight</TypeLabel>
            500 (Medium)
          </TypeSpec>
          <TypeSpec>
            <TypeLabel>Line Height</TypeLabel>
            1.3
          </TypeSpec>
          <TypeSpec>
            <TypeLabel>CSS Variable</TypeLabel>
            --text-h2
          </TypeSpec>
          <TypeSpec>
            <TypeLabel>Usage</TypeLabel>
            Subsection headings
          </TypeSpec>
        </TypeSpecs>
      </TypeSpecimen>

      <TypeSpecimen>
        <TypeExample size="20px" weight="500" lineHeight="1.4">
          H3 Card Title
        </TypeExample>
        <TypeSpecs>
          <TypeSpec>
            <TypeLabel>Size</TypeLabel>
            20px
          </TypeSpec>
          <TypeSpec>
            <TypeLabel>Weight</TypeLabel>
            500 (Medium)
          </TypeSpec>
          <TypeSpec>
            <TypeLabel>Line Height</TypeLabel>
            1.4
          </TypeSpec>
          <TypeSpec>
            <TypeLabel>CSS Variable</TypeLabel>
            --text-h3
          </TypeSpec>
          <TypeSpec>
            <TypeLabel>Usage</TypeLabel>
            Card titles, list headers
          </TypeSpec>
        </TypeSpecs>
      </TypeSpecimen>

      <TypeSpecimen>
        <TypeExample size="16px" weight="400" lineHeight="1.5">
          Body text is used for the main content. It should be readable and
          comfortable for extended reading. This is the default text size for
          paragraphs, descriptions, and general content throughout the
          interface.
        </TypeExample>
        <TypeSpecs>
          <TypeSpec>
            <TypeLabel>Size</TypeLabel>
            16px
          </TypeSpec>
          <TypeSpec>
            <TypeLabel>Weight</TypeLabel>
            400 (Regular)
          </TypeSpec>
          <TypeSpec>
            <TypeLabel>Line Height</TypeLabel>
            1.5
          </TypeSpec>
          <TypeSpec>
            <TypeLabel>CSS Variable</TypeLabel>
            --text-body
          </TypeSpec>
          <TypeSpec>
            <TypeLabel>Usage</TypeLabel>
            Body text, paragraphs
          </TypeSpec>
        </TypeSpecs>
      </TypeSpecimen>

      <TypeSpecimen>
        <TypeExample size="14px" weight="400" lineHeight="1.5">
          Body Small is used for secondary information, metadata, and supporting
          text.
        </TypeExample>
        <TypeSpecs>
          <TypeSpec>
            <TypeLabel>Size</TypeLabel>
            14px
          </TypeSpec>
          <TypeSpec>
            <TypeLabel>Weight</TypeLabel>
            400 (Regular)
          </TypeSpec>
          <TypeSpec>
            <TypeLabel>Line Height</TypeLabel>
            1.5
          </TypeSpec>
          <TypeSpec>
            <TypeLabel>CSS Variable</TypeLabel>
            --text-body-small
          </TypeSpec>
          <TypeSpec>
            <TypeLabel>Usage</TypeLabel>
            Secondary text, metadata
          </TypeSpec>
        </TypeSpecs>
      </TypeSpecimen>

      <TypeSpecimen>
        <TypeExample size="12px" weight="400" lineHeight="1.4">
          Caption text for labels, helper text, and microcopy
        </TypeExample>
        <TypeSpecs>
          <TypeSpec>
            <TypeLabel>Size</TypeLabel>
            12px
          </TypeSpec>
          <TypeSpec>
            <TypeLabel>Weight</TypeLabel>
            400 (Regular)
          </TypeSpec>
          <TypeSpec>
            <TypeLabel>Line Height</TypeLabel>
            1.4
          </TypeSpec>
          <TypeSpec>
            <TypeLabel>CSS Variable</TypeLabel>
            --text-caption
          </TypeSpec>
          <TypeSpec>
            <TypeLabel>Usage</TypeLabel>
            Labels, helper text, captions
          </TypeSpec>
        </TypeSpecs>
      </TypeSpecimen>

      <S.Subtitle>Links</S.Subtitle>
      <S.Bodytext>
        Inline text links use the accent color, which automatically adjusts for
        light and dark modes to maintain contrast.
      </S.Bodytext>

      <TypeSpecimen>
        <S.Bodytext style={{ marginBottom: 0 }}>
          Read more about our design philosophy in the{" "}
          <button
            type="button"
            style={{
              color: "var(--color-accent)",
              background: "none",
              border: "none",
              padding: 0,
              font: "inherit",
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            brand essentials
          </button>{" "}
          section.
        </S.Bodytext>
        <TypeSpecs>
          <TypeSpec>
            <TypeLabel>Color</TypeLabel>
            var(--color-accent)
          </TypeSpec>
          <TypeSpec>
            <TypeLabel>Light Mode</TypeLabel>
            #6A00D5
          </TypeSpec>
          <TypeSpec>
            <TypeLabel>Dark Mode</TypeLabel>
            #8B5CF6
          </TypeSpec>
          <TypeSpec>
            <TypeLabel>Underline</TypeLabel>
            On hover (optional)
          </TypeSpec>
        </TypeSpecs>
      </TypeSpecimen>

      <Callout type="info" title="Why --color-accent?">
        Use --color-accent instead of --color-violet for links. The accent
        variable automatically shifts to a lighter violet (#8B5CF6) in dark
        mode, ensuring sufficient contrast against dark backgrounds.
      </Callout>

      <CodeBlock language="css" title="Link Styling">
        {`/* Inline text links */
a {
  color: var(--color-accent);
  text-decoration: none;
  transition: opacity var(--duration-fast) var(--ease-default);
}

a:hover {
  text-decoration: underline;
}

a:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
}`}
      </CodeBlock>

      <S.Subtitle>Responsive Typography</S.Subtitle>
      <S.Bodytext>
        For SvelteKit projects, use CSS clamp() to create fluid typography that scales smoothly across all screen sizes. This approach eliminates breakpoint-based font size adjustments and provides a better responsive experience.
      </S.Bodytext>

      <S.Subtitle style={{ fontSize: 'var(--text-h3)', marginTop: 'var(--space-4)' }}>CSS with clamp()</S.Subtitle>
      <CodeBlock language="css" title="Responsive Typography Variables">
{`/* Responsive Typography with clamp() */
:root {
  --text-hero: clamp(2rem, 5vw + 1rem, 3.5rem);
  --text-h1: clamp(1.75rem, 3vw + 1rem, 2.5rem);
  --text-h2: clamp(1.5rem, 2vw + 0.75rem, 2rem);
  --text-h3: clamp(1.25rem, 1.5vw + 0.5rem, 1.5rem);
  --text-body: clamp(1rem, 0.5vw + 0.875rem, 1.125rem);
  --text-small: clamp(0.875rem, 0.25vw + 0.75rem, 0.9375rem);
  --text-caption: 0.75rem;
}

h1 { font-size: var(--text-h1); font-weight: 500; }
h2 { font-size: var(--text-h2); font-weight: 500; }
h3 { font-size: var(--text-h3); font-weight: 500; }
body { font-size: var(--text-body); font-weight: 400; }`}
      </CodeBlock>

      <S.Subtitle style={{ fontSize: 'var(--text-h3)', marginTop: 'var(--space-4)' }}>SCSS Version</S.Subtitle>
      <CodeBlock language="scss" title="_typography.scss">
{`// _typography.scss
$text-hero: clamp(2rem, 5vw + 1rem, 3.5rem);
$text-h1: clamp(1.75rem, 3vw + 1rem, 2.5rem);
$text-h2: clamp(1.5rem, 2vw + 0.75rem, 2rem);
$text-h3: clamp(1.25rem, 1.5vw + 0.5rem, 1.5rem);
$text-body: clamp(1rem, 0.5vw + 0.875rem, 1.125rem);

@mixin heading($size) {
  font-size: $size;
  font-weight: 500;
  font-family: 'DM Sans', sans-serif;
  color: var(--color-text-primary);
}`}
      </CodeBlock>

      <S.Subtitle style={{ fontSize: 'var(--text-h3)', marginTop: 'var(--space-4)' }}>Svelte Component Example</S.Subtitle>
      <CodeBlock language="svelte" title="Heading.svelte">
{`<!-- Heading.svelte -->
<script>
  let { level = 1, class: className = '' } = $props();
</script>

{#if level === 1}
  <h1 class="heading-1 {className}"><slot /></h1>
{:else if level === 2}
  <h2 class="heading-2 {className}"><slot /></h2>
{:else}
  <h3 class="heading-3 {className}"><slot /></h3>
{/if}

<style lang="scss">
  .heading-1 {
    font-size: clamp(1.75rem, 3vw + 1rem, 2.5rem);
    font-weight: 500;
    line-height: 1.2;
  }
  .heading-2 {
    font-size: clamp(1.5rem, 2vw + 0.75rem, 2rem);
    font-weight: 500;
    line-height: 1.3;
  }
  .heading-3 {
    font-size: clamp(1.25rem, 1.5vw + 0.5rem, 1.5rem);
    font-weight: 500;
    line-height: 1.4;
  }
</style>`}
      </CodeBlock>

      <Callout type="info" title="Understanding clamp()">
        The clamp() function takes three parameters: clamp(MIN, PREFERRED, MAX). The PREFERRED value uses viewport width (vw) to scale smoothly, while MIN and MAX set boundaries. This ensures readable text on small screens and prevents oversized text on large displays.
      </Callout>

      <S.Subtitle>Typography Rules</S.Subtitle>

      <Callout type="success" title={<TitleWithIcon><Check size={16} strokeWidth={1.5} /> Do</TitleWithIcon>}>
        <RulesList>
          <RuleItem>
            <RuleIconWrapper>
              <Check size={16} strokeWidth={1.5} color="var(--color-success)" />
            </RuleIconWrapper>
            <span>Maintain clear hierarchy - use one hero, one H1 per page</span>
          </RuleItem>
          <RuleItem>
            <RuleIconWrapper>
              <Check size={16} strokeWidth={1.5} color="var(--color-success)" />
            </RuleIconWrapper>
            <span>Left-align body text for readability</span>
          </RuleItem>
          <RuleItem>
            <RuleIconWrapper>
              <Check size={16} strokeWidth={1.5} color="var(--color-success)" />
            </RuleIconWrapper>
            <span>Use appropriate line height for comfortable reading</span>
          </RuleItem>
          <RuleItem>
            <RuleIconWrapper>
              <Check size={16} strokeWidth={1.5} color="var(--color-success)" />
            </RuleIconWrapper>
            <span>Ensure sufficient contrast against backgrounds (4.5:1 minimum)</span>
          </RuleItem>
          <RuleItem>
            <RuleIconWrapper>
              <Check size={16} strokeWidth={1.5} color="var(--color-success)" />
            </RuleIconWrapper>
            <span>Use Regular (400) for body, Medium (500) for headings</span>
          </RuleItem>
        </RulesList>
      </Callout>

      <Callout type="error" title={<TitleWithIcon><X size={16} strokeWidth={1.5} /> Don't</TitleWithIcon>}>
        <RulesList>
          <RuleItem>
            <RuleIconWrapper>
              <X size={16} strokeWidth={1.5} color="var(--color-error)" />
            </RuleIconWrapper>
            <span>Don't use multiple competing headlines on the same page</span>
          </RuleItem>
          <RuleItem>
            <RuleIconWrapper>
              <X size={16} strokeWidth={1.5} color="var(--color-error)" />
            </RuleIconWrapper>
            <span>Don't center-align body text - it reduces readability</span>
          </RuleItem>
          <RuleItem>
            <RuleIconWrapper>
              <X size={16} strokeWidth={1.5} color="var(--color-error)" />
            </RuleIconWrapper>
            <span>Don't create orphaned words (single words on their own line)</span>
          </RuleItem>
          <RuleItem>
            <RuleIconWrapper>
              <X size={16} strokeWidth={1.5} color="var(--color-error)" />
            </RuleIconWrapper>
            <span>Don't use all caps for long text - it's hard to read</span>
          </RuleItem>
          <RuleItem>
            <RuleIconWrapper>
              <X size={16} strokeWidth={1.5} color="var(--color-error)" />
            </RuleIconWrapper>
            <span>Don't use font weights below 400 for body text</span>
          </RuleItem>
        </RulesList>
      </Callout>
    </div>
  );
};

export default Typography;
