import React from "react";
import { Helmet } from "react-helmet-async";
import styled from "styled-components";
import { X, Check } from "lucide-react";
import * as S from "../commonStyles/index.js";
import Callout from "../shared/Callout";

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
  display: flex;
  align-items: flex-start;
  gap: var(--space-2);
`;

const IconWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
  margin-top: 2px;
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

  /* Dark mode: invert to light background */
  .dark & {
    background-color: var(--color-pearl);
    color: var(--color-midnight);
  }
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

const HeaderWithIcon = styled.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
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
    <div>
      <Helmet>
        <title>Forbidden Language | Done.ai Brand Guidelines</title>
      </Helmet>

      <S.Title>Forbidden Language</S.Title>

      <S.Bodytext>
        These words and phrases are banned from Done.ai copy. They're overused, vague, or sound like every other SaaS company. Kill them on sight.
      </S.Bodytext>

      <S.Subtitle>The Kill List</S.Subtitle>
      <S.Bodytext>
        If you find any of these in your copy, delete them immediately. No exceptions.
      </S.Bodytext>

        <KillList>
          <KillItem>
            <IconWrapper>
              <X size={16} strokeWidth={1.5} color="var(--color-error)" />
            </IconWrapper>
            <span>"Streamline" / "Optimize" / "Boost" / "Unleash"</span>
          </KillItem>
          <KillItem>
            <IconWrapper>
              <X size={16} strokeWidth={1.5} color="var(--color-error)" />
            </IconWrapper>
            <span>"Work smarter, not harder"</span>
          </KillItem>
          <KillItem>
            <IconWrapper>
              <X size={16} strokeWidth={1.5} color="var(--color-error)" />
            </IconWrapper>
            <span>"Game-changing" / "Revolutionary" / "Cutting-edge"</span>
          </KillItem>
          <KillItem>
            <IconWrapper>
              <X size={16} strokeWidth={1.5} color="var(--color-error)" />
            </IconWrapper>
            <span>"Empower" / "Elevate" / "Transform"</span>
          </KillItem>
          <KillItem>
            <IconWrapper>
              <X size={16} strokeWidth={1.5} color="var(--color-error)" />
            </IconWrapper>
            <span>"Seamless" (overused to death)</span>
          </KillItem>
          <KillItem>
            <IconWrapper>
              <X size={16} strokeWidth={1.5} color="var(--color-error)" />
            </IconWrapper>
            <span>"Next-generation" / "Best-in-class"</span>
          </KillItem>
          <KillItem>
            <IconWrapper>
              <X size={16} strokeWidth={1.5} color="var(--color-error)" />
            </IconWrapper>
            <span>"Leverage" (as a verb for using something)</span>
          </KillItem>
          <KillItem>
            <IconWrapper>
              <X size={16} strokeWidth={1.5} color="var(--color-error)" />
            </IconWrapper>
            <span>"Synergy" / "Ecosystem" / "Holistic"</span>
          </KillItem>
          <KillItem>
            <IconWrapper>
              <X size={16} strokeWidth={1.5} color="var(--color-error)" />
            </IconWrapper>
            <span>"Drive growth" / "Accelerate success"</span>
          </KillItem>
          <KillItem>
            <IconWrapper>
              <X size={16} strokeWidth={1.5} color="var(--color-error)" />
            </IconWrapper>
            <span>"Innovative solution" / "Powerful platform"</span>
          </KillItem>
        </KillList>

      <S.Subtitle>The Competitor Test</S.Subtitle>

        <TestBox>
          "If a competitor could say it, don't say it."
        </TestBox>

        <S.Bodytext>
          Generic statements work for any company. That's the problem. Your copy should be so specific to Done.ai that a competitor couldn't use it without lying.
        </S.Bodytext>

        <Callout type="error" title="Generic (Bad)">
          "Our platform empowers teams to streamline workflows and boost productivity with innovative solutions."
        </Callout>

        <Callout type="success" title="Specific (Good)">
          "Track leads, close deals, and invoice clients - all in one place. No more switching between five tools."
        </Callout>

      <S.Subtitle>What To Do Instead</S.Subtitle>
      <S.Bodytext>
        Be specific about what's actually done. Show, don't tell. Use concrete details instead of abstract claims.
      </S.Bodytext>

        <ComparisonTable>
          <thead>
            <tr>
              <TableHeader>
                <HeaderWithIcon>
                  <X size={16} strokeWidth={1.5} />
                  Forbidden
                </HeaderWithIcon>
              </TableHeader>
              <TableHeader good>
                <HeaderWithIcon>
                  <Check size={16} strokeWidth={1.5} />
                  Write This
                </HeaderWithIcon>
              </TableHeader>
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

      <S.Subtitle>Why These Words Fail</S.Subtitle>

      <CategorySection>
        <CategoryTitle>Empty Verbs</CategoryTitle>
        <S.Bodytext>
          Words like "streamline," "optimize," "empower," and "transform" sound impressive but mean nothing. They're verbal filler. What specifically are you doing? Say that instead.
        </S.Bodytext>
      </CategorySection>

      <CategorySection>
        <CategoryTitle>Hype Adjectives</CategoryTitle>
        <S.Bodytext>
          "Revolutionary," "game-changing," "cutting-edge" - these are claims, not facts. If your product is truly revolutionary, the features will show it. You don't need to say it.
        </S.Bodytext>
      </CategorySection>

      <CategorySection>
        <CategoryTitle>Vague Benefits</CategoryTitle>
        <S.Bodytext>
          "Boost productivity" and "drive growth" could apply to literally anything. Be specific: How much time saved? What percentage increase? What specific problem solved?
        </S.Bodytext>
      </CategorySection>

      <CategorySection>
        <CategoryTitle>Corporate Jargon</CategoryTitle>
        <S.Bodytext>
          "Leverage," "synergy," "holistic" - real people don't talk like this. Your customers are humans, not MBA textbooks. Write like one.
        </S.Bodytext>
      </CategorySection>


      <S.Subtitle>The Simple Rule</S.Subtitle>

      <Callout type="info" title="When in doubt">
        If you can replace a word with something more specific, do it. If you can't defend a claim with a concrete fact, cut it. If it sounds like something from a TV commercial, rewrite it.
      </Callout>

      <S.Bodytext>
        Done.ai copy should be so clear, so specific, and so direct that there's no room for these empty words. Our customers don't need hype. They need to know what's done.
      </S.Bodytext>
    </div>
  );
};

export default ForbiddenLanguage;
