import React from "react";
import styled from "styled-components";

const SwatchContainer = styled.div`
  margin-bottom: var(--space-4);
`;

const SwatchBox = styled.div`
  width: 120px;
  height: 120px;
  background-color: ${props => props.color};
  border-radius: 100px;
  box-shadow: var(--shadow-sm);
  margin-bottom: var(--space-3);
  border: 1px solid var(--color-border);
`;

const SwatchName = styled.div`
  font-size: var(--text-h3);
  font-weight: 500;
  color: var(--color-text-primary);
  margin-bottom: var(--space-1);
`;

const SwatchDetail = styled.div`
  font-size: var(--text-body-small);
  color: var(--color-text-secondary);
  margin-bottom: var(--space-1);
  font-family: 'Courier New', monospace;
`;

const SwatchUsage = styled.div`
  font-size: var(--text-body-small);
  color: var(--color-text-secondary);
  margin-top: var(--space-2);
  line-height: 1.5;
`;

const ColorSwatch = ({ name, hex, rgb, cssVar, usage }) => {
  return (
    <SwatchContainer>
      <SwatchBox color={hex} />
      <SwatchName>{name}</SwatchName>
      <SwatchDetail>HEX: {hex}</SwatchDetail>
      {rgb && <SwatchDetail>RGB: {rgb}</SwatchDetail>}
      <SwatchDetail>CSS: {cssVar}</SwatchDetail>
      {usage && <SwatchUsage>{usage}</SwatchUsage>}
    </SwatchContainer>
  );
};

export default ColorSwatch;
