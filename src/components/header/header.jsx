import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useDarkMode } from "../../context/DarkModeContext";

const HeaderWrapper = styled.header`
  color: var(--color-violet);
  padding: var(--space-3);
  background-color: var(--color-surface-primary);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoContainerImage = styled.img`
  max-width: calc(120px + 3vw);
  max-height: 40px;
  margin: 0px 10px;
`;

const Container = styled.div`
  margin: 0 auto;
  max-width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 var(--space-3);
`;

const DarkModeToggle = styled.button`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-3);
  background-color: ${props => props.$isDark ? 'var(--color-pearl)' : 'var(--color-midnight)'};
  color: ${props => props.$isDark ? 'var(--color-midnight)' : 'var(--color-pearl)'};
  border: none;
  border-radius: var(--radius-full);
  font-size: var(--text-body-small);
  font-weight: 500;
  cursor: pointer;
  transition: all var(--duration-normal) var(--ease-default);

  &:hover {
    transform: scale(1.02);
    box-shadow: var(--shadow-sm);
  }
`;

const ToggleIcon = styled.span`
  font-size: 16px;
`;

const Header = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <HeaderWrapper>
      <Container>
        <NavLink to="/">
          <LogoContainerImage
            src={isDarkMode ? "/images/done-logo-white.svg" : "/images/done-logo.svg"}
            alt="Done.ai"
          />
        </NavLink>
        <DarkModeToggle onClick={toggleDarkMode} $isDark={isDarkMode}>
          <ToggleIcon>{isDarkMode ? "☀️" : "🌙"}</ToggleIcon>
          {isDarkMode ? "Light" : "Dark"}
        </DarkModeToggle>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
