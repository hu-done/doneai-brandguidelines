import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import styled from "styled-components";
import * as S from "../commonStyles/index.js";
import Callout from "../shared/Callout";
import CodeBlock from "../shared/CodeBlock";

const ButtonShowcase = styled.div`
  display: flex;
  gap: var(--space-4);
  align-items: center;
  flex-wrap: wrap;
  padding: var(--space-5) 0;
  margin: var(--space-4) 0;
`;

const Button = styled.button`
  font-family: "DM Sans", sans-serif;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5;
  letter-spacing: 0;
  border-radius: 100px;
  cursor: pointer;
  transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;
  border: none;

  /* Variant Styles */
  ${(props) => {
    switch (props.variant) {
      case "primary":
        return `
          background-color: var(--color-midnight);
          color: var(--color-pearl);
          border: none;

          &:hover:not(:disabled) {
            transform: translate(0, -2px);
            box-shadow: 0 8px 10px -4px rgba(106, 0, 213, 0.5);
          }

          &:active:not(:disabled) {
            transform: translate(0, 0);
          }

          &:focus-visible {
            outline: 2px solid var(--color-violet);
            outline-offset: 2px;
          }
        `;
      case "secondary":
        return `
          background-color: transparent;
          color: var(--color-text-primary);
          border: 1px solid var(--color-text-primary);

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
      case "ghost":
        return `
          background-color: transparent;
          color: var(--color-text-primary);
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
      case "destructive":
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
        return "";
    }
  }}

  /* Size Styles */
  ${(props) => {
    switch (props.size) {
      case "small":
        return `
          padding: 12px 32px;
        `;
      case "large":
        return `
          padding: 20px 48px;
        `;
      default: // medium
        return `
          padding: 16px 40px;
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
  background-color: var(--color-surface-secondary);
  border-bottom: 1px solid var(--color-border);
`;

const TableCell = styled.td`
  padding: var(--space-3) var(--space-4);
  color: var(--color-text-secondary);
  border-bottom: 1px solid var(--color-border);
  line-height: 1.6;
`;


const Buttons = () => {
  const [clickCount, setClickCount] = useState(0);

  return (
    <div>
      <Helmet>
        <title>Buttons | Done.ai Brand Guidelines</title>
      </Helmet>

      <S.Title>Buttons</S.Title>

      <S.Subtitle>Interactive Examples</S.Subtitle>
      <S.Bodytext>
        Click these buttons to see how they feel. Notice the hover, active, and
        focus states.
      </S.Bodytext>

      <ButtonShowcase>
        <Button
          variant="primary"
          size="medium"
          onClick={() => setClickCount(clickCount + 1)}
        >
          Primary Button
        </Button>
        <Button
          variant="secondary"
          size="medium"
          onClick={() => setClickCount(clickCount + 1)}
        >
          Secondary Button
        </Button>
        <Button
          variant="ghost"
          size="medium"
          onClick={() => setClickCount(clickCount + 1)}
        >
          Ghost Button
        </Button>
        <Button
          variant="destructive"
          size="medium"
          onClick={() => setClickCount(clickCount + 1)}
        >
          Delete
        </Button>
      </ButtonShowcase>

      {clickCount > 0 && (
        <Callout type="success">
          Button clicked {clickCount} {clickCount === 1 ? "time" : "times"}!
        </Callout>
      )}

      <S.Subtitle>Sizes</S.Subtitle>

      <ButtonShowcase>
        <Button variant="primary" size="small">
          Small
        </Button>
        <Button variant="primary" size="medium">
          Medium
        </Button>
        <Button variant="primary" size="large">
          Large
        </Button>
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

      <S.Subtitle>Variants</S.Subtitle>

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

      <S.Subtitle>States</S.Subtitle>

      <ButtonShowcase>
        <Button variant="primary" size="medium">
          Default
        </Button>
        <Button variant="primary" size="medium" disabled>
          Disabled
        </Button>
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

      <S.Subtitle>Implementation</S.Subtitle>
      <S.Bodytext>
        Svelte 5 button component implementation with full variant and state
        support.
      </S.Bodytext>

      <CodeBlock language="svelte" title="Button.svelte">
        {`<!-- Button.svelte -->
<script>
  let {
    variant = 'primary',
    size = 'md',
    disabled = false,
    loading = false
  } = $props();
</script>

<button
  class="btn btn-{variant} btn-{size}"
  {disabled}
  aria-busy={loading}
>
  {#if loading}
    <span class="spinner" />
  {/if}
  <slot />
</button>

<style lang="scss">
  @use '../styles/variables' as *;

  .btn {
    font-family: 'DM Sans', sans-serif;
    font-weight: 500;
    border: none;
    cursor: pointer;
    transition: all $duration-fast $ease-default;
    border-radius: 100px;

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }

  .btn-primary {
    background-color: $midnight-violet;
    color: $pearl-white;

    &:hover:not(:disabled) {
      transform: translateY(-2px);
      box-shadow: $shadow-md;
    }

    &:active:not(:disabled) {
      transform: translateY(0);
    }

    &:focus-visible {
      outline: 2px solid $violet;
      outline-offset: 2px;
    }
  }

  .btn-secondary {
    background-color: transparent;
    color: $midnight-violet;
    border: 1px solid $midnight-violet;

    &:hover:not(:disabled) {
      background-color: $lavender;
    }

    &:active:not(:disabled) {
      transform: scale(0.98);
    }

    &:focus-visible {
      outline: 2px solid $violet;
      outline-offset: 2px;
    }
  }

  .btn-ghost {
    background-color: transparent;
    color: $midnight-violet;

    &:hover:not(:disabled) {
      background-color: $platinum;
    }

    &:active:not(:disabled) {
      transform: scale(0.98);
    }

    &:focus-visible {
      outline: 2px solid $violet;
      outline-offset: 2px;
    }
  }

  .btn-destructive {
    background-color: $error-red;
    color: $pearl-white;

    &:hover:not(:disabled) {
      opacity: 0.9;
      box-shadow: $shadow-md;
    }

    &:active:not(:disabled) {
      transform: scale(0.98);
    }

    &:focus-visible {
      outline: 2px solid $violet;
      outline-offset: 2px;
    }
  }

  .btn-sm {
    padding: 8px 16px;
    font-size: 14px;
  }

  .btn-md {
    padding: 12px 20px;
    font-size: 16px;
  }

  .btn-lg {
    padding: 16px 24px;
    font-size: 16px;
  }

  .spinner {
    display: inline-block;
    width: 12px;
    height: 12px;
    border: 2px solid currentColor;
    border-right-color: transparent;
    border-radius: 50%;
    animation: spin 0.6s linear infinite;
    margin-right: 8px;
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }
</style>`}
      </CodeBlock>

      <S.Subtitle>Usage Examples</S.Subtitle>
      <S.Bodytext>
        Using the button component with different variants and states.
      </S.Bodytext>

      <CodeBlock language="svelte" title="Basic Usage">
        {`<script>
  import Button from '$lib/components/Button.svelte';

  let isLoading = $state(false);

  async function handleClick() {
    isLoading = true;
    await doSomething();
    isLoading = false;
  }
</script>

<Button variant="primary" onclick={handleClick} loading={isLoading}>
  Save Changes
</Button>

<Button variant="secondary">
  Cancel
</Button>

<Button variant="ghost" size="sm">
  Learn More
</Button>

<Button variant="destructive" size="lg" disabled>
  Delete Account
</Button>`}
      </CodeBlock>

      <S.Subtitle>With Tailwind Classes</S.Subtitle>
      <S.Bodytext>
        If using Tailwind CSS, you can use these utility-based examples with
        custom token values.
      </S.Bodytext>

      <CodeBlock language="svelte" title="Tailwind Button Examples">
        {`<!-- Primary Button -->
<button class="
  bg-midnight text-pearl
  px-5 py-3
  rounded-full
  font-medium
  hover:shadow-md hover:-translate-y-0.5
  active:translate-y-0
  transition-all duration-100
  disabled:opacity-50 disabled:cursor-not-allowed
  focus-visible:outline focus-visible:outline-2
  focus-visible:outline-violet focus-visible:outline-offset-2
">
  Primary Button
</button>

<!-- Secondary Button -->
<button class="
  bg-transparent text-midnight
  px-5 py-3
  rounded-full
  font-medium
  border border-midnight
  hover:bg-lavender
  active:scale-98
  transition-all duration-100
  disabled:opacity-50 disabled:cursor-not-allowed
  focus-visible:outline focus-visible:outline-2
  focus-visible:outline-violet focus-visible:outline-offset-2
">
  Secondary Button
</button>

<!-- Ghost Button -->
<button class="
  bg-transparent text-midnight
  px-5 py-3
  rounded-full
  font-medium
  hover:bg-platinum
  active:scale-98
  transition-all duration-100
  disabled:opacity-50 disabled:cursor-not-allowed
  focus-visible:outline focus-visible:outline-2
  focus-visible:outline-violet focus-visible:outline-offset-2
">
  Ghost Button
</button>`}
      </CodeBlock>

      <S.Subtitle>Usage Guidelines</S.Subtitle>

      <Callout type="success" title="✓ Do">
        Use primary buttons for main actions. Limit to one primary button per
        view. Use secondary for alternative actions. Use ghost for navigation or
        low-priority actions.
      </Callout>

      <Callout type="error" title="✗ Don't">
        Don't use multiple primary buttons competing for attention. Don't use
        destructive buttons for non-destructive actions. Don't remove focus
        states for accessibility.
      </Callout>
    </div>
  );
};

export default Buttons;
