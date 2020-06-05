import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  
  @import url('https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap');
  
  *{
    padding: 0px;
    margin: 0px;
    color: ${(props) => props.theme.text};
    font-family: "PT Sans",  sans-serif;
    list-style: none;
    
  }

  *:focus{
    outline: none;
  }

  body{
    background: ${(props) => props.theme.background};
    display: flex;
    flex-direction: column;
  }

  html, body, #root{
    height: 100%;
  }

`;
