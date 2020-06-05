import React, { useContext } from "react";

import Light from "../Themes/Light";
import Dark from "../Themes/Dark";

let light = true;
export let theme = returnThemeContext();

export function setLightTheme() {
  light = !light;

  localStorage.setItem("light", JSON.stringify(light));

  theme = returnThemeContext();

  console.log(theme);
}

export function getLightActivated() {
  return light;
}

export default function returnThemeContext() {
  light = JSON.parse(localStorage.getItem("light"));

  if (light) {
    return React.createContext(Light);
  } else {
    return React.createContext(Dark);
  }
}
