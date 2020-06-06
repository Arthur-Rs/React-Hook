import React, { useState, useContext } from "react";

import Switch from "@material-ui/core/Switch";

import { updateTheme, getThemeActived } from "../../../Utils/Controller/Theme";

const SwitchMD = (props) => {
  
  const update = useContext(updateTheme);
  const defaultPosition = useContext(getThemeActived);

  const [checked, updateChecked] = useState(defaultPosition);

  function UpdateSwitch(check) {
    updateChecked(check.target.checked);
    update();
  }

  return <Switch checked={checked} onChange={UpdateSwitch} />;
};

export default SwitchMD;
