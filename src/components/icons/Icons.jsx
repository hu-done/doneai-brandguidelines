import React from "react";
import { Helmet } from "react-helmet-async";
import styled from "styled-components";
import * as S from "../commonStyles/index.js";
import Callout from "../shared/Callout";
import CodeBlock from "../shared/CodeBlock";
import {
  Home,
  Settings,
  User,
  Search,
  Menu,
  X,
  Check,
  ChevronRight,
  ChevronDown,
  ArrowRight,
  ArrowLeft,
  Plus,
  Minus,
  Edit,
  Trash2,
  Download,
  Upload,
  ExternalLink,
  Copy,
  Eye,
  EyeOff,
  AlertTriangle,
  AlertCircle,
  Info,
  CheckCircle,
  XCircle,
  Palette,
  Type,
  Component,
  Dna,
  MessageSquare,
  Zap,
  FileText,
} from "lucide-react";

const IconGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: var(--space-3);
  margin: var(--space-5) 0;
`;

const IconCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--space-4);
  background-color: var(--color-surface-secondary);
  border-radius: var(--radius-md);
  transition: all var(--duration-fast) var(--ease-default);

  &:hover {
    background-color: var(--color-lavender);
    transform: translateY(-2px);
  }
`;

const IconWrapper = styled.div`
  color: var(--color-text-primary);
  margin-bottom: var(--space-2);
`;

const IconName = styled.span`
  font-size: var(--text-caption);
  color: var(--color-text-secondary);
  text-align: center;
`;

const SizeDemo = styled.div`
  display: flex;
  align-items: flex-end;
  gap: var(--space-5);
  padding: var(--space-5);
  background-color: var(--color-surface-secondary);
  border-radius: var(--radius-lg);
  margin: var(--space-4) 0;
`;

const SizeItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-2);
`;

const SizeLabel = styled.span`
  font-size: var(--text-caption);
  color: var(--color-text-secondary);
`;

const StrokeDemo = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-6);
  padding: var(--space-5);
  background-color: var(--color-surface-secondary);
  border-radius: var(--radius-lg);
  margin: var(--space-4) 0;
`;

const StrokeItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-2);
`;

const StrokeLabel = styled.span`
  font-size: var(--text-caption);
  color: var(--color-text-secondary);
`;

const ColorDemo = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-5);
  padding: var(--space-5);
  background-color: var(--color-surface-secondary);
  border-radius: var(--radius-lg);
  margin: var(--space-4) 0;
`;

const ColorItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-2);
`;

const ColorLabel = styled.span`
  font-size: var(--text-caption);
  color: var(--color-text-secondary);
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
  background-color: var(--color-surface-secondary);
  border-bottom: 1px solid var(--color-border);
`;

const TableCell = styled.td`
  padding: var(--space-3) var(--space-4);
  color: var(--color-text-secondary);
  border-bottom: 1px solid var(--color-border);
  line-height: 1.6;
`;

const TitleWithIcon = styled.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
`;

const commonIcons = [
  { icon: Home, name: "Home" },
  { icon: Settings, name: "Settings" },
  { icon: User, name: "User" },
  { icon: Search, name: "Search" },
  { icon: Menu, name: "Menu" },
  { icon: X, name: "X" },
  { icon: Check, name: "Check" },
  { icon: ChevronRight, name: "ChevronRight" },
  { icon: ChevronDown, name: "ChevronDown" },
  { icon: ArrowRight, name: "ArrowRight" },
  { icon: ArrowLeft, name: "ArrowLeft" },
  { icon: Plus, name: "Plus" },
  { icon: Minus, name: "Minus" },
  { icon: Edit, name: "Edit" },
  { icon: Trash2, name: "Trash2" },
  { icon: Download, name: "Download" },
  { icon: Upload, name: "Upload" },
  { icon: ExternalLink, name: "ExternalLink" },
  { icon: Copy, name: "Copy" },
  { icon: Eye, name: "Eye" },
  { icon: EyeOff, name: "EyeOff" },
];

const statusIcons = [
  { icon: AlertTriangle, name: "AlertTriangle" },
  { icon: AlertCircle, name: "AlertCircle" },
  { icon: Info, name: "Info" },
  { icon: CheckCircle, name: "CheckCircle" },
  { icon: XCircle, name: "XCircle" },
];

const brandIcons = [
  { icon: Palette, name: "Palette" },
  { icon: Type, name: "Type" },
  { icon: Component, name: "Component" },
  { icon: Dna, name: "Dna" },
  { icon: MessageSquare, name: "MessageSquare" },
  { icon: Zap, name: "Zap" },
  { icon: FileText, name: "FileText" },
];

const Icons = () => {
  return (
    <div>
      <Helmet>
        <title>Icons | Done.ai Brand Guidelines</title>
      </Helmet>

      <S.Title>Icons</S.Title>

      <S.Bodytext>
        Done.ai uses Lucide Svelte for all iconography. Lucide provides a consistent,
        professional icon set with excellent accessibility and customization options.
      </S.Bodytext>

      <Callout type="info" title="Lucide Svelte">
        Lucide is the open-source icon library we use. Install it with:{" "}
        <code>npm install lucide-svelte</code>
      </Callout>

      <S.Subtitle>Brand Standard</S.Subtitle>
      <S.Bodytext>
        All icons in Done.ai products must use these consistent specifications:
      </S.Bodytext>

      <SpecTable>
        <thead>
          <tr>
            <TableHeader>Property</TableHeader>
            <TableHeader>Value</TableHeader>
            <TableHeader>Notes</TableHeader>
          </tr>
        </thead>
        <tbody>
          <tr>
            <TableCell>Stroke Width</TableCell>
            <TableCell><strong>1.5</strong></TableCell>
            <TableCell>Required for all icons. Creates balanced visual weight.</TableCell>
          </tr>
          <tr>
            <TableCell>Default Size</TableCell>
            <TableCell>20px</TableCell>
            <TableCell>Standard size for most UI elements.</TableCell>
          </tr>
          <tr>
            <TableCell>Small Size</TableCell>
            <TableCell>16px</TableCell>
            <TableCell>For inline text, buttons, compact UI.</TableCell>
          </tr>
          <tr>
            <TableCell>Large Size</TableCell>
            <TableCell>24px</TableCell>
            <TableCell>For prominent actions, headers.</TableCell>
          </tr>
          <tr>
            <TableCell>Primary Color</TableCell>
            <TableCell>var(--color-text-primary)</TableCell>
            <TableCell>Use Midnight in light mode.</TableCell>
          </tr>
          <tr>
            <TableCell>Accent Color</TableCell>
            <TableCell>var(--color-violet)</TableCell>
            <TableCell>Use sparingly for active/interactive states.</TableCell>
          </tr>
        </tbody>
      </SpecTable>

      <S.Subtitle>Stroke Width</S.Subtitle>
      <S.Bodytext>
        Always use <code>strokeWidth=&#123;1.5&#125;</code> for all icons. This is the Done.ai brand standard.
      </S.Bodytext>

      <StrokeDemo>
        <StrokeItem>
          <Settings size={24} strokeWidth={1} />
          <StrokeLabel>1.0 (Too thin)</StrokeLabel>
        </StrokeItem>
        <StrokeItem style={{ padding: "var(--space-2)", backgroundColor: "var(--color-lavender)", borderRadius: "var(--radius-md)" }}>
          <Settings size={24} strokeWidth={1.5} />
          <StrokeLabel><strong>1.5 (Brand standard)</strong></StrokeLabel>
        </StrokeItem>
        <StrokeItem>
          <Settings size={24} strokeWidth={2} />
          <StrokeLabel>2.0 (Too heavy)</StrokeLabel>
        </StrokeItem>
        <StrokeItem>
          <Settings size={24} strokeWidth={2.5} />
          <StrokeLabel>2.5 (Too heavy)</StrokeLabel>
        </StrokeItem>
      </StrokeDemo>

      <S.Subtitle>Size Scale</S.Subtitle>
      <S.Bodytext>
        Use appropriate sizes based on context. The standard size is 20px for most UI elements.
      </S.Bodytext>

      <SizeDemo>
        <SizeItem>
          <Search size={12} strokeWidth={1.5} />
          <SizeLabel>12px</SizeLabel>
        </SizeItem>
        <SizeItem>
          <Search size={16} strokeWidth={1.5} />
          <SizeLabel>16px (Small)</SizeLabel>
        </SizeItem>
        <SizeItem>
          <Search size={20} strokeWidth={1.5} />
          <SizeLabel>20px (Default)</SizeLabel>
        </SizeItem>
        <SizeItem>
          <Search size={24} strokeWidth={1.5} />
          <SizeLabel>24px (Large)</SizeLabel>
        </SizeItem>
        <SizeItem>
          <Search size={32} strokeWidth={1.5} />
          <SizeLabel>32px</SizeLabel>
        </SizeItem>
      </SizeDemo>

      <S.Subtitle>Color Usage</S.Subtitle>
      <S.Bodytext>
        Icons should use semantic colors that provide meaning and maintain contrast.
      </S.Bodytext>

      <ColorDemo>
        <ColorItem>
          <Settings size={24} strokeWidth={1.5} color="var(--color-midnight)" />
          <ColorLabel>Primary (Midnight)</ColorLabel>
        </ColorItem>
        <ColorItem>
          <Settings size={24} strokeWidth={1.5} color="var(--color-violet)" />
          <ColorLabel>Accent (Violet)</ColorLabel>
        </ColorItem>
        <ColorItem>
          <CheckCircle size={24} strokeWidth={1.5} color="var(--color-success)" />
          <ColorLabel>Success</ColorLabel>
        </ColorItem>
        <ColorItem>
          <AlertTriangle size={24} strokeWidth={1.5} color="var(--color-warning)" />
          <ColorLabel>Warning</ColorLabel>
        </ColorItem>
        <ColorItem>
          <XCircle size={24} strokeWidth={1.5} color="var(--color-error)" />
          <ColorLabel>Error</ColorLabel>
        </ColorItem>
      </ColorDemo>

      <S.Subtitle>Implementation in SvelteKit</S.Subtitle>
      <S.Bodytext>
        Done.ai products use SvelteKit. Here's how to implement Lucide icons in Svelte 5 with the brand standard.
      </S.Bodytext>

      <S.Bodytext style={{ fontWeight: 500, marginTop: "var(--space-5)" }}>Installation</S.Bodytext>
      <CodeBlock language="bash" title="Install Lucide for Svelte">
{`npm install lucide-svelte`}
      </CodeBlock>

      <S.Bodytext style={{ fontWeight: 500, marginTop: "var(--space-5)" }}>Basic Usage</S.Bodytext>
      <CodeBlock language="svelte" title="Standard icon usage in Svelte">
{`<script>
  import { Settings, Search, Check } from 'lucide-svelte';
</script>

<!-- Standard usage - always use strokeWidth={1.5} -->
<Settings size={20} strokeWidth={1.5} />

<!-- With color -->
<Check
  size={16}
  strokeWidth={1.5}
  color="var(--color-success)"
/>

<!-- In a button -->
<button class="btn-primary">
  <Download size={16} strokeWidth={1.5} />
  Download
</button>`}
      </CodeBlock>

      <S.Bodytext style={{ fontWeight: 500, marginTop: "var(--space-5)" }}>Icon Button Component</S.Bodytext>
      <S.Bodytext>
        Create a reusable icon button component following Done.ai design standards.
      </S.Bodytext>
      <CodeBlock language="svelte" title="IconButton.svelte">
{`<script>
  let {
    icon,
    label,
    variant = 'ghost',
    size = 20
  } = $props();
</script>

<button
  class="icon-btn icon-btn-{variant}"
  aria-label={label}
>
  <svelte:component
    this={icon}
    {size}
    strokeWidth={1.5}
  />
</button>

<style lang="scss">
  @use '../styles/variables' as *;

  .icon-btn {
    width: 40px;
    height: 40px;
    border-radius: $radius-md;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all $duration-fast $ease-default;

    &:focus {
      outline: none;
      box-shadow: 0 0 0 2px $royal-violet;
    }
  }

  .icon-btn-ghost {
    background: transparent;
    color: var(--color-text-primary);

    &:hover {
      background: var(--color-surface-secondary);
    }
  }

  .icon-btn-filled {
    background: $midnight-violet;
    color: $pearl-white;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 10px -4px rgba(106, 0, 213, 0.5);
    }
  }
</style>`}
      </CodeBlock>

      <S.Bodytext style={{ fontWeight: 500, marginTop: "var(--space-5)" }}>Using the Icon Button</S.Bodytext>
      <CodeBlock language="svelte" title="Page or component using IconButton">
{`<script>
  import IconButton from '$lib/components/IconButton.svelte';
  import { Settings, Menu, X } from 'lucide-svelte';
</script>

<IconButton icon={Settings} label="Settings" />
<IconButton icon={Menu} label="Menu" variant="filled" />`}
      </CodeBlock>

      <S.Bodytext style={{ fontWeight: 500, marginTop: "var(--space-5)" }}>Dynamic Icons</S.Bodytext>
      <S.Bodytext>
        For dynamic icon selection based on a string name.
      </S.Bodytext>
      <CodeBlock language="svelte" title="Dynamic icon component">
{`<script>
  import * as icons from 'lucide-svelte';

  let { iconName = 'Settings' } = $props();
  let IconComponent = $derived(icons[iconName]);
</script>

{#if IconComponent}
  <svelte:component
    this={IconComponent}
    size={20}
    strokeWidth={1.5}
  />
{/if}`}
      </CodeBlock>

      <S.Subtitle>Common Icons</S.Subtitle>
      <S.Bodytext>
        Frequently used icons for navigation, actions, and UI elements.
      </S.Bodytext>

      <IconGrid>
        {commonIcons.map(({ icon: Icon, name }) => (
          <IconCard key={name}>
            <IconWrapper>
              <Icon size={24} strokeWidth={1.5} />
            </IconWrapper>
            <IconName>{name}</IconName>
          </IconCard>
        ))}
      </IconGrid>

      <S.Subtitle>Status Icons</S.Subtitle>
      <S.Bodytext>
        Icons for communicating system status, alerts, and feedback.
      </S.Bodytext>

      <IconGrid>
        {statusIcons.map(({ icon: Icon, name }) => (
          <IconCard key={name}>
            <IconWrapper>
              <Icon size={24} strokeWidth={1.5} />
            </IconWrapper>
            <IconName>{name}</IconName>
          </IconCard>
        ))}
      </IconGrid>

      <S.Subtitle>Brand Icons</S.Subtitle>
      <S.Bodytext>
        Icons used throughout the Done.ai brand guidelines and product.
      </S.Bodytext>

      <IconGrid>
        {brandIcons.map(({ icon: Icon, name }) => (
          <IconCard key={name}>
            <IconWrapper>
              <Icon size={24} strokeWidth={1.5} />
            </IconWrapper>
            <IconName>{name}</IconName>
          </IconCard>
        ))}
      </IconGrid>

      <S.Subtitle>Guidelines</S.Subtitle>

      <Callout type="success" title={<TitleWithIcon><Check size={16} strokeWidth={1.5} /> Do</TitleWithIcon>}>
        Use strokeWidth 1.5 for all icons. Match icon color to text color for consistency.
        Use semantic colors (success, warning, error) for status indicators.
        Maintain adequate spacing around icons.
      </Callout>

      <Callout type="error" title={<TitleWithIcon><X size={16} strokeWidth={1.5} /> Don't</TitleWithIcon>}>
        Don't use multiple stroke widths in the same interface. Don't use icons as decorative
        elements without purpose. Don't use Royal Violet for all icons - reserve it for
        interactive/active states only.
      </Callout>

      <S.Subtitle>Resources</S.Subtitle>
      <S.Bodytext>
        Browse the complete Lucide icon library at{" "}
        <a href="https://lucide.dev/icons" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-accent)" }}>
          lucide.dev/icons
        </a>
      </S.Bodytext>
    </div>
  );
};

export default Icons;
