import React from "react";
import Switch from "@material-ui/core/Switch";
import {
  setLightTheme,
  getLightActivated,
} from "../../../Functions/themeController";

const SwitchMD = (props) => {
  const [toggled, setToggled] = React.useState(getLightActivated());
  const lovelyStyles = props.theme;

  return (
    <Switch
      classes={lovelyStyles}
      checked={toggled}
      onChange={(e) => {
        setToggled(e.target.checked);
        setLightTheme(e.target.checked);
      }}
    />
  );
};

export default SwitchMD;
