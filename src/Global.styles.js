import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
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
    color: ${(props) => props.theme.colors.navActive};
  }
  body, html {
    min-height: 100vh;
  }
`
export const darkTheme = {
    colors: {
        primary: '#f1f1f1',
        navActive: '#f1f1f1',
        navPrimary: '#8D8D8D',
        navHover: '#f1f1f1',
        reversePrimary: '#000000',
    },
    backgroundColors: {
        mainView: '#1B1F24',
        navbar: '#000000',
        reverseBackground: '#ffffff'
    },
    fill: '#f1f1f1',
};

export const lightTheme = {
    colors: {
        primary: '#000000',
        navActive: '#000000',
        navPrimary: '#8D8D8D',
        navHover: '#000000',
        reversePrimary: '#ffffff',
    },
    backgroundColors: {
        mainView: '#ffffff',
        navbar: '#f1f1f1',
        reverseBackground: '#000000'
    },
    fill: '#000000',
};