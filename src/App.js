import React from "react";

import { GlobalStyle } from "./Styles/Global";

import Header from "./Components/Header";
import Repos from "./Components/Repos";
import Footer from "./Components/Footer";

import ThemeController from "./Utils/Controller/Theme";

function App() {
  return (
    <ThemeController>
      <Header />
      <Repos />
      <Footer />
      <GlobalStyle />
    </ThemeController>
  );
}

export default App;
