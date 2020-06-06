import styled from "styled-components";

export const Container = styled.div`
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const ContainerRepos = styled.div`
  display: flex;
  flex-direction: column;

  height: 250px;
  width: 350px;

  margin: 10px;
  padding: 20px;

  background: ${(props) => props.theme.components.repositories.background};

  p {
    height: 250px;
    text-align: justify;
    overflow: hidden;
  }
`;

export const HeaderRespos = styled.div`
  display: flex;
  align-items: baseline;
  margin-bottom: 15px;

  strong {
    font-size: 28px;
    overflow-wrap: anywhere;
    max-width: 310px;
  }

  svg {
    margin-left: 10px;
    height: 20px;
    width: 20px;
  }
`;

export const Info = styled.div`
  display: flex;
  margin: none;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 60%;

    *{
      margin: 2px;
    }
  }

  button {
    border: none;
    height: 35px;
    width: 90px;
    font-size: 16px;
    cursor: pointer;
    background: ${(props) =>
      props.theme.components.repositories.button.background};
  }

  button:hover {
    background: ${(props) => props.theme.components.repositories.button.hover};
  }
`;
