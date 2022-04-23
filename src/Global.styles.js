import {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  },
  a {
    text-decoration: none;
    color: inherit;
  }
  nav li a {
    display: flex;
    align-items: center;
    padding-left: 52px;
  }
  nav li a.active  {
    color: #000;
  }
  body, html {
    min-height: 100vh;
  }
`

export default GlobalStyles;