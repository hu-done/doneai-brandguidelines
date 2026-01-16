import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "styled-components";
import theme from "./theme/theme.jsx";
import { HelmetProvider } from "react-helmet-async";
import { DarkModeProvider } from "./context/DarkModeContext.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <DarkModeProvider>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </DarkModeProvider>
    </HelmetProvider>
  </React.StrictMode>
);
