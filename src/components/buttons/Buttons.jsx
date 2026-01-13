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

const ButtonShowcase = styled.div`
  display: flex;
  gap: var(--space-4);
  align-items: center;
  flex-wrap: wrap;
  padding: var(--space-5);
  background-color: var(--color-surface-secondary);
  border-radius: var(--radius-lg);
  margin: var(--space-4) 0;
`;

const Button = styled.button`
  font-family: 'DM Sans', sans-serif;
  font-weight: 500;
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all var(--duration-normal) var(--ease-default);
  border: none;

  /* Variant Styles */
  ${props => {
    switch(props.variant) {
      case 'primary':
        return `
          background-color: var(--color-midnight);
          color: var(--color-pearl);
          border: none;

          &:hover:not(:disabled) {
            opacity: 0.9;
            box-shadow: var(--shadow-md);
          }

          &:active:not(:disabled) {
            transform: scale(0.98);
          }

          &:focus-visible {
            outline: 2px solid var(--color-violet);
            outline-offset: 2px;
          }
        `;
      case 'secondary':
        return `
          background-color: transparent;
          color: var(--color-midnight);
          border: 1px solid var(--color-midnight);

          &:hover:not(:disabled) {
            background-color: var(--color-lavender);
          }

          &:active:not(:disabled) {
            transform: scale(0.98);
          }

          &:focus-visible {
            outline: 2px solid var(--color-violet);
            outline-offset: 2px;
          }
        `;
      case 'ghost':
        return `
          background-color: transparent;
          color: var(--color-midnight);
          border: none;

          &:hover:not(:disabled) {
            background-color: var(--color-lavender);
          }

          &:active:not(:disabled) {
            transform: scale(0.98);
          }

          &:focus-visible {
            outline: 2px solid var(--color-violet);
            outline-offset: 2px;
          }
        `;
      case 'destructive':
        return `
          background-color: var(--color-error);
          color: var(--color-pearl);
          border: none;

          &:hover:not(:disabled) {
            opacity: 0.9;
            box-shadow: var(--shadow-md);
          }

          &:active:not(:disabled) {
            transform: scale(0.98);
          }

          &:focus-visible {
            outline: 2px solid var(--color-violet);
            outline-offset: 2px;
          }
        `;
      default:
        return '';
    }
  }}

  /* Size Styles */
  ${props => {
    switch(props.size) {
      case 'small':
        return `
          padding: var(--space-2) var(--space-3);
          font-size: var(--text-body-small);
          height: 32px;
        `;
      case 'large':
        return `
          padding: var(--space-4) var(--space-5);
          font-size: var(--text-body);
          height: 48px;
        `;
      default: // medium
        return `
          padding: var(--space-3) var(--space-4);
          font-size: var(--text-body);
          height: 40px;
        `;
    }
  }}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
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

const Buttons = () => {
  const [clickCount, setClickCount] = useState(0);

  return (
    <PageContainer>
      <Helmet>
        <title>Buttons | Done.ai Brand Guidelines</title>
      </Helmet>

      <PageTitle>Buttons</PageTitle>

      {/* Interactive Examples */}
      <Section>
        <SectionTitle>Interactive Examples</SectionTitle>
        <SectionDescription>
          Click these buttons to see how they feel. Notice the hover, active, and focus states.
        </SectionDescription>

        <ButtonShowcase>
          <Button variant="primary" size="medium" onClick={() => setClickCount(clickCount + 1)}>
            Primary Button
          </Button>
          <Button variant="secondary" size="medium" onClick={() => setClickCount(clickCount + 1)}>
            Secondary Button
          </Button>
          <Button variant="ghost" size="medium" onClick={() => setClickCount(clickCount + 1)}>
            Ghost Button
          </Button>
          <Button variant="destructive" size="medium" onClick={() => setClickCount(clickCount + 1)}>
            Delete
          </Button>
        </ButtonShowcase>

        {clickCount > 0 && (
          <Callout type="success">
            Button clicked {clickCount} {clickCount === 1 ? 'time' : 'times'}!
          </Callout>
        )}
      </Section>

      {/* Sizes */}
      <Section>
        <SectionTitle>Sizes</SectionTitle>

        <ButtonShowcase>
          <Button variant="primary" size="small">Small</Button>
          <Button variant="primary" size="medium">Medium</Button>
          <Button variant="primary" size="large">Large</Button>
        </ButtonShowcase>

        <SpecTable>
          <thead>
            <tr>
              <TableHeader>Size</TableHeader>
              <TableHeader>Padding</TableHeader>
              <TableHeader>Font Size</TableHeader>
              <TableHeader>Height</TableHeader>
            </tr>
          </thead>
          <tbody>
            <tr>
              <TableCell>Small</TableCell>
              <TableCell>8px × 16px</TableCell>
              <TableCell>14px</TableCell>
              <TableCell>32px</TableCell>
            </tr>
            <tr>
              <TableCell>Medium</TableCell>
              <TableCell>12px × 20px</TableCell>
              <TableCell>16px</TableCell>
              <TableCell>40px</TableCell>
            </tr>
            <tr>
              <TableCell>Large</TableCell>
              <TableCell>16px × 24px</TableCell>
              <TableCell>16px</TableCell>
              <TableCell>48px</TableCell>
            </tr>
          </tbody>
        </SpecTable>
      </Section>

      {/* Variants */}
      <Section>
        <SectionTitle>Variants</SectionTitle>

        <SpecTable>
          <thead>
            <tr>
              <TableHeader>Variant</TableHeader>
              <TableHeader>Background</TableHeader>
              <TableHeader>Text</TableHeader>
              <TableHeader>Border</TableHeader>
              <TableHeader>Usage</TableHeader>
            </tr>
          </thead>
          <tbody>
            <tr>
              <TableCell>Primary</TableCell>
              <TableCell>Midnight Violet</TableCell>
              <TableCell>Pearl White</TableCell>
              <TableCell>None</TableCell>
              <TableCell>Main calls-to-action</TableCell>
            </tr>
            <tr>
              <TableCell>Secondary</TableCell>
              <TableCell>Transparent</TableCell>
              <TableCell>Midnight Violet</TableCell>
              <TableCell>1px Midnight</TableCell>
              <TableCell>Secondary actions</TableCell>
            </tr>
            <tr>
              <TableCell>Ghost</TableCell>
              <TableCell>Transparent</TableCell>
              <TableCell>Midnight Violet</TableCell>
              <TableCell>None</TableCell>
              <TableCell>Tertiary actions, navigation</TableCell>
            </tr>
            <tr>
              <TableCell>Destructive</TableCell>
              <TableCell>Error Red</TableCell>
              <TableCell>Pearl White</TableCell>
              <TableCell>None</TableCell>
              <TableCell>Delete, remove, destructive actions</TableCell>
            </tr>
          </tbody>
        </SpecTable>
      </Section>

      {/* States */}
      <Section>
        <SectionTitle>States</SectionTitle>

        <ButtonShowcase>
          <Button variant="primary" size="medium">Default</Button>
          <Button variant="primary" size="medium" disabled>Disabled</Button>
        </ButtonShowcase>

        <SpecTable>
          <thead>
            <tr>
              <TableHeader>State</TableHeader>
              <TableHeader>Visual Change</TableHeader>
            </tr>
          </thead>
          <tbody>
            <tr>
              <TableCell>Hover</TableCell>
              <TableCell>Opacity reduction or subtle shadow</TableCell>
            </tr>
            <tr>
              <TableCell>Active (pressed)</TableCell>
              <TableCell>Scale to 0.98</TableCell>
            </tr>
            <tr>
              <TableCell>Focus</TableCell>
              <TableCell>2px violet ring, 2px offset</TableCell>
            </tr>
            <tr>
              <TableCell>Disabled</TableCell>
              <TableCell>50% opacity, cursor not-allowed</TableCell>
            </tr>
          </tbody>
        </SpecTable>
      </Section>

      {/* Code Examples */}
      <Section>
        <SectionTitle>Implementation</SectionTitle>
        <SectionDescription>
          Example CSS for implementing button variants.
        </SectionDescription>

        <CodeBlock>{`/* Primary Button */
.btn-primary {
  background-color: var(--color-midnight);
  color: var(--color-pearl);
  padding: var(--space-3) var(--space-4);
  border-radius: var(--radius-md);
  border: none;
  font-size: var(--text-body);
  font-weight: 500;
  cursor: pointer;
  transition: all var(--duration-normal) var(--ease-default);
}

.btn-primary:hover {
  opacity: 0.9;
  box-shadow: var(--shadow-md);
}

.btn-primary:active {
  transform: scale(0.98);
}

.btn-primary:focus-visible {
  outline: 2px solid var(--color-violet);
  outline-offset: 2px;
}

.btn-primary:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}`}</CodeBlock>
      </Section>

      {/* Guidelines */}
      <Section>
        <SectionTitle>Usage Guidelines</SectionTitle>

        <Callout type="success" title="✓ Do">
          Use primary buttons for main actions. Limit to one primary button per view. Use secondary for alternative actions. Use ghost for navigation or low-priority actions.
        </Callout>

        <Callout type="error" title="✗ Don't">
          Don't use multiple primary buttons competing for attention. Don't use destructive buttons for non-destructive actions. Don't remove focus states for accessibility.
        </Callout>
      </Section>
    </PageContainer>
  );
};

export default Buttons;
