import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const SidebarWrapper = styled.nav`
  width: 250px;
  height: 100vh;
  padding: var(--space-7) var(--space-4);
  position: fixed;
  overflow-y: auto;
  background-color: var(--color-surface-primary);

  @media (max-width: 768px) {
    position: relative;
    width: 100%;
    height: auto;
    padding: var(--space-3) 0;
    display: flex;
    justify-content: flex-start;
    overflow-x: auto;
    overflow-y: visible;
    white-space: nowrap;
  }
`;

const SectionHeader = styled.div`
  font-size: var(--text-body-small);
  font-weight: 500;
  color: var(--color-text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-top: ${props => props.first ? '0' : 'var(--space-5)'};
  margin-bottom: var(--space-2);
  padding-left: var(--space-2);

  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledNavLink = styled(NavLink)`
  display: block;
  color: var(--color-text-primary);
  text-decoration: none;
  padding: var(--space-2) var(--space-2);
  border-radius: var(--radius-sm);
  font-size: var(--text-body-small);
  font-weight: 400;
  margin-bottom: var(--space-1);
  transition: background-color var(--duration-fast) var(--ease-default);
  border-left: 3px solid transparent;

  &.active {
    background-color: var(--color-lavender);
    border-left-color: var(--color-violet);
    font-weight: 500;
  }

  &:hover {
    background-color: var(--color-lavender);
  }

  @media (max-width: 768px) {
    display: inline-block;
    padding: var(--space-2) var(--space-3);
    margin-right: var(--space-2);
    border-left: none;
    border-bottom: 3px solid transparent;

    &.active {
      border-left: none;
      border-bottom-color: var(--color-violet);
    }
  }
`;

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <SectionHeader first>FOUNDATION</SectionHeader>
      <StyledNavLink to="/">Introduction</StyledNavLink>
      <StyledNavLink to="/brand-dna">Brand DNA</StyledNavLink>

      <SectionHeader>VERBAL IDENTITY</SectionHeader>
      <StyledNavLink to="/tone-of-voice">Tone of Voice</StyledNavLink>
      <StyledNavLink to="/writing-guidelines">Writing Guidelines</StyledNavLink>
      <StyledNavLink to="/forbidden-language">Forbidden Language</StyledNavLink>

      <SectionHeader>VISUAL IDENTITY</SectionHeader>
      <StyledNavLink to="/logo">Logo</StyledNavLink>
      <StyledNavLink to="/colors">Colors</StyledNavLink>
      <StyledNavLink to="/typography">Typography</StyledNavLink>
      <StyledNavLink to="/dark-mode">Dark Mode</StyledNavLink>

      <SectionHeader>DESIGN SYSTEM</SectionHeader>
      <StyledNavLink to="/spacing">Spacing & Layout</StyledNavLink>
      <StyledNavLink to="/border-radius">Border Radius</StyledNavLink>
      <StyledNavLink to="/elevation">Elevation & Shadows</StyledNavLink>
      <StyledNavLink to="/css-tokens">CSS Tokens</StyledNavLink>

      <SectionHeader>COMPONENTS</SectionHeader>
      <StyledNavLink to="/buttons">Buttons</StyledNavLink>
      <StyledNavLink to="/inputs">Inputs</StyledNavLink>
      <StyledNavLink to="/cards">Cards</StyledNavLink>
    </SidebarWrapper>
  );
};

export default Sidebar;
