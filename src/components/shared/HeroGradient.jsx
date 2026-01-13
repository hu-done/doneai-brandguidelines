import React, { useEffect } from "react";
import styled from "styled-components";
import "../../components/colors/gradient.css";

const HeroContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 400px;
  margin-bottom: var(--space-8);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-xl);
  overflow: hidden;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 10;
  text-align: center;
  padding: var(--space-6);
  color: var(--color-pearl);
`;

const HeroTitle = styled.h1`
  font-size: var(--text-hero);
  font-weight: 600;
  margin: 0;
  margin-bottom: var(--space-3);
  color: var(--color-pearl);
`;

const HeroSubtitle = styled.p`
  font-size: var(--text-body);
  margin: 0;
  opacity: 0.9;
  max-width: 600px;
`;

const HeroGradient = ({ title, subtitle }) => {
  useEffect(() => {
    const interBubble = document.querySelector(".hero-gradient .interactive");
    const container = document.querySelector(".hero-gradient");

    if (!interBubble || !container) return;

    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    function move() {
      if (interBubble) {
        curX += (tgX - curX) / 20;
        curY += (tgY - curY) / 20;
        interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
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

  return (
    <HeroContainer>
      <HeroContent>
        <HeroTitle>{title}</HeroTitle>
        {subtitle && <HeroSubtitle>{subtitle}</HeroSubtitle>}
      </HeroContent>

      <div className="hero-gradient div-block-33">
        <div className="gradient-bg">
          <svg xmlns="http://www.w3.org/2000/svg">
            <defs>
              <filter id="goo">
                <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
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
    </HeroContainer>
  );
};

export default HeroGradient;
