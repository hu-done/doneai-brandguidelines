import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import styled, { keyframes } from "styled-components";
import { Zap, Play } from "lucide-react";
import * as S from "../commonStyles/index.js";
import Callout from "../shared/Callout";
import CodeBlock from "../shared/CodeBlock";

// Keyframe animations for demos
const modalEnter = keyframes`
  from {
    opacity: 0;
    transform: scale(0.95) translateY(10px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
`;

const toastSlide = keyframes`
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

// Demo containers
const DurationDemoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--space-4);
  margin: var(--space-5) 0;
`;

const DurationDemoBox = styled.div`
  background: var(--color-surface-secondary);
  border-radius: var(--radius-lg);
  padding: var(--space-5);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-3);
`;

const DurationLabel = styled.div`
  font-size: var(--text-body);
  font-weight: 500;
  color: var(--color-text-primary);
  text-align: center;
`;

const DurationTime = styled.div`
  font-size: var(--text-body-small);
  color: var(--color-text-secondary);
  margin-bottom: var(--space-2);
`;

const AnimatedBox = styled.div`
  width: 60px;
  height: 60px;
  background: var(--color-violet);
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: transform ${props => props.duration}ms var(--ease-default);

  &:hover {
    transform: translateY(-8px);
  }

  &:active {
    transform: translateY(-4px);
  }
`;

const TriggerButton = styled.button`
  padding: var(--space-2) var(--space-3);
  background: var(--color-midnight);
  color: var(--color-pearl);
  border: none;
  border-radius: var(--radius-md);
  font-size: var(--text-body-small);
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: var(--space-2);
  transition: all var(--duration-fast) var(--ease-default);

  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
  }

  &:active {
    transform: scale(0.98);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px var(--color-violet);
  }
`;

// Easing curve visualizations
const EasingGrid = styled.div`
  display: grid;
  gap: var(--space-5);
  margin: var(--space-5) 0;
`;

const EasingDemo = styled.div`
  background: var(--color-surface-secondary);
  border-radius: var(--radius-lg);
  padding: var(--space-5);
`;

const EasingTitle = styled.h3`
  font-size: var(--text-h3);
  font-weight: 500;
  color: var(--color-text-primary);
  margin-bottom: var(--space-2);
`;

const EasingFunction = styled.div`
  font-family: 'Courier New', Courier, monospace;
  font-size: var(--text-body-small);
  color: var(--color-text-secondary);
  margin-bottom: var(--space-3);
`;

const EasingDescription = styled.p`
  font-size: var(--text-body-small);
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin-bottom: var(--space-4);
`;

// Pattern demos
const PatternDemoSection = styled.div`
  margin: var(--space-5) 0;
`;

const PatternDemo = styled.div`
  background: var(--color-surface-secondary);
  border-radius: var(--radius-lg);
  padding: var(--space-5);
  margin-bottom: var(--space-4);
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
`;

const PatternTitle = styled.h4`
  font-size: var(--text-h3);
  font-weight: 500;
  color: var(--color-text-primary);
`;

const PatternDescription = styled.p`
  font-size: var(--text-body-small);
  color: var(--color-text-secondary);
  line-height: 1.6;
`;

const DemoArea = styled.div`
  background: var(--color-surface-primary);
  border-radius: var(--radius-md);
  padding: var(--space-5);
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 120px;
  border: 1px solid var(--color-border);
`;

// Specific pattern components
const DemoButton = styled.button`
  padding: var(--space-3) var(--space-5);
  background: var(--color-midnight);
  color: var(--color-pearl);
  border: none;
  border-radius: 100px;
  font-size: var(--text-body);
  font-weight: 500;
  cursor: pointer;
  transition: all var(--duration-fast) var(--ease-default);

  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
  }

  &:active {
    transform: scale(0.98);
  }
`;

const DemoCard = styled.div`
  width: 200px;
  padding: var(--space-4);
  background: var(--color-surface-primary);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  cursor: pointer;
  transition: all var(--duration-normal) var(--ease-default);

  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
  }
`;

const CardTitle = styled.div`
  font-size: var(--text-body);
  font-weight: 500;
  color: var(--color-text-primary);
  margin-bottom: var(--space-2);
`;

const CardText = styled.div`
  font-size: var(--text-body-small);
  color: var(--color-text-secondary);
  line-height: 1.6;
`;

const DemoModal = styled.div`
  width: 300px;
  padding: var(--space-5);
  background: var(--color-surface-primary);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-xl);
  animation: ${modalEnter} var(--duration-slow) var(--ease-out);
`;

const ModalTitle = styled.div`
  font-size: var(--text-h3);
  font-weight: 500;
  color: var(--color-text-primary);
  margin-bottom: var(--space-3);
`;

const ModalText = styled.div`
  font-size: var(--text-body-small);
  color: var(--color-text-secondary);
  line-height: 1.6;
`;

const DemoToast = styled.div`
  padding: var(--space-3) var(--space-4);
  background: var(--color-midnight);
  color: var(--color-pearl);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-lg);
  animation: ${toastSlide} var(--duration-normal) var(--ease-out);
  font-size: var(--text-body-small);
`;

const FocusableBox = styled.div`
  width: 120px;
  height: 80px;
  background: var(--color-surface-primary);
  border: 2px solid var(--color-border);
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--text-body-small);
  color: var(--color-text-secondary);
  cursor: pointer;
  transition: box-shadow var(--duration-fast) var(--ease-default);

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px var(--color-violet);
  }

  &:hover {
    border-color: var(--color-violet);
  }
`;

const Motion = () => {
  const [showModal, setShowModal] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const triggerModal = () => {
    setShowModal(true);
    setTimeout(() => setShowModal(false), 3000);
  };

  const triggerToast = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div>
      <Helmet>
        <title>Motion & Animation | Done.ai Brand Guidelines</title>
      </Helmet>

      <S.Title>Motion & Animation</S.Title>
      <S.Bodytext>
        How things move in Done.ai. Motion should feel purposeful, never
        decorative.
      </S.Bodytext>

      <S.Subtitle>Philosophy</S.Subtitle>
      <S.Bodytext>
        Done.ai motion is quick, responsive, and subtle. We use animation to
        enhance the experience, not distract from it. Every transition serves a
        purpose: providing feedback, revealing hierarchy, or guiding attention.
      </S.Bodytext>

      <Callout type="info" title="Three Core Principles">
        <strong>Purposeful:</strong> Motion should clarify, not decorate. Every
        animation has a job to do.
        <br />
        <br />
        <strong>Quick:</strong> Users should never wait. Keep animations under
        300ms.
        <br />
        <br />
        <strong>Subtle:</strong> Motion enhances without demanding attention. Let
        the content shine.
      </Callout>

      <S.Subtitle>Duration Scale</S.Subtitle>
      <S.Bodytext>
        We use three timing values based on the importance and size of the
        movement. Hover over each box to see the timing in action.
      </S.Bodytext>

      <DurationDemoGrid>
        <DurationDemoBox>
          <DurationLabel>Fast</DurationLabel>
          <DurationTime>100ms</DurationTime>
          <AnimatedBox duration={100} />
          <S.Bodytext style={{ fontSize: 'var(--text-body-small)', margin: 0 }}>
            Micro-interactions, hover states, toggles
          </S.Bodytext>
        </DurationDemoBox>

        <DurationDemoBox>
          <DurationLabel>Normal</DurationLabel>
          <DurationTime>200ms</DurationTime>
          <AnimatedBox duration={200} />
          <S.Bodytext style={{ fontSize: 'var(--text-body-small)', margin: 0 }}>
            Standard transitions, button clicks, dropdowns
          </S.Bodytext>
        </DurationDemoBox>

        <DurationDemoBox>
          <DurationLabel>Slow</DurationLabel>
          <DurationTime>300ms</DurationTime>
          <AnimatedBox duration={300} />
          <S.Bodytext style={{ fontSize: 'var(--text-body-small)', margin: 0 }}>
            Page transitions, modals, large reveals
          </S.Bodytext>
        </DurationDemoBox>
      </DurationDemoGrid>

      <S.Subtitle>Easing Functions</S.Subtitle>
      <S.Bodytext>
        Easing makes motion feel natural. We use three easing curves based on
        the context.
      </S.Bodytext>

      <EasingGrid>
        <EasingDemo>
          <EasingTitle>ease-default</EasingTitle>
          <EasingFunction>cubic-bezier(0.4, 0, 0.2, 1)</EasingFunction>
          <EasingDescription>
            Our standard easing for most transitions. Starts slightly slower,
            ends slightly faster. Use this when in doubt.
          </EasingDescription>
          <CodeBlock language="svelte">
{`<button class="btn-primary">
  Hover Me
</button>

<style lang="scss">
  @use '../styles/variables' as *;

  .btn-primary {
    transition: all $duration-fast $ease-default;

    &:hover {
      transform: translateY(-2px);
      box-shadow: $shadow-md;
    }

    &:active {
      transform: translateY(0);
    }
  }
</style>`}
          </CodeBlock>
        </EasingDemo>

        <EasingDemo>
          <EasingTitle>ease-in</EasingTitle>
          <EasingFunction>cubic-bezier(0.4, 0, 1, 1)</EasingFunction>
          <EasingDescription>
            Starts slow, accelerates. Use for elements entering the screen or
            objects that are accelerating away.
          </EasingDescription>
          <CodeBlock language="svelte">
{`<div class="entering">
  Content entering view
</div>

<style>
  .entering {
    transition: transform var(--duration-normal) var(--ease-in);
  }
</style>`}
          </CodeBlock>
        </EasingDemo>

        <EasingDemo>
          <EasingTitle>ease-out</EasingTitle>
          <EasingFunction>cubic-bezier(0, 0, 0.2, 1)</EasingFunction>
          <EasingDescription>
            Starts fast, decelerates. Use for elements exiting the screen or
            objects coming to rest.
          </EasingDescription>
          <CodeBlock language="svelte">
{`<div class="exiting">
  Content exiting view
</div>

<style>
  .exiting {
    transition: transform var(--duration-normal) var(--ease-out);
  }
</style>`}
          </CodeBlock>
        </EasingDemo>
      </EasingGrid>

      <S.Subtitle>Common Patterns</S.Subtitle>
      <S.Bodytext>
        Here are the animation patterns you'll use most often. Click the buttons
        to see them in action.
      </S.Bodytext>

      <PatternDemoSection>
        <PatternDemo>
          <PatternTitle>Button Hover</PatternTitle>
          <PatternDescription>
            Buttons lift slightly on hover to signal interactivity. A subtle
            shadow reinforces the elevation.
          </PatternDescription>
          <DemoArea>
            <DemoButton>Hover Me</DemoButton>
          </DemoArea>
          <CodeBlock language="svelte">
{`<button class="btn-primary">
  Hover Me
</button>

<style lang="scss">
  @use '../styles/variables' as *;

  .btn-primary {
    transition: all $duration-fast $ease-default;

    &:hover {
      transform: translateY(-2px);
      box-shadow: $shadow-md;
    }

    &:active {
      transform: translateY(0);
    }
  }
</style>`}
          </CodeBlock>
        </PatternDemo>

        <PatternDemo>
          <PatternTitle>Card Lift</PatternTitle>
          <PatternDescription>
            Cards lift higher than buttons on hover, with a more prominent
            shadow. This creates clear affordance for clickable cards.
          </PatternDescription>
          <DemoArea>
            <DemoCard>
              <CardTitle>Interactive Card</CardTitle>
              <CardText>Hover over me to see the lift effect.</CardText>
            </DemoCard>
          </DemoArea>
          <CodeBlock language="svelte">
{`<div class="card hoverable">
  Card content
</div>

<style lang="scss">
  .card {
    transition: all var(--duration-normal) var(--ease-default);
  }

  .hoverable:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
  }
</style>`}
          </CodeBlock>
        </PatternDemo>

        <PatternDemo>
          <PatternTitle>Modal Enter</PatternTitle>
          <PatternDescription>
            Modals fade in while scaling up slightly and moving from below. This
            draws attention and feels natural.
          </PatternDescription>
          <DemoArea>
            <TriggerButton onClick={triggerModal}>
              <Play size={16} strokeWidth={1.5} />
              Trigger Modal
            </TriggerButton>
            {showModal && (
              <DemoModal>
                <ModalTitle>Modal Title</ModalTitle>
                <ModalText>
                  Notice the entrance animation: fade, scale, and translate.
                </ModalText>
              </DemoModal>
            )}
          </DemoArea>
          <CodeBlock language="svelte">
{`<script>
  import { fade, scale } from 'svelte/transition';

  let { isOpen = false, onClose } = $props();
</script>

{#if isOpen}
  <div
    class="modal-backdrop"
    transition:fade={{ duration: 200 }}
    onclick={onClose}
  >
    <div
      class="modal"
      transition:scale={{ duration: 300, start: 0.95 }}
      onclick|stopPropagation
    >
      <slot />
    </div>
  </div>
{/if}

<style lang="scss">
  .modal-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .modal {
    background: var(--color-surface-primary);
    border-radius: var(--radius-lg);
    padding: var(--space-6);
    max-width: 500px;
    width: 90%;
  }
</style>`}
          </CodeBlock>
        </PatternDemo>

        <PatternDemo>
          <PatternTitle>Toast Slide</PatternTitle>
          <PatternDescription>
            Toast notifications slide in from the right. This respects reading
            direction and doesn't block content.
          </PatternDescription>
          <DemoArea>
            <TriggerButton onClick={triggerToast}>
              <Zap size={16} strokeWidth={1.5} />
              Trigger Toast
            </TriggerButton>
            {showToast && <DemoToast>Action completed successfully!</DemoToast>}
          </DemoArea>
          <CodeBlock language="svelte">
{`<script>
  import { fly } from 'svelte/transition';

  let { message = '', visible = false } = $props();
</script>

{#if visible}
  <div
    class="toast"
    transition:fly={{ x: 100, duration: 200 }}
  >
    {message}
  </div>
{/if}

<style lang="scss">
  .toast {
    position: fixed;
    bottom: var(--space-5);
    right: var(--space-5);
    background: var(--color-midnight);
    color: var(--color-pearl);
    padding: var(--space-3) var(--space-5);
    border-radius: var(--radius-md);
    box-shadow: var(--shadow-lg);
  }
</style>`}
          </CodeBlock>
        </PatternDemo>

        <PatternDemo>
          <PatternTitle>Focus Ring</PatternTitle>
          <PatternDescription>
            Focus states appear instantly but smoothly. The violet ring ensures
            keyboard users can navigate clearly.
          </PatternDescription>
          <DemoArea>
            <FocusableBox tabIndex={0}>Click or Tab to Focus</FocusableBox>
          </DemoArea>
          <CodeBlock language="scss">
{`// Reusable focus mixin
@mixin focus-ring {
  outline: none;
  box-shadow: 0 0 0 2px var(--color-violet);
  transition: box-shadow var(--duration-fast) var(--ease-default);
}

// Usage
button:focus-visible {
  @include focus-ring;
}`}
          </CodeBlock>
        </PatternDemo>
      </PatternDemoSection>

      <S.Subtitle>Guidelines</S.Subtitle>

      <Callout type="success" title="✓ Do">
        Keep animations under 300ms so users never wait. Use easing functions to
        make motion feel natural. Be consistent - the same interaction should
        animate the same way everywhere. Use transform and opacity for
        performance. Test animations at different speeds and on different
        devices.
      </Callout>

      <Callout type="error" title="✗ Don't">
        Don't use bounce, spring, or elastic effects - they feel playful, not
        authoritative. Don't animate layout properties like width or height -
        use transform instead. Don't make users wait for animations to complete
        before showing content. Don't use animation when an instant state change
        is clearer. Don't stack multiple animations that compete for attention.
      </Callout>

      <S.Subtitle>CSS Tokens</S.Subtitle>
      <S.Bodytext>
        Use these tokens to ensure consistent timing across the product.
      </S.Bodytext>

      <CodeBlock language="css">
{`:root {
  --duration-fast: 100ms;
  --duration-normal: 200ms;
  --duration-slow: 300ms;

  --ease-default: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
}`}
      </CodeBlock>

      <S.Subtitle>SCSS Variables</S.Subtitle>
      <S.Bodytext>
        For projects using SCSS, import these motion variables.
      </S.Bodytext>

      <CodeBlock language="scss">
{`// _motion.scss
$duration-fast: 100ms;
$duration-normal: 200ms;
$duration-slow: 300ms;

$ease-default: cubic-bezier(0.4, 0, 0.2, 1);
$ease-in: cubic-bezier(0.4, 0, 1, 1);
$ease-out: cubic-bezier(0, 0, 0.2, 1);`}
      </CodeBlock>
    </div>
  );
};

export default Motion;
