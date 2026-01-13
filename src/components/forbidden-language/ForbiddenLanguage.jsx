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

const KillList = styled.div`
  display: grid;
  gap: var(--space-3);
  margin: var(--space-5) 0;
`;

const KillItem = styled.div`
  padding: var(--space-4);
  border-radius: var(--radius-md);
  background-color: rgba(222, 53, 11, 0.05);
  border-left: 4px solid var(--color-error);
  font-size: var(--text-body);
  color: var(--color-text-primary);
  font-weight: 500;

  &:before {
    content: '❌ ';
    margin-right: var(--space-2);
  }
`;

const TestBox = styled.div`
  padding: var(--space-6);
  border-radius: var(--radius-lg);
  background-color: var(--color-midnight);
  color: var(--color-pearl);
  font-size: var(--text-h2);
  font-weight: 500;
  text-align: center;
  margin: var(--space-6) 0;
`;

const ComparisonTable = styled.table`
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
  background-color: ${props => props.good ? 'rgba(0, 106, 78, 0.1)' : 'rgba(222, 53, 11, 0.1)'};
  border-bottom: 2px solid var(--color-border);
`;

const TableCell = styled.td`
  padding: var(--space-3) var(--space-4);
  color: var(--color-text-secondary);
  border-bottom: 1px solid var(--color-border);
  line-height: 1.6;
  vertical-align: top;
`;

const CategorySection = styled.div`
  margin: var(--space-6) 0;
  padding: var(--space-5);
  border-radius: var(--radius-lg);
  background-color: var(--color-surface-secondary);
`;

const CategoryTitle = styled.div`
  font-size: var(--text-h3);
  font-weight: 500;
  color: var(--color-text-primary);
  margin-bottom: var(--space-3);
`;

const ForbiddenLanguage = () => {
  return (
    <PageContainer>
      <Helmet>
        <title>Forbidden Language | Done.ai Brand Guidelines</title>
      </Helmet>

      <PageTitle>Forbidden Language</PageTitle>

      <SectionDescription>
        These words and phrases are banned from Done.ai copy. They're overused, vague, or sound like every other SaaS company. Kill them on sight.
      </SectionDescription>

      {/* The Kill List */}
      <Section>
        <SectionTitle>The Kill List</SectionTitle>
        <SectionDescription>
          If you find any of these in your copy, delete them immediately. No exceptions.
        </SectionDescription>

        <KillList>
          <KillItem>"Streamline" / "Optimize" / "Boost" / "Unleash"</KillItem>
          <KillItem>"Work smarter, not harder"</KillItem>
          <KillItem>"Game-changing" / "Revolutionary" / "Cutting-edge"</KillItem>
          <KillItem>"Empower" / "Elevate" / "Transform"</KillItem>
          <KillItem>"Seamless" (overused to death)</KillItem>
          <KillItem>"Next-generation" / "Best-in-class"</KillItem>
          <KillItem>"Leverage" (as a verb for using something)</KillItem>
          <KillItem>"Synergy" / "Ecosystem" / "Holistic"</KillItem>
          <KillItem>"Drive growth" / "Accelerate success"</KillItem>
          <KillItem>"Innovative solution" / "Powerful platform"</KillItem>
        </KillList>
      </Section>

      {/* The Competitor Test */}
      <Section>
        <SectionTitle>The Competitor Test</SectionTitle>

        <TestBox>
          "If a competitor could say it, don't say it."
        </TestBox>

        <SectionDescription>
          Generic statements work for any company. That's the problem. Your copy should be so specific to Done.ai that a competitor couldn't use it without lying.
        </SectionDescription>

        <Callout type="error" title="Generic (Bad)">
          "Our platform empowers teams to streamline workflows and boost productivity with innovative solutions."
        </Callout>

        <Callout type="success" title="Specific (Good)">
          "Track leads, close deals, and invoice clients - all in one place. No more switching between five tools."
        </Callout>
      </Section>

      {/* What To Do Instead */}
      <Section>
        <SectionTitle>What To Do Instead</SectionTitle>
        <SectionDescription>
          Be specific about what's actually done. Show, don't tell. Use concrete details instead of abstract claims.
        </SectionDescription>

        <ComparisonTable>
          <thead>
            <tr>
              <TableHeader>❌ Forbidden</TableHeader>
              <TableHeader good>✓ Write This</TableHeader>
            </tr>
          </thead>
          <tbody>
            <tr>
              <TableCell>"Streamline your workflow"</TableCell>
              <TableCell>"Stop switching between five different apps"</TableCell>
            </tr>
            <tr>
              <TableCell>"Boost productivity"</TableCell>
              <TableCell>"Save 3 hours per day on manual data entry"</TableCell>
            </tr>
            <tr>
              <TableCell>"Empower your team"</TableCell>
              <TableCell>"Give your team the tools they actually need"</TableCell>
            </tr>
            <tr>
              <TableCell>"Seamless integration"</TableCell>
              <TableCell>"Connects with Salesforce, HubSpot, and Stripe"</TableCell>
            </tr>
            <tr>
              <TableCell>"Revolutionary platform"</TableCell>
              <TableCell>"Everything your sales team needs, nothing it doesn't"</TableCell>
            </tr>
            <tr>
              <TableCell>"Transform your business"</TableCell>
              <TableCell>"Close 30% more deals with better lead tracking"</TableCell>
            </tr>
          </tbody>
        </ComparisonTable>
      </Section>

      {/* Category-Specific Guidance */}
      <Section>
        <SectionTitle>Why These Words Fail</SectionTitle>

        <CategorySection>
          <CategoryTitle>Empty Verbs</CategoryTitle>
          <SectionDescription>
            Words like "streamline," "optimize," "empower," and "transform" sound impressive but mean nothing. They're verbal filler. What specifically are you doing? Say that instead.
          </SectionDescription>
        </CategorySection>

        <CategorySection>
          <CategoryTitle>Hype Adjectives</CategoryTitle>
          <SectionDescription>
            "Revolutionary," "game-changing," "cutting-edge" - these are claims, not facts. If your product is truly revolutionary, the features will show it. You don't need to say it.
          </SectionDescription>
        </CategorySection>

        <CategorySection>
          <CategoryTitle>Vague Benefits</CategoryTitle>
          <SectionDescription>
            "Boost productivity" and "drive growth" could apply to literally anything. Be specific: How much time saved? What percentage increase? What specific problem solved?
          </SectionDescription>
        </CategorySection>

        <CategorySection>
          <CategoryTitle>Corporate Jargon</CategoryTitle>
          <SectionDescription>
            "Leverage," "synergy," "holistic" - real people don't talk like this. Your customers are humans, not MBA textbooks. Write like one.
          </SectionDescription>
        </CategorySection>
      </Section>

      {/* The Rule */}
      <Section>
        <SectionTitle>The Simple Rule</SectionTitle>

        <Callout type="info" title="When in doubt">
          If you can replace a word with something more specific, do it. If you can't defend a claim with a concrete fact, cut it. If it sounds like something from a TV commercial, rewrite it.
        </Callout>

        <SectionDescription>
          Done.ai copy should be so clear, so specific, and so direct that there's no room for these empty words. Our customers don't need hype. They need to know what's done.
        </SectionDescription>
      </Section>
    </PageContainer>
  );
};

export default ForbiddenLanguage;
