import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.color.primary};
  padding: 20px;

  * {
    font-size: 18px;
  }

  a {
    text-decoration: none;
  }
`;
