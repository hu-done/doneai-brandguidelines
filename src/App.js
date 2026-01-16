import "./App.css";
import styled from "styled-components";
import Header from "./components/header/header.jsx";
import Footer from "./components/footer/footer.jsx";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Sidebar from "./components/sidebar/sidebar.jsx";
import Home from "./components/home/home.jsx";
import BrandDNA from "./components/brand-dna/brand-dna.jsx";
import Logo from "./components/logo/logo.jsx";
import Colors from "./components/colors/ColorsNew.jsx";
import Typography from "./components/typography/Typography.jsx";
import ToneOfVoice from "./components/tone-of-voice/ToneOfVoice.jsx";
import WritingGuidelines from "./components/writing-guidelines/WritingGuidelines.jsx";
import ForbiddenLanguage from "./components/forbidden-language/ForbiddenLanguage.jsx";
import Buttons from "./components/buttons/Buttons.jsx";
import DarkMode from "./components/dark-mode/DarkMode.jsx";
import Spacing from "./components/spacing/Spacing.jsx";
import BorderRadius from "./components/border-radius/BorderRadius.jsx";
import Elevation from "./components/elevation/Elevation.jsx";
import CSSTokens from "./components/css-tokens/CSSTokens.jsx";
import Inputs from "./components/inputs/Inputs.jsx";
import Cards from "./components/cards/Cards.jsx";
import AssetLibrary from "./components/asset-library/AssetLibrary.jsx";
import Designguide from "./components/designguide/designguide.jsx";
// ComingSoon component available for future placeholder pages
// import ComingSoon from "./components/shared/ComingSoon.jsx";
import Icons from "./components/icons/Icons.jsx";
import Motion from "./components/motion/Motion.jsx";
import GlobalSearch from "./components/shared/GlobalSearch.jsx";
import BrandEssentials from "./components/brand-essentials/BrandEssentials.jsx";

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: "DM Sans", sans-serif;
  background-color: var(--color-surface-primary);
  transition: background-color var(--duration-normal) var(--ease-default);
`;

const ContentWrapper = styled.div`
  flex-grow: 1;
  padding: 0 var(--space-7);
  width: 100%;
  margin-left: calc(250px + var(--space-7));
  margin-right: var(--space-7);

  @media (max-width: 768px) {
    padding: 0 var(--space-4);
    margin-left: auto;
    margin-right: auto;
  }
`;

const PageWrapper = styled.div`
  display: flex;
  flex-grow: 1;

  @media (max-width: 768px) {
    display: block;
  }
`;

// Updating favicon based on theme

(function () {
  const darkmodeIcon =
    "https://cdn.prod.website-files.com/63cf97b6a9ebdc5f745cff2f/680a21178b7b6c75d13cf079_8622e6fb9f12b4d74ecc31317c32511f_fav-icon_dark-mode.png";
  const matcher = window.matchMedia("(prefers-color-scheme: dark)");

  const origLink = document.querySelector(
    "link[rel='icon'], link[rel='shortcut icon']"
  );
  const lightHref = origLink ? origLink.href : "";
  const lightType = origLink ? origLink.type : "image/png";

  function updateFavicon() {
    const href = matcher.matches ? darkmodeIcon : lightHref;
    const type = matcher.matches ? "image/png" : lightType;

    document
      .querySelectorAll("link[rel='icon'], link[rel='shortcut icon']")
      .forEach((el) => el.remove());

    const link = document.createElement("link");
    link.rel = "icon";
    link.type = type;
    link.href = href;
    document.head.appendChild(link);
  }

  matcher.addEventListener("change", updateFavicon);
  if (matcher.matches) updateFavicon();
})();

const App = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Handle Cmd+K (Mac) / Ctrl+K (Windows) keyboard shortcut
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Check for Cmd+K (Mac) or Ctrl+K (Windows/Linux)
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <AppWrapper>
        <Header />
        <PageWrapper>
          <Sidebar onSearchClick={() => setIsSearchOpen(true)} />
          <ContentWrapper>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/brand-dna" element={<BrandDNA />} />
              <Route path="/brand-essentials" element={<BrandEssentials />} />

              {/* Verbal Identity */}
              <Route path="/tone-of-voice" element={<ToneOfVoice />} />
              <Route path="/writing-guidelines" element={<WritingGuidelines />} />
              <Route
                path="/forbidden-language"
                element={<ForbiddenLanguage />}
              />

              {/* Visual Identity */}
              <Route path="/logo" element={<Logo />} />
              <Route path="/colors" element={<Colors />} />
              <Route path="/typography" element={<Typography />} />
              <Route path="/dark-mode" element={<DarkMode />} />
              <Route path="/asset-library" element={<AssetLibrary />} />

              {/* Design System */}
              <Route path="/spacing" element={<Spacing />} />
              <Route path="/border-radius" element={<BorderRadius />} />
              <Route path="/elevation" element={<Elevation />} />
              <Route path="/motion" element={<Motion />} />
              <Route path="/icons" element={<Icons />} />
              <Route path="/css-tokens" element={<CSSTokens />} />

              {/* Components */}
              <Route path="/buttons" element={<Buttons />} />
              <Route path="/inputs" element={<Inputs />} />
              <Route path="/cards" element={<Cards />} />

              {/* Legacy */}
              <Route path="/designguide" element={<Designguide />} />
            </Routes>
          </ContentWrapper>
        </PageWrapper>
        <Footer />
        <GlobalSearch
          isOpen={isSearchOpen}
          onClose={() => setIsSearchOpen(false)}
        />
      </AppWrapper>
    </Router>
  );
};

export default App;
