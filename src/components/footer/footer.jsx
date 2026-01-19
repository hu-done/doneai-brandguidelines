import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  color: var(--color-text-secondary);
  padding: var(--space-6) var(--space-3);
  margin-top: auto;
  z-index: 2;
`;

const Container = styled.div`
  margin: 0 auto;
  text-align: center;
`;

const GoToTopLink = styled.a`
  color: var(--color-text-primary);
  text-decoration: none;
  font-size: var(--text-body);
  font-weight: 500;
  cursor: pointer;
  transition: all var(--duration-normal) var(--ease-default);
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);

  &:hover {
    color: var(--color-violet);
    transform: translateY(-2px);
  }

  &::before {
    content: "↑";
    font-size: 1.25rem;
  }
`;

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <FooterWrapper>
      <Container>
        <GoToTopLink onClick={scrollToTop}>Go to top</GoToTopLink>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
