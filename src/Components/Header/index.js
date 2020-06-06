import React, { useContext, useState, useEffect, useCallback } from "react";

import { GiFishingHook } from "react-icons/gi";
import { FiSearch } from "react-icons/fi";
import { Container, Form } from "./styles";

import Switch from "../MaterialDesign/Switch";

import { UpdateRepos } from "../Repos/index";

export let buttonClicked = React.createContext(null);

function Header() {
  const [value, setValue] = useState("");

  function updateValue(v) {
    setValue(v);
  }

  function HandleButton(e) {
    console.log(e.onClick);
  }

  return (
    <Container>
      <div>
        <h1>
          <GiFishingHook />
          Git Hooks
        </h1>
      </div>
      <Form>
        <input
          id="user"
          type="text"
          placeholder="Usuário"
          value={value}
          onChange={(e) => updateValue(e.target.value)}
        />
        <button
          id="button"
          type="button"
          onClick={(e) => {
            HandleButton(e.target);
          }}
        >
          <FiSearch />
        </button>
      </Form>
      <div>
        <Switch />
      </div>
    </Container>
  );
}

export default Header;
