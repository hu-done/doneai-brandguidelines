import styled from "styled-components";

// Text

export const Title = styled.h1`
  font-size: var(--text-h1);
  font-weight: 500;
  color: var(--color-text-primary);
  margin-bottom: var(--space-6);

  @media (min-width: 768px) {
    font-size: 40px;
  }
`;

export const Subtitle = styled.h2`
  font-size: var(--text-h2);
  font-weight: 500;
  color: var(--color-text-primary);
  margin: var(--section-gap) 0 var(--space-5);

  @media (min-width: 768px) {
    font-size: 28px;
  }
`;

export const SubSubtitle = styled.h3`
  font-size: var(--text-h3);
  font-weight: 500;
  color: var(--color-text-primary);

  @media (min-width: 768px) {
    font-size: 22px;
  }
`;

export const Bodytext = styled.p`
  font-size: var(--text-body);
  font-weight: 400;
  color: var(--color-text-secondary);
  line-height: 1.7;
  margin-bottom: var(--space-5);

  @media (min-width: 768px) {
    font-size: 17px;
  }
`;

export const HomeTitleContainer = styled.div`
  position: absolute;
  z-index: 10;
  color: #fbfbfb;

  & > h1 {
    font-weight: 600;
    margin: 0 auto;
    padding-bottom: 0;
    text-align: center;
  }
  // & > p {
  //   margin: 0 auto;
  //   font-size: 18px;
  //   width: 70%;
  // }

  @media (min-width: 768px) {
    padding: 0px;
  }
`;

export const LogoCatchPhrase = styled.span`
  font-weight: 600;
  font-size: inherit;
  &:before {
    content: " ";
  }
`;

const DoneContainer = styled.span`
  margin-left: 2px;
`;

const StyledN = styled.span`
  margin: 0 -0.5px;
  font-family: "Open Sans";
  font-size: 0.9em;
  font-weight: 700;
`;

const StyledTM = styled.sup`
  font-size: 8px;
`;

export const DoneTM = () => (
  <DoneContainer>
    do
    <StyledN>п</StyledN>e<StyledTM>™</StyledTM>
  </DoneContainer>
);

export const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-6);

  & > div {
    flex: 1 1 100%;
  }

  @media (min-width: 768px) {
    & > div {
      flex: 1 1 calc(45%);
    }
  }
`;

// Images

export const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-3) 0;
  margin: var(--space-5) auto;
`;

export const LightImageContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.neutral1.hex};
  border-radius: 30px;
  padding: var(--space-3);
`;

export const LogoImage = styled.img`
  max-height: 70px;
  transition: filter var(--duration-normal) var(--ease-default);

  /* Invert logo color in dark mode */
  .dark & {
    filter: brightness(0) invert(1);
  }
`;

// Deprecated - icon logo not ready yet, but keeping export for legacy designguide page
export const LogoIconImage = styled.img`
  max-height: 54px;
`;
