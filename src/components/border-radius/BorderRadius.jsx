import React from "react";
import { Helmet } from "react-helmet-async";
import styled from "styled-components";
import { Check, X } from "lucide-react";
import Callout from "../shared/Callout";

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

const RadiusRule = styled.div`
  padding: var(--space-6);
  border-radius: var(--radius-lg);
  background-color: var(--color-midnight);
  color: var(--color-pearl);
  font-size: var(--text-h2);
  font-weight: 500;
  text-align: center;
  margin: var(--space-6) 0;
`;

const RadiusScale = styled.div`
  display: grid;
  gap: var(--space-5);
  margin: var(--space-5) 0;
`;

const RadiusItem = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-5);
  padding: var(--space-5);
  background-color: var(--color-card-bg);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
`;

const RadiusVisual = styled.div`
  width: 120px;
  height: 120px;
  background-color: var(--color-violet);
  border-radius: ${props => props.radius};
  flex-shrink: 0;
  box-shadow: var(--shadow-md);
`;

const RadiusInfo = styled.div`
  flex: 1;
`;

const RadiusName = styled.div`
  font-size: var(--text-h3);
  font-weight: 500;
  color: var(--color-text-primary);
  margin-bottom: var(--space-1);
`;

const RadiusValue = styled.div`
  font-size: var(--text-body-small);
  color: var(--color-text-secondary);
  font-family: 'Courier New', monospace;
  margin-bottom: var(--space-2);
`;

const RadiusUsage = styled.div`
  font-size: var(--text-body-small);
  color: var(--color-text-secondary);
  line-height: 1.6;
`;

const NestingDemo = styled.div`
  padding: var(--space-6);
  background-color: rgba(11, 4, 37, 0.03);
  border-radius: var(--radius-xl);
  margin: var(--space-6) 0;
`;

const OuterCard = styled.div`
  padding: var(--space-5);
  background-color: var(--color-card-bg);
  border-radius: var(--radius-lg);
  margin-bottom: var(--space-4);
  box-shadow: var(--shadow-sm);
`;

const InnerCard = styled.div`
  padding: var(--space-4);
  background-color: var(--color-midnight);
  color: var(--color-pearl);
  border-radius: var(--radius-md);
  font-size: var(--text-body-small);
`;

const Formula = styled.div`
  padding: var(--space-4);
  background-color: var(--color-card-bg);
  border-radius: var(--radius-md);
  font-family: 'Courier New', monospace;
  font-size: var(--text-body);
  color: var(--color-text-primary);
  text-align: center;
  margin: var(--space-5) 0;
  box-shadow: var(--shadow-sm);
`;

const ExampleGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-5);
  margin: var(--space-5) 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ExampleBox = styled.div`
  padding: var(--space-5);
  border-radius: var(--radius-lg);
  background-color: ${props => props.good ? 'rgba(0, 106, 78, 0.05)' : 'rgba(222, 53, 11, 0.05)'};
  border-left: 4px solid ${props => props.good ? 'var(--color-success)' : 'var(--color-error)'};
`;

const ExampleLabelWrapper = styled.div`
  font-size: var(--text-body);
  font-weight: 500;
  color: var(--color-text-primary);
  margin-bottom: var(--space-3);
  display: flex;
  align-items: center;
  gap: var(--space-2);
`;

const ExampleLabel = ({ icon, children }) => (
  <ExampleLabelWrapper>
    {icon === "check" && <Check size={18} strokeWidth={2.5} color="var(--color-success)" />}
    {icon === "x" && <X size={18} strokeWidth={2.5} color="var(--color-error)" />}
    {children}
  </ExampleLabelWrapper>
);

const GoodNesting = styled.div`
  padding: ${props => props.outer ? 'var(--space-5)' : 'var(--space-3)'};
  background-color: ${props => props.outer ? 'var(--color-card-bg)' : 'var(--color-violet)'};
  color: ${props => props.outer ? 'var(--color-text-primary)' : 'var(--color-pearl)'};
  border-radius: ${props => props.outer ? 'var(--radius-lg)' : 'var(--radius-md)'};
  font-size: var(--text-body-small);
  box-shadow: ${props => props.outer ? 'var(--shadow-sm)' : 'none'};
`;

const BadNesting = styled.div`
  padding: ${props => props.outer ? 'var(--space-5)' : 'var(--space-3)'};
  background-color: ${props => props.outer ? 'var(--color-card-bg)' : 'var(--color-violet)'};
  color: ${props => props.outer ? 'var(--color-text-primary)' : 'var(--color-pearl)'};
  border-radius: var(--radius-lg);
  font-size: var(--text-body-small);
  box-shadow: ${props => props.outer ? 'var(--shadow-sm)' : 'none'};
`;

const BorderRadius = () => {
  return (
    <PageContainer>
      <Helmet>
        <title>Border Radius | Done.ai Brand Guidelines</title>
      </Helmet>

      <PageTitle>Border Radius</PageTitle>

      {/* Radius Scale */}
      <Section>
        <SectionTitle>Radius Scale</SectionTitle>
        <SectionDescription>
          Our border radius scale creates visual consistency and hierarchy. From tight corners on small elements to generous curves on large containers.
        </SectionDescription>

        <RadiusScale>
          <RadiusItem>
            <RadiusVisual radius="var(--radius-sm)" />
            <RadiusInfo>
              <RadiusName>Small</RadiusName>
              <RadiusValue>4px | --radius-sm</RadiusValue>
              <RadiusUsage>Tags, badges, small UI elements</RadiusUsage>
            </RadiusInfo>
          </RadiusItem>

          <RadiusItem>
            <RadiusVisual radius="var(--radius-md)" />
            <RadiusInfo>
              <RadiusName>Medium</RadiusName>
              <RadiusValue>8px | --radius-md</RadiusValue>
              <RadiusUsage>Buttons, inputs, small cards</RadiusUsage>
            </RadiusInfo>
          </RadiusItem>

          <RadiusItem>
            <RadiusVisual radius="var(--radius-lg)" />
            <RadiusInfo>
              <RadiusName>Large</RadiusName>
              <RadiusValue>16px | --radius-lg</RadiusValue>
              <RadiusUsage>Cards, modals, containers (this page uses this for examples)</RadiusUsage>
            </RadiusInfo>
          </RadiusItem>

          <RadiusItem>
            <RadiusVisual radius="var(--radius-xl)" />
            <RadiusInfo>
              <RadiusName>Extra Large</RadiusName>
              <RadiusValue>24px | --radius-xl</RadiusValue>
              <RadiusUsage>Large cards, hero sections, prominent containers</RadiusUsage>
            </RadiusInfo>
          </RadiusItem>

          <RadiusItem>
            <RadiusVisual radius="var(--radius-full)" />
            <RadiusInfo>
              <RadiusName>Full</RadiusName>
              <RadiusValue>9999px | --radius-full</RadiusValue>
              <RadiusUsage>Pills, avatars, circular elements</RadiusUsage>
            </RadiusInfo>
          </RadiusItem>
        </RadiusScale>
      </Section>

      {/* The Radius Rule */}
      <Section>
        <SectionTitle>The Radius Rule</SectionTitle>

        <RadiusRule>
          Inner radius = Outer radius − Padding
        </RadiusRule>

        <SectionDescription>
          When nesting elements with border radius, the inner element's radius should be the outer radius minus the padding between them. This creates optically perfect nested corners.
        </SectionDescription>

        <Formula>
          If outer = 16px and padding = 8px<br/>
          Then inner = 16px - 8px = 8px
        </Formula>

        <Callout type="info" title="Why This Matters">
          Without this rule, nested corners look misaligned. The inner radius needs to be smaller to maintain the same visual weight as the outer curve. This is mathematical precision meeting visual harmony.
        </Callout>
      </Section>

      {/* Nesting Demo */}
      <Section>
        <SectionTitle>Nesting Example</SectionTitle>
        <SectionDescription>
          See the radius rule in action. Notice how the inner corners align perfectly with the outer curve.
        </SectionDescription>

        <NestingDemo>
          <OuterCard>
            <div style={{ marginBottom: 'var(--space-2)', fontSize: 'var(--text-body-small)', color: 'var(--color-text-secondary)' }}>
              Outer Card: 16px radius (--radius-lg)
            </div>
            <InnerCard>
              Inner Card: 8px radius (--radius-md)<br/>
              16px - 8px padding = 8px (correct)
            </InnerCard>
          </OuterCard>
        </NestingDemo>
      </Section>

      {/* Good vs Bad */}
      <Section>
        <SectionTitle>Good vs Bad Nesting</SectionTitle>

        <ExampleGrid>
          <ExampleBox good>
            <ExampleLabel icon="check">Correct Nesting</ExampleLabel>
            <GoodNesting outer>
              Outer: 16px radius
              <div style={{ marginTop: 'var(--space-3)' }}>
                <GoodNesting>
                  Inner: 8px radius<br/>
                  (16px - 8px padding)
                </GoodNesting>
              </div>
            </GoodNesting>
            <SectionDescription style={{ marginTop: 'var(--space-3)', marginBottom: 0, fontSize: 'var(--text-body-small)' }}>
              The inner corners align perfectly with the outer curve
            </SectionDescription>
          </ExampleBox>

          <ExampleBox>
            <ExampleLabel icon="x">Incorrect Nesting</ExampleLabel>
            <BadNesting outer>
              Outer: 16px radius
              <div style={{ marginTop: 'var(--space-3)' }}>
                <BadNesting>
                  Inner: 16px radius<br/>
                  (same as outer)
                </BadNesting>
              </div>
            </BadNesting>
            <SectionDescription style={{ marginTop: 'var(--space-3)', marginBottom: 0, fontSize: 'var(--text-body-small)' }}>
              The inner corners don't align - they protrude beyond the outer curve
            </SectionDescription>
          </ExampleBox>
        </ExampleGrid>
      </Section>

      {/* Usage Guidelines */}
      <Section>
        <SectionTitle>Usage Guidelines</SectionTitle>

        <Callout type="success" title="Do">
          Use consistent radius for similar elements (all buttons use 8px). Apply the nesting rule when stacking rounded elements. Use larger radius for larger elements. Match radius to the weight of the element.
        </Callout>

        <Callout type="error" title="Don't">
          Don't mix different radius values randomly. Don't use the same radius for nested elements. Don't use tiny radius on large elements or huge radius on small elements. Don't forget to adjust for mobile.
        </Callout>
      </Section>

      {/* Quick Reference */}
      <Section>
        <SectionTitle>Quick Reference</SectionTitle>

        <Callout type="info">
          <strong>Tags/Badges:</strong> 4px (--radius-sm)<br/>
          <strong>Buttons/Inputs:</strong> 8px (--radius-md)<br/>
          <strong>Cards/Modals:</strong> 16px (--radius-lg)<br/>
          <strong>Large Sections:</strong> 24px (--radius-xl)<br/>
          <strong>Avatars/Pills:</strong> 9999px (--radius-full)
        </Callout>
      </Section>
    </PageContainer>
  );
};

export default BorderRadius;
