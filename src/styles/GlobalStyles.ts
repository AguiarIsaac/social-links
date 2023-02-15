import { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }


  body {
    font-family: 'Roboto Mono', monospace;
    color: ${props => props.theme.colors.textColor}
  }

  img {
    width: 100%;
    object-fit: cover;
  }
`