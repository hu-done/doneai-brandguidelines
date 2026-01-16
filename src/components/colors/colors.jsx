import React from "react";
import theme from "../../theme/theme.jsx";
import * as S from "./index.styles.js";
import { Helmet } from "react-helmet-async";
import "./gradient.css";
import { useEffect } from "react";

export default function Colors() {
  const colors = Object.keys(theme.colors);

  useEffect(() => {
    const interBubble = document.querySelector(".div-block-33 .interactive");
    const container = document.querySelector(".div-block-33");

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

  return (
    <div>
      <Helmet>
        <title>Colors | Done.ai</title>
      </Helmet>
      <S.Title>Our Colors</S.Title>
      <S.Section>
        <S.Subtitle>Palette</S.Subtitle>
        <S.Bodytext>
          Our visual identity is designed to reflect who we are: bold,
          intelligent, and approachable. The palette combines depth and energy,
          creating a balance between stability and forward momentum. It brings a
          sense of clarity, confidence, and innovation, which builds an
          environment where our customers feel empowered, supported, and ready
          to move smarter into the future.
        </S.Bodytext>
        <S.ColorsContainer>
          {colors.map((key) => (
            <S.ColorBoxWrapper key={key}>
              <S.ColorBox color={theme.colors[key].hex} />
              <S.ColorName>{theme.colorNames[key]}</S.ColorName>
              <S.ColorCode>{theme.colors[key].hex}</S.ColorCode>
              <S.RgbCode>{theme.colors[key].rgb}</S.RgbCode>
            </S.ColorBoxWrapper>
          ))}
        </S.ColorsContainer>
      </S.Section>
      <S.Section>
        <S.Subtitle>Gradient background</S.Subtitle>
        <S.ColorsContainer>
          <S.GradientContainer>
            <S.SubSubtitle>Image</S.SubSubtitle>
            <S.Image src="./images/gradient.jpg" />
          </S.GradientContainer>
          <S.GradientContainer>
            <S.SubSubtitle>Video</S.SubSubtitle>
            <S.Video
              autoPlay
              loop
              playsInline
              muted
              src="./assets/gradient.mp4"
            ></S.Video>
          </S.GradientContainer>
        </S.ColorsContainer>
        <S.SubSubtitle>Interactive</S.SubSubtitle>
        <S.Bodytext>
          Drag your mouse across the container for some digital ✨magic✨
        </S.Bodytext>
        <div className="div-block-33">
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
      </S.Section>
      <S.Section>
        <S.Subtitle>Color combinations</S.Subtitle>
      </S.Section>
    </div>
  );
}
