import React, { createContext } from "react";

import { ThemeProvider } from "styled-components";

import usePersistedState from "../../Utils/Hooks/usePersistedState";

import Light from "../../Themes/Light.json";
import Dark from "../../Themes/Dark.json";

export let updateTheme = createContext(null);
export let getThemeActived = createContext(null);

export const ThemeController = (props) => {
  const [state, setState] = usePersistedState("Theme", Light);

  const UpdateState = () => {
    if (state.title === "Light") {
      setState(Dark);
    } else {
      setState(Light);
    }
  };

  updateTheme = createContext(UpdateState);

  getThemeActived = createContext(() => {
    if (state.title === "Light") {
      return true;
    } else {
      return false;
    }
  });

  return <ThemeProvider theme={state}>{props.children}</ThemeProvider>;
};

export default ThemeController;
