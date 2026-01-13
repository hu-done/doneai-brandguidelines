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

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--space-5);
  margin: var(--space-5) 0;
`;

const Card = styled.div`
  padding: var(--space-5);
  background-color: var(--color-surface-secondary);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  transition: all var(--duration-normal) var(--ease-default);

  ${props => props.interactive && `
    cursor: pointer;

    &:hover {
      box-shadow: var(--shadow-md);
      transform: translateY(-2px);
    }

    &:active {
      transform: translateY(0);
    }
  `}

  ${props => props.elevated && `
    box-shadow: var(--shadow-md);
  `}

  ${props => props.flat && `
    box-shadow: none;
    background-color: var(--color-surface-elevated);
    border: 1px solid var(--color-border);
  `}
`;

const CardTitle = styled.h3`
  font-size: var(--text-h3);
  font-weight: 500;
  color: var(--color-text-primary);
  margin-bottom: var(--space-2);
`;

const CardDescription = styled.p`
  font-size: var(--text-body-small);
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin-bottom: var(--space-3);
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: var(--space-3);
  border-top: 1px solid var(--color-border);
  margin-top: var(--space-3);
`;

const CardLabel = styled.span`
  font-size: var(--text-caption);
  color: var(--color-text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const SpecTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: var(--space-5) 0;
  font-size: var(--text-body-small);
`;

const TableHeader = styled.th`
  padding: var(--space-3) var(--space-4);
  text-align: left;
  font-weight: 500;
  color: var(--color-text-primary);
  background-color: var(--color-platinum);
  border-bottom: 1px solid var(--color-border);
`;

const TableCell = styled.td`
  padding: var(--space-3) var(--space-4);
  color: var(--color-text-secondary);
  border-bottom: 1px solid var(--color-border);
  line-height: 1.6;
`;

const CodeBlock = styled.pre`
  background-color: var(--color-midnight);
  color: var(--color-pearl);
  padding: var(--space-4);
  border-radius: var(--radius-lg);
  overflow-x: auto;
  font-size: var(--text-body-small);
  line-height: 1.6;
  margin: var(--space-4) 0;
`;

const NestedCardDemo = styled.div`
  padding: var(--space-6);
  background-color: var(--color-lavender);
  border-radius: var(--radius-xl);
  margin: var(--space-5) 0;
`;

const OuterCard = styled.div`
  padding: var(--space-5);
  background-color: var(--color-surface-elevated);
  border-radius: var(--radius-lg);
`;

const InnerCard = styled.div`
  padding: var(--space-4);
  background-color: var(--color-surface-secondary);
  border-radius: var(--radius-md);
  font-size: var(--text-body-small);
  color: var(--color-text-secondary);
`;

const Cards = () => {
  return (
    <PageContainer>
      <Helmet>
        <title>Cards | Done.ai Brand Guidelines</title>
      </Helmet>

      <PageTitle>Cards</PageTitle>

      {/* Base Card */}
      <Section>
        <SectionTitle>Base Card</SectionTitle>
        <SectionDescription>
          The standard card is a versatile container for grouping related content. It uses subtle elevation to separate from the background.
        </SectionDescription>

        <CardGrid>
          <Card>
            <CardTitle>Standard Card</CardTitle>
            <CardDescription>
              This is the base card style with default spacing, shadow, and radius. Use for most card needs.
            </CardDescription>
            <CardFooter>
              <CardLabel>Default</CardLabel>
            </CardFooter>
          </Card>

          <Card interactive>
            <CardTitle>Interactive Card</CardTitle>
            <CardDescription>
              Hover this card to see the interactive state. Shadow increases and card lifts slightly.
            </CardDescription>
            <CardFooter>
              <CardLabel>Hover me</CardLabel>
            </CardFooter>
          </Card>

          <Card elevated>
            <CardTitle>Elevated Card</CardTitle>
            <CardDescription>
              This card starts with a stronger shadow for emphasis or to indicate active/selected state.
            </CardDescription>
            <CardFooter>
              <CardLabel>Elevated</CardLabel>
            </CardFooter>
          </Card>
        </CardGrid>
      </Section>

      {/* Card Variants */}
      <Section>
        <SectionTitle>Card Variants</SectionTitle>

        <CardGrid>
          <Card flat>
            <CardTitle>Flat Card</CardTitle>
            <CardDescription>
              No shadow, just a border. Use for already elevated contexts or nested cards.
            </CardDescription>
          </Card>

          <Card style={{ backgroundColor: 'var(--color-midnight)', color: 'var(--color-pearl)' }}>
            <CardTitle style={{ color: 'var(--color-pearl)' }}>Dark Card</CardTitle>
            <CardDescription style={{ color: 'rgba(251, 251, 251, 0.8)' }}>
              Inverted colors for emphasis or dark sections. Use sparingly.
            </CardDescription>
          </Card>

          <Card style={{ border: '2px solid var(--color-violet)' }}>
            <CardTitle>Highlighted Card</CardTitle>
            <CardDescription>
              With accent border for important or selected items. Use Royal Violet sparingly.
            </CardDescription>
          </Card>
        </CardGrid>
      </Section>

      {/* Specifications */}
      <Section>
        <SectionTitle>Specifications</SectionTitle>

        <SpecTable>
          <thead>
            <tr>
              <TableHeader>Variant</TableHeader>
              <TableHeader>Padding</TableHeader>
              <TableHeader>Radius</TableHeader>
              <TableHeader>Shadow</TableHeader>
              <TableHeader>Background</TableHeader>
            </tr>
          </thead>
          <tbody>
            <tr>
              <TableCell>Base</TableCell>
              <TableCell>32px (--space-5)</TableCell>
              <TableCell>16px (--radius-lg)</TableCell>
              <TableCell>--shadow-sm</TableCell>
              <TableCell>--color-surface-secondary</TableCell>
            </tr>
            <tr>
              <TableCell>Interactive (hover)</TableCell>
              <TableCell>32px (--space-5)</TableCell>
              <TableCell>16px (--radius-lg)</TableCell>
              <TableCell>--shadow-md</TableCell>
              <TableCell>--color-surface-secondary</TableCell>
            </tr>
            <tr>
              <TableCell>Elevated</TableCell>
              <TableCell>32px (--space-5)</TableCell>
              <TableCell>16px (--radius-lg)</TableCell>
              <TableCell>--shadow-md</TableCell>
              <TableCell>--color-surface-secondary</TableCell>
            </tr>
            <tr>
              <TableCell>Flat</TableCell>
              <TableCell>32px (--space-5)</TableCell>
              <TableCell>16px (--radius-lg)</TableCell>
              <TableCell>None</TableCell>
              <TableCell>--color-surface-elevated</TableCell>
            </tr>
          </tbody>
        </SpecTable>
      </Section>

      {/* Nested Cards */}
      <Section>
        <SectionTitle>Nested Cards</SectionTitle>
        <SectionDescription>
          When nesting cards, follow the radius rule: Inner radius = Outer radius - Padding. Also reduce shadow on nested elements.
        </SectionDescription>

        <NestedCardDemo>
          <OuterCard>
            <div style={{ marginBottom: 'var(--space-3)', fontSize: 'var(--text-body)', color: 'var(--color-text-primary)' }}>
              Outer Card (16px radius)
            </div>
            <InnerCard>
              Inner Card (8px radius = 16px - 8px padding)<br/>
              The radius rule keeps corners aligned.
            </InnerCard>
          </OuterCard>
        </NestedCardDemo>
      </Section>

      {/* Implementation */}
      <Section>
        <SectionTitle>Implementation</SectionTitle>

        <CodeBlock>{`/* Base Card */
.card {
  padding: var(--space-5);
  background-color: var(--color-surface-secondary);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  transition: all var(--duration-normal) var(--ease-default);
}

/* Interactive Card */
.card-interactive {
  cursor: pointer;
}

.card-interactive:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}

.card-interactive:active {
  transform: translateY(0);
}

/* Elevated Card */
.card-elevated {
  box-shadow: var(--shadow-md);
}

/* Flat Card */
.card-flat {
  box-shadow: none;
  background-color: var(--color-surface-elevated);
  border: 1px solid var(--color-border);
}`}</CodeBlock>
      </Section>

      {/* Content Structure */}
      <Section>
        <SectionTitle>Content Structure</SectionTitle>

        <Callout type="info" title="Recommended Pattern">
          <strong>Title:</strong> 20px (--text-h3), medium weight, 8px margin below<br/>
          <strong>Description:</strong> 14px (--text-body-small), regular weight, 1.6 line-height<br/>
          <strong>Footer:</strong> Optional, 12px border-top, 12px padding-top<br/>
          <strong>Actions:</strong> Buttons in footer, right-aligned
        </Callout>
      </Section>

      {/* Usage Guidelines */}
      <Section>
        <SectionTitle>Usage Guidelines</SectionTitle>

        <Callout type="success" title="✓ Do">
          Use cards to group related information. Maintain consistent padding (32px). Use interactive cards for clickable items. Follow the radius rule when nesting. Keep card content scannable.
        </Callout>

        <Callout type="error" title="✗ Don't">
          Don't nest cards more than 2 levels deep. Don't use cards for everything - sometimes plain sections are better. Don't make non-clickable cards look interactive. Don't overcrowd cards with content.
        </Callout>
      </Section>

      {/* When to Use */}
      <Section>
        <SectionTitle>When to Use Cards</SectionTitle>

        <SectionDescription>
          <strong>✓ Use cards for:</strong><br/>
          • Grouping related data (user profiles, product details)<br/>
          • Lists of similar items (search results, product grid)<br/>
          • Dashboard widgets and metrics<br/>
          • Preview content (blog post previews)<br/><br/>

          <strong>✗ Don't use cards for:</strong><br/>
          • Long-form content (use plain sections)<br/>
          • Single pieces of text (unnecessary container)<br/>
          • Every element on the page (creates visual clutter)<br/>
          • Tightly related sequential content (use one card, not many)
        </SectionDescription>
      </Section>
    </PageContainer>
  );
};

export default Cards;
