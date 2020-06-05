import React, { useRef, useEffect, useContext } from "react";

import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "./Styles/Global";

import Header from "./Components/Header";
import Repos from "./Components/Repos";
import Footer from "./Components/Footer";
import { theme } from "./Functions/themeController";

function App() {
  useEffect(() => {
    console.log("oi");
  }, []);

  return (
    <ThemeProvider theme={useContext(theme)}>
      <Header />
      <Repos />
      <Footer />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
