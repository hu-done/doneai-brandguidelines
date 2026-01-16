import React from "react";
import { Helmet } from "react-helmet-async";
import styled from "styled-components";
import { Check, X } from "lucide-react";
import * as S from "../commonStyles/index.js";
import Callout from "../shared/Callout";

const CorePrinciple = styled.div`
  font-size: var(--text-hero);
  font-weight: 500;
  color: var(--color-text-primary);
  text-align: center;
  padding: var(--space-8) var(--space-5);
  margin: var(--space-6) 0;
  background: linear-gradient(135deg, var(--color-lavender) 0%, var(--color-surface-secondary) 100%);
  border-radius: var(--radius-lg);
`;

const CharacteristicsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--space-4);
  margin: var(--space-5) 0;
`;

const CharacteristicCard = styled.div`
  padding: var(--space-5);
  border-radius: var(--radius-lg);
  background-color: var(--color-surface-secondary);
  box-shadow: var(--shadow-sm);
`;

const CharacteristicTitle = styled.div`
  font-size: var(--text-h3);
  font-weight: 500;
  color: var(--color-text-primary);
  margin-bottom: var(--space-2);
`;

const CharacteristicText = styled.div`
  font-size: var(--text-body-small);
  color: var(--color-text-secondary);
  line-height: 1.6;
`;

const ExampleTable = styled.table`
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

const TestBox = styled.div`
  padding: var(--space-5);
  border-radius: var(--radius-lg);
  background-color: var(--color-midnight);
  color: var(--color-pearl);
  font-size: var(--text-h3);
  font-weight: 500;
  text-align: center;
  margin: var(--space-5) 0;

  /* Dark mode: invert to light background */
  .dark & {
    background-color: var(--color-pearl);
    color: var(--color-midnight);
  }
`;

const TitleWithIcon = styled.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
`;

const ToneOfVoice = () => {
  return (
    <div>
      <Helmet>
        <title>Tone of Voice | Done.ai Brand Guidelines</title>
      </Helmet>

      <S.Title>Tone of Voice</S.Title>

      <CorePrinciple>Authority through Simplicity</CorePrinciple>
      <S.Bodytext style={{ textAlign: 'center', fontSize: 'var(--text-body)' }}>
        Done.ai makes complex business infrastructure feel simple and authoritative. The brand is whisper-quiet confident - it doesn't shout, it states.
      </S.Bodytext>

      <S.Subtitle>Tone Characteristics</S.Subtitle>
      <S.Bodytext>
        Our voice is distinctive and consistent. These characteristics guide every word we write.
      </S.Bodytext>

        <CharacteristicsList>
          <CharacteristicCard>
            <CharacteristicTitle>Concise and Direct</CharacteristicTitle>
            <CharacteristicText>
              Say what needs to be said, nothing more. Cut the fluff. Every word earns its place.
            </CharacteristicText>
          </CharacteristicCard>

          <CharacteristicCard>
            <CharacteristicTitle>Whisper-Quiet Confidence</CharacteristicTitle>
            <CharacteristicText>
              Authority doesn't need volume. State facts. Let results speak. No hype required.
            </CharacteristicText>
          </CharacteristicCard>

          <CharacteristicCard>
            <CharacteristicTitle>Expert, Not Academic</CharacteristicTitle>
            <CharacteristicText>
              We know our stuff, but we explain it clearly. Complexity should feel simple.
            </CharacteristicText>
          </CharacteristicCard>

          <CharacteristicCard>
            <CharacteristicTitle>Confident, Not Arrogant</CharacteristicTitle>
            <CharacteristicText>
              We're good at what we do. We don't need to tell you how great we are - we show you.
            </CharacteristicText>
          </CharacteristicCard>
        </CharacteristicsList>

      <S.Subtitle>The "Done." Hook</S.Subtitle>
      <S.Bodytext>
        Our name is our message. Format: Question → "Done." This creates immediate clarity and confidence.
      </S.Bodytext>

        <ExampleTable>
          <thead>
            <tr>
              <TableHeader>Instead of this</TableHeader>
              <TableHeader>Write this</TableHeader>
            </tr>
          </thead>
          <tbody>
            <tr>
              <TableCell>
                "Streamline your lead management process with our innovative platform designed to optimize your workflow..."
              </TableCell>
              <TableCell>
                "Need to manage leads without the mess? Done."
              </TableCell>
            </tr>
            <tr>
              <TableCell>
                "Revolutionize the way you handle your entire sales pipeline with cutting-edge technology..."
              </TableCell>
              <TableCell>
                "Want every deal in one place? Done."
              </TableCell>
            </tr>
            <tr>
              <TableCell>
                "Transform your business operations with seamless integration capabilities..."
              </TableCell>
              <TableCell>
                "Need your tools to work together? Done."
              </TableCell>
            </tr>
            <tr>
              <TableCell>
                "Empower your team to achieve unprecedented levels of productivity..."
              </TableCell>
              <TableCell>
                "Want your team to stop wasting time? Done."
              </TableCell>
            </tr>
          </tbody>
        </ExampleTable>

        <Callout type="info" title="Why It Works">
          The "Done." hook is memorable, confident, and unique. It focuses on resolution, not process. It's what our customers want to hear - not how we'll do it, but that it's handled.
        </Callout>

      <S.Subtitle>The Read-Out-Loud Test</S.Subtitle>

        <TestBox>
          "If it sounds like a used car commercial, rewrite it."
        </TestBox>

      <S.Bodytext>
        Read your copy out loud. Does it sound like something a real person would say? Or does it sound like corporate marketing speak? If it's the latter, start over.
      </S.Bodytext>

        <Callout type="warning" title="Warning Signs">
          If your copy includes phrases like "cutting-edge," "game-changing," "revolutionize," or "empower," you've failed the test. Real people don't talk like that.
        </Callout>

      <S.Subtitle>Writing Examples</S.Subtitle>

        <Callout type="success" title={<TitleWithIcon><Check size={16} strokeWidth={1.5} /> Good</TitleWithIcon>}>
          "Track every lead. Close more deals. Stop using five different tools."
        </Callout>

        <Callout type="success" title={<TitleWithIcon><Check size={16} strokeWidth={1.5} /> Good</TitleWithIcon>}>
          "Your sales team wastes 3 hours a day switching between apps. We fixed that."
        </Callout>

        <Callout type="error" title={<TitleWithIcon><X size={16} strokeWidth={1.5} /> Bad</TitleWithIcon>}>
          "Streamline and optimize your workflow with our revolutionary, cutting-edge platform that empowers teams to work smarter, not harder."
        </Callout>

        <Callout type="error" title={<TitleWithIcon><X size={16} strokeWidth={1.5} /> Bad</TitleWithIcon>}>
          "Unleash the full potential of your sales organization with game-changing technology."
        </Callout>

      <S.Subtitle>Key Principles</S.Subtitle>

        <CharacteristicsList>
          <CharacteristicCard>
            <CharacteristicTitle>Focus on Resolution</CharacteristicTitle>
            <CharacteristicText>
              Talk about what's done, not how we do it. Customers care about results.
            </CharacteristicText>
          </CharacteristicCard>

          <CharacteristicCard>
            <CharacteristicTitle>Be Specific</CharacteristicTitle>
            <CharacteristicText>
              "Save 3 hours per day" beats "boost productivity." Numbers tell stories.
            </CharacteristicText>
          </CharacteristicCard>

          <CharacteristicCard>
            <CharacteristicTitle>Speak Human</CharacteristicTitle>
            <CharacteristicText>
              Use contractions. Use short sentences. Write like you talk (but cleaner).
            </CharacteristicText>
          </CharacteristicCard>

          <CharacteristicCard>
            <CharacteristicTitle>Trust Silence</CharacteristicTitle>
            <CharacteristicText>
              You don't need to fill every space with words. White space is powerful.
            </CharacteristicText>
          </CharacteristicCard>
        </CharacteristicsList>
    </div>
  );
};

export default ToneOfVoice;
