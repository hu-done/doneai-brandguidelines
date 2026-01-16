import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import styled from "styled-components";
import { Download, Check, X } from "lucide-react";
import * as S from "../commonStyles/index.js";

const ColorSliderSection = styled.div`
  background-color: var(--color-surface-secondary);
  border-radius: var(--radius-lg);
  padding: var(--space-5);
  margin: var(--space-6) 0;
  max-width: 600px;
  border: 1px solid var(--color-border);
`;

const ColorOptions = styled.div`
  display: flex;
  gap: var(--space-3);
  margin: var(--space-4) 0;
`;

const ColorOption = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${props => props.$color};
  border: 3px solid ${props => props.$selected ? 'var(--color-violet)' : 'var(--color-border)'};
  cursor: pointer;
  transition: all var(--duration-fast) var(--ease-default);
  box-shadow: var(--shadow-sm);

  &:hover {
    transform: scale(1.1);
    box-shadow: var(--shadow-md);
  }
`;

const ColorLabel = styled.div`
  font-size: var(--text-body-small);
  font-weight: 500;
  color: var(--color-text-primary);
  margin-bottom: var(--space-2);
`;

const LogoPreview = styled.div`
  background-color: ${props => props.$bgColor};
  border-radius: var(--radius-md);
  padding: var(--space-6);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: var(--space-4) 0;
  min-height: 150px;
  border: 2px solid ${props => props.$bgColor === '#0B0425' ? 'rgba(255,255,255,0.2)' : 'var(--color-border)'};
`;

const DownloadButtons = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: var(--space-2);
  margin-top: var(--space-4);
`;

const DownloadButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-3);
  background-color: var(--color-midnight);
  color: var(--color-pearl);
  border: none;
  border-radius: var(--radius-md);
  font-size: var(--text-body-small);
  font-weight: 500;
  cursor: pointer;
  transition: all var(--duration-normal) var(--ease-default);

  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
  }

  /* Dark mode: lighter background */
  .dark & {
    background-color: var(--color-nav-bg);
  }
`;

const ContrastInfo = styled.div`
  padding: var(--space-3);
  background-color: ${props => props.$pass ? 'rgba(0, 106, 78, 0.1)' : 'rgba(222, 53, 11, 0.1)'};
  color: ${props => props.$pass ? 'var(--color-success)' : 'var(--color-error)'};
  border-radius: var(--radius-md);
  font-size: var(--text-body-small);
  font-weight: 500;
  margin-top: var(--space-3);
  text-align: center;
`;

const Toast = styled.div`
  position: fixed;
  bottom: var(--space-5);
  right: var(--space-5);
  background-color: var(--color-midnight);
  color: var(--color-pearl);
  padding: var(--space-3) var(--space-5);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-lg);
  z-index: 1000;
  animation: slideIn 0.3s ease-out;

  @keyframes slideIn {
    from {
      transform: translateY(100%);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  /* Dark mode: lighter background */
  .dark & {
    background-color: var(--color-nav-bg);
  }
`;

export default function Logo() {
  const [logoColor, setLogoColor] = useState('#0B0425');
  const [toast, setToast] = useState(null);

  const showToast = (message) => {
    setToast(message);
    setTimeout(() => setToast(null), 3000);
  };

  const handleDownload = (filePath, fileName) => {
    const link = document.createElement('a');
    link.href = filePath;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast(`Downloading ${fileName}`);
  };

  const allowedColors = [
    { name: 'Midnight Violet', hex: '#0B0425' },
    { name: 'Pearl White', hex: '#FBFBFB' },
    { name: 'Royal Violet', hex: '#6A00D5' },
  ];

  // Simple contrast ratio calculation
  const getContrastRatio = (color1, color2) => {
    const getLuminance = (hex) => {
      const rgb = parseInt(hex.slice(1), 16);
      const r = (rgb >> 16) & 0xff;
      const g = (rgb >> 8) & 0xff;
      const b = (rgb >> 0) & 0xff;
      return (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    };
    const l1 = getLuminance(color1);
    const l2 = getLuminance(color2);
    return l1 > l2 ? (l1 + 0.05) / (l2 + 0.05) : (l2 + 0.05) / (l1 + 0.05);
  };

  const bgColor = logoColor === '#FBFBFB' ? '#0B0425' : '#FBFBFB';
  const contrastRatio = getContrastRatio(logoColor, bgColor);
  const meetsWCAG = contrastRatio >= 4.5;

  return (
    <div>
      <Helmet>
        <title>Logo | Done.ai</title>
      </Helmet>
      <S.Title>Logo</S.Title>
      <S.ImageContainer>
        <S.LogoImage src="/images/done-logo.svg" />
      </S.ImageContainer>
      <S.Subtitle>Logo Typography: Cy Font</S.Subtitle>
      <S.Bodytext>
        The Done.ai logo uses <strong>Cy</strong>, an Adobe font that embodies our brand's whisper-quiet confidence with its clean, modern letterforms.
      </S.Bodytext>

      <S.Bodytext>
        <strong>Why Cy?</strong> The typeface's geometric simplicity and authoritative presence aligns perfectly with our "Authority through Simplicity" principle. Its letterforms are direct and unambiguous—just like our product.
      </S.Bodytext>

      <div style={{
        fontSize: '48px',
        fontFamily: 'DM Sans, sans-serif',
        fontWeight: '500',
        margin: '2rem 0',
        padding: '2rem',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--color-border)',
        backgroundColor: 'var(--color-surface-secondary)'
      }}>
        Done.
      </div>

      <S.Bodytext style={{ fontSize: '14px', color: 'var(--color-text-secondary)' }}>
        Note: This is displayed with DM Sans as a placeholder. The actual logo uses the Cy font.
      </S.Bodytext>

      <S.Subtitle>Logo Color Customizer & Downloads</S.Subtitle>
      <S.Bodytext>
        Select an approved color to preview the logo and download in different formats. Only use colors from the approved brand palette.
      </S.Bodytext>

      <ColorSliderSection>
        <ColorLabel>Select Logo Color</ColorLabel>
        <ColorOptions>
          {allowedColors.map((color) => (
            <ColorOption
              key={color.hex}
              $color={color.hex}
              $selected={logoColor === color.hex}
              onClick={() => setLogoColor(color.hex)}
              title={color.name}
            />
          ))}
        </ColorOptions>

        <LogoPreview $bgColor={bgColor}>
          <div style={{
            fontSize: '48px',
            fontFamily: 'DM Sans, sans-serif',
            fontWeight: '500',
            color: logoColor
          }}>
            Done.
          </div>
        </LogoPreview>

        <ContrastInfo $pass={meetsWCAG}>
          {meetsWCAG ? <Check size={16} strokeWidth={2.5} style={{ display: 'inline', verticalAlign: 'middle' }} /> : <X size={16} strokeWidth={2.5} style={{ display: 'inline', verticalAlign: 'middle' }} />} Contrast Ratio: {contrastRatio.toFixed(2)}:1 - {meetsWCAG ? 'WCAG AA Compliant' : 'Below WCAG AA Standard'}
        </ContrastInfo>

        <ColorLabel style={{ marginTop: 'var(--space-4)' }}>Download Formats</ColorLabel>
        <DownloadButtons>
          <DownloadButton onClick={() => handleDownload('/images/done-logo.svg', 'done-logo.svg')}>
            <Download size={16} strokeWidth={1.5} style={{ marginRight: '8px' }} />
            SVG
          </DownloadButton>
          <DownloadButton onClick={() => handleDownload('/images/fav-icon.png', 'done-logo.png')}>
            <Download size={16} strokeWidth={1.5} style={{ marginRight: '8px' }} />
            PNG
          </DownloadButton>
        </DownloadButtons>
      </ColorSliderSection>

      {toast && <Toast>{toast}</Toast>}
    </div>
  );
}
