import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  bodycolor: "white",
  textcolor: "black",
  bordercolor: "red",
  textshadowcolor: "purple",
};

export const darkTheme = {
  bodycolor: "black",
  textcolor: "white",
  bordercolor: "green",
  textshadowcolor: "yellow",
};

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.bodycolor};
    // the background of the app will be the value stored in the variable bodycolor
    color: ${({ theme }) => theme.textcolor};
    // the color of the text will be the value stored in the variable textcolor
    border-color: ${({ theme }) => theme.bordercolor};
    // the color of the border will be the value stored in the variable bordercolor
    text-shadow: ${({ theme }) => theme.textshadowcolor};
    // the color of the text-shadow will be the value stored in the variable textshadowcolor
    transition: all 0.50s linear;
  }`;
