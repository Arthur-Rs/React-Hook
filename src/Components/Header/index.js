import React from "react";
import { GiFishingHook } from "react-icons/gi";
import { FiSearch } from "react-icons/fi";
import { Container, Form } from "./styles";
import Switch from "../MaterialDesign/Switch";

function Header() {
  return (
    <Container>
      <div>
        <h1>
          <GiFishingHook />
          Git Hooks
        </h1>
      </div>
      <Form>
        <input type="text" placeholder="Usuário" />
        <button>
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
