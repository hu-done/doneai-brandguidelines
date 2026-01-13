import React from "react";
import { Helmet } from "react-helmet-async";
import styled from "styled-components";
import ColorSwatch from "../shared/ColorSwatch";
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

const SwatchGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: var(--space-6);
  margin-top: var(--space-5);
`;

const ExampleCard = styled.div`
  padding: var(--space-5);
  border-radius: var(--radius-lg);
  background-color: ${props => props.bg || 'var(--color-surface-secondary)'};
  color: ${props => props.color || 'var(--color-text-primary)'};
  margin-bottom: var(--space-4);
  box-shadow: var(--shadow-sm);
`;

const ExampleTitle = styled.div`
  font-size: var(--text-h3);
  font-weight: 500;
  margin-bottom: var(--space-2);
`;

const ExampleText = styled.div`
  font-size: var(--text-body-small);
  line-height: 1.5;
`;

const Colors = () => {
  return (
    <PageContainer>
      <Helmet>
        <title>Colors | Done.ai Brand Guidelines</title>
      </Helmet>

      <PageTitle>Colors</PageTitle>

      {/* Canvas Colors */}
      <Section>
        <SectionTitle>Canvas Colors</SectionTitle>
        <SectionDescription>
          These colors form the environment of the Done.ai interface. Use them for 90% of your design - backgrounds, surfaces, text, and dividers.
        </SectionDescription>

        <SwatchGrid>
          <ColorSwatch
            name="Pearl White"
            hex="#FBFBFB"
            rgb="251, 251, 251"
            cssVar="--color-pearl"
            usage="Primary background color. Creates a clean, minimal canvas for content."
          />
          <ColorSwatch
            name="Midnight Violet"
            hex="#0B0425"
            rgb="11, 4, 37"
            cssVar="--color-midnight"
            usage="Primary text color and dark sections. The foundation of our authority."
          />
          <ColorSwatch
            name="Platinum"
            hex="#F0F0F0"
            rgb="240, 240, 240"
            cssVar="--color-platinum"
            usage="Secondary surfaces, subtle dividers, and disabled states."
          />
        </SwatchGrid>
      </Section>

      {/* Brand Accent */}
      <Section>
        <SectionTitle>Brand Accent</SectionTitle>
        <SectionDescription>
          Use these colors sparingly for emphasis and interactive states. They add energy without overwhelming the interface.
        </SectionDescription>

        <SwatchGrid>
          <ColorSwatch
            name="Royal Violet"
            hex="#6A00D5"
            rgb="106, 0, 213"
            cssVar="--color-violet"
            usage="Small accents only - active states, focus rings, glows. Never for backgrounds or body text."
          />
          <ColorSwatch
            name="Lavender"
            hex="#F4EFFF"
            rgb="244, 239, 255"
            cssVar="--color-lavender"
            usage="Hover states, soft highlights, and subtle backgrounds for violet-related elements."
          />
        </SwatchGrid>

        <Callout type="warning" title="⚠️ Royal Violet Restriction">
          Never use Royal Violet (#6A00D5) as a primary background or for large text areas. It's energy - use it sparingly for accents, active states, focus rings, and glows. When everything glows, nothing does.
        </Callout>
      </Section>

      {/* Semantic Colors */}
      <Section>
        <SectionTitle>Semantic Colors</SectionTitle>
        <SectionDescription>
          Status and feedback colors that communicate system state clearly and consistently.
        </SectionDescription>

        <SwatchGrid>
          <ColorSwatch
            name="Success"
            hex="#006A4E"
            rgb="0, 106, 78"
            cssVar="--color-success"
            usage="Completed actions, positive confirmations, and success messages."
          />
          <ColorSwatch
            name="Warning"
            hex="#B45309"
            rgb="180, 83, 9"
            cssVar="--color-warning"
            usage="Attention needed, caution states, and non-critical alerts."
          />
          <ColorSwatch
            name="Error"
            hex="#DE350B"
            rgb="222, 53, 11"
            cssVar="--color-error"
            usage="Errors, destructive actions, and critical alerts."
          />
        </SwatchGrid>
      </Section>

      {/* Usage Examples */}
      <Section>
        <SectionTitle>Usage Examples</SectionTitle>
        <SectionDescription>
          See how these colors work together in practice.
        </SectionDescription>

        <ExampleCard bg="var(--color-pearl)" color="var(--color-midnight)">
          <ExampleTitle>Default Card</ExampleTitle>
          <ExampleText>
            Pearl White background with Midnight Violet text creates high contrast and excellent readability.
          </ExampleText>
        </ExampleCard>

        <ExampleCard bg="var(--color-midnight)" color="var(--color-pearl)">
          <ExampleTitle>Inverted Card</ExampleTitle>
          <ExampleText>
            Midnight Violet background with Pearl White text for emphasis or dark sections.
          </ExampleText>
        </ExampleCard>

        <ExampleCard bg="var(--color-lavender)" color="var(--color-midnight)">
          <ExampleTitle>Highlighted Card</ExampleTitle>
          <ExampleText>
            Lavender background for hover states or soft emphasis without overwhelming.
          </ExampleText>
        </ExampleCard>
      </Section>

      {/* Principles */}
      <Section>
        <SectionTitle>Color Principles</SectionTitle>

        <Callout type="success" title="✓ Do">
          Use high contrast between text and background. Maintain the 90/10 rule - 90% canvas colors, 10% accent. Use Royal Violet only for small interactive elements.
        </Callout>

        <Callout type="error" title="✗ Don't">
          Don't use Royal Violet for large backgrounds or body text. Don't mix too many colors in one view. Don't sacrifice contrast for aesthetics.
        </Callout>
      </Section>
    </PageContainer>
  );
};

export default Colors;
