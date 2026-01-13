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

const TypeSpecimen = styled.div`
  margin-bottom: var(--space-6);
  padding: var(--space-5);
  border-radius: var(--radius-lg);
  background-color: var(--color-surface-secondary);
`;

const TypeExample = styled.div`
  font-size: ${props => props.size};
  font-weight: ${props => props.weight || 400};
  line-height: ${props => props.lineHeight || 1.5};
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
  font-weight: ${props => props.weight};
  color: var(--color-text-primary);
`;

const RulesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: var(--space-4) 0;
`;

const RuleItem = styled.li`
  padding: var(--space-3);
  margin-bottom: var(--space-2);
  border-radius: var(--radius-md);
  background-color: var(--color-surface-secondary);
  font-size: var(--text-body-small);
  color: var(--color-text-secondary);
  line-height: 1.6;

  &:before {
    content: '${props => props.icon || '•'}';
    margin-right: var(--space-2);
    font-weight: 500;
  }
`;

const Typography = () => {
  return (
    <PageContainer>
      <Helmet>
        <title>Typography | Done.ai Brand Guidelines</title>
      </Helmet>

      <PageTitle>Typography</PageTitle>

      {/* Font Family */}
      <Section>
        <SectionTitle>Font Family</SectionTitle>
        <SectionDescription>
          DM Sans is our primary typeface. It's clean, modern, and highly readable across all sizes and weights. Use DM Sans for all text in the Done.ai interface and marketing materials.
        </SectionDescription>

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
          DM Sans is available on Google Fonts: https://fonts.google.com/specimen/DM+Sans
        </Callout>
      </Section>

      {/* Type Scale */}
      <Section>
        <SectionTitle>Type Scale</SectionTitle>
        <SectionDescription>
          Our type scale creates clear hierarchy and rhythm. Each level has a specific purpose and should be used consistently.
        </SectionDescription>

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
            Body text is used for the main content. It should be readable and comfortable for extended reading. This is the default text size for paragraphs, descriptions, and general content throughout the interface.
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
            Body Small is used for secondary information, metadata, and supporting text.
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
      </Section>

      {/* Typography Rules */}
      <Section>
        <SectionTitle>Typography Rules</SectionTitle>

        <Callout type="success" title="✓ Do">
          <RulesList>
            <RuleItem icon="✓">Maintain clear hierarchy - use one hero, one H1 per page</RuleItem>
            <RuleItem icon="✓">Left-align body text for readability</RuleItem>
            <RuleItem icon="✓">Use appropriate line height for comfortable reading</RuleItem>
            <RuleItem icon="✓">Ensure sufficient contrast against backgrounds (4.5:1 minimum)</RuleItem>
            <RuleItem icon="✓">Use Regular (400) for body, Medium (500) for headings</RuleItem>
          </RulesList>
        </Callout>

        <Callout type="error" title="✗ Don't">
          <RulesList>
            <RuleItem icon="✗">Don't use multiple competing headlines on the same page</RuleItem>
            <RuleItem icon="✗">Don't center-align body text - it reduces readability</RuleItem>
            <RuleItem icon="✗">Don't create orphaned words (single words on their own line)</RuleItem>
            <RuleItem icon="✗">Don't use all caps for long text - it's hard to read</RuleItem>
            <RuleItem icon="✗">Don't use font weights below 400 for body text</RuleItem>
          </RulesList>
        </Callout>
      </Section>
    </PageContainer>
  );
};

export default Typography;
