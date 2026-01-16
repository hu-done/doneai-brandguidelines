import React from "react";
import styled from "styled-components";

const PageContainer = styled.div`
  /* No max-width - use full available space */
  padding: var(--space-7) var(--space-6);
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: var(--text-hero);
  font-weight: 500;
  color: var(--color-text-primary);
  margin-bottom: var(--space-3);
  text-align: center;
`;

const Description = styled.p`
  font-size: var(--text-body);
  color: var(--color-text-secondary);
  text-align: center;
  line-height: 1.6;
`;

const ComingSoon = ({ title, description }) => {
  return (
    <PageContainer>
      <Title>{title || "Coming Soon"}</Title>
      <Description>
        {description || "This page is under construction. Check back soon for comprehensive guidelines."}
      </Description>
    </PageContainer>
  );
};

export default ComingSoon;
