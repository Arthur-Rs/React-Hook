import styled from "styled-components";

export const Container = styled.header`
  padding: 20px;
  background: ${(props) => props.theme.primary};

  h1 {
    color: ${(props) => props.theme.secondary};
  }
`;

export const GiFishingHook = styled.span`
  padding: 40px;
`;
