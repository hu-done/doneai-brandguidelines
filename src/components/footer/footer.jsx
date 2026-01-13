import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  color: var(--color-pearl);
  padding: var(--space-3);
  margin-top: auto;
  z-index: 2;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const LogoContainerImage = styled.img`
  max-width: calc(70px + 3vw);
  max-height: 800px;
  margin: 0px 10px;
  border-radius: 25%;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <LogoContainerImage src="./images/logo-touch-icon.png"></LogoContainerImage>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
