import styled from "styled-components";
export {
  Title,
  Subtitle,
  SubSubtitle,
  Bodytext,
  ImageContainer,
  LightImageContainer,
  LogoImage,
  LogoIconImage,
  LogoCatchPhrase,
  DoneTM,
} from "../commonStyles/index.js";

export const Section = styled.div`
  padding: 0rem 0;
`;

export const ColorsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: space-between;
`;

export const ColorBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100px;
`;

export const ColorBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70px;
  height: 70px;
  background-color: ${({ color }) => color};
  border: ${({ color }) =>
    color === "#FBFBFB" ? "1px solid #0F0633" : "none"};
  border-radius: 35px;
  padding: 10px;
`;

export const ColorName = styled.div`
  font-size: var(--text-caption);
  font-weight: 500;
  margin: var(--space-2) 0;
  text-align: center;
`;

export const ColorCode = styled.div`
  font-size: var(--text-caption);
  text-align: center;
  margin: var(--space-1) 0;
`;

export const RgbCode = styled.div`
  font-size: var(--text-caption);
  text-align: center;
  margin: var(--space-1) 0;
`;

export const TitleColorsContainer = styled(ColorsContainer)`
  justify-content: start;
  gap: 100px;
`;

export const ColorTitle = styled.h4`
  text-align: center;
`;

export const FontBox = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;
export const FontLetters = styled.div`
  display: flex;
  font-size: 90px;
`;

export const AlphabetContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 0;
`;

export const AlphabetLetters = styled.p`
  margin: 2px;
`;
export const StyleInfo = styled.div`
  margin: 2px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 15px;
  font-weight: 300;
`;

export const PrimaryButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary.hex};
  color: ${({ theme }) => theme.colors.neutral3.hex};
  border: none;
  border-radius: 30px;
  padding: 10px 40px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
`;

export const SecondaryButton = styled(PrimaryButton)`
  background-color: ${({ theme }) => theme.colors.neutral3.hex};
  color: ${({ theme }) => theme.colors.primary.hex};
  border: 2px solid ${({ theme }) => theme.colors.primary.hex};
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding: 2rem;
`;

export const DarkButtonContainer = styled(ButtonContainer)`
  background-color: ${({ theme }) => theme.colors.neutral1.hex};
  border-radius: 3em;
`;

export const DarkPrimaryButton = styled(PrimaryButton)`
  color: ${({ theme }) => theme.colors.neutral1.hex};
  background-color: ${({ theme }) => theme.colors.secondary.hex};
`;

export const DarkSecondaryButton = styled(SecondaryButton)`
  color: ${({ theme }) => theme.colors.secondary.hex};
  border: 2px solid ${({ theme }) => theme.colors.secondary.hex};
  background-color: ${({ theme }) => theme.colors.neutral1.hex};
`;

export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.neutral1.hex};
  height: 200px;
  width: 300px;
  border-radius: 3em;
`;
