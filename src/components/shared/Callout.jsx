import React from "react";
import styled from "styled-components";

const CalloutBox = styled.div`
  padding: var(--space-5);
  border-radius: var(--radius-lg);
  border-left: 3px solid ${props => {
    switch(props.type) {
      case 'warning': return 'var(--color-warning)';
      case 'error': return 'var(--color-error)';
      case 'success': return 'var(--color-success)';
      default: return 'var(--color-midnight)';
    }
  }};
  background-color: var(--color-card-bg);
  box-shadow: var(--shadow-sm);
  margin: var(--space-6) 0;
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
