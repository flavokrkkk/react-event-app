import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 16px;
  }

  h1{
    font-size: 32px;
    font-weight: 400;
  }

  h2{
    font-weight: 400;
  }

  h3{
    font-weight: 300;
  }

  a {
    text-decoration: none;
  }

  li {
    list-style-type: none;
  }

`;
