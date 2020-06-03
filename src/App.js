import React from "react";

import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "./Styles/Global";

import Header from "./Components/Header";

import ThemeSelect from "./Functions/ThemeSelect";


function App() {
  return (
    <ThemeProvider theme={ThemeSelect}>
      <Header />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
