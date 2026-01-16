import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import styled from "styled-components";
import { ExternalLink, Image, FileText, Layout, Palette } from "lucide-react";
import * as S from "../commonStyles/index.js";
import Callout from "../shared/Callout";

const CategorySection = styled.section`
  margin: var(--space-8) 0;
`;

const CategoryTitle = styled.h2`
  font-size: var(--text-h2);
  font-weight: 500;
  color: var(--color-text-primary);
  margin-bottom: var(--space-4);
  padding-bottom: var(--space-3);
  border-bottom: 1px solid var(--color-border);
`;

const AssetGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--space-5);
  margin: var(--space-5) 0;
`;

const AssetCard = styled.div`
  background-color: var(--color-card-bg);
  border-radius: var(--radius-lg);
  padding: var(--space-5);
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  box-shadow: var(--shadow-sm);
  transition: all var(--duration-normal) var(--ease-default);

  &:hover {
    box-shadow: var(--shadow-md);
  }
`;

const AssetPreview = styled.div`
  background-color: ${props => props.$bgColor || 'var(--color-surface-secondary)'};
  border-radius: var(--radius-md);
  padding: var(--space-5);
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 140px;
`;

const LogoPreview = styled.img`
  max-width: 100%;
  height: auto;
  max-height: 80px;
  transition: filter var(--duration-normal) var(--ease-default);
`;

const LogoPreviewInverted = styled(LogoPreview)`
  filter: brightness(0) invert(1);
`;

const AssetTitle = styled.h3`
  font-size: var(--text-h3);
  font-weight: 500;
  color: var(--color-text-primary);
  margin: 0;
`;

const AssetDescription = styled.p`
  font-size: var(--text-body-small);
  color: var(--color-text-secondary);
  margin: 0;
  line-height: 1.5;
  flex-grow: 1;
`;

const FormatGrid = styled.div`
  display: flex;
  gap: var(--space-2);
  flex-wrap: wrap;
`;

const DownloadButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-1);
  padding: var(--space-2) var(--space-3);
  background-color: var(--color-midnight);
  color: var(--color-pearl);
  border-radius: var(--radius-md);
  text-decoration: none;
  font-size: var(--text-body-small);
  font-weight: 500;
  transition: all var(--duration-fast) var(--ease-default);
  border: none;
  cursor: pointer;

  &:hover {
    transform: translateY(-1px);
    box-shadow: var(--shadow-sm);
  }

  /* Dark mode: lighter background */
  .dark & {
    background-color: var(--color-nav-bg);
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background-color: var(--color-lavender);
  border-radius: var(--radius-md);
  color: var(--color-violet);
  margin-bottom: var(--space-2);
`;

const ViewReferenceButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-1);
  padding: var(--space-2) var(--space-3);
  background-color: transparent;
  color: var(--color-midnight);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  text-decoration: none;
  font-size: var(--text-body-small);
  font-weight: 500;
  transition: all var(--duration-fast) var(--ease-default);
  cursor: pointer;

  &:hover {
    border-color: var(--color-violet);
    color: var(--color-violet);
    background-color: var(--color-lavender);
  }
`;

const ComingSoonBadge = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-2) var(--space-3);
  background-color: var(--color-lavender);
  color: var(--color-violet);
  border-radius: var(--radius-md);
  font-size: var(--text-body-small);
  font-weight: 500;
`;

const PlaceholderPreview = styled.div`
  background-color: var(--color-lavender);
  border-radius: var(--radius-md);
  padding: var(--space-5);
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 140px;
  color: var(--color-violet);
  font-size: var(--text-h3);
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

const AssetLibrary = () => {
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

  // handleComingSoon available for future placeholder assets
  // const handleComingSoon = (assetName) => {
  //   showToast(`${assetName} - Coming soon`);
  // };

  return (
    <div>
      <Helmet>
        <title>Asset Library | Done.ai Brand Guidelines</title>
      </Helmet>

      <S.Title>Asset Library</S.Title>

      <S.Bodytext>
        Download Done.ai brand assets for presentations, marketing materials, and product development. All assets follow our brand guidelines.
      </S.Bodytext>

      <Callout type="info" title="Usage Guidelines">
        These assets are for Done.ai official use. Maintain proper spacing, use only approved colors, and never distort logo proportions.
      </Callout>

      {/* DESIGN REFERENCES - FOR DESIGNERS */}
      <CategorySection>
        <CategoryTitle>Design References</CategoryTitle>
        <S.Bodytext>
          Quick links to design guidelines and specifications.
        </S.Bodytext>
        <AssetGrid>
          <AssetCard>
            <IconWrapper>
              <Image size={24} strokeWidth={1.5} />
            </IconWrapper>
            <AssetTitle>Color Palette</AssetTitle>
            <AssetDescription>
              Full color palette with usage guidelines, hex codes, and the 90/10 rule.
            </AssetDescription>
            <FormatGrid>
              <ViewReferenceButton href="/colors">
                View Reference
                <ExternalLink size={14} strokeWidth={1.5} />
              </ViewReferenceButton>
            </FormatGrid>
          </AssetCard>

          <AssetCard>
            <IconWrapper>
              <FileText size={24} strokeWidth={1.5} />
            </IconWrapper>
            <AssetTitle>Typography System</AssetTitle>
            <AssetDescription>
              Type scale, DM Sans specimen, and hierarchy examples with live previews.
            </AssetDescription>
            <FormatGrid>
              <ViewReferenceButton href="/typography">
                View Reference
                <ExternalLink size={14} strokeWidth={1.5} />
              </ViewReferenceButton>
            </FormatGrid>
          </AssetCard>

          <AssetCard>
            <IconWrapper>
              <Layout size={24} strokeWidth={1.5} />
            </IconWrapper>
            <AssetTitle>Spacing & Layout</AssetTitle>
            <AssetDescription>
              8pt grid system, spacing tokens, and layout containers.
            </AssetDescription>
            <FormatGrid>
              <ViewReferenceButton href="/spacing">
                View Reference
                <ExternalLink size={14} strokeWidth={1.5} />
              </ViewReferenceButton>
            </FormatGrid>
          </AssetCard>
        </AssetGrid>
      </CategorySection>

      {/* LOGOS */}
      <CategorySection>
        <CategoryTitle>Logo Files</CategoryTitle>
        <AssetGrid>
          <AssetCard>
            <AssetPreview $bgColor="var(--color-pearl)">
              <LogoPreview src="/images/done-logo.svg" alt="Done.ai Logo Dark" />
            </AssetPreview>
            <AssetTitle>Primary Logo (Dark)</AssetTitle>
            <AssetDescription>
              Midnight Violet logo for light backgrounds. Primary usage.
            </AssetDescription>
            <FormatGrid>
              <DownloadButton onClick={() => handleDownload('/images/done-logo.svg', 'done-logo.svg')}>
                SVG
              </DownloadButton>
            </FormatGrid>
          </AssetCard>

          <AssetCard>
            <AssetPreview $bgColor="var(--color-midnight)">
              <LogoPreviewInverted src="/images/done-logo.svg" alt="Done.ai Logo Light" />
            </AssetPreview>
            <AssetTitle>Primary Logo (Light)</AssetTitle>
            <AssetDescription>
              Use CSS filter to invert for dark backgrounds. Same SVG file.
            </AssetDescription>
            <FormatGrid>
              <DownloadButton onClick={() => handleDownload('/images/done-logo.svg', 'done-logo.svg')}>
                SVG
              </DownloadButton>
            </FormatGrid>
          </AssetCard>

          {/* Icon logos hidden until ready
          <AssetCard>
            <AssetPreview $bgColor="var(--color-pearl)">
              <LogoPreview src="/images/done-logo-icon.svg" alt="Done.ai Icon Dark" />
            </AssetPreview>
            <AssetTitle>Logo Icon (Dark)</AssetTitle>
            <AssetDescription>
              Icon-only for favicons, app icons, and compact spaces.
            </AssetDescription>
            <FormatGrid>
              <DownloadButton onClick={() => handleDownload('/images/done-logo-icon.svg', 'done-icon-dark.svg')}>
                SVG
              </DownloadButton>
              <DownloadButton onClick={() => handleDownload('/images/fav-icon.png', 'done-favicon.png')}>
                PNG
              </DownloadButton>
            </FormatGrid>
          </AssetCard>

          <AssetCard>
            <AssetPreview $bgColor="var(--color-midnight)">
              <LogoPreviewInverted src="/images/done-logo-icon.svg" alt="Done.ai Icon Light" />
            </AssetPreview>
            <AssetTitle>Logo Icon (Light)</AssetTitle>
            <AssetDescription>
              Light icon for dark backgrounds and dark mode.
            </AssetDescription>
            <FormatGrid>
              <DownloadButton onClick={() => handleDownload('/images/done-logo-icon.svg', 'done-icon.svg')}>
                SVG
              </DownloadButton>
            </FormatGrid>
          </AssetCard>
          */}
        </AssetGrid>
      </CategorySection>

      {/* BACKGROUNDS */}
      <CategorySection>
        <CategoryTitle>Backgrounds & Media</CategoryTitle>
        <AssetGrid>
          <AssetCard>
            <AssetPreview $bgColor="var(--color-midnight)">
              <img
                src="/images/Gradient.jpg"
                alt="Gradient Background"
                style={{ maxWidth: '100%', maxHeight: '100px', borderRadius: 'var(--radius-sm)' }}
              />
            </AssetPreview>
            <AssetTitle>Gradient Background</AssetTitle>
            <AssetDescription>
              Brand gradient for hero sections and featured content.
            </AssetDescription>
            <FormatGrid>
              <DownloadButton onClick={() => handleDownload('/images/Gradient.jpg', 'done-gradient.jpg')}>
                JPG
              </DownloadButton>
              <DownloadButton onClick={() => handleDownload('/assets/Gradient.mp4', 'done-gradient.mp4')}>
                MP4
              </DownloadButton>
            </FormatGrid>
          </AssetCard>

          <AssetCard>
            <PlaceholderPreview>Teams BG</PlaceholderPreview>
            <AssetTitle>Teams Background</AssetTitle>
            <AssetDescription>
              Virtual meeting backgrounds with Done.ai branding.
            </AssetDescription>
            <FormatGrid>
              <ComingSoonBadge>Coming Soon</ComingSoonBadge>
            </FormatGrid>
          </AssetCard>

          <AssetCard>
            <PlaceholderPreview>Zoom BG</PlaceholderPreview>
            <AssetTitle>Zoom Background</AssetTitle>
            <AssetDescription>
              Virtual meeting backgrounds optimized for Zoom.
            </AssetDescription>
            <FormatGrid>
              <ComingSoonBadge>Coming Soon</ComingSoonBadge>
            </FormatGrid>
          </AssetCard>
        </AssetGrid>
      </CategorySection>

      {/* TEMPLATES */}
      <CategorySection>
        <CategoryTitle>Templates</CategoryTitle>
        <AssetGrid>
          <AssetCard>
            <PlaceholderPreview>PPT</PlaceholderPreview>
            <AssetTitle>PowerPoint Template</AssetTitle>
            <AssetDescription>
              Branded presentation template with Done.ai styling and layouts.
            </AssetDescription>
            <FormatGrid>
              <ComingSoonBadge>Coming Soon</ComingSoonBadge>
            </FormatGrid>
          </AssetCard>

          <AssetCard>
            <PlaceholderPreview>Email</PlaceholderPreview>
            <AssetTitle>Email Signature</AssetTitle>
            <AssetDescription>
              Standard email signature template for all employees.
            </AssetDescription>
            <FormatGrid>
              <ComingSoonBadge>Coming Soon</ComingSoonBadge>
            </FormatGrid>
          </AssetCard>

          <AssetCard>
            <PlaceholderPreview>Letter</PlaceholderPreview>
            <AssetTitle>Letterhead</AssetTitle>
            <AssetDescription>
              Official letterhead template for formal communications.
            </AssetDescription>
            <FormatGrid>
              <ComingSoonBadge>Coming Soon</ComingSoonBadge>
            </FormatGrid>
          </AssetCard>

          <AssetCard>
            <PlaceholderPreview>Card</PlaceholderPreview>
            <AssetTitle>Business Card</AssetTitle>
            <AssetDescription>
              Standard business card design template.
            </AssetDescription>
            <FormatGrid>
              <ComingSoonBadge>Coming Soon</ComingSoonBadge>
            </FormatGrid>
          </AssetCard>
        </AssetGrid>
      </CategorySection>

      {/* SOCIAL MEDIA */}
      <CategorySection>
        <CategoryTitle>Social Media</CategoryTitle>
        <AssetGrid>
          <AssetCard>
            <PlaceholderPreview>LinkedIn</PlaceholderPreview>
            <AssetTitle>LinkedIn Banner</AssetTitle>
            <AssetDescription>
              Company page banner (1128 × 191px) and personal banner templates.
            </AssetDescription>
            <FormatGrid>
              <ComingSoonBadge>Coming Soon</ComingSoonBadge>
            </FormatGrid>
          </AssetCard>

          <AssetCard>
            <PlaceholderPreview>Profile</PlaceholderPreview>
            <AssetTitle>Profile Pictures</AssetTitle>
            <AssetDescription>
              Social media profile images in various sizes.
            </AssetDescription>
            <FormatGrid>
              <ComingSoonBadge>Coming Soon</ComingSoonBadge>
            </FormatGrid>
          </AssetCard>

          <AssetCard>
            <PlaceholderPreview>Twitter</PlaceholderPreview>
            <AssetTitle>Twitter/X Header</AssetTitle>
            <AssetDescription>
              Header image (1500 × 500px) for Twitter/X profiles.
            </AssetDescription>
            <FormatGrid>
              <ComingSoonBadge>Coming Soon</ComingSoonBadge>
            </FormatGrid>
          </AssetCard>
        </AssetGrid>
      </CategorySection>

      {/* DESIGN RESOURCES */}
      <CategorySection>
        <CategoryTitle>Design Resources</CategoryTitle>
        <AssetGrid>
          <AssetCard>
            <PlaceholderPreview><Palette size={48} strokeWidth={1.5} /></PlaceholderPreview>
            <AssetTitle>Color Palette File</AssetTitle>
            <AssetDescription>
              Adobe ASE and Figma-ready color swatches.
            </AssetDescription>
            <FormatGrid>
              <ComingSoonBadge>Coming Soon</ComingSoonBadge>
            </FormatGrid>
          </AssetCard>

          <AssetCard>
            <PlaceholderPreview>Aa</PlaceholderPreview>
            <AssetTitle>Typography Specimen</AssetTitle>
            <AssetDescription>
              DM Sans font files and specimen sheet.
            </AssetDescription>
            <FormatGrid>
              <DownloadButton
                href="https://fonts.google.com/specimen/DM+Sans"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Fonts
              </DownloadButton>
            </FormatGrid>
          </AssetCard>

          <AssetCard>
            <PlaceholderPreview>Icons</PlaceholderPreview>
            <AssetTitle>Icon Set</AssetTitle>
            <AssetDescription>
              Custom icon library for Done.ai interfaces.
            </AssetDescription>
            <FormatGrid>
              <ComingSoonBadge>Coming Soon</ComingSoonBadge>
            </FormatGrid>
          </AssetCard>
        </AssetGrid>
      </CategorySection>

      {/* APP ICONS */}
      <CategorySection>
        <CategoryTitle>App Icons</CategoryTitle>
        <AssetGrid>
          <AssetCard>
            <AssetPreview $bgColor="var(--color-pearl)">
              <img
                src="/logo192.png"
                alt="App Icon 192px"
                style={{ width: '80px', height: '80px' }}
              />
            </AssetPreview>
            <AssetTitle>App Icon (192px)</AssetTitle>
            <AssetDescription>
              Standard app icon for web and mobile.
            </AssetDescription>
            <FormatGrid>
              <DownloadButton onClick={() => handleDownload('/logo192.png', 'done-app-icon-192.png')}>
                PNG
              </DownloadButton>
            </FormatGrid>
          </AssetCard>

          <AssetCard>
            <AssetPreview $bgColor="var(--color-pearl)">
              <img
                src="/logo512.png"
                alt="App Icon 512px"
                style={{ width: '80px', height: '80px' }}
              />
            </AssetPreview>
            <AssetTitle>App Icon (512px)</AssetTitle>
            <AssetDescription>
              High-resolution app icon for stores and splash screens.
            </AssetDescription>
            <FormatGrid>
              <DownloadButton onClick={() => handleDownload('/logo512.png', 'done-app-icon-512.png')}>
                PNG
              </DownloadButton>
            </FormatGrid>
          </AssetCard>

          <AssetCard>
            <AssetPreview $bgColor="var(--color-pearl)">
              <img
                src="/images/logo-touch-icon.png"
                alt="Touch Icon"
                style={{ width: '80px', height: '80px' }}
              />
            </AssetPreview>
            <AssetTitle>Touch Icon</AssetTitle>
            <AssetDescription>
              iOS home screen and touch icon.
            </AssetDescription>
            <FormatGrid>
              <DownloadButton onClick={() => handleDownload('/images/logo-touch-icon.png', 'done-touch-icon.png')}>
                PNG
              </DownloadButton>
            </FormatGrid>
          </AssetCard>
        </AssetGrid>
      </CategorySection>

      {toast && <Toast>{toast}</Toast>}
    </div>
  );
};

export default AssetLibrary;
