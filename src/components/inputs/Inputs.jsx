import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import styled from "styled-components";
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

const InputShowcase = styled.div`
  display: grid;
  gap: var(--space-5);
  padding: var(--space-6);
  background-color: var(--color-card-bg);
  border-radius: var(--radius-lg);
  margin: var(--space-5) 0;
  box-shadow: var(--shadow-sm);
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`;

const Label = styled.label`
  font-size: var(--text-body-small);
  font-weight: 500;
  color: var(--color-text-primary);
`;

const Input = styled.input`
  padding: var(--space-3);
  border-radius: var(--radius-md);
  border: 1px solid var(--color-border);
  font-size: var(--text-body);
  font-family: 'DM Sans', sans-serif;
  color: var(--color-text-primary);
  background-color: var(--color-surface-elevated);
  transition: all var(--duration-normal) var(--ease-default);

  &::placeholder {
    color: var(--color-text-secondary);
    opacity: 0.6;
  }

  &:hover {
    border-color: var(--color-text-secondary);
  }

  &:focus {
    outline: none;
    border-color: var(--color-violet);
    box-shadow: 0 0 0 3px rgba(106, 0, 213, 0.1);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    background-color: var(--color-surface-secondary);
  }

  ${props => props.error && `
    border-color: var(--color-error);

    &:focus {
      border-color: var(--color-error);
      box-shadow: 0 0 0 3px rgba(222, 53, 11, 0.1);
    }
  `}

  ${props => props.success && `
    border-color: var(--color-success);

    &:focus {
      border-color: var(--color-success);
      box-shadow: 0 0 0 3px rgba(0, 106, 78, 0.1);
    }
  `}
`;

const TextArea = styled.textarea`
  padding: var(--space-3);
  border-radius: var(--radius-md);
  border: 1px solid var(--color-border);
  font-size: var(--text-body);
  font-family: 'DM Sans', sans-serif;
  color: var(--color-text-primary);
  background-color: var(--color-surface-elevated);
  transition: all var(--duration-normal) var(--ease-default);
  resize: vertical;
  min-height: 100px;

  &::placeholder {
    color: var(--color-text-secondary);
    opacity: 0.6;
  }

  &:hover {
    border-color: var(--color-text-secondary);
  }

  &:focus {
    outline: none;
    border-color: var(--color-violet);
    box-shadow: 0 0 0 3px rgba(106, 0, 213, 0.1);
  }
`;

const HelperText = styled.div`
  font-size: var(--text-body-small);
  color: ${props => {
    if (props.error) return 'var(--color-error)';
    if (props.success) return 'var(--color-success)';
    return 'var(--color-text-secondary)';
  }};
  margin-top: var(--space-1);
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


const Inputs = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const validateEmail = (value) => {
    setEmail(value);
    const isValid = value.includes('@') && value.includes('.');
    setShowError(value.length > 0 && !isValid);
    setShowSuccess(value.length > 0 && isValid);
  };

  return (
    <PageContainer>
      <Helmet>
        <title>Inputs | Done.ai Brand Guidelines</title>
      </Helmet>

      <PageTitle>Inputs</PageTitle>

      {/* Interactive Examples */}
      <Section>
        <SectionTitle>Interactive Examples</SectionTitle>
        <SectionDescription>
          Try these inputs to see all states: default, hover, focus, error, success, and disabled.
        </SectionDescription>

        <InputShowcase>
          <InputGroup>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              type="text"
              placeholder="Enter your name"
            />
            <HelperText>Your full name</HelperText>
          </InputGroup>

          <InputGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => validateEmail(e.target.value)}
              error={showError}
              success={showSuccess}
            />
            {showError && <HelperText error>Please enter a valid email address</HelperText>}
            {showSuccess && <HelperText success>Email format is valid</HelperText>}
            {!showError && !showSuccess && <HelperText>We'll never share your email</HelperText>}
          </InputGroup>

          <InputGroup>
            <Label htmlFor="message">Message</Label>
            <TextArea
              id="message"
              placeholder="Type your message here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <HelperText>{message.length} characters</HelperText>
          </InputGroup>

          <InputGroup>
            <Label htmlFor="disabled">Disabled Input</Label>
            <Input
              id="disabled"
              type="text"
              placeholder="This field is disabled"
              disabled
            />
            <HelperText>This field cannot be edited</HelperText>
          </InputGroup>
        </InputShowcase>
      </Section>

      {/* Specifications */}
      <Section>
        <SectionTitle>Specifications</SectionTitle>

        <SpecTable>
          <thead>
            <tr>
              <TableHeader>Property</TableHeader>
              <TableHeader>Value</TableHeader>
              <TableHeader>Token</TableHeader>
            </tr>
          </thead>
          <tbody>
            <tr>
              <TableCell>Padding</TableCell>
              <TableCell>12px (vertical and horizontal)</TableCell>
              <TableCell>--space-3</TableCell>
            </tr>
            <tr>
              <TableCell>Border Radius</TableCell>
              <TableCell>8px</TableCell>
              <TableCell>--radius-md</TableCell>
            </tr>
            <tr>
              <TableCell>Border (default)</TableCell>
              <TableCell>1px solid rgba(11,4,37,0.08)</TableCell>
              <TableCell>--color-border</TableCell>
            </tr>
            <tr>
              <TableCell>Font Size</TableCell>
              <TableCell>16px</TableCell>
              <TableCell>--text-body</TableCell>
            </tr>
            <tr>
              <TableCell>Font Family</TableCell>
              <TableCell>DM Sans</TableCell>
              <TableCell>-</TableCell>
            </tr>
            <tr>
              <TableCell>Height</TableCell>
              <TableCell>44px (with padding)</TableCell>
              <TableCell>-</TableCell>
            </tr>
          </tbody>
        </SpecTable>
      </Section>

      {/* States */}
      <Section>
        <SectionTitle>States</SectionTitle>

        <SpecTable>
          <thead>
            <tr>
              <TableHeader>State</TableHeader>
              <TableHeader>Visual Change</TableHeader>
            </tr>
          </thead>
          <tbody>
            <tr>
              <TableCell>Default</TableCell>
              <TableCell>Border: --color-border, Background: --color-surface-elevated</TableCell>
            </tr>
            <tr>
              <TableCell>Hover</TableCell>
              <TableCell>Border color darkens to --color-text-secondary</TableCell>
            </tr>
            <tr>
              <TableCell>Focus</TableCell>
              <TableCell>Border: Royal Violet, 3px violet ring (rgba(106, 0, 213, 0.1))</TableCell>
            </tr>
            <tr>
              <TableCell>Error</TableCell>
              <TableCell>Border: --color-error, Red ring on focus</TableCell>
            </tr>
            <tr>
              <TableCell>Success</TableCell>
              <TableCell>Border: --color-success, Green ring on focus</TableCell>
            </tr>
            <tr>
              <TableCell>Disabled</TableCell>
              <TableCell>50% opacity, cursor: not-allowed, background: --color-surface-secondary</TableCell>
            </tr>
          </tbody>
        </SpecTable>
      </Section>

      {/* Label & Helper Text */}
      <Section>
        <SectionTitle>Labels & Helper Text</SectionTitle>

        <Callout type="info" title="Structure">
          Every input should have a label. Helper text is optional but recommended for context, validation feedback, or character counts.
        </Callout>

        <SpecTable>
          <thead>
            <tr>
              <TableHeader>Element</TableHeader>
              <TableHeader>Specifications</TableHeader>
            </tr>
          </thead>
          <tbody>
            <tr>
              <TableCell>Label</TableCell>
              <TableCell>14px, medium weight (500), 8px margin below, --color-text-primary</TableCell>
            </tr>
            <tr>
              <TableCell>Helper Text</TableCell>
              <TableCell>14px, regular weight (400), 4px margin above, --color-text-secondary</TableCell>
            </tr>
            <tr>
              <TableCell>Error Text</TableCell>
              <TableCell>Same as helper, but --color-error</TableCell>
            </tr>
            <tr>
              <TableCell>Success Text</TableCell>
              <TableCell>Same as helper, but --color-success</TableCell>
            </tr>
          </tbody>
        </SpecTable>
      </Section>

      {/* Implementation */}
      <Section>
        <SectionTitle>Svelte 5 Implementation</SectionTitle>

        <SectionDescription>
          Below are complete Svelte 5 examples using the new runes syntax ($state, $props, $derived, $bindable).
        </SectionDescription>

        <h3 style={{ marginTop: 'var(--space-6)', marginBottom: 'var(--space-3)', fontSize: 'var(--text-h3)', fontWeight: 500 }}>
          Text Input Component
        </h3>
        <CodeBlock language="svelte" title="TextInput.svelte">
{`<!-- TextInput.svelte -->
<script>
  let {
    label = '',
    placeholder = '',
    error = '',
    disabled = false,
    value = $bindable('')
  } = $props();

  let inputId = $derived(\`input-\${label.toLowerCase().replace(/\\s/g, '-')}\`);
</script>

<div class="input-wrapper" class:has-error={error}>
  {#if label}
    <label for={inputId}>{label}</label>
  {/if}

  <input
    id={inputId}
    type="text"
    bind:value
    {placeholder}
    {disabled}
    aria-invalid={!!error}
  />

  {#if error}
    <span class="error-message">{error}</span>
  {/if}
</div>

<style lang="scss">
  @use '../styles/variables' as *;

  .input-wrapper {
    display: flex;
    flex-direction: column;
    gap: $space-2;
  }

  label {
    font-size: 14px;
    font-weight: 500;
    color: var(--color-text-primary);
  }

  input {
    padding: $space-3;
    border: 1px solid var(--color-border);
    border-radius: $radius-md;
    font-family: 'DM Sans', sans-serif;
    font-size: 16px;
    transition: border-color $duration-fast $ease-default;

    &:focus {
      outline: none;
      border-color: $royal-violet;
      box-shadow: 0 0 0 2px rgba($royal-violet, 0.2);
    }

    &:disabled {
      background-color: $platinum;
      cursor: not-allowed;
    }
  }

  .has-error input {
    border-color: $error;
  }

  .error-message {
    font-size: 12px;
    color: $error;
  }
</style>`}
        </CodeBlock>

        <h3 style={{ marginTop: 'var(--space-6)', marginBottom: 'var(--space-3)', fontSize: 'var(--text-h3)', fontWeight: 500 }}>
          Textarea Component
        </h3>
        <CodeBlock language="svelte" title="Textarea.svelte">
{`<!-- Textarea.svelte -->
<script>
  let {
    label = '',
    rows = 4,
    value = $bindable('')
  } = $props();
</script>

<div class="textarea-wrapper">
  {#if label}
    <label>{label}</label>
  {/if}

  <textarea
    bind:value
    {rows}
  />
</div>

<style lang="scss">
  @use '../styles/variables' as *;

  textarea {
    width: 100%;
    padding: $space-3;
    border: 1px solid var(--color-border);
    border-radius: $radius-md;
    font-family: 'DM Sans', sans-serif;
    resize: vertical;

    &:focus {
      outline: none;
      border-color: $royal-violet;
      box-shadow: 0 0 0 2px rgba($royal-violet, 0.2);
    }
  }
</style>`}
        </CodeBlock>

        <h3 style={{ marginTop: 'var(--space-6)', marginBottom: 'var(--space-3)', fontSize: 'var(--text-h3)', fontWeight: 500 }}>
          Usage Example
        </h3>
        <CodeBlock language="svelte" title="Example Usage">
{`<script>
  import TextInput from '$lib/components/TextInput.svelte';

  let email = $state('');
  let emailError = $derived(
    email && !email.includes('@') ? 'Invalid email' : ''
  );
</script>

<TextInput
  label="Email"
  placeholder="you@example.com"
  bind:value={email}
  error={emailError}
/>`}
        </CodeBlock>
      </Section>

      {/* Usage Guidelines */}
      <Section>
        <SectionTitle>Usage Guidelines</SectionTitle>

        <Callout type="success" title="Do">
          Always include labels for accessibility. Use placeholder text for examples only, not labels. Provide clear error messages. Use helper text for context. Maintain consistent spacing between form fields.
        </Callout>

        <Callout type="error" title="Don't">
          Don't use placeholder text as the only label. Don't show error states before the user interacts. Don't use vague error messages like "Invalid input." Don't forget disabled states. Don't remove focus indicators.
        </Callout>
      </Section>
    </PageContainer>
  );
};

export default Inputs;
