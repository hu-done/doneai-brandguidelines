import React from "react";
import { Helmet } from "react-helmet-async";
import theme from "../../theme/theme.jsx";
import * as S from "./index.styles.js";

export default function Designguide() {
  return (
    <div>
      <Helmet>
        <title>Design Guide | Done.ai</title>
      </Helmet>
      <S.Title>Our Design Guide</S.Title>
      <S.Section>
        <S.Subtitle>Logo</S.Subtitle>
        <S.SubSubtitle>Primary</S.SubSubtitle>
        <S.ImageContainer>
          <S.LogoImage src="./images/done-logo.svg" alt="Done logo" />
          <S.LightImageContainer>
            <S.LogoImage src="./images/done-logo-white.svg" alt="Done logo" />
          </S.LightImageContainer>
        </S.ImageContainer>
        <S.SubSubtitle>Icon</S.SubSubtitle>
        <S.ImageContainer>
          <S.LogoIconImage
            src="./images/done-logo-icon.svg"
            alt="Done.ai icon logo"
          />
          <S.LightImageContainer>
            <S.LogoIconImage
              src="./images/done-logo-icon-white.svg"
              alt="Done.ai icon logo"
            />
          </S.LightImageContainer>
        </S.ImageContainer>
      </S.Section>
      <S.Section>
        <S.Subtitle>Colors</S.Subtitle>
        <S.Bodytext>
          Here's how to consider using our colors when branding documents and
          digital experiences.
        </S.Bodytext>
        <S.SubSubtitle>Main colors</S.SubSubtitle>
        <S.TitleColorsContainer>
          <div>
            <S.ColorTitle>Primary</S.ColorTitle>
            <S.ColorsContainer>
              <S.ColorBoxWrapper>
                <S.ColorBox color={theme.colors.primary.hex} />
                <S.ColorName>{theme.colorNames.primary}</S.ColorName>
                <S.ColorCode>{theme.colors.primary.hex}</S.ColorCode>
                <S.RgbCode>{theme.colors.primary.rgb}</S.RgbCode>
              </S.ColorBoxWrapper>
            </S.ColorsContainer>
          </div>
          <div>
            <S.ColorTitle>Secondary</S.ColorTitle>
            <S.ColorsContainer>
              <S.ColorBoxWrapper>
                <S.ColorBox color={theme.colors.secondary.hex} />
                <S.ColorName>{theme.colorNames.secondary}</S.ColorName>
                <S.ColorCode>{theme.colors.secondary.hex}</S.ColorCode>
                <S.RgbCode>{theme.colors.secondary.rgb}</S.RgbCode>
              </S.ColorBoxWrapper>
            </S.ColorsContainer>
          </div>
        </S.TitleColorsContainer>
        <S.SubSubtitle>Text and background</S.SubSubtitle>
        <S.TitleColorsContainer>
          <S.ColorsContainer>
            <S.ColorBoxWrapper>
              <S.ColorBox color={theme.colors.neutral1.hex} />
              <S.ColorName>{theme.colorNames.neutral1}</S.ColorName>
              <S.ColorCode>{theme.colors.neutral1.hex}</S.ColorCode>
              <S.RgbCode>{theme.colors.neutral1.rgb}</S.RgbCode>
            </S.ColorBoxWrapper>
          </S.ColorsContainer>
          <S.ColorsContainer>
            <S.ColorBoxWrapper>
              <S.ColorBox color={theme.colors.accent1.hex} />
              <S.ColorName>{theme.colorNames.accent1}</S.ColorName>
              <S.ColorCode>{theme.colors.accent1.hex}</S.ColorCode>
              <S.RgbCode>{theme.colors.accent1.rgb}</S.RgbCode>
            </S.ColorBoxWrapper>
          </S.ColorsContainer>
          <S.ColorsContainer>
            <S.ColorBoxWrapper>
              <S.ColorBox color={theme.colors.neutral2.hex} />
              <S.ColorName>{theme.colorNames.neutral2}</S.ColorName>
              <S.ColorCode>{theme.colors.neutral2.hex}</S.ColorCode>
              <S.RgbCode>{theme.colors.neutral2.rgb}</S.RgbCode>
            </S.ColorBoxWrapper>
          </S.ColorsContainer>
        </S.TitleColorsContainer>
      </S.Section>
      <S.Section>
        <S.Subtitle>Typography</S.Subtitle>
        <S.SubSubtitle>Font weights</S.SubSubtitle>
        <S.SubSubtitle>DM Sans</S.SubSubtitle>
        <S.FontBox style={{ fontWeight: 400 }}>
          <S.FontLetters>Aa</S.FontLetters>
          <S.AlphabetContainer>
            <S.AlphabetLetters>ABCDEFGHIJKLMNOPQRSTUVWXYZ</S.AlphabetLetters>
            <S.AlphabetLetters>abcdefghijklmnopqrstuvwxyz</S.AlphabetLetters>
            <S.AlphabetLetters>1234567890(,.;:?!$&*)</S.AlphabetLetters>
          </S.AlphabetContainer>
          <S.StyleInfo>
            <span>Regular</span>
            <span>Weight: 400</span>
            <span>Style: normal</span>
          </S.StyleInfo>
        </S.FontBox>
        <S.FontBox style={{ fontWeight: 500 }}>
          <S.FontLetters>Aa</S.FontLetters>
          <S.AlphabetContainer>
            <S.AlphabetLetters>ABCDEFGHIJKLMNOPQRSTUVWXYZ</S.AlphabetLetters>
            <S.AlphabetLetters>abcdefghijklmnopqrstuvwxyz</S.AlphabetLetters>
            <S.AlphabetLetters>1234567890(,.;:?!$&*)</S.AlphabetLetters>
          </S.AlphabetContainer>
          <S.StyleInfo>
            <span>Medium</span>
            <span>Weight: 500</span>
            <span>Style: normal</span>
          </S.StyleInfo>
        </S.FontBox>
        <S.FontBox style={{ fontWeight: 600 }}>
          <S.FontLetters>Aa</S.FontLetters>
          <S.AlphabetContainer>
            <S.AlphabetLetters>ABCDEFGHIJKLMNOPQRSTUVWXYZ</S.AlphabetLetters>
            <S.AlphabetLetters>abcdefghijklmnopqrstuvwxyz</S.AlphabetLetters>
            <S.AlphabetLetters>1234567890(,.;:?!$&*)</S.AlphabetLetters>
          </S.AlphabetContainer>
          <S.StyleInfo>
            <span>Semibold</span>
            <span>Weight: 600</span>
            <span>Style: normal</span>
          </S.StyleInfo>
        </S.FontBox>
        <S.FontBox style={{ fontWeight: 800, paddingBottom: "30px" }}>
          <S.FontLetters>Aa</S.FontLetters>
          <S.AlphabetContainer>
            <S.AlphabetLetters>ABCDEFGHIJKLMNOPQRSTUVWXYZ</S.AlphabetLetters>
            <S.AlphabetLetters>abcdefghijklmnopqrstuvwxyz</S.AlphabetLetters>
            <S.AlphabetLetters>1234567890(,.;:?!$&*)</S.AlphabetLetters>
          </S.AlphabetContainer>
          <S.StyleInfo>
            <span>ExtraBold</span>
            <span>Weight: 800</span>
            <span>Style: normal</span>
          </S.StyleInfo>
        </S.FontBox>
        <S.SubSubtitle>Fallback: Open Sans</S.SubSubtitle>
        <S.FontBox
          style={{
            fontWeight: 400,
            fontFamily: "Open Sans, sans-serif",
            padding: "1rem 0",
          }}
        >
          <S.FontLetters>Aa</S.FontLetters>
          <S.AlphabetContainer>
            <S.AlphabetLetters>ABCDEFGHIJKLMNOPQRSTUVWXYZ</S.AlphabetLetters>
            <S.AlphabetLetters>abcdefghijklmnopqrstuvwxyz</S.AlphabetLetters>
            <S.AlphabetLetters>1234567890(,.;:?!$&*)</S.AlphabetLetters>
          </S.AlphabetContainer>
          <S.StyleInfo>
            <span>Regular</span>
            <span>Weight: 400</span>
            <span>Style: normal</span>
          </S.StyleInfo>
        </S.FontBox>
        <S.FontBox
          style={{
            fontWeight: 500,
            fontFamily: "Open Sans, sans-serif",
            padding: "1rem 0",
          }}
        >
          <S.FontLetters>Aa</S.FontLetters>
          <S.AlphabetContainer>
            <S.AlphabetLetters>ABCDEFGHIJKLMNOPQRSTUVWXYZ</S.AlphabetLetters>
            <S.AlphabetLetters>abcdefghijklmnopqrstuvwxyz</S.AlphabetLetters>
            <S.AlphabetLetters>1234567890(,.;:?!$&*)</S.AlphabetLetters>
          </S.AlphabetContainer>
          <S.StyleInfo>
            <span>Medium</span>
            <span>Weight: 500</span>
            <span>Style: normal</span>
          </S.StyleInfo>
        </S.FontBox>
        <S.FontBox
          style={{
            fontWeight: 600,
            fontFamily: "Open Sans, sans-serif",
            padding: "1rem 0",
          }}
        >
          <S.FontLetters>Aa</S.FontLetters>
          <S.AlphabetContainer>
            <S.AlphabetLetters>ABCDEFGHIJKLMNOPQRSTUVWXYZ</S.AlphabetLetters>
            <S.AlphabetLetters>abcdefghijklmnopqrstuvwxyz</S.AlphabetLetters>
            <S.AlphabetLetters>1234567890(,.;:?!$&*)</S.AlphabetLetters>
          </S.AlphabetContainer>
          <S.StyleInfo>
            <span>SemiBold</span>
            <span>Weight: 600</span>
            <span>Style: normal</span>
          </S.StyleInfo>
        </S.FontBox>
        <S.FontBox
          style={{
            fontWeight: 800,
            fontFamily: "Open Sans, sans-serif",
            padding: "1rem 0",
          }}
        >
          <S.FontLetters>Aa</S.FontLetters>
          <S.AlphabetContainer>
            <S.AlphabetLetters>ABCDEFGHIJKLMNOPQRSTUVWXYZ</S.AlphabetLetters>
            <S.AlphabetLetters>abcdefghijklmnopqrstuvwxyz</S.AlphabetLetters>
            <S.AlphabetLetters>1234567890(,.;:?!$&*)</S.AlphabetLetters>
          </S.AlphabetContainer>
          <S.StyleInfo>
            <span>ExtraBold</span>
            <span>Weight: 800</span>
            <span>Style: normal</span>
          </S.StyleInfo>
        </S.FontBox>
      </S.Section>
      <S.Section>
        <S.Subtitle>Components</S.Subtitle>
      </S.Section>
      <S.Section></S.Section>
    </div>
  );
}
