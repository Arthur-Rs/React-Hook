import styled from "styled-components";

export const Container = styled.div`
  ul {
    display: flex;
    flex-wrap: wrap;
  }
`;

export const ContainerRepos = styled.div`
  display: flex;
  flex-direction: column;

  height: 250px;
  width: 325px;

  margin: 10px;
  padding: 10px;

  background: #efefef;

  strong {
    font-size: 24px;
    margin-bottom: 10px;
  }
`;
