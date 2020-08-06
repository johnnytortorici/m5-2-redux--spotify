import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    background: #F2C1E5;
  }
  *,
  *:before,
  *:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Lato';
    -webkit-font-smoothing: antialiased;
  }
`;

export default GlobalStyles;