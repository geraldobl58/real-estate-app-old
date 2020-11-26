import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    background: #f7f7f7;
    -webkit-font-smoothing: antialiased;
  }
  body, input, button {
    font: 16px Nunito, sans-serif;
  }
  #root {

  }
  button {
    cursor: pointer;
  }
  ::selection {
    color: #fff;
    background: #24324a;
  }
`;
