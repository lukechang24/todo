// styles/GlobalStyle.ts
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
  }
  
  body {
    font-family: 'Arial', sans-serif;
    background-color: #f0f0f0;
    color: #333;
    display: flex;
    justify-content: center;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
  }
`;

const S = {}

export { GlobalStyle, S };
