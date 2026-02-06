import React from "react";
import { Helmet } from "react-helmet-async";
import styled from "styled-components";
import { Palette, FileText, Zap, MessageCircle } from "lucide-react";
import Callout from "../shared/Callout";
import CodeBlock from "../shared/CodeBlock";

const PageContainer = styled.div`
  /* No max-width - use full available space */
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
  background-color: var(--color-card-bg);
  color: var(--color-text-primary);
  border-radius: var(--radius-card);
  padding: var(--space-5);
  display: flex;
  flex-direction: column;
  min-height: 280px;
  transition: all var(--duration-normal) var(--ease-default);
  box-shadow: var(--shadow-md);

  ${props => props.interactive && `
    cursor: pointer;

    &:hover {
      transform: translateY(-4px);
      box-shadow: var(--shadow-lg);
    }
  `}

  .dark & {
    background-color: var(--color-nav-bg);
    color: var(--color-pearl);
  }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--space-4);
`;

const StatusBadge = styled.span`
  background-color: ${props => props.$variant === 'active' ? 'rgba(0, 106, 78, 0.15)' : 'rgba(180, 83, 9, 0.15)'};
  color: ${props => props.$variant === 'active' ? 'var(--color-success)' : 'var(--color-warning)'};
  font-size: var(--text-caption);
  font-weight: 500;
  padding: var(--space-1) var(--space-3);
  border-radius: var(--radius-full);
`;

const CardIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(106, 0, 213, 0.15);
  color: var(--color-violet);
`;

const CardTitle = styled.h3`
  font-size: var(--text-h2);
  font-weight: 500;
  margin-bottom: var(--space-2);
`;

const CardDescription = styled.p`
  font-size: var(--text-body-small);
  color: var(--color-text-secondary);
  margin-bottom: var(--space-5);
  flex-grow: 1;

  .dark & {
    color: rgba(251, 251, 251, 0.7);
  }
`;

const CardButton = styled.div`
  width: 100%;
  text-align: center;
  padding: 16px 40px;
  border-radius: 100px;
  font-weight: 400;
  font-size: 16px;
  font-family: 'DM Sans', sans-serif;
  background-color: var(--color-button-primary-bg);
  color: var(--color-button-primary-text);
  transition: transform var(--duration-normal) var(--ease-default), box-shadow var(--duration-normal) var(--ease-default);

  ${Card}:hover & {
    transform: translateY(-2px);
    box-shadow: 0 8px 10px -4px rgba(106, 0, 213, 0.5);
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
  color: var(--color-pearl);
  background-color: var(--color-midnight);
  border-bottom: 1px solid var(--color-border);
`;

const TableCell = styled.td`
  padding: var(--space-3) var(--space-4);
  color: var(--color-text-secondary);
  border-bottom: 1px solid var(--color-border);
  line-height: 1.6;
`;


const NestedCardDemo = styled.div`
  padding: var(--space-6);
  background-color: var(--color-surface-secondary);
  border-radius: var(--radius-xl);
  margin: var(--space-5) 0;
`;

const OuterCard = styled.div`
  padding: var(--space-5);
  background-color: var(--color-card-bg);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
`;

const InnerCard = styled.div`
  padding: var(--space-4);
  background-color: var(--color-midnight);
  color: var(--color-pearl);
  border-radius: var(--radius-md);
  font-size: var(--text-body-small);
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
          <Card interactive>
            <CardHeader>
              <StatusBadge $variant="active">Active</StatusBadge>
              <CardIcon><Palette size={20} strokeWidth={1.5} /></CardIcon>
            </CardHeader>
            <CardTitle>Colors</CardTitle>
            <CardDescription>
              Our visual identity palette with usage rules and color specifications.
            </CardDescription>
            <CardButton>Explore</CardButton>
          </Card>

          <Card interactive>
            <CardHeader>
              <StatusBadge $variant="available">Available</StatusBadge>
              <CardIcon><FileText size={20} strokeWidth={1.5} /></CardIcon>
            </CardHeader>
            <CardTitle>Typography</CardTitle>
            <CardDescription>
              DM Sans type system with clear hierarchy and scale.
            </CardDescription>
            <CardButton>Explore</CardButton>
          </Card>

        </CardGrid>
      </Section>

      {/* Card with Hover */}
      <Section>
        <SectionTitle>Interactive Cards</SectionTitle>
        <SectionDescription>
          Cards with the interactive prop lift on hover with a shadow transition. Use for clickable items like navigation or links.
        </SectionDescription>

        <CardGrid>
          <Card interactive>
            <CardHeader>
              <StatusBadge $variant="available">Available</StatusBadge>
              <CardIcon><Zap size={20} strokeWidth={1.5} /></CardIcon>
            </CardHeader>
            <CardTitle>Motion</CardTitle>
            <CardDescription>
              Animation timing, easing functions, and transition patterns.
            </CardDescription>
            <CardButton>Explore</CardButton>
          </Card>

          <Card interactive>
            <CardHeader>
              <StatusBadge $variant="active">Active</StatusBadge>
              <CardIcon><MessageCircle size={20} strokeWidth={1.5} /></CardIcon>
            </CardHeader>
            <CardTitle>Tone of Voice</CardTitle>
            <CardDescription>
              Authority through Simplicity. How we speak as a brand.
            </CardDescription>
            <CardButton>Explore</CardButton>
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
              <TableHeader>Min Height</TableHeader>
              <TableHeader>Background</TableHeader>
            </tr>
          </thead>
          <tbody>
            <tr>
              <TableCell>Card</TableCell>
              <TableCell>40px (--space-5)</TableCell>
              <TableCell>44px (--radius-card)</TableCell>
              <TableCell>280px</TableCell>
              <TableCell>--color-card-bg</TableCell>
            </tr>
            <tr>
              <TableCell>Card Button</TableCell>
              <TableCell>16px 40px</TableCell>
              <TableCell>100px (pill)</TableCell>
              <TableCell>-</TableCell>
              <TableCell>--color-button-primary-bg</TableCell>
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

        <SectionDescription>
          All code examples below use Svelte 5 syntax with runes ($props, $state, etc).
        </SectionDescription>

        <CodeBlock language="svelte" title="Card.svelte">
{`<!-- Card.svelte -->
<script>
  let {
    variant = 'default',
    hoverable = false,
    href = ''
  } = $props();
</script>

<svelte:element
  this={href ? 'a' : 'div'}
  {href}
  class="card card-{variant}"
  class:hoverable
>
  <slot name="header" />
  <div class="card-content">
    <slot />
  </div>
  <slot name="footer" />
</svelte:element>

<style lang="scss">
  @use '../styles/variables' as *;

  .card {
    background-color: var(--color-surface-secondary);
    border-radius: $radius-lg;
    padding: $space-5;
    box-shadow: $shadow-sm;
    transition: all $duration-normal $ease-default;
  }

  .card-elevated {
    box-shadow: $shadow-md;
  }

  .hoverable {
    cursor: pointer;

    &:hover {
      transform: translateY(-4px);
      box-shadow: $shadow-lg;
    }
  }

  .card-content {
    display: flex;
    flex-direction: column;
    gap: $space-3;
  }

  a.card {
    text-decoration: none;
    color: inherit;
  }
</style>`}
        </CodeBlock>

        <CodeBlock language="svelte" title="FeatureCard.svelte">
{`<!-- FeatureCard.svelte -->
<script>
  let { icon, title, description } = $props();
</script>

<div class="feature-card">
  <div class="icon-wrapper">
    <svelte:component this={icon} size={24} strokeWidth={1.5} />
  </div>
  <h3>{title}</h3>
  <p>{description}</p>
</div>

<style lang="scss">
  @use '../styles/variables' as *;

  .feature-card {
    background: $pearl-white;
    border-radius: $radius-lg;
    padding: $space-5;
    text-align: center;

    h3 {
      font-size: 18px;
      font-weight: 500;
      margin: $space-3 0 $space-2;
      color: $midnight-violet;
    }

    p {
      font-size: 14px;
      color: var(--color-text-secondary);
      line-height: 1.5;
    }
  }

  .icon-wrapper {
    width: 48px;
    height: 48px;
    border-radius: $radius-md;
    background: $lavender;
    color: $royal-violet;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
  }
</style>`}
        </CodeBlock>

        <CodeBlock language="svelte" title="Usage with Tailwind">
{`<!-- Using Tailwind classes -->
<div class="
  bg-pearl rounded-lg p-6
  shadow-sm hover:shadow-lg
  hover:-translate-y-1
  transition-all duration-200
">
  <h3 class="text-lg font-medium text-midnight">Card Title</h3>
  <p class="text-sm text-midnight/70 mt-2">
    Card description goes here.
  </p>
</div>`}
        </CodeBlock>

        <CodeBlock language="svelte" title="Card Grid Layout">
{`<script>
  import Card from '$lib/components/Card.svelte';
</script>

<div class="card-grid">
  {#each items as item}
    <Card hoverable href={item.href}>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
    </Card>
  {/each}
</div>

<style>
  .card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: var(--space-5);
  }
</style>`}
        </CodeBlock>
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

        <Callout type="success" title="Do">
          Use cards to group related information. Maintain consistent padding (40px / --space-5). Use interactive cards for clickable items. Follow the radius rule when nesting. Keep card content scannable.
        </Callout>

        <Callout type="error" title="Don't">
          Don't nest cards more than 2 levels deep. Don't use cards for everything - sometimes plain sections are better. Don't make non-clickable cards look interactive. Don't overcrowd cards with content.
        </Callout>
      </Section>

      {/* When to Use */}
      <Section>
        <SectionTitle>When to Use Cards</SectionTitle>

        <SectionDescription>
          <strong>Use cards for:</strong><br/>
          • Grouping related data (user profiles, product details)<br/>
          • Lists of similar items (search results, product grid)<br/>
          • Dashboard widgets and metrics<br/>
          • Preview content (blog post previews)<br/><br/>

          <strong>Avoid using cards for:</strong><br/>
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
