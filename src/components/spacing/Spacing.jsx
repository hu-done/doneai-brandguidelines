import React from "react";
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

const GridPrinciple = styled.div`
  padding: var(--space-6);
  border-radius: var(--radius-lg);
  background-color: var(--color-midnight);
  color: var(--color-pearl);
  font-size: var(--text-hero);
  font-weight: 500;
  text-align: center;
  margin: var(--space-6) 0;
`;

const SpacingScale = styled.div`
  display: grid;
  gap: var(--space-4);
  margin: var(--space-5) 0;
`;

const SpacingItem = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-4);
  padding: var(--space-4);
  background-color: var(--color-surface-secondary);
  border-radius: var(--radius-md);
`;

const SpacingVisual = styled.div`
  width: ${props => props.size};
  height: ${props => props.size};
  background-color: var(--color-violet);
  border-radius: var(--radius-sm);
  flex-shrink: 0;
`;

const SpacingInfo = styled.div`
  flex: 1;
`;

const SpacingName = styled.div`
  font-size: var(--text-h3);
  font-weight: 500;
  color: var(--color-text-primary);
  margin-bottom: var(--space-1);
`;

const SpacingValue = styled.div`
  font-size: var(--text-body-small);
  color: var(--color-text-secondary);
  font-family: 'Courier New', monospace;
`;

const SpacingUsage = styled.div`
  font-size: var(--text-body-small);
  color: var(--color-text-secondary);
  margin-top: var(--space-1);
`;

const ContainerDemo = styled.div`
  display: grid;
  gap: var(--space-4);
  margin: var(--space-5) 0;
`;

const ContainerBox = styled.div`
  max-width: ${props => props.width};
  padding: var(--space-4);
  background-color: var(--color-surface-secondary);
  border-radius: var(--radius-md);
  border: 2px solid var(--color-violet);
`;

const ContainerLabel = styled.div`
  font-size: var(--text-body-small);
  font-weight: 500;
  color: var(--color-text-primary);
  margin-bottom: var(--space-2);
`;

const ContainerValue = styled.div`
  font-size: var(--text-caption);
  color: var(--color-text-secondary);
  font-family: 'Courier New', monospace;
`;

const PrincipleBox = styled.div`
  padding: var(--space-5);
  border-radius: var(--radius-lg);
  background: linear-gradient(135deg, var(--color-lavender) 0%, var(--color-surface-secondary) 100%);
  margin: var(--space-5) 0;
`;

const PrincipleTitle = styled.div`
  font-size: var(--text-h3);
  font-weight: 500;
  color: var(--color-text-primary);
  margin-bottom: var(--space-2);
`;

const PrincipleText = styled.div`
  font-size: var(--text-body);
  color: var(--color-text-secondary);
  line-height: 1.6;
`;

const ExampleGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-5);
  margin: var(--space-5) 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ExampleBox = styled.div`
  padding: var(--space-5);
  border-radius: var(--radius-lg);
  background-color: ${props => props.good ? 'rgba(0, 106, 78, 0.05)' : 'rgba(222, 53, 11, 0.05)'};
  border-left: 4px solid ${props => props.good ? 'var(--color-success)' : 'var(--color-error)'};
`;

const ExampleLabel = styled.div`
  font-size: var(--text-body);
  font-weight: 500;
  color: var(--color-text-primary);
  margin-bottom: var(--space-3);

  &:before {
    content: '${props => props.icon} ';
    margin-right: var(--space-2);
  }
`;

const ExampleContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.gap || 'var(--space-3)'};
`;

const ExampleElement = styled.div`
  padding: var(--space-3);
  background-color: var(--color-surface-elevated);
  border-radius: var(--radius-md);
  font-size: var(--text-body-small);
  color: var(--color-text-secondary);
`;

const Spacing = () => {
  return (
    <PageContainer>
      <Helmet>
        <title>Spacing & Layout | Done.ai Brand Guidelines</title>
      </Helmet>

      <PageTitle>Spacing & Layout</PageTitle>

      {/* 8pt Grid */}
      <Section>
        <SectionTitle>The 8pt Grid System</SectionTitle>

        <GridPrinciple>8px</GridPrinciple>

        <SectionDescription>
          All spacing in Done.ai derives from a base unit of 8 pixels. This creates consistent rhythm, makes designs easier to implement, and ensures everything aligns perfectly. Spacing tokens are multiples of 8: 4px, 8px, 16px, 24px, 32px, etc.
        </SectionDescription>

        <Callout type="info" title="Why 8pt?">
          Most screen densities are divisible by 8, making scaling crisp across devices. It's large enough to be meaningful but small enough to be flexible. It's the industry standard for good reason.
        </Callout>
      </Section>

      {/* Spacing Scale */}
      <Section>
        <SectionTitle>Spacing Scale</SectionTitle>

        <SpacingScale>
          <SpacingItem>
            <SpacingVisual size="4px" />
            <SpacingInfo>
              <SpacingName>Space 1</SpacingName>
              <SpacingValue>4px | --space-1</SpacingValue>
              <SpacingUsage>Tight spacing between very related elements (icon + text)</SpacingUsage>
            </SpacingInfo>
          </SpacingItem>

          <SpacingItem>
            <SpacingVisual size="8px" />
            <SpacingInfo>
              <SpacingName>Space 2</SpacingName>
              <SpacingValue>8px | --space-2</SpacingValue>
              <SpacingUsage>Between related elements (label + input)</SpacingUsage>
            </SpacingInfo>
          </SpacingItem>

          <SpacingItem>
            <SpacingVisual size="16px" />
            <SpacingInfo>
              <SpacingName>Space 3</SpacingName>
              <SpacingValue>16px | --space-3</SpacingValue>
              <SpacingUsage>Default between elements (paragraph spacing)</SpacingUsage>
            </SpacingInfo>
          </SpacingItem>

          <SpacingItem>
            <SpacingVisual size="24px" />
            <SpacingInfo>
              <SpacingName>Space 4</SpacingName>
              <SpacingValue>24px | --space-4</SpacingValue>
              <SpacingUsage>Between groups of related content</SpacingUsage>
            </SpacingInfo>
          </SpacingItem>

          <SpacingItem>
            <SpacingVisual size="32px" />
            <SpacingInfo>
              <SpacingName>Space 5</SpacingName>
              <SpacingValue>32px | --space-5</SpacingValue>
              <SpacingUsage>Section padding (small), between subsections</SpacingUsage>
            </SpacingInfo>
          </SpacingItem>

          <SpacingItem>
            <SpacingVisual size="40px" />
            <SpacingInfo>
              <SpacingName>Space 6</SpacingName>
              <SpacingValue>40px | --space-6</SpacingValue>
              <SpacingUsage>Section padding (medium), card padding</SpacingUsage>
            </SpacingInfo>
          </SpacingItem>

          <SpacingItem>
            <SpacingVisual size="48px" />
            <SpacingInfo>
              <SpacingName>Space 7</SpacingName>
              <SpacingValue>48px | --space-7</SpacingValue>
              <SpacingUsage>Section padding (large), page padding</SpacingUsage>
            </SpacingInfo>
          </SpacingItem>

          <SpacingItem>
            <SpacingVisual size="64px" />
            <SpacingInfo>
              <SpacingName>Space 8</SpacingName>
              <SpacingValue>64px | --space-8</SpacingValue>
              <SpacingUsage>Major section breaks, hero padding</SpacingUsage>
            </SpacingInfo>
          </SpacingItem>

          <SpacingItem>
            <SpacingVisual size="80px" />
            <SpacingInfo>
              <SpacingName>Space 9</SpacingName>
              <SpacingValue>80px | --space-9</SpacingValue>
              <SpacingUsage>Large section breaks</SpacingUsage>
            </SpacingInfo>
          </SpacingItem>

          <SpacingItem>
            <SpacingVisual size="120px" />
            <SpacingInfo>
              <SpacingName>Space 10</SpacingName>
              <SpacingValue>120px | --space-10</SpacingValue>
              <SpacingUsage>Extra large section breaks, hero sections</SpacingUsage>
            </SpacingInfo>
          </SpacingItem>
        </SpacingScale>
      </Section>

      {/* Container Widths */}
      <Section>
        <SectionTitle>Container Widths</SectionTitle>
        <SectionDescription>
          Maximum widths for different content types. These keep content readable and properly scaled.
        </SectionDescription>

        <ContainerDemo>
          <ContainerBox width="var(--container-sm)">
            <ContainerLabel>Small Container</ContainerLabel>
            <ContainerValue>640px | --container-sm</ContainerValue>
            <SectionDescription style={{ marginTop: 'var(--space-2)', marginBottom: 0 }}>
              Forms, narrow content, sidebars
            </SectionDescription>
          </ContainerBox>

          <ContainerBox width="var(--container-md)">
            <ContainerLabel>Medium Container</ContainerLabel>
            <ContainerValue>960px | --container-md</ContainerValue>
            <SectionDescription style={{ marginTop: 'var(--space-2)', marginBottom: 0 }}>
              Articles, documentation, most page content (this page uses this)
            </SectionDescription>
          </ContainerBox>

          <ContainerBox width="var(--container-lg)">
            <ContainerLabel>Large Container</ContainerLabel>
            <ContainerValue>1200px | --container-lg</ContainerValue>
            <SectionDescription style={{ marginTop: 'var(--space-2)', marginBottom: 0 }}>
              Dashboards, wide tables, marketing pages
            </SectionDescription>
          </ContainerBox>

          <ContainerBox width="var(--container-xl)">
            <ContainerLabel>Extra Large Container</ContainerLabel>
            <ContainerValue>1440px | --container-xl</ContainerValue>
            <SectionDescription style={{ marginTop: 'var(--space-2)', marginBottom: 0 }}>
              Full-width layouts, hero sections
            </SectionDescription>
          </ContainerBox>
        </ContainerDemo>
      </Section>

      {/* Layout Principles */}
      <Section>
        <SectionTitle>Layout Principles</SectionTitle>

        <PrincipleBox>
          <PrincipleTitle>Breathe. Align. Group by proximity.</PrincipleTitle>
          <PrincipleText>
            Generous whitespace creates clarity. Everything should align to the grid. Related elements should be closer together than unrelated ones.
          </PrincipleText>
        </PrincipleBox>

        <ExampleGrid>
          <ExampleBox good>
            <ExampleLabel icon="✓">Good Spacing</ExampleLabel>
            <ExampleContent gap="var(--space-2)">
              <ExampleElement>Label</ExampleElement>
              <ExampleElement>Input Field</ExampleElement>
            </ExampleContent>
            <SectionDescription style={{ marginTop: 'var(--space-3)', marginBottom: 0, fontSize: 'var(--text-body-small)' }}>
              Related elements (label + input) use tight spacing (8px)
            </SectionDescription>
          </ExampleBox>

          <ExampleBox>
            <ExampleLabel icon="✗">Bad Spacing</ExampleLabel>
            <ExampleContent gap="var(--space-8)">
              <ExampleElement>Label</ExampleElement>
              <ExampleElement>Input Field</ExampleElement>
            </ExampleContent>
            <SectionDescription style={{ marginTop: 'var(--space-3)', marginBottom: 0, fontSize: 'var(--text-body-small)' }}>
              Too much space breaks the relationship between label and input
            </SectionDescription>
          </ExampleBox>
        </ExampleGrid>
      </Section>

      {/* Usage Guidelines */}
      <Section>
        <SectionTitle>Usage Guidelines</SectionTitle>

        <Callout type="success" title="✓ Do">
          Use spacing tokens exclusively - no hardcoded pixel values. Stick to the 8pt grid. Use smaller spacing (1-3) within components, larger spacing (5-8) between sections. Group related elements with tighter spacing.
        </Callout>

        <Callout type="error" title="✗ Don't">
          Don't use arbitrary spacing values like 13px or 27px. Don't make everything evenly spaced - vary it based on relationships. Don't forget mobile - adjust spacing for smaller screens.
        </Callout>
      </Section>
    </PageContainer>
  );
};

export default Spacing;
