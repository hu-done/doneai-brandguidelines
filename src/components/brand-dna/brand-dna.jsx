import React from "react";
import { Helmet } from "react-helmet-async";
import styled from "styled-components";
import * as S from "../commonStyles/index.js";

const PositioningBox = styled.div`
  background-color: var(--color-midnight);
  color: var(--color-pearl);
  padding: var(--space-6);
  border-radius: var(--radius-xl);
  margin: var(--space-5) 0;

  /* Dark mode: invert to light background */
  .dark & {
    background-color: var(--color-pearl);
    color: var(--color-midnight);
  }
`;

const PositioningText = styled.p`
  font-size: var(--text-body);
  line-height: 1.6;
  color: inherit;
  margin: 0;
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--space-5);
  margin: var(--space-5) 0;
`;

const ValueCard = styled.div`
  background-color: var(--color-surface-secondary);
  padding: var(--space-5);
  border-radius: var(--radius-lg);
`;

const ValueTitle = styled.h3`
  font-size: var(--text-h3);
  font-weight: 500;
  margin-bottom: var(--space-3);
  color: var(--color-text-primary);

  u {
    text-decoration: underline;
    text-decoration-color: var(--color-violet);
    text-decoration-thickness: 2px;
    text-underline-offset: 4px;
  }
`;

const ValueText = styled.p`
  font-size: var(--text-body-small);
  line-height: 1.6;
  color: var(--color-text-secondary);

  b {
    color: var(--color-text-primary);
    font-weight: 600;
  }
`;

const SectionBox = styled.div`
  margin: var(--space-6) 0;
`;

export default function BrandDNA() {
  return (
    <div>
      <Helmet>
        <title>Brand DNA | Done.ai</title>
      </Helmet>
      <S.Title>Our Brand</S.Title>

      <SectionBox>
        <S.Subtitle>Brand Positioning</S.Subtitle>
        <PositioningBox>
          <PositioningText>
            Done.ai is an advanced, unified business infrastructure platform integrating
            CRM, Accounting, Fintech, Inventory, and operations into a single automated core.
            We sell the finality of the result, not the work of getting there. The name says it: Done.
          </PositioningText>
        </PositioningBox>
      </SectionBox>

      <SectionBox>
        <S.Subtitle>Vision</S.Subtitle>
        <S.Bodytext>
          We transform business complexity into clarity, giving SMEs the power to
          grow with confidence.
        </S.Bodytext>
      </SectionBox>

      <SectionBox>
        <S.Subtitle>Mission</S.Subtitle>
        <S.Bodytext>
          We unify SaaS, operations, and embedded financial services into one
          intelligent platform. As the one-stop shop for ambitious SMEs, we combine
          AI-powered workflows with a distribution flywheel from our ecosystem,
          giving customers clarity, confidence, and capital to scale.
        </S.Bodytext>
      </SectionBox>

      <SectionBox>
        <S.Subtitle>Our Core Values</S.Subtitle>

        <ValuesGrid>
          <ValueCard>
            <ValueTitle>
              <u>Trust</u>
            </ValueTitle>
            <ValueText>
              We earn it through <b>transparency</b> and reliability. Every interaction,
              every product decision, every relationship—built on integrity.
            </ValueText>
          </ValueCard>

          <ValueCard>
            <ValueTitle>
              <u>Ownership</u>
            </ValueTitle>
            <ValueText>
              We think and act like <b>founders</b>. We take responsibility for outcomes,
              not just tasks.
            </ValueText>
          </ValueCard>

          <ValueCard>
            <ValueTitle>
              <u>Clarity</u>
            </ValueTitle>
            <ValueText>
              We <b>simplify complexity</b> for customers and ourselves. No noise,
              no bloat—just what matters.
            </ValueText>
          </ValueCard>

          <ValueCard>
            <ValueTitle>
              <u>Collaboration</u>
            </ValueTitle>
            <ValueText>
              We build stronger <b>outcomes together</b>. The best solutions come
              from diverse perspectives working toward shared goals.
            </ValueText>
          </ValueCard>

          <ValueCard>
            <ValueTitle>
              <u>Progress</u>
            </ValueTitle>
            <ValueText>
              We move fast, learn, and <b>raise the bar</b> every day. Speed with
              purpose beats perfection in isolation.
            </ValueText>
          </ValueCard>
        </ValuesGrid>
      </SectionBox>
    </div>
  );
}
