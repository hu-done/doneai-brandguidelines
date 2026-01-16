import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import styled from "styled-components";
import { AlertTriangle, Check, X, Copy } from "lucide-react";
import * as S from "../commonStyles/index.js";
import Callout from "../shared/Callout";
import CodeBlock from "../shared/CodeBlock";

const Section = styled.div`
  padding: 0;
`;

const ColorsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-4);
  justify-content: flex-start;
  margin: var(--space-5) 0;
  padding: var(--space-5);
  background-color: var(--color-surface-secondary);
  border-radius: var(--radius-lg);
`;

const ColorBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 120px;
  padding: var(--space-3);
  background-color: var(--color-surface-elevated);
  border-radius: var(--radius-md);
`;

const ColorBox = styled.div`
  width: 70px;
  height: 70px;
  background-color: ${({ color }) => color};
  border: ${({ color }) => {
    // Light colors need dark border, dark colors need light border
    const lightColors = ["#FBFBFB", "#F0F0F0", "#F4EFFF"];
    const darkColors = ["#0B0425", "#006A4E"];
    if (lightColors.includes(color)) return "1px solid var(--color-border)";
    if (darkColors.includes(color)) return "1px solid var(--color-border)";
    return "none";
  }};
  border-radius: 35px;
  box-shadow: var(--shadow-sm);
`;

const ColorName = styled.div`
  font-size: var(--text-caption);
  font-weight: 500;
  margin: var(--space-2) 0;
  text-align: center;
  color: var(--color-text-primary);
`;

const CopyableValue = styled.button`
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  font-size: var(--text-caption);
  color: var(--color-text-secondary);
  background: transparent;
  border: none;
  padding: 2px 6px;
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: all var(--duration-fast) var(--ease-default);
  font-family: inherit;

  &:hover {
    background-color: var(--color-lavender);
    color: var(--color-text-primary);
  }

  &:active {
    transform: scale(0.98);
  }

  svg {
    opacity: 0;
    transition: opacity var(--duration-fast) var(--ease-default);
  }

  &:hover svg {
    opacity: 1;
  }
`;

const CopiedToast = styled.span`
  position: fixed;
  bottom: var(--space-5);
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--color-midnight);
  color: var(--color-pearl);
  padding: var(--space-2) var(--space-4);
  border-radius: var(--radius-md);
  font-size: var(--text-body-small);
  font-weight: 500;
  box-shadow: var(--shadow-lg);
  z-index: 1000;
  display: flex;
  align-items: center;
  gap: var(--space-2);
`;

const ProportionBar = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  border-radius: var(--radius-lg);
  overflow: hidden;
  margin: var(--space-5) 0;
  box-shadow: var(--shadow-md);
`;

const ProportionSegment = styled.div`
  width: ${(props) => props.$width}%;
  background-color: ${(props) => props.$color};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.$textColor || "var(--color-pearl)"};
  font-size: var(--text-body-small);
  font-weight: 500;
  position: relative;
`;

const ProportionLabel = styled.div`
  font-size: var(--text-body-small);
  color: var(--color-text-secondary);
  margin-top: var(--space-2);
  text-align: center;
`;

const TitleWithIcon = styled.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
`;

const TokenTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: var(--space-5) 0;
  font-size: var(--text-body-small);
  background-color: var(--color-surface-elevated);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-sm);

  thead {
    background-color: var(--color-platinum);
  }

  th {
    padding: var(--space-3) var(--space-4);
    text-align: left;
    font-weight: 600;
    color: var(--color-text-primary);
    font-size: var(--text-body-small);
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  td {
    padding: var(--space-3) var(--space-4);
    border-top: 1px solid var(--color-border);
    color: var(--color-text-primary);
  }

  tbody tr:hover {
    background-color: var(--color-lavender);
  }

  code {
    font-family: 'Courier New', Courier, monospace;
    font-size: var(--text-caption);
    background-color: rgba(106, 0, 213, 0.05);
    padding: 2px 6px;
    border-radius: var(--radius-sm);
    color: var(--color-text-primary);
  }
`;

const ColorValueWithCopy = ({ value, onCopy }) => (
  <CopyableValue onClick={() => onCopy(value)} title={`Copy ${value}`}>
    {value}
    <Copy size={12} strokeWidth={1.5} />
  </CopyableValue>
);

const Colors = () => {
  const [copiedValue, setCopiedValue] = useState(null);

  const handleCopy = async (value) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedValue(value);
      setTimeout(() => setCopiedValue(null), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const canvasColors = [
    { name: "PEARL WHITE", hex: "#FBFBFB", rgb: "251, 251, 251" },
    { name: "MIDNIGHT VIOLET", hex: "#0B0425", rgb: "11, 4, 37" },
    { name: "PLATINUM", hex: "#F0F0F0", rgb: "240, 240, 240" },
  ];

  const brandColors = [
    { name: "ROYAL VIOLET", hex: "#6A00D5", rgb: "106, 0, 213" },
    { name: "LAVENDER", hex: "#F4EFFF", rgb: "244, 239, 255" },
  ];

  const semanticColors = [
    { name: "SUCCESS", hex: "#006A4E", rgb: "0, 106, 78" },
    { name: "WARNING", hex: "#B45309", rgb: "180, 83, 9" },
    { name: "ERROR", hex: "#DE350B", rgb: "222, 53, 11" },
  ];

  return (
    <div>
      <Helmet>
        <title>Colors | Done.ai Brand Guidelines</title>
      </Helmet>

      <S.Title>Colors</S.Title>

      <Section>
        <S.Subtitle>Color Usage Proportions</S.Subtitle>
        <S.Bodytext>
          The 90/10 rule: Use canvas colors for 90% of your interface, brand
          accent for only 10%.
        </S.Bodytext>

        <ProportionBar>
          <ProportionSegment $width={30} $color="#FBFBFB" $textColor="#0B0425">
            30%
          </ProportionSegment>
          <ProportionSegment $width={30} $color="#0B0425">
            30%
          </ProportionSegment>
          <ProportionSegment $width={30} $color="#F0F0F0" $textColor="#0B0425">
            30%
          </ProportionSegment>
          <ProportionSegment $width={7} $color="#6A00D5">
            7%
          </ProportionSegment>
          <ProportionSegment $width={3} $color="#F4EFFF" $textColor="#0B0425">
            3%
          </ProportionSegment>
        </ProportionBar>
        <ProportionLabel>
          Canvas colors (90%) vs. Brand Accent (10%) - Visual representation of
          recommended usage
        </ProportionLabel>
      </Section>

      <Section>
        <S.Subtitle>Canvas Colors</S.Subtitle>
        <S.Bodytext>
          These colors form the environment of the Done.ai interface. Use them
          for 90% of your design - backgrounds, surfaces, text, and dividers.
        </S.Bodytext>

        <ColorsContainer>
          {canvasColors.map((color) => (
            <ColorBoxWrapper key={color.hex}>
              <ColorBox color={color.hex} />
              <ColorName>{color.name}</ColorName>
              <ColorValueWithCopy value={color.hex} onCopy={handleCopy} />
              <ColorValueWithCopy value={`rgb(${color.rgb})`} onCopy={handleCopy} />
            </ColorBoxWrapper>
          ))}
        </ColorsContainer>
      </Section>

      <Section>
        <S.Subtitle>Brand Accent</S.Subtitle>
        <S.Bodytext>
          Use these colors sparingly for emphasis and interactive states. They
          add energy without overwhelming the interface.
        </S.Bodytext>

        <ColorsContainer>
          {brandColors.map((color) => (
            <ColorBoxWrapper key={color.hex}>
              <ColorBox color={color.hex} />
              <ColorName>{color.name}</ColorName>
              <ColorValueWithCopy value={color.hex} onCopy={handleCopy} />
              <ColorValueWithCopy value={`rgb(${color.rgb})`} onCopy={handleCopy} />
            </ColorBoxWrapper>
          ))}
        </ColorsContainer>

        <Callout type="warning" title={<TitleWithIcon><AlertTriangle size={16} strokeWidth={1.5} /> Royal Violet Restriction</TitleWithIcon>}>
          Never use Royal Violet (#6A00D5) as a primary background or for large
          text areas. It's energy - use it sparingly for accents, active states,
          focus rings, and glows. When everything glows, nothing does.
        </Callout>
      </Section>

      <Section>
        <S.Subtitle>Semantic Colors</S.Subtitle>
        <S.Bodytext>
          Status and feedback colors that communicate system state clearly and
          consistently.
        </S.Bodytext>

        <ColorsContainer>
          {semanticColors.map((color) => (
            <ColorBoxWrapper key={color.hex}>
              <ColorBox color={color.hex} />
              <ColorName>{color.name}</ColorName>
              <ColorValueWithCopy value={color.hex} onCopy={handleCopy} />
              <ColorValueWithCopy value={`rgb(${color.rgb})`} onCopy={handleCopy} />
            </ColorBoxWrapper>
          ))}
        </ColorsContainer>
      </Section>

      <Section>
        <S.Subtitle>Color Principles</S.Subtitle>

        <Callout type="success" title={<TitleWithIcon><Check size={16} strokeWidth={1.5} /> Do</TitleWithIcon>}>
          Use high contrast between text and background. Maintain the 90/10 rule
          - 90% canvas colors, 10% accent. Use Royal Violet only for small
          interactive elements.
        </Callout>

        <Callout type="error" title={<TitleWithIcon><X size={16} strokeWidth={1.5} /> Don't</TitleWithIcon>}>
          Don't use Royal Violet for large backgrounds or body text. Don't mix
          too many colors in one view. Don't sacrifice contrast for aesthetics.
        </Callout>
      </Section>

      <Section>
        <S.Subtitle>Developer Reference</S.Subtitle>
        <S.Bodytext>
          Reference table showing color token names across different implementation methods.
        </S.Bodytext>

        <TokenTable>
          <thead>
            <tr>
              <th>Color</th>
              <th>SCSS</th>
              <th>CSS Custom Property</th>
              <th>Tailwind Class</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Pearl White</td>
              <td><code>$pearl-white</code></td>
              <td><code>--color-pearl</code></td>
              <td><code>bg-pearl, text-pearl</code></td>
            </tr>
            <tr>
              <td>Midnight Violet</td>
              <td><code>$midnight-violet</code></td>
              <td><code>--color-midnight</code></td>
              <td><code>bg-midnight, text-midnight</code></td>
            </tr>
            <tr>
              <td>Platinum</td>
              <td><code>$platinum</code></td>
              <td><code>--color-platinum</code></td>
              <td><code>bg-platinum, text-platinum</code></td>
            </tr>
            <tr>
              <td>Royal Violet</td>
              <td><code>$royal-violet</code></td>
              <td><code>--color-violet</code></td>
              <td><code>bg-violet, text-violet</code></td>
            </tr>
            <tr>
              <td>Lavender</td>
              <td><code>$lavender</code></td>
              <td><code>--color-lavender</code></td>
              <td><code>bg-lavender, text-lavender</code></td>
            </tr>
            <tr>
              <td>Success</td>
              <td><code>$success</code></td>
              <td><code>--color-success</code></td>
              <td><code>bg-success, text-success</code></td>
            </tr>
            <tr>
              <td>Warning</td>
              <td><code>$warning</code></td>
              <td><code>--color-warning</code></td>
              <td><code>bg-warning, text-warning</code></td>
            </tr>
            <tr>
              <td>Error</td>
              <td><code>$error</code></td>
              <td><code>--color-error</code></td>
              <td><code>bg-error, text-error</code></td>
            </tr>
          </tbody>
        </TokenTable>

        <S.Bodytext style={{ marginTop: 'var(--space-5)' }}>
          Copy-paste ready SCSS variables for SvelteKit projects.
        </S.Bodytext>

        <CodeBlock language="scss" title="Color Variables">
{`// Colors for SvelteKit + SCSS
$pearl-white: #FBFBFB;
$midnight-violet: #0B0425;
$platinum: #F0F0F0;
$royal-violet: #6A00D5;
$lavender: #F4EFFF;
$success: #006A4E;
$warning: #B45309;
$error: #DE350B;`}
        </CodeBlock>
      </Section>

      {copiedValue && (
        <CopiedToast>
          <Check size={16} strokeWidth={1.5} />
          Copied {copiedValue}
        </CopiedToast>
      )}
    </div>
  );
};

export default Colors;
