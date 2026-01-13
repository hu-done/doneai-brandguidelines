import React from "react";
import styled from "styled-components";

const CalloutBox = styled.div`
  padding: var(--space-4);
  border-radius: var(--radius-md);
  border-left: 4px solid ${props => {
    switch(props.type) {
      case 'warning': return 'var(--color-warning)';
      case 'error': return 'var(--color-error)';
      case 'success': return 'var(--color-success)';
      default: return 'var(--color-violet)';
    }
  }};
  background-color: ${props => {
    switch(props.type) {
      case 'warning': return 'rgba(180, 83, 9, 0.05)';
      case 'error': return 'rgba(222, 53, 11, 0.05)';
      case 'success': return 'rgba(0, 106, 78, 0.05)';
      default: return 'rgba(106, 0, 213, 0.05)';
    }
  }};
  margin: var(--space-4) 0;
`;

const CalloutTitle = styled.div`
  font-size: var(--text-body);
  font-weight: 500;
  color: var(--color-text-primary);
  margin-bottom: var(--space-2);
`;

const CalloutContent = styled.div`
  font-size: var(--text-body-small);
  color: var(--color-text-secondary);
  line-height: 1.6;
`;

const Callout = ({ type = 'info', title, children }) => {
  return (
    <CalloutBox type={type}>
      {title && <CalloutTitle>{title}</CalloutTitle>}
      <CalloutContent>{children}</CalloutContent>
    </CalloutBox>
  );
};

export default Callout;
