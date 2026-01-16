import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Search } from "lucide-react";

const SidebarWrapper = styled.nav`
  width: 250px;
  height: 80vh;
  padding: var(--space-4) var(--space-4);
  position: fixed;
  left: 1rem;
  overflow-y: auto;
  background-color: var(--color-nav-bg);
  border-radius: var(--radius-xxl);

  /* Hide scrollbar but keep functionality */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }

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
    border-radius: 0;
    background-color: var(--color-nav-bg);
  }
`;

const SectionHeader = styled.div`
  font-size: var(--text-body-small);
  font-weight: 600;
  color: rgba(251, 251, 251, 0.5);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-top: ${(props) => (props.$first ? "0" : "var(--space-5)")};
  margin-bottom: var(--space-2);
  padding-left: var(--space-2);

  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledNavLink = styled(NavLink)`
  display: block;
  color: #fbfbfb;
  text-decoration: none;
  padding: var(--space-2) var(--space-2);
  border-radius: var(--radius-md);
  font-size: var(--text-body);
  font-weight: 400;
  margin-bottom: var(--space-1);
  transition: all var(--duration-fast) var(--ease-default);
  border-left: 3px solid transparent;

  &.active {
    background-color: rgba(251, 251, 251, 0.15);
    color: #fbfbfb;
    font-weight: 500;
    border-left-color: var(--color-violet);
  }

  &:hover:not(.active) {
    background-color: rgba(106, 0, 213, 0.2);
    color: #fbfbfb;
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

const SearchButton = styled.button`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  width: 100%;
  padding: var(--space-2) var(--space-2);
  margin-bottom: var(--space-4);
  background-color: rgba(251, 251, 251, 0.1);
  border: 1px solid rgba(251, 251, 251, 0.2);
  border-radius: var(--radius-md);
  color: rgba(251, 251, 251, 0.7);
  font-size: var(--text-body-small);
  font-family: "DM Sans", sans-serif;
  cursor: pointer;
  transition: all var(--duration-fast) var(--ease-default);

  &:hover {
    background-color: rgba(251, 251, 251, 0.15);
    color: #fbfbfb;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const SearchShortcut = styled.span`
  margin-left: auto;
  font-size: var(--text-caption);
  padding: 2px 6px;
  background-color: rgba(251, 251, 251, 0.1);
  border-radius: var(--radius-sm);
  font-family: "SF Mono", "Monaco", "Consolas", monospace;
`;

const Sidebar = ({ onSearchClick }) => {
  return (
    <SidebarWrapper>
      <SearchButton onClick={onSearchClick}>
        <Search size={16} strokeWidth={1.5} />
        Search...
        <SearchShortcut>⌘K</SearchShortcut>
      </SearchButton>

      <SectionHeader $first>FOUNDATION</SectionHeader>
      <StyledNavLink to="/">Introduction</StyledNavLink>
      <StyledNavLink to="/brand-dna">Brand DNA</StyledNavLink>
      <StyledNavLink to="/brand-essentials">Brand Essentials</StyledNavLink>

      <SectionHeader>VERBAL IDENTITY</SectionHeader>
      <StyledNavLink to="/tone-of-voice">Tone of Voice</StyledNavLink>
      <StyledNavLink to="/writing-guidelines">Writing Guidelines</StyledNavLink>
      <StyledNavLink to="/forbidden-language">Forbidden Language</StyledNavLink>

      <SectionHeader>VISUAL IDENTITY</SectionHeader>
      <StyledNavLink to="/logo">Logo</StyledNavLink>
      <StyledNavLink to="/colors">Colors</StyledNavLink>
      <StyledNavLink to="/typography">Typography</StyledNavLink>
      <StyledNavLink to="/dark-mode">Dark Mode</StyledNavLink>
      <StyledNavLink to="/asset-library">Asset Library</StyledNavLink>

      <SectionHeader>DESIGN SYSTEM</SectionHeader>
      <StyledNavLink to="/spacing">Spacing & Layout</StyledNavLink>
      <StyledNavLink to="/border-radius">Border Radius</StyledNavLink>
      <StyledNavLink to="/elevation">Elevation & Shadows</StyledNavLink>
      <StyledNavLink to="/motion">Motion & Animation</StyledNavLink>
      <StyledNavLink to="/icons">Icons</StyledNavLink>
      <StyledNavLink to="/css-tokens">CSS Tokens</StyledNavLink>

      <SectionHeader>COMPONENTS</SectionHeader>
      <StyledNavLink to="/buttons">Buttons</StyledNavLink>
      <StyledNavLink to="/inputs">Inputs</StyledNavLink>
      <StyledNavLink to="/cards">Cards</StyledNavLink>
    </SidebarWrapper>
  );
};

export default Sidebar;
