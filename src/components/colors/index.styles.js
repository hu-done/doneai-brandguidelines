import styled from "styled-components";
export {
  Title,
  Subtitle,
  SubSubtitle,
  Bodytext,
  LogoCatchPhrase,
  DoneTM,
} from "../commonStyles/index.js";

// const LogoColorContainer = styled.div`
//   display: grid;
//   grid-template-columns: repeat(4, 1fr);
//   gap: 35px;
//   margin-bottom: 3rem;

//   @media (max-width: 768px) {
//     grid-template-columns: repeat(2, 1fr);
//   }
// `;

// const LogoColorBox = styled.div`
//   height: 150px;
//   width: 150px;
//   background-color: ${({ bgColor }) => bgColor};

//   display: flex;
//   justify-content: center;
//   align-items: center;
//   border-radius: 50px;
//   margin: 0 auto;

//   @media (max-width: 768px) {
//     height: 100px;
//     width: 100px;
//     border-radius: 30px;
//   }
// `;
// const LogoColor = styled.svg`
//   max-width: 100px;
//   max-height: 80px;
//   .path-fill {
//     fill: ${({ fillColor }) => fillColor || "white"};
//   }
//   .path-stroke {
//     stroke: ${({ strokeColor }) => strokeColor || "white"};
//   }

//   @media (max-width: 768px) {
//     max-width: 60px;
//     max-height: 40px;
//   }
// `;

export const GradientContainer = styled.div`
  width: 45%;
`;

export const Image = styled.img`
  max-width: 100%;
  border-radius: 30px;
`;

export const Video = styled.video`
  width: 100%;
  border-radius: 30px;
  aspect-ratio: 1/1;
  object-fit: cover;
`;

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

export const ColorRowWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${({ bgColor }) => bgColor};
  padding: 20px;
  border: ${({ bgColor }) =>
    bgColor === "#F8F8F8" ? "1px solid #1A2345" : "none"};

  border-radius: 25px;
  margin-bottom: 45px;
`;

export const ColorRowBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80px;
`;

export const hiddenColors = {
  primary: ["neutral1"],
  secondary: ["neutral2", "neutral3", "accent1", "accent2"],
  neutral1: ["primary"],
  neutral2: ["secondary", "neutral3", "accent1", "accent2"],
  neutral3: ["secondary", "neutral2", "accent1", "accent2"],
  accent1: ["secondary", "neutral2", "neutral3", "accent2"],
  accent2: ["secondary", "neutral2", "neutral3", "accent1"],
};

export const ColorRowBox = styled.div`
  width: 60px;
  height: 60px;
  background-color: ${({ color }) => color};
  border-radius: 20px;
  opacity: ${({ hidden }) => (hidden ? 0 : 1)};

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    border-radius: 15px;
  }
`;
