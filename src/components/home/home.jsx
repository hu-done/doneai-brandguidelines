import React from "react";
import { Helmet } from "react-helmet-async";
import * as S from "../commonStyles/index.js";
import styled from "styled-components";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../colors/gradient.css";
import {
  Palette,
  Type,
  Component,
  Dna,
  MessageSquare,
  Settings2,
  ArrowRight
} from "lucide-react";

// Hero section with gradient background
const HeroSection = styled.div`
  position: relative;
  background-color: var(--color-midnight);
  border-radius: var(--radius-hero);
  padding: var(--space-7);
  text-align: center;
  margin-bottom: var(--space-7);
  overflow: hidden;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  isolation: isolate;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 10;
  color: var(--color-pearl);
  width: 100%;
  text-align: center;
`;

const HeroTitle = styled.h1`
  font-size: var(--text-hero);
  font-weight: 500;
  margin-bottom: var(--space-3);
  color: var(--color-pearl);
`;

const HeroSubtitle = styled.p`
  font-size: var(--text-body);
  color: rgba(251, 251, 251, 0.7);
`;

// Cards section
const CardsSection = styled.div`
  margin-top: var(--space-7);
`;

const SectionTitle = styled.h2`
  font-size: var(--text-h2);
  font-weight: 500;
  margin-bottom: var(--space-4);
  color: var(--color-text-primary);
`;

const CardsContainer = styled.div`
  background-color: var(--color-midnight);
  border-radius: var(--radius-container);
  padding: var(--space-6);

  /* Dark mode: remove container background */
  .dark & {
    background-color: transparent;
    padding: 0;
  }
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: var(--space-4);

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Card = styled(Link)`
  background-color: var(--color-surface-elevated-dark);
  color: var(--color-pearl);
  border-radius: var(--radius-xl);
  padding: var(--space-5);
  display: flex;
  flex-direction: column;
  min-height: 180px;
  text-decoration: none;
  transition: all var(--duration-normal) var(--ease-default);

  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);

    .card-arrow {
      transform: translateX(4px);
      opacity: 1;
    }
  }

  /* Dark mode: lighter cards matching nav */
  .dark & {
    background-color: var(--color-nav-bg);
    color: var(--color-pearl);
  }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  margin-bottom: var(--space-3);
`;

const CardIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-pearl);
  opacity: 0.8;
`;

const CardTitle = styled.h3`
  font-size: var(--text-h2);
  font-weight: 600;
  margin: 0;
  display: flex;
  align-items: center;
  gap: var(--space-2);
`;

const CardArrow = styled.span`
  opacity: 0;
  transition: all var(--duration-normal) var(--ease-default);
  display: flex;
  align-items: center;
`;

const CardDescription = styled.p`
  font-size: var(--text-body-small);
  color: rgba(251, 251, 251, 0.7);
  margin: 0;
  line-height: 1.5;
  flex-grow: 1;
`;

export default function Home() {
  useEffect(() => {
    const interBubble = document.querySelector(".home-gradient .interactive");
    const container = document.querySelector(".home-gradient");

    if (!interBubble || !container) return;

    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    function move() {
      if (interBubble) {
        curX += (tgX - curX) / 20;
        curY += (tgY - curY) / 20;
        interBubble.style.transform = `translate(${Math.round(
          curX
        )}px, ${Math.round(curY)}px)`;
      }
      requestAnimationFrame(move);
    }

    const mouseMoveHandler = (event) => {
      if (container) {
        const rect = container.getBoundingClientRect();
        tgX = event.clientX - rect.left;
        tgY = event.clientY - rect.top;
      }
    };

    window.addEventListener("mousemove", mouseMoveHandler);
    move();

    return () => {
      window.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []);

  const cards = [
    {
      id: 1,
      title: "Colors",
      description: "Our visual identity palette with usage rules.",
      icon: Palette,
      link: "/colors",
    },
    {
      id: 2,
      title: "Typography",
      description: "DM Sans type system for clear hierarchy.",
      icon: Type,
      link: "/typography",
    },
    {
      id: 3,
      title: "Components",
      description: "Reusable UI components with specifications.",
      icon: Component,
      link: "/buttons",
    },
    {
      id: 4,
      title: "Brand DNA",
      description: "Our core values, mission, and positioning.",
      icon: Dna,
      link: "/brand-dna",
    },
    {
      id: 5,
      title: "Tone of Voice",
      description: "Authority through Simplicity.",
      icon: MessageSquare,
      link: "/tone-of-voice",
    },
    {
      id: 6,
      title: "Design Tokens",
      description: "CSS variables for spacing, colors, shadows.",
      icon: Settings2,
      link: "/css-tokens",
    },
  ];

  return (
    <div>
      <Helmet>
        <title>Brand Guidelines | Done.ai</title>
      </Helmet>

      {/* Hero Section */}
      <HeroSection>
        <HeroContent>
          <HeroTitle>Done.ai Brand Guidelines</HeroTitle>
          <HeroSubtitle>
            Design tokens, components, and brand identity resources.
          </HeroSubtitle>
        </HeroContent>

        {/* Gradient Background */}
        <div className="home-gradient div-block-33">
          <div className="gradient-bg">
            <svg xmlns="http://www.w3.org/2000/svg">
              <defs>
                <filter id="goo">
                  <feGaussianBlur
                    in="SourceGraphic"
                    stdDeviation="10"
                    result="blur"
                  />
                  <feColorMatrix
                    in="blur"
                    mode="matrix"
                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                    result="goo"
                  />
                  <feBlend in="SourceGraphic" in2="goo" />
                </filter>
              </defs>
            </svg>

            <div className="gradients-container-box">
              <div className="gradients-container">
                <div className="g1"></div>
                <div className="g2"></div>
                <div className="g3"></div>
                <div className="g4"></div>
                <div className="g5"></div>
                <div className="interactive"></div>
              </div>
            </div>
          </div>
        </div>
      </HeroSection>

      {/* Cards Section */}
      <CardsSection>
        <SectionTitle>Quick Access</SectionTitle>

        <CardsContainer>
          <CardsGrid>
            {cards.map((card) => {
              const IconComponent = card.icon;
              return (
                <Card key={card.id} to={card.link}>
                  <CardHeader>
                    <CardIconWrapper>
                      <IconComponent size={24} strokeWidth={1.5} />
                    </CardIconWrapper>
                  </CardHeader>

                  <CardTitle>
                    {card.title}
                    <CardArrow className="card-arrow">
                      <ArrowRight size={20} strokeWidth={1.5} />
                    </CardArrow>
                  </CardTitle>
                  <CardDescription>{card.description}</CardDescription>
                </Card>
              );
            })}
          </CardsGrid>
        </CardsContainer>
      </CardsSection>

      {/* About Section */}
      <div style={{ marginTop: "var(--space-7)" }}>
        <S.Subtitle>About These Guidelines</S.Subtitle>
        <S.Bodytext>
          This is an instruction manual explaining how we present ourselves to
          the world as an organization and brand. It's our rule book on
          communicating consistently across all channels, and defines visual,
          verbal, and written communication frameworks that set the foundation
          for our brand to grow and thrive.
        </S.Bodytext>
      </div>
    </div>
  );
}
