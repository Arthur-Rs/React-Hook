import styled from "styled-components";

export const Container = styled.header`
  padding: 20px;
  background: ${(props) => props.theme.color.primary};
  display: flex;
  align-items: center;

  h1 {
    color: ${(props) => props.theme.color.title};
  }

  svg {
    color: ${(props) => props.theme.color.title};
    margin-right: 10px;
  }

  div {
    display: flex;
    width: 30%;
  }
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 30px;

  * {
    border: none;
    border-radius: 0px;
  }
  input {
    width: 50%;
    background: ${(props) => props.theme.color.tertiary};
    padding: 3px;
    font-size: 18px;
  }
  button {
    width: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background: ${(props) => props.theme.color.secondary};
    svg {
      margin: 0px;
      height: 65%;
      width: 65%;
      color: ${(props) => props.theme.color.primary};
    }
  }
`;
