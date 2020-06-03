import React from "react";
import { GiFishingHook } from "react-icons/all";
import { Container } from "./styles";

function Header() {
  return (
    <Container>
      <h1>
        <GiFishingHook />
        Git Hooks
      </h1>
    </Container>
  );
}

export default Header;
