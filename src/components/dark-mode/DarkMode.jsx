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

const PaletteTable = styled.table`
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
  font-family: 'Courier New', monospace;
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

const PhilosophyBox = styled.div`
  padding: var(--space-6);
  border-radius: var(--radius-lg);
  background: linear-gradient(135deg, #1A1A1A 0%, #2A2A2A 100%);
  color: #EBEBEB;
  font-size: var(--text-h3);
  font-weight: 500;
  text-align: center;
  margin: var(--space-6) 0;
  box-shadow: var(--shadow-lg);
`;

const DarkMode = () => {
  return (
    <PageContainer>
      <Helmet>
        <title>Dark Mode | Done.ai Brand Guidelines</title>
      </Helmet>

      <PageTitle>Dark Mode</PageTitle>

      {/* Philosophy */}
      <Section>
        <SectionTitle>Philosophy</SectionTitle>

        <PhilosophyBox>
          Dark mode is "Command Mode" - where users go to work.
        </PhilosophyBox>

        <SectionDescription>
          The inverse relationship between light and dark mode should feel intentional, not simply swapped. We're inspired by Claude and Notion: warm/neutral grays, not pure black or cold grays. Dark mode is easier on the eyes during extended work sessions.
        </SectionDescription>
      </Section>

      {/* Full Palette */}
      <Section>
        <SectionTitle>Dark Mode Palette</SectionTitle>

        <PaletteTable>
          <thead>
            <tr>
              <TableHeader>Element</TableHeader>
              <TableHeader>Light Mode</TableHeader>
              <TableHeader>Dark Mode</TableHeader>
              <TableHeader>CSS Variable</TableHeader>
            </tr>
          </thead>
          <tbody>
            <tr>
              <TableCell>Background</TableCell>
              <TableCell>#FBFBFB</TableCell>
              <TableCell>#1A1A1A</TableCell>
              <TableCell>--color-surface-primary</TableCell>
            </tr>
            <tr>
              <TableCell>Surface/Cards</TableCell>
              <TableCell>#F0F0F0</TableCell>
              <TableCell>#2A2A2A</TableCell>
              <TableCell>--color-surface-secondary</TableCell>
            </tr>
            <tr>
              <TableCell>Elevated Surface</TableCell>
              <TableCell>#FFFFFF</TableCell>
              <TableCell>#333333</TableCell>
              <TableCell>--color-surface-elevated</TableCell>
            </tr>
            <tr>
              <TableCell>Borders</TableCell>
              <TableCell>#E0E0E0</TableCell>
              <TableCell>#3A3A3A</TableCell>
              <TableCell>--color-border</TableCell>
            </tr>
            <tr>
              <TableCell>Text Primary</TableCell>
              <TableCell>#0B0425</TableCell>
              <TableCell>#EBEBEB</TableCell>
              <TableCell>--color-text-primary</TableCell>
            </tr>
            <tr>
              <TableCell>Text Secondary</TableCell>
              <TableCell>#6B6B6B</TableCell>
              <TableCell>#A0A0A0</TableCell>
              <TableCell>--color-text-secondary</TableCell>
            </tr>
            <tr>
              <TableCell>Accent</TableCell>
              <TableCell>#6A00D5</TableCell>
              <TableCell>#8B5CF6</TableCell>
              <TableCell>--color-accent</TableCell>
            </tr>
          </tbody>
        </PaletteTable>
      </Section>

      {/* Key Notes */}
      <Section>
        <SectionTitle>Key Implementation Notes</SectionTitle>

        <Callout type="info" title="Background Color">
          Background (#1A1A1A) is warm, not pure black (#000000). Pure black creates too much contrast and can cause eye strain. The warm tone is more comfortable for extended use.
        </Callout>

        <Callout type="info" title="Accent Shift">
          The accent color shifts lighter (#8B5CF6) for better contrast on dark backgrounds. The darker Royal Violet (#6A00D5) doesn't have enough contrast in dark mode.
        </Callout>

        <Callout type="info" title="Shadow Opacity">
          Shadows need higher opacity in dark mode. Light shadows disappear on dark backgrounds, so we increase the opacity from rgba(11,4,37,0.08) to rgba(0,0,0,0.4).
        </Callout>

        <Callout type="info" title="Surface Hierarchy">
          Create depth through layered surfaces: Background (#1A1A1A) → Cards (#2A2A2A) → Elevated (#333333) for hover/focus states.
        </Callout>
      </Section>

      {/* Implementation */}
      <Section>
        <SectionTitle>CSS Implementation</SectionTitle>
        <SectionDescription>
          Use CSS custom properties with media queries or a class-based toggle.
        </SectionDescription>

        <CodeBlock>{`/* Media Query Approach */
@media (prefers-color-scheme: dark) {
  :root {
    --color-surface-primary: #1A1A1A;
    --color-surface-secondary: #2A2A2A;
    --color-surface-elevated: #333333;
    --color-border: #3A3A3A;
    --color-text-primary: #EBEBEB;
    --color-text-secondary: #A0A0A0;
    --color-accent: #8B5CF6;

    /* Shadows need adjustment */
    --shadow-sm: 0 1px 2px rgba(0,0,0,0.3);
    --shadow-md: 0 4px 12px rgba(0,0,0,0.4);
    --shadow-lg: 0 8px 24px rgba(0,0,0,0.5);
    --shadow-xl: 0 16px 48px rgba(0,0,0,0.6);
  }
}

/* Class-based Toggle */
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
}`}</CodeBlock>
      </Section>

      {/* Design Reference */}
      <Section>
        <SectionTitle>Design Reference</SectionTitle>
        <SectionDescription>
          Our dark mode implementation is inspired by industry leaders who prioritize readability and reduced eye strain:
        </SectionDescription>

        <Callout type="success" title="Inspired By">
          <strong>Claude:</strong> Warm grays, subtle surface hierarchy, high contrast text<br/><br/>
          <strong>Notion:</strong> Comfortable background tones, clear elevation system, excellent readability
        </Callout>

        <Callout type="error" title="Not Like">
          <strong>Avoid:</strong> Pure black backgrounds (#000), cold blue-gray tones, low contrast text, flat surfaces with no hierarchy
        </Callout>
      </Section>
    </PageContainer>
  );
};

export default DarkMode;
