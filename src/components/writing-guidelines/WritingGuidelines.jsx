import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import styled from "styled-components";
import { Check, X, AlertCircle, Search } from "lucide-react";
import * as S from "../commonStyles/index.js";
import Callout from "../shared/Callout";

const HeroSection = styled.div`
  margin-bottom: var(--space-6);
`;

const HeroSubtitle = styled.p`
  font-size: var(--text-h3);
  color: var(--color-text-secondary);
  margin-top: var(--space-2);
`;

const PrinciplesList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--space-4);
  margin: var(--space-5) 0;
`;

const PrincipleCard = styled.div`
  padding: var(--space-5);
  border-radius: var(--radius-lg);
  background-color: var(--color-surface-secondary);
  box-shadow: var(--shadow-sm);
`;

const PrincipleTitle = styled.div`
  font-size: var(--text-h3);
  font-weight: 500;
  color: var(--color-text-primary);
  margin-bottom: var(--space-2);
`;

const PrincipleText = styled.div`
  font-size: var(--text-body-small);
  color: var(--color-text-secondary);
  line-height: 1.6;
`;

const DoneHookExample = styled.div`
  padding: var(--space-6);
  border-radius: var(--radius-lg);
  background: linear-gradient(135deg, var(--color-lavender) 0%, var(--color-surface-secondary) 100%);
  margin: var(--space-5) 0;
`;

const HookFormat = styled.div`
  font-size: var(--text-h2);
  font-weight: 500;
  color: var(--color-text-primary);
  text-align: center;
  margin-bottom: var(--space-4);
`;

const ExampleList = styled.div`
  display: grid;
  gap: var(--space-3);
  margin-top: var(--space-4);
`;

const ExampleItem = styled.div`
  padding: var(--space-4);
  background-color: white;
  border-radius: var(--radius-md);
  font-size: var(--text-body);
  color: var(--color-text-primary);
  box-shadow: var(--shadow-sm);
`;

const Question = styled.span`
  color: var(--color-text-secondary);
`;

const Answer = styled.span`
  font-weight: 500;
  color: var(--color-midnight);
  margin-left: var(--space-2);
`;

const ChannelGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--space-4);
  margin: var(--space-5) 0;
`;

const ChannelCard = styled.div`
  padding: var(--space-5);
  border-radius: var(--radius-lg);
  background-color: var(--color-surface-secondary);
  border-left: 4px solid var(--color-violet);
`;

const ChannelTitle = styled.div`
  font-size: var(--text-h3);
  font-weight: 500;
  color: var(--color-text-primary);
  margin-bottom: var(--space-3);
`;

const ChannelGuideline = styled.div`
  font-size: var(--text-body-small);
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin-bottom: var(--space-2);

  &:last-child {
    margin-bottom: 0;
  }
`;

const CodeBlock = styled.pre`
  background-color: var(--color-midnight);
  color: var(--color-pearl);
  padding: var(--space-4);
  border-radius: var(--radius-lg);
  overflow-x: auto;
  font-size: var(--text-body-small);
  line-height: 1.6;
  margin: var(--space-4) 0;
  white-space: pre-wrap;
  word-wrap: break-word;

  .dark & {
    background-color: var(--color-surface-elevated);
    color: var(--color-text-primary);
  }
`;

const TemplateSection = styled.div`
  margin: var(--space-5) 0;
`;

const TemplateTitle = styled.div`
  font-size: var(--text-h3);
  font-weight: 500;
  color: var(--color-text-primary);
  margin-bottom: var(--space-3);
`;

const CheckerContainer = styled.div`
  margin: var(--space-6) 0;
  padding: var(--space-6);
  border-radius: var(--radius-lg);
  background-color: var(--color-surface-secondary);
  border: 2px solid var(--color-violet);
`;

const CheckerTitle = styled.div`
  font-size: var(--text-h2);
  font-weight: 500;
  color: var(--color-text-primary);
  margin-bottom: var(--space-2);
  display: flex;
  align-items: center;
  gap: var(--space-2);
`;

const CheckerSubtitle = styled.div`
  font-size: var(--text-body);
  color: var(--color-text-secondary);
  margin-bottom: var(--space-4);
`;

const Textarea = styled.textarea`
  width: 100%;
  min-height: 200px;
  padding: var(--space-4);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  font-family: "DM Sans", sans-serif;
  font-size: var(--text-body);
  color: var(--color-text-primary);
  background-color: white;
  resize: vertical;
  line-height: 1.6;

  &:focus {
    outline: 2px solid var(--color-violet);
    outline-offset: 2px;
    border-color: var(--color-violet);
  }

  .dark & {
    background-color: var(--color-surface-primary);
    color: var(--color-text-primary);
  }
`;

const CheckButton = styled.button`
  background-color: var(--color-midnight);
  color: var(--color-pearl);
  padding: var(--space-3) var(--space-5);
  border-radius: var(--radius-md);
  border: none;
  font-family: "DM Sans", sans-serif;
  font-size: var(--text-body);
  font-weight: 500;
  cursor: pointer;
  transition: all var(--duration-normal) var(--ease-default);
  margin-top: var(--space-3);
  display: flex;
  align-items: center;
  gap: var(--space-2);

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

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const ResultsContainer = styled.div`
  margin-top: var(--space-5);
  padding: var(--space-5);
  border-radius: var(--radius-md);
  background-color: ${props => props.hasIssues ? 'rgba(222, 53, 11, 0.05)' : 'rgba(0, 106, 78, 0.05)'};
  border-left: 4px solid ${props => props.hasIssues ? 'var(--color-error)' : 'var(--color-success)'};
`;

const ResultsHeader = styled.div`
  font-size: var(--text-h3);
  font-weight: 500;
  color: var(--color-text-primary);
  margin-bottom: var(--space-3);
  display: flex;
  align-items: center;
  gap: var(--space-2);
`;

const IssuesList = styled.div`
  display: grid;
  gap: var(--space-3);
`;

const IssueItem = styled.div`
  padding: var(--space-3);
  background-color: white;
  border-radius: var(--radius-sm);
  font-size: var(--text-body-small);

  .dark & {
    background-color: var(--color-surface-primary);
  }
`;

const IssueTerm = styled.span`
  font-weight: 500;
  color: var(--color-error);
  background-color: rgba(222, 53, 11, 0.1);
  padding: 2px 6px;
  border-radius: var(--radius-sm);
`;

const IssueSuggestion = styled.div`
  color: var(--color-text-secondary);
  margin-top: var(--space-2);
`;

const HighlightedText = styled.div`
  padding: var(--space-4);
  background-color: white;
  border-radius: var(--radius-md);
  font-size: var(--text-body-small);
  line-height: 1.8;
  white-space: pre-wrap;
  word-wrap: break-word;

  .dark & {
    background-color: var(--color-surface-primary);
  }
`;

const HighlightedWord = styled.span`
  background-color: rgba(222, 53, 11, 0.2);
  color: var(--color-error);
  font-weight: 500;
  padding: 2px 4px;
  border-radius: 2px;
`;

const FORBIDDEN_WORDS = [
  { term: 'streamline', suggestion: 'Be specific about what you\'re simplifying' },
  { term: 'optimize', suggestion: 'Say what you\'re improving and by how much' },
  { term: 'boost', suggestion: 'Use concrete numbers: "Save 3 hours per day"' },
  { term: 'unleash', suggestion: 'Just say what the user can do' },
  { term: 'work smarter, not harder', suggestion: 'Explain the specific benefit' },
  { term: 'game-changing', suggestion: 'Show the change, don\'t claim it' },
  { term: 'revolutionary', suggestion: 'Let the features speak for themselves' },
  { term: 'cutting-edge', suggestion: 'Describe what makes it modern' },
  { term: 'empower', suggestion: 'Say what they can actually do' },
  { term: 'elevate', suggestion: 'Be specific about the improvement' },
  { term: 'transform', suggestion: 'Describe the before and after' },
  { term: 'seamless', suggestion: 'Overused. Say "connects with" or "works with"' },
  { term: 'leverage', suggestion: 'Just say "use"' },
  { term: 'synergy', suggestion: 'Avoid corporate jargon entirely' },
  { term: 'ecosystem', suggestion: 'Say "platform" or "suite of tools"' },
  { term: 'holistic', suggestion: 'Say "complete" or "comprehensive"' },
  { term: 'best-in-class', suggestion: 'Show why it\'s good, don\'t claim it' },
  { term: 'next-generation', suggestion: 'Describe the actual features' },
  { term: 'innovative', suggestion: 'Innovation shows itself' },
  { term: 'disruptive', suggestion: 'Explain what\'s different' },
  { term: 'drive growth', suggestion: 'Specify the outcome: "Close 30% more deals"' },
  { term: 'accelerate success', suggestion: 'Too vague. Be specific.' },
  { term: 'powerful platform', suggestion: 'What can it actually do?' }
];

const WritingGuidelines = () => {
  const [copyText, setCopyText] = useState('');
  const [analyzed, setAnalyzed] = useState(false);
  const [issues, setIssues] = useState([]);
  const [highlightedText, setHighlightedText] = useState('');

  const analyzeCopy = () => {
    if (!copyText.trim()) {
      return;
    }

    const foundIssues = [];
    let textWithHighlights = copyText;

    FORBIDDEN_WORDS.forEach(({ term, suggestion }) => {
      const regex = new RegExp(term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
      const matches = copyText.match(regex);

      if (matches && matches.length > 0) {
        foundIssues.push({
          term: matches[0],
          count: matches.length,
          suggestion
        });

        textWithHighlights = textWithHighlights.replace(regex, `<HIGHLIGHT>${matches[0]}</HIGHLIGHT>`);
      }
    });

    setIssues(foundIssues);
    setHighlightedText(textWithHighlights);
    setAnalyzed(true);
  };

  const renderHighlightedText = () => {
    const parts = highlightedText.split(/(<HIGHLIGHT>.*?<\/HIGHLIGHT>)/g);
    return parts.map((part, index) => {
      if (part.startsWith('<HIGHLIGHT>') && part.endsWith('</HIGHLIGHT>')) {
        const word = part.replace(/<\/?HIGHLIGHT>/g, '');
        return <HighlightedWord key={index}>{word}</HighlightedWord>;
      }
      return part;
    });
  };

  return (
    <div>
      <Helmet>
        <title>Writing Guidelines | Done.ai Brand Guidelines</title>
      </Helmet>

      <HeroSection>
        <S.Title>Writing Guidelines</S.Title>
        <HeroSubtitle>How to write like Done.ai</HeroSubtitle>
      </HeroSection>

      <S.Subtitle>The Done.ai Voice</S.Subtitle>
      <S.Bodytext>
        These principles guide every word we write. They're not suggestions - they're requirements.
      </S.Bodytext>

      <PrinciplesList>
        <PrincipleCard>
          <PrincipleTitle>Whisper-Quiet Confidence</PrincipleTitle>
          <PrincipleText>
            We state, we don't shout. Authority doesn't need volume. Our copy is confident without being arrogant.
          </PrincipleText>
        </PrincipleCard>

        <PrincipleCard>
          <PrincipleTitle>Resolution Over Process</PrincipleTitle>
          <PrincipleText>
            Focus on what's done, not how. The name says it: Done. Customers care about results, not your methodology.
          </PrincipleText>
        </PrincipleCard>

        <PrincipleCard>
          <PrincipleTitle>High Signal, Low Noise</PrincipleTitle>
          <PrincipleText>
            Every word earns its place. If it doesn't add value, cut it. No fluff, no filler, no corporate jargon.
          </PrincipleText>
        </PrincipleCard>

        <PrincipleCard>
          <PrincipleTitle>Human, Not Robot</PrincipleTitle>
          <PrincipleText>
            Conversational but professional. Warm but not fluffy. Write like you'd explain it to a colleague.
          </PrincipleText>
        </PrincipleCard>
      </PrinciplesList>

      <S.Subtitle>The "Done." Hook</S.Subtitle>
      <S.Bodytext>
        Our name is our signature move. Use this format to create immediate clarity and confidence.
      </S.Bodytext>

      <DoneHookExample>
        <HookFormat>Question → "Done."</HookFormat>
        <ExampleList>
          <ExampleItem>
            <Question>Need to manage leads without the mess?</Question>
            <Answer>Done.</Answer>
          </ExampleItem>
          <ExampleItem>
            <Question>Want every deal in one place?</Question>
            <Answer>Done.</Answer>
          </ExampleItem>
          <ExampleItem>
            <Question>Trying to automate follow-ups?</Question>
            <Answer>Done.</Answer>
          </ExampleItem>
          <ExampleItem>
            <Question>Looking for one dashboard to rule them all?</Question>
            <Answer>Done.</Answer>
          </ExampleItem>
        </ExampleList>
      </DoneHookExample>

      <Callout type="info" title="When to use the Done. hook">
        Headlines, taglines, CTAs, feature callouts. Anywhere you want to make an impact with minimal words. Don't overuse it - when everything is "Done," nothing stands out.
      </Callout>

      <S.Subtitle>Channel Guidelines</S.Subtitle>
      <S.Bodytext>
        Adapt the voice to the medium, but keep the principles intact.
      </S.Bodytext>

      <ChannelGrid>
        <ChannelCard>
          <ChannelTitle>Product UI</ChannelTitle>
          <ChannelGuideline><strong>Ultra-concise.</strong> Action-oriented. No fluff.</ChannelGuideline>
          <ChannelGuideline><strong>Example:</strong> "Add contact" not "Create a new contact record"</ChannelGuideline>
          <ChannelGuideline><strong>Principle:</strong> Users are trying to get work done. Help them, don't distract them.</ChannelGuideline>
        </ChannelCard>

        <ChannelCard>
          <ChannelTitle>Marketing</ChannelTitle>
          <ChannelGuideline><strong>Confident claims backed by clarity.</strong> Use the Done. hook.</ChannelGuideline>
          <ChannelGuideline><strong>Example:</strong> "Track leads, close deals, invoice clients - all in one place."</ChannelGuideline>
          <ChannelGuideline><strong>Principle:</strong> Show what's possible, don't hype what you promise.</ChannelGuideline>
        </ChannelCard>

        <ChannelCard>
          <ChannelTitle>Email</ChannelTitle>
          <ChannelGuideline><strong>Subject lines under 50 chars.</strong> First line hooks. Clear CTA.</ChannelGuideline>
          <ChannelGuideline><strong>Example:</strong> Subject: "Your invoices just got easier" → Body: "Send invoices in 3 clicks. Try it now."</ChannelGuideline>
          <ChannelGuideline><strong>Principle:</strong> Respect their inbox. Get to the point.</ChannelGuideline>
        </ChannelCard>

        <ChannelCard>
          <ChannelTitle>Social</ChannelTitle>
          <ChannelGuideline><strong>Punchy.</strong> One idea per post. End with engagement or Done. hook.</ChannelGuideline>
          <ChannelGuideline><strong>Example:</strong> "Switching between 5 apps to manage sales? Done."</ChannelGuideline>
          <ChannelGuideline><strong>Principle:</strong> Stop the scroll. Make them think or click.</ChannelGuideline>
        </ChannelCard>
      </ChannelGrid>

      <S.Subtitle>Copy Templates</S.Subtitle>
      <S.Bodytext>
        Use these as starting points. Adapt to your specific context.
      </S.Bodytext>

      <TemplateSection>
        <TemplateTitle>Feature Announcement</TemplateTitle>
        <CodeBlock>{`Subject: [Feature name] is here

[Problem it solves] just got easier.

[Feature name] lets you [specific action] in [time/clicks].

No setup. No learning curve. Just [outcome].

Try it now: [link]`}</CodeBlock>
      </TemplateSection>

      <TemplateSection>
        <TemplateTitle>Error Message</TemplateTitle>
        <CodeBlock>{`[What went wrong]

Why: [Simple explanation]
Fix: [Clear action to resolve]

Need help? [Support link]`}</CodeBlock>
      </TemplateSection>

      <TemplateSection>
        <TemplateTitle>Success Message</TemplateTitle>
        <CodeBlock>{`[Action] complete.

[Optional: Next step or related action]`}</CodeBlock>
      </TemplateSection>

      <TemplateSection>
        <TemplateTitle>CTA Button Text Examples</TemplateTitle>
        <CodeBlock>{`GOOD:
- "Get started"
- "See pricing"
- "Try it free"
- "Export data"
- "Send invite"

AVOID:
- "Click here"
- "Learn more"
- "Submit"
- "Continue"
- "OK"`}</CodeBlock>
      </TemplateSection>

      <TemplateSection>
        <TemplateTitle>Empty State</TemplateTitle>
        <CodeBlock>{`[Icon/Image]

No [items] yet.

[One sentence explaining what goes here]

[Primary action button]`}</CodeBlock>
      </TemplateSection>

      <S.Subtitle>Check Your Copy</S.Subtitle>

      <CheckerContainer>
        <CheckerTitle>
          <Search size={24} strokeWidth={1.5} />
          Interactive Copy Checker
        </CheckerTitle>
        <CheckerSubtitle>
          Paste your copy below and we'll scan it for forbidden words and phrases.
        </CheckerSubtitle>

        <Textarea
          value={copyText}
          onChange={(e) => {
            setCopyText(e.target.value);
            setAnalyzed(false);
          }}
          placeholder="Paste your copy here to check for forbidden words...

Example:
'Our revolutionary platform empowers teams to streamline workflows and boost productivity with cutting-edge solutions.'"
        />

        <CheckButton onClick={analyzeCopy} disabled={!copyText.trim()}>
          <AlertCircle size={18} strokeWidth={1.5} />
          Analyze Copy
        </CheckButton>

        {analyzed && (
          <ResultsContainer hasIssues={issues.length > 0}>
            <ResultsHeader>
              {issues.length > 0 ? (
                <>
                  <X size={20} strokeWidth={1.5} />
                  Found {issues.length} {issues.length === 1 ? 'issue' : 'issues'}
                </>
              ) : (
                <>
                  <Check size={20} strokeWidth={1.5} />
                  No forbidden words found!
                </>
              )}
            </ResultsHeader>

            {issues.length > 0 && (
              <>
                <S.Bodytext style={{ marginBottom: 'var(--space-4)' }}>
                  Your copy contains forbidden words. Replace them with specific, concrete language.
                </S.Bodytext>

                <TemplateTitle>Issues Found:</TemplateTitle>
                <IssuesList>
                  {issues.map((issue, index) => (
                    <IssueItem key={index}>
                      <div>
                        <IssueTerm>"{issue.term}"</IssueTerm>
                        {issue.count > 1 && (
                          <span style={{ color: 'var(--color-text-secondary)', marginLeft: 'var(--space-2)', fontSize: 'var(--text-body-small)' }}>
                            (used {issue.count} {issue.count === 1 ? 'time' : 'times'})
                          </span>
                        )}
                      </div>
                      <IssueSuggestion>→ {issue.suggestion}</IssueSuggestion>
                    </IssueItem>
                  ))}
                </IssuesList>

                <TemplateTitle style={{ marginTop: 'var(--space-5)' }}>Your Copy with Issues Highlighted:</TemplateTitle>
                <HighlightedText>
                  {renderHighlightedText()}
                </HighlightedText>
              </>
            )}

            {issues.length === 0 && (
              <S.Bodytext>
                Your copy is free of forbidden words. Now check if it passes the other tests: Is it specific? Is it something only Done.ai could say? Does it sound human?
              </S.Bodytext>
            )}
          </ResultsContainer>
        )}
      </CheckerContainer>

      <S.Subtitle>The Quality Checklist</S.Subtitle>

      <Callout type="info" title="Before publishing any copy, ask yourself">
        <ul style={{ marginLeft: 'var(--space-4)', lineHeight: '1.8' }}>
          <li>Is it specific? (No vague claims)</li>
          <li>Could a competitor say this? (If yes, rewrite)</li>
          <li>Does it sound human? (Read it out loud)</li>
          <li>Is it concise? (Cut unnecessary words)</li>
          <li>Does it focus on what's done? (Not how)</li>
          <li>Would you say this to a colleague? (If no, too formal)</li>
        </ul>
      </Callout>

      <S.Bodytext>
        Remember: Great copy is invisible. It helps users get things done without drawing attention to itself. If they're noticing your writing, you're doing it wrong.
      </S.Bodytext>
    </div>
  );
};

export default WritingGuidelines;
