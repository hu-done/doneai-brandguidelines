import "./App.css";
import styled from "styled-components";
import Header from "./components/header/header.jsx";
import Footer from "./components/footer/footer.jsx";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/sidebar/sidebar.jsx";
import Home from "./components/home/home.jsx";
import BrandDNA from "./components/brand-dna/brand-dna.jsx";
import Logo from "./components/logo/logo.jsx";
import Colors from "./components/colors/ColorsNew.jsx";
import Typography from "./components/typography/Typography.jsx";
import ToneOfVoice from "./components/tone-of-voice/ToneOfVoice.jsx";
import ForbiddenLanguage from "./components/forbidden-language/ForbiddenLanguage.jsx";
import Buttons from "./components/buttons/Buttons.jsx";
import DarkMode from "./components/dark-mode/DarkMode.jsx";
import Spacing from "./components/spacing/Spacing.jsx";
import BorderRadius from "./components/border-radius/BorderRadius.jsx";
import Elevation from "./components/elevation/Elevation.jsx";
import CSSTokens from "./components/css-tokens/CSSTokens.jsx";
import Inputs from "./components/inputs/Inputs.jsx";
import Cards from "./components/cards/Cards.jsx";
import Designguide from "./components/designguide/designguide.jsx";
import ComingSoon from "./components/shared/ComingSoon.jsx";

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: "DM Sans", sans-serif;
  background-color: #fbfbfb;
`;

const ContentWrapper = styled.div`
  margin-left: 250px;
  padding: 1rem 2rem;
  flex-grow: 1;
  max-width: 900px;

  @media (max-width: 768px) {
    margin-left: 0;
    padding: 1rem;
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
  return (
    <Router>
      <AppWrapper>
        <Header />
        <PageWrapper>
          <Sidebar />
          <ContentWrapper>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/brand-dna" element={<BrandDNA />} />

              {/* Verbal Identity */}
              <Route path="/tone-of-voice" element={<ToneOfVoice />} />
              <Route path="/writing-guidelines" element={<ComingSoon title="Writing Guidelines" description="Comprehensive writing guidelines coming soon." />} />
              <Route path="/forbidden-language" element={<ForbiddenLanguage />} />

              {/* Visual Identity */}
              <Route path="/logo" element={<Logo />} />
              <Route path="/colors" element={<Colors />} />
              <Route path="/typography" element={<Typography />} />
              <Route path="/dark-mode" element={<DarkMode />} />

              {/* Design System */}
              <Route path="/spacing" element={<Spacing />} />
              <Route path="/border-radius" element={<BorderRadius />} />
              <Route path="/elevation" element={<Elevation />} />
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
      </AppWrapper>
    </Router>
  );
};

export default App;
