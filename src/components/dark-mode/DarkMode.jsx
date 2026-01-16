import React from "react";
import { Helmet } from "react-helmet-async";
import styled from "styled-components";
import { Palette } from "lucide-react";
import * as S from "../commonStyles/index.js";
import Callout from "../shared/Callout";
import CodeBlock from "../shared/CodeBlock";

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
  background-color: var(--color-surface-secondary);
  border-bottom: 1px solid var(--color-border);
`;

const TableCell = styled.td`
  padding: var(--space-3) var(--space-4);
  color: var(--color-text-secondary);
  border-bottom: 1px solid var(--color-border);
  font-family: 'Courier New', monospace;
`;

const ComparisonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space-6);
  margin: var(--space-6) 0;
`;

const ModeExample = styled.div`
  border-radius: var(--radius-lg);
  overflow: hidden;
  border: 1px solid var(--color-border);
`;

const ModeLabel = styled.div`
  padding: var(--space-3);
  font-weight: 500;
  text-align: center;
  background-color: var(--color-surface-secondary);
  color: var(--color-text-primary);
  font-size: var(--text-body-small);
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const ModeContent = styled.div`
  background-color: ${props => props.$isDark ? '#1A1A1A' : '#F0F0F0'};
  padding: var(--space-5);
  min-height: 300px;
`;

const ModeCard = styled.div`
  background-color: ${props => props.$isDark ? '#1a1435' : '#FBFBFB'};
  color: ${props => props.$isDark ? '#FBFBFB' : '#0B0425'};
  border-radius: 44px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  min-height: 220px;
  margin-bottom: var(--space-4);
  transition: transform var(--duration-normal) var(--ease-default);
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
  }
`;

const ModeCardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`;

const StatusBadge = styled.span`
  background-color: ${props => props.$isDark ? 'rgba(251, 183, 68, 0.4)' : '#C6F6D5'};
  color: ${props => props.$isDark ? '#FBB744' : '#0B0425'};
  font-size: 0.75rem;
  font-weight: 500;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
`;

const CardIcon = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.875rem;
`;

const ModeTitle = styled.h3`
  color: ${props => props.$isDark ? '#FBFBFB' : '#0B0425'};
  font-size: 1.875rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
`;

const ModeText = styled.p`
  color: ${props => props.$isDark ? 'rgba(251, 251, 251, 0.7)' : '#6B6B6B'};
  font-size: 0.875rem;
  line-height: 1.5;
  margin-bottom: 2rem;
  flex-grow: 1;
`;

const ModeButton = styled.button`
  width: 100%;
  text-align: center;
  padding: 1rem;
  border-radius: 100px;
  font-weight: 500;
  background-color: ${props => props.$isDark ? '#FBFBFB' : '#0B0425'};
  color: ${props => props.$isDark ? '#0B0425' : '#FBFBFB'};
  border: none;
  cursor: pointer;
  transition: all var(--duration-normal) var(--ease-default);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 10px -4px rgba(106, 0, 213, 0.5);
  }
`;

const DarkMode = () => {
  return (
    <div>
      <Helmet>
        <title>Dark Mode | Done.ai Brand Guidelines</title>
      </Helmet>

      <S.Title>Dark Mode</S.Title>

      <S.Subtitle>Overview</S.Subtitle>
      <S.Bodytext>
        Dark mode uses warm, neutral grays instead of pure black or cold grays. The inverse relationship between light and dark mode should feel intentional, not simply swapped. This approach reduces eye strain during extended use.
      </S.Bodytext>

      <S.Subtitle>Visual Comparison</S.Subtitle>
      <S.Bodytext>
        See how the same interface looks in light mode versus dark mode. Notice the warm grays, adjusted shadows, and slightly brighter accent color in dark mode.
      </S.Bodytext>

      <ComparisonGrid>
        <ModeExample>
          <ModeLabel>Light Mode</ModeLabel>
          <ModeContent $isDark={false}>
            <ModeCard $isDark={false}>
              <ModeCardHeader>
                <StatusBadge $isDark={false}>Active</StatusBadge>
                <CardIcon><Palette size={30} strokeWidth={1.5} /></CardIcon>
              </ModeCardHeader>
              <ModeTitle $isDark={false}>Colors</ModeTitle>
              <ModeText $isDark={false}>
                Our visual identity palette with usage rules and color specifications.
              </ModeText>
              <ModeButton $isDark={false}>Explore</ModeButton>
            </ModeCard>
            <S.Bodytext>
              Light mode uses #FBFBFB (Pearl White) for backgrounds and #0B0425 (Midnight Violet) for primary text. High contrast ensures excellent readability.
            </S.Bodytext>
          </ModeContent>
        </ModeExample>

        <ModeExample>
          <ModeLabel>Dark Mode</ModeLabel>
          <ModeContent $isDark={true}>
            <ModeCard $isDark={true}>
              <ModeCardHeader>
                <StatusBadge $isDark={true}>Available</StatusBadge>
                <CardIcon><Palette size={30} strokeWidth={1.5} /></CardIcon>
              </ModeCardHeader>
              <ModeTitle $isDark={true}>Colors</ModeTitle>
              <ModeText $isDark={true}>
                Our visual identity palette with usage rules and color specifications.
              </ModeText>
              <ModeButton $isDark={true}>Explore</ModeButton>
            </ModeCard>
            <S.Bodytext style={{ color: '#A0A0A0' }}>
              Dark mode uses #1A1A1A (warm gray) for backgrounds and #EBEBEB for primary text. The warm tone reduces eye strain during extended use.
            </S.Bodytext>
          </ModeContent>
        </ModeExample>
      </ComparisonGrid>

      <S.Subtitle>Dark Mode Palette</S.Subtitle>

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

      <S.Subtitle>Key Implementation Notes</S.Subtitle>

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

      <S.Subtitle>Implementation in Svelte 5 / SvelteKit</S.Subtitle>
      <S.Bodytext>
        Below are complete, production-ready examples for implementing dark mode in Svelte 5 and SvelteKit.
      </S.Bodytext>

      <S.Subtitle>1. CSS Custom Properties</S.Subtitle>
      <S.Bodytext>
        Define your base tokens in app.css. The .dark class on :root activates dark mode.
      </S.Bodytext>

      <CodeBlock language="css" title="app.css - Base tokens">
{`:root {
  /* Light Mode (default) */
  --color-surface-primary: #FBFBFB;
  --color-surface-secondary: #F0F0F0;
  --color-surface-elevated: #FFFFFF;
  --color-text-primary: #0B0425;
  --color-text-secondary: rgba(11, 4, 37, 0.7);
  --color-border: #E0E0E0;
  --color-accent: #6A00D5;
}

/* Dark Mode - activated by .dark class on :root */
:root.dark {
  --color-surface-primary: #0B0425;
  --color-surface-secondary: #1A1435;
  --color-surface-elevated: #251A40;
  --color-text-primary: #FBFBFB;
  --color-text-secondary: rgba(251, 251, 251, 0.7);
  --color-border: #3A2A5A;
  --color-accent: #8B5CF6;
}`}
      </CodeBlock>

      <S.Subtitle>2. SvelteKit Dark Mode Store</S.Subtitle>
      <S.Bodytext>
        Create a reactive store using Svelte 5's new $state runes. This store checks localStorage first, then system preferences.
      </S.Bodytext>

      <CodeBlock language="typescript" title="lib/stores/theme.svelte.ts">
{`import { browser } from '$app/environment';

function createThemeStore() {
  let isDark = $state(false);

  if (browser) {
    // Check localStorage first, then system preference
    const stored = localStorage.getItem('theme');
    isDark = stored
      ? stored === 'dark'
      : window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  function toggle() {
    isDark = !isDark;
    if (browser) {
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      document.documentElement.classList.toggle('dark', isDark);
    }
  }

  function set(dark: boolean) {
    isDark = dark;
    if (browser) {
      localStorage.setItem('theme', dark ? 'dark' : 'light');
      document.documentElement.classList.toggle('dark', dark);
    }
  }

  return {
    get isDark() { return isDark; },
    toggle,
    set
  };
}

export const theme = createThemeStore();`}
      </CodeBlock>

      <S.Subtitle>3. Theme Toggle Component</S.Subtitle>
      <S.Bodytext>
        A simple button component that toggles between light and dark mode with icons.
      </S.Bodytext>

      <CodeBlock language="svelte" title="ThemeToggle.svelte">
{`<script>
  import { theme } from '$lib/stores/theme.svelte';
  import { Sun, Moon } from 'lucide-svelte';
</script>

<button
  onclick={() => theme.toggle()}
  class="theme-toggle"
  aria-label={theme.isDark ? 'Switch to light mode' : 'Switch to dark mode'}
>
  {#if theme.isDark}
    <Sun size={20} strokeWidth={1.5} />
  {:else}
    <Moon size={20} strokeWidth={1.5} />
  {/if}
</button>

<style lang="scss">
  @use '../styles/variables' as *;

  .theme-toggle {
    width: 40px;
    height: 40px;
    border-radius: $radius-md;
    border: none;
    background: var(--color-surface-secondary);
    color: var(--color-text-primary);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all $duration-fast $ease-default;

    &:hover {
      background: var(--color-surface-elevated);
    }
  }
</style>`}
      </CodeBlock>

      <S.Subtitle>4. Initialize on App Load</S.Subtitle>
      <S.Bodytext>
        Apply the theme class to the document root when your app loads. This goes in your root layout.
      </S.Bodytext>

      <CodeBlock language="svelte" title="routes/+layout.svelte">
{`<script>
  import { browser } from '$app/environment';
  import { theme } from '$lib/stores/theme.svelte';
  import '../app.css';

  // Apply theme on initial load
  $effect(() => {
    if (browser) {
      document.documentElement.classList.toggle('dark', theme.isDark);
    }
  });
</script>

<slot />`}
      </CodeBlock>

      <S.Subtitle>5. Using in Components</S.Subtitle>
      <S.Bodytext>
        Components automatically adapt to dark mode by using the CSS custom properties. No manual theme checking needed.
      </S.Bodytext>

      <CodeBlock language="svelte" title="Example Component">
{`<div class="my-component">
  Content that adapts to dark mode via CSS variables
</div>

<style>
  .my-component {
    /* These automatically change with :root.dark */
    background: var(--color-surface-primary);
    color: var(--color-text-primary);
    border: 1px solid var(--color-border);
  }
</style>`}
      </CodeBlock>

    </div>
  );
};

export default DarkMode;
