import React from "react";
import { Helmet } from "react-helmet-async";
import styled from "styled-components";
import {
  Download,
  BookOpen,
  MessageSquare,
  Sparkles,
  Target,
  Shield,
  Users,
  TrendingUp,
  AlertTriangle,
  X,
} from "lucide-react";
import * as S from "../commonStyles/index.js";

// Hero Section
const HeroSection = styled.div`
  text-align: center;
  margin-bottom: var(--space-8);
`;

const HeroTitle = styled.h1`
  font-size: var(--text-hero);
  font-weight: 500;
  color: var(--color-text-primary);
  margin-bottom: var(--space-3);

  @media (min-width: 768px) {
    font-size: 48px;
  }
`;

const HeroSubtitle = styled.p`
  font-size: var(--text-h3);
  color: var(--color-text-secondary);
  font-weight: 400;
`;

// Section Containers
const Section = styled.div`
  margin: var(--space-8) 0;
`;

const SectionTitle = styled.h2`
  font-size: var(--text-h2);
  font-weight: 500;
  color: var(--color-text-primary);
  margin-bottom: var(--space-4);
`;

// Story Card
const StoryCard = styled.div`
  background: linear-gradient(135deg, var(--color-midnight) 0%, #1a0b3d 100%);
  border-radius: var(--radius-xl);
  padding: var(--space-6);
  color: var(--color-pearl);
  box-shadow: var(--shadow-lg);

  @media (min-width: 768px) {
    padding: var(--space-7);
  }
`;

const StoryTitle = styled.h3`
  font-size: var(--text-h3);
  font-weight: 500;
  margin-bottom: var(--space-4);
  display: flex;
  align-items: center;
  gap: var(--space-2);
  color: var(--color-pearl);
`;

const StoryContent = styled.div`
  font-size: var(--text-body);
  line-height: 1.7;
  color: rgba(251, 251, 251, 0.85);

  p {
    margin-bottom: var(--space-4);

    &:last-child {
      margin-bottom: 0;
    }
  }

  strong {
    color: var(--color-pearl);
    font-weight: 500;
  }
`;

// Values Grid
const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-4);

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

const ValueCard = styled.div`
  background-color: var(--color-surface-secondary);
  border-radius: var(--radius-lg);
  padding: var(--space-5);
  text-align: center;
  transition: all var(--duration-normal) var(--ease-default);

  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-md);
  }
`;

const ValueIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  margin: 0 auto var(--space-3);
  background-color: var(--color-violet);
  border-radius: var(--radius-full);
  color: var(--color-pearl);
`;

const ValueTitle = styled.h4`
  font-size: var(--text-h3);
  font-weight: 500;
  color: var(--color-text-primary);
  margin-bottom: var(--space-2);
`;

const ValueDescription = styled.p`
  font-size: var(--text-body-small);
  color: var(--color-text-secondary);
  line-height: 1.5;
`;

// Principles Grid
const PrinciplesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-5);

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const PrincipleCard = styled.div`
  background-color: var(--color-surface-secondary);
  border-radius: var(--radius-xl);
  padding: var(--space-6);
  border-left: 4px solid var(--color-violet);
`;

const PrincipleTitle = styled.h4`
  font-size: var(--text-h3);
  font-weight: 500;
  color: var(--color-text-primary);
  margin-bottom: var(--space-3);
`;

const PrincipleDescription = styled.p`
  font-size: var(--text-body);
  color: var(--color-text-secondary);
  line-height: 1.6;
`;

// Visual Identity Grid
const VisualGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-4);

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const VisualCard = styled.div`
  background-color: var(--color-surface-secondary);
  border-radius: var(--radius-lg);
  padding: var(--space-5);
  text-align: center;
`;

const VisualTitle = styled.h4`
  font-size: var(--text-body);
  font-weight: 500;
  color: var(--color-text-primary);
  margin-bottom: var(--space-3);
`;

const ColorSwatch = styled.div`
  width: 100%;
  height: 60px;
  border-radius: var(--radius-md);
  margin-bottom: var(--space-2);
  background-color: ${(props) => props.$color};
  border: ${(props) => {
    const lightColors = ["#FBFBFB", "#F0F0F0"];
    return lightColors.includes(props.$color)
      ? "1px solid var(--color-border)"
      : "none";
  }};
`;

const ColorInfo = styled.div`
  font-size: var(--text-caption);
  color: var(--color-text-secondary);
  margin-top: var(--space-1);
`;

const FontPreview = styled.div`
  font-size: 32px;
  font-weight: 500;
  color: var(--color-text-primary);
  margin: var(--space-4) 0;
`;

const RuleCard = styled.div`
  background-color: var(--color-lavender);
  border-radius: var(--radius-lg);
  padding: var(--space-5);
  border: 2px solid var(--color-violet);
  text-align: center;

  .dark & {
    background-color: rgba(106, 0, 213, 0.3);
  }
`;

const RuleIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--space-3);
  color: var(--color-violet);
`;

const RuleText = styled.p`
  font-size: var(--text-body);
  font-weight: 500;
  color: var(--color-midnight);
  line-height: 1.5;

  .dark & {
    color: var(--color-pearl);
  }
`;

// Voice Snapshot
const VoiceGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-5);

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const VoiceCard = styled.div`
  background-color: var(--color-surface-secondary);
  border-radius: var(--radius-lg);
  padding: var(--space-5);
`;

const VoiceTitle = styled.h4`
  font-size: var(--text-h3);
  font-weight: 500;
  color: var(--color-text-primary);
  margin-bottom: var(--space-3);
`;

const VoiceList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const VoiceItem = styled.li`
  font-size: var(--text-body);
  color: var(--color-text-secondary);
  padding: var(--space-2) 0;
  border-bottom: 1px solid var(--color-border);
  line-height: 1.6;

  &:last-child {
    border-bottom: none;
  }

  strong {
    color: var(--color-text-primary);
  }
`;

const ForbiddenList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  margin-top: var(--space-3);
`;

const ForbiddenTag = styled.span`
  background-color: var(--color-error);
  color: var(--color-pearl);
  padding: var(--space-1) var(--space-3);
  border-radius: var(--radius-full);
  font-size: var(--text-body-small);
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 4px;
`;

// Download Section
const DownloadSection = styled.div`
  background: linear-gradient(135deg, var(--color-midnight) 0%, #1a0b3d 100%);
  border-radius: var(--radius-xl);
  padding: var(--space-6);
  text-align: center;
  color: var(--color-pearl);
  box-shadow: var(--shadow-lg);

  @media (min-width: 768px) {
    padding: var(--space-7);
  }
`;

const DownloadTitle = styled.h3`
  font-size: var(--text-h2);
  font-weight: 500;
  margin-bottom: var(--space-3);
  color: var(--color-pearl);
`;

const DownloadDescription = styled.p`
  font-size: var(--text-body);
  margin-bottom: var(--space-5);
  color: rgba(251, 251, 251, 0.9);
`;

const DownloadButton = styled.button`
  background-color: var(--color-pearl);
  color: var(--color-midnight);
  border: none;
  border-radius: 100px;
  padding: 16px 40px;
  font-size: var(--text-body);
  font-weight: 400;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  transition: transform var(--duration-fast) var(--ease-default), box-shadow var(--duration-fast) var(--ease-default);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 10px -4px rgba(106, 0, 213, 0.5);
  }

  &:active {
    transform: translateY(0);
  }

  &:focus-visible {
    outline: 2px solid var(--color-violet);
    outline-offset: 2px;
  }
`;

const BrandEssentials = () => {
  const values = [
    {
      icon: Shield,
      title: "Trust",
      description: "We earn it through transparency and reliability",
    },
    {
      icon: Target,
      title: "Ownership",
      description: "We take responsibility, not excuses",
    },
    {
      icon: Sparkles,
      title: "Clarity",
      description: "We communicate simply and directly",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We build together, succeed together",
    },
    {
      icon: TrendingUp,
      title: "Progress",
      description: "We ship, learn, iterate",
    },
  ];

  const keyColors = [
    { name: "Pearl White", hex: "#FBFBFB", usage: "Primary background" },
    { name: "Midnight Violet", hex: "#0B0425", usage: "Primary text" },
    { name: "Royal Violet", hex: "#6A00D5", usage: "Accents only" },
  ];

  const forbiddenWords = [
    "Streamline",
    "Optimize",
    "Game-changing",
    "Empower",
    "Seamless",
  ];

  const handleDownload = () => {
    const content = `DONE.AI BRAND ESSENTIALS
Quick Reference Card

THE DONE.AI STORY
What we do: Done.ai is a unified business platform that brings CRM, projects, communication, and automation together.

Why we're different: We don't stitch together acquisitions. We build one unified core. Simple, authoritative, complete.

Our name is our promise: When you use Done.ai, things get Done.

CORE VALUES
• Trust - We earn it through transparency and reliability
• Ownership - We take responsibility, not excuses
• Clarity - We communicate simply and directly
• Collaboration - We build together, succeed together
• Progress - We ship, learn, iterate

BRAND PRINCIPLES
• Authority Through Simplicity: The best brands don't shout. They state.
• Resolution Over Process: We focus on outcomes, not steps.

VISUAL IDENTITY
Colors:
• Pearl White (#FBFBFB) - Primary background
• Midnight Violet (#0B0425) - Primary text
• Royal Violet (#6A00D5) - Accents only

Font: DM Sans

The Royal Violet Rule: Use sparingly - only for accents and active states. When everything glows, nothing does.

VOICE
Tone: Whisper-quiet confidence
Hook: "Done." - Question format → Done.

Example: "Need to manage leads without the mess? Done."

NEVER SAY
[x] Streamline
[x] Optimize
[x] Game-changing
[x] Empower
[x] Seamless
(If a competitor could say it, don't say it.)

QUALITY CHECK
Before shipping any brand material:
[ ] Using DM Sans?
[ ] Colors from the defined palette only?
[ ] Royal Violet used sparingly?
[ ] Tone matches brand (direct, confident, not hype-y)?
[ ] No forbidden words?

---
Done.ai Brand Guidelines
Generated ${new Date().toLocaleDateString()}
`;

    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "done-ai-brand-essentials.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div>
      <Helmet>
        <title>Brand Essentials | Done.ai Brand Guidelines</title>
      </Helmet>

      {/* Hero */}
      <HeroSection>
        <HeroTitle>Brand Essentials</HeroTitle>
        <HeroSubtitle>
          Everything you need to know about Done.ai in 5 minutes
        </HeroSubtitle>
      </HeroSection>

      {/* The Done.ai Story */}
      <Section>
        <StoryCard>
          <StoryTitle>
            <BookOpen size={24} strokeWidth={1.5} />
            The Done.ai Story
          </StoryTitle>
          <StoryContent>
            <p>
              <strong>What we do:</strong> Done.ai is a unified business
              platform that brings CRM, projects, communication, and automation
              together.
            </p>
            <p>
              <strong>Why we're different:</strong> We don't stitch together
              acquisitions. We build one unified core. Simple, authoritative,
              complete.
            </p>
            <p>
              <strong>Our name is our promise:</strong> When you use Done.ai,
              things get <strong>Done.</strong>
            </p>
          </StoryContent>
        </StoryCard>
      </Section>

      {/* Core Values */}
      <Section>
        <SectionTitle>Core Values</SectionTitle>
        <ValuesGrid>
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <ValueCard key={index}>
                <ValueIcon>
                  <IconComponent size={24} strokeWidth={1.5} />
                </ValueIcon>
                <ValueTitle>{value.title}</ValueTitle>
                <ValueDescription>{value.description}</ValueDescription>
              </ValueCard>
            );
          })}
        </ValuesGrid>
      </Section>

      {/* Brand Principles */}
      <Section>
        <SectionTitle>Brand Principles</SectionTitle>
        <PrinciplesGrid>
          <PrincipleCard>
            <PrincipleTitle>Authority Through Simplicity</PrincipleTitle>
            <PrincipleDescription>
              The best brands don't shout. They state. We make complex business
              infrastructure feel simple and authoritative through whisper-quiet
              confidence.
            </PrincipleDescription>
          </PrincipleCard>
          <PrincipleCard>
            <PrincipleTitle>Resolution Over Process</PrincipleTitle>
            <PrincipleDescription>
              We focus on outcomes, not steps. The name says it: Done. Our
              communication emphasizes what's accomplished, not how we get
              there.
            </PrincipleDescription>
          </PrincipleCard>
        </PrinciplesGrid>
      </Section>

      {/* Visual Identity Snapshot */}
      <Section>
        <SectionTitle>Visual Identity Snapshot</SectionTitle>
        <VisualGrid>
          {keyColors.map((color, index) => (
            <VisualCard key={index}>
              <VisualTitle>{color.name}</VisualTitle>
              <ColorSwatch $color={color.hex} />
              <ColorInfo>{color.hex}</ColorInfo>
              <ColorInfo>{color.usage}</ColorInfo>
            </VisualCard>
          ))}
        </VisualGrid>

        <div style={{ marginTop: "var(--space-5)" }}>
          <VisualGrid>
            <VisualCard>
              <VisualTitle>Font</VisualTitle>
              <FontPreview>DM Sans</FontPreview>
              <ColorInfo>All weights • Clean & modern</ColorInfo>
            </VisualCard>
            <RuleCard>
              <RuleIcon>
                <AlertTriangle size={32} strokeWidth={1.5} />
              </RuleIcon>
              <RuleText>
                The Royal Violet Rule: Use sparingly - only for accents and
                active states. When everything glows, nothing does.
              </RuleText>
            </RuleCard>
            <VisualCard>
              <VisualTitle>Key Principle</VisualTitle>
              <ColorInfo
                style={{
                  marginTop: "var(--space-4)",
                  fontSize: "var(--text-body)",
                }}
              >
                90% Canvas Colors
              </ColorInfo>
              <ColorInfo
                style={{
                  fontSize: "var(--text-body)",
                  marginTop: "var(--space-2)",
                }}
              >
                10% Brand Accent
              </ColorInfo>
            </VisualCard>
          </VisualGrid>
        </div>
      </Section>

      {/* Voice Snapshot */}
      <Section>
        <SectionTitle>Voice Snapshot</SectionTitle>
        <VoiceGrid>
          <VoiceCard>
            <VoiceTitle>
              <MessageSquare
                size={20}
                strokeWidth={1.5}
                style={{ display: "inline" }}
              />{" "}
              Our Voice
            </VoiceTitle>
            <VoiceList>
              <VoiceItem>
                <strong>Tone:</strong> Whisper-quiet confidence
              </VoiceItem>
              <VoiceItem>
                <strong>Hook:</strong> "Done." - Question format → Done.
              </VoiceItem>
              <VoiceItem>
                <strong>Example:</strong> "Need to manage leads without the
                mess? Done."
              </VoiceItem>
              <VoiceItem>
                <strong>Test:</strong> If a competitor could say it, don't say
                it.
              </VoiceItem>
            </VoiceList>
          </VoiceCard>

          <VoiceCard>
            <VoiceTitle>Never Say</VoiceTitle>
            <S.Bodytext style={{ marginBottom: 0 }}>
              Kill these on sight. Generic SaaS speak that could apply to any
              competitor:
            </S.Bodytext>
            <ForbiddenList>
              {forbiddenWords.map((word, index) => (
                <ForbiddenTag key={index}>
                  <X size={14} strokeWidth={2.5} /> {word}
                </ForbiddenTag>
              ))}
            </ForbiddenList>
          </VoiceCard>
        </VoiceGrid>
      </Section>

      {/* Download Section */}
      <Section>
        <DownloadSection>
          <DownloadTitle>Quick Reference Card</DownloadTitle>
          <DownloadDescription>
            Download a text summary of these essentials for quick reference.
            Perfect for keeping on hand or sharing with your team (or AI 🤫).
          </DownloadDescription>
          <DownloadButton onClick={handleDownload}>
            <Download size={20} strokeWidth={1.5} />
            Download Essentials
          </DownloadButton>
        </DownloadSection>
      </Section>
    </div>
  );
};

export default BrandEssentials;
