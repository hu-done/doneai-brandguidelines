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

const Principle = styled.div`
  padding: var(--space-6);
  border-radius: var(--radius-lg);
  background-color: var(--color-midnight);
  color: var(--color-pearl);
  font-size: var(--text-h2);
  font-weight: 500;
  text-align: center;
  margin: var(--space-6) 0;
`;

const ShadowScale = styled.div`
  display: grid;
  gap: var(--space-6);
  margin: var(--space-5) 0;
`;

const ShadowItem = styled.div`
  background-color: var(--color-surface-secondary);
  padding: var(--space-5);
  border-radius: var(--radius-lg);
`;

const ShadowVisual = styled.div`
  width: 100%;
  height: 120px;
  background-color: var(--color-surface-elevated);
  border-radius: var(--radius-md);
  box-shadow: ${props => props.shadow};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--text-body-small);
  color: var(--color-text-secondary);
  margin-bottom: var(--space-4);
`;

const ShadowInfo = styled.div`
  display: grid;
  gap: var(--space-2);
`;

const ShadowName = styled.div`
  font-size: var(--text-h3);
  font-weight: 500;
  color: var(--color-text-primary);
`;

const ShadowValue = styled.div`
  font-size: var(--text-body-small);
  color: var(--color-text-secondary);
  font-family: 'Courier New', monospace;
  background-color: var(--color-surface-elevated);
  padding: var(--space-2);
  border-radius: var(--radius-sm);
`;

const ShadowUsage = styled.div`
  font-size: var(--text-body-small);
  color: var(--color-text-secondary);
  line-height: 1.6;
`;

const ElevationDemo = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--space-6);
  margin: var(--space-6) 0;
  padding: var(--space-8);
  background: linear-gradient(135deg, var(--color-surface-secondary) 0%, var(--color-platinum) 100%);
  border-radius: var(--radius-lg);
`;

const ElevationCard = styled.div`
  padding: var(--space-5);
  background-color: var(--color-surface-elevated);
  border-radius: var(--radius-lg);
  box-shadow: ${props => props.shadow};
  transition: all var(--duration-normal) var(--ease-default);
  text-align: center;

  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
  }
`;

const ElevationLabel = styled.div`
  font-size: var(--text-body-small);
  font-weight: 500;
  color: var(--color-text-primary);
  margin-bottom: var(--space-2);
`;

const ElevationLevel = styled.div`
  font-size: var(--text-caption);
  color: var(--color-text-secondary);
`;

const ZIndexTable = styled.table`
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

const Elevation = () => {
  return (
    <PageContainer>
      <Helmet>
        <title>Elevation & Shadows | Done.ai Brand Guidelines</title>
      </Helmet>

      <PageTitle>Elevation & Shadows</PageTitle>

      {/* Principle */}
      <Section>
        <SectionTitle>The Principle</SectionTitle>

        <Principle>
          Levitation, not borders
        </Principle>

        <SectionDescription>
          Elements separate through subtle shadow, not hard lines. Shadows create hierarchy and depth without visual clutter. They're whisper-quiet - noticed subconsciously, not consciously.
        </SectionDescription>

        <Callout type="info" title="Why Shadows?">
          Borders add visual weight and can make interfaces feel cramped. Shadows create separation while keeping the design light and breathable. They signal interactivity (hover states) and importance (modals) without adding noise.
        </Callout>
      </Section>

      {/* Shadow Scale */}
      <Section>
        <SectionTitle>Shadow Scale</SectionTitle>

        <ShadowScale>
          <ShadowItem>
            <ShadowVisual shadow="var(--shadow-sm)">
              Hover to see shadow
            </ShadowVisual>
            <ShadowInfo>
              <ShadowName>Small</ShadowName>
              <ShadowValue>0 1px 2px rgba(11,4,37,0.05)</ShadowValue>
              <ShadowValue>--shadow-sm</ShadowValue>
              <ShadowUsage>Subtle lift, hover states on flat elements, card resting state</ShadowUsage>
            </ShadowInfo>
          </ShadowItem>

          <ShadowItem>
            <ShadowVisual shadow="var(--shadow-md)">
              Hover to see shadow
            </ShadowVisual>
            <ShadowInfo>
              <ShadowName>Medium</ShadowName>
              <ShadowValue>0 4px 12px rgba(11,4,37,0.08)</ShadowValue>
              <ShadowValue>--shadow-md</ShadowValue>
              <ShadowUsage>Cards, dropdowns, popovers, elevated panels</ShadowUsage>
            </ShadowInfo>
          </ShadowItem>

          <ShadowItem>
            <ShadowVisual shadow="var(--shadow-lg)">
              Hover to see shadow
            </ShadowVisual>
            <ShadowInfo>
              <ShadowName>Large</ShadowName>
              <ShadowValue>0 8px 24px rgba(11,4,37,0.12)</ShadowValue>
              <ShadowValue>--shadow-lg</ShadowValue>
              <ShadowUsage>Modals, drawers, sticky elements, important overlays</ShadowUsage>
            </ShadowInfo>
          </ShadowItem>

          <ShadowItem>
            <ShadowVisual shadow="var(--shadow-xl)">
              Hover to see shadow
            </ShadowVisual>
            <ShadowInfo>
              <ShadowName>Extra Large</ShadowName>
              <ShadowValue>0 16px 48px rgba(11,4,37,0.16)</ShadowValue>
              <ShadowValue>--shadow-xl</ShadowValue>
              <ShadowUsage>Critical overlays, tooltips, top-level modals</ShadowUsage>
            </ShadowInfo>
          </ShadowItem>
        </ShadowScale>
      </Section>

      {/* Interactive Demo */}
      <Section>
        <SectionTitle>Elevation Levels</SectionTitle>
        <SectionDescription>
          Hover these cards to see how shadows create hierarchy. Elements closer to the user have stronger shadows.
        </SectionDescription>

        <ElevationDemo>
          <ElevationCard shadow="var(--shadow-sm)">
            <ElevationLabel>Level 1</ElevationLabel>
            <ElevationLevel>Resting</ElevationLevel>
          </ElevationCard>

          <ElevationCard shadow="var(--shadow-md)">
            <ElevationLabel>Level 2</ElevationLabel>
            <ElevationLevel>Elevated</ElevationLevel>
          </ElevationCard>

          <ElevationCard shadow="var(--shadow-lg)">
            <ElevationLabel>Level 3</ElevationLabel>
            <ElevationLevel>Floating</ElevationLevel>
          </ElevationCard>

          <ElevationCard shadow="var(--shadow-xl)">
            <ElevationLabel>Level 4</ElevationLabel>
            <ElevationLevel>Critical</ElevationLevel>
          </ElevationCard>
        </ElevationDemo>
      </Section>

      {/* Z-Index Guidelines */}
      <Section>
        <SectionTitle>Z-Index Guidelines</SectionTitle>
        <SectionDescription>
          Use consistent z-index values to manage stacking order. Higher shadows typically need higher z-index.
        </SectionDescription>

        <ZIndexTable>
          <thead>
            <tr>
              <TableHeader>Level</TableHeader>
              <TableHeader>Z-Index</TableHeader>
              <TableHeader>Shadow</TableHeader>
              <TableHeader>Usage</TableHeader>
            </tr>
          </thead>
          <tbody>
            <tr>
              <TableCell>Base</TableCell>
              <TableCell>0</TableCell>
              <TableCell>None</TableCell>
              <TableCell>Default page content, text, images</TableCell>
            </tr>
            <tr>
              <TableCell>Elevated</TableCell>
              <TableCell>10</TableCell>
              <TableCell>--shadow-sm</TableCell>
              <TableCell>Cards, panels, hover states</TableCell>
            </tr>
            <tr>
              <TableCell>Floating</TableCell>
              <TableCell>100</TableCell>
              <TableCell>--shadow-md</TableCell>
              <TableCell>Dropdowns, popovers, sticky headers</TableCell>
            </tr>
            <tr>
              <TableCell>Overlay</TableCell>
              <TableCell>1000</TableCell>
              <TableCell>--shadow-lg</TableCell>
              <TableCell>Modals, drawers, overlays</TableCell>
            </tr>
            <tr>
              <TableCell>Critical</TableCell>
              <TableCell>10000</TableCell>
              <TableCell>--shadow-xl</TableCell>
              <TableCell>Tooltips, critical alerts, top-level dialogs</TableCell>
            </tr>
          </tbody>
        </ZIndexTable>
      </Section>

      {/* Dark Mode Note */}
      <Section>
        <SectionTitle>Dark Mode Adjustments</SectionTitle>

        <Callout type="warning" title="Important">
          Shadows need higher opacity in dark mode. Light shadows disappear on dark backgrounds. Our dark mode CSS increases shadow opacity from 0.05-0.16 to 0.3-0.6.
        </Callout>

        <SectionDescription>
          Light mode: <code>rgba(11,4,37,0.08)</code> (Midnight Violet base)<br/>
          Dark mode: <code>rgba(0,0,0,0.4)</code> (Pure black, higher opacity)
        </SectionDescription>
      </Section>

      {/* Usage Guidelines */}
      <Section>
        <SectionTitle>Usage Guidelines</SectionTitle>

        <Callout type="success" title="✓ Do">
          Use shadows to separate elements spatially. Match shadow size to element importance. Use subtle shadows for most elements. Reserve large shadows for critical overlays. Increase opacity in dark mode.
        </Callout>

        <Callout type="error" title="✗ Don't">
          Don't use borders AND shadows - pick one. Don't use heavy shadows on everything. Don't use the same shadow for all elements. Don't forget to test in dark mode. Don't use shadows on text.
        </Callout>
      </Section>

      {/* Quick Reference */}
      <Section>
        <SectionTitle>Quick Reference</SectionTitle>

        <Callout type="info">
          <strong>Cards (resting):</strong> --shadow-sm<br/>
          <strong>Cards (hover):</strong> --shadow-md<br/>
          <strong>Dropdowns:</strong> --shadow-md<br/>
          <strong>Modals:</strong> --shadow-lg<br/>
          <strong>Tooltips:</strong> --shadow-xl<br/>
          <strong>No shadow:</strong> Page backgrounds, text, flat UI
        </Callout>
      </Section>
    </PageContainer>
  );
};

export default Elevation;
