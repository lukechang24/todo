// styles/GlobalStyle.ts
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    font-family: "Inter", serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
  }
  
  body {
    background-color: #f0f0f0;
    color: #333;
    display: flex;
    justify-content: center;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
  }
  button {
    background-color: transparent;
    color: #333; /* Dark grey text */
    font-size: 16px;
    font-weight: 600;
    border: 2px solid #ccc; /* Subtle border */
    border-radius: 4px;
    padding: 4px 10px;
    margin-left: 15px;
    transition: all 0.3s ease;
    &:hover {
      background-color: #f4f4f4; /* Light gray background */
      border-color: #999; /* Darken the border */
    }
  }

  svg {
    &:hover {
      color: black;
    }
  }

  button, svg {
    cursor: pointer;
    transition: all 0.3s ease;
    &:focus {
    outline: none;
    border-color: #333; /* Dark border on focus */
    }
  }
`;

const S = {}

export { GlobalStyle, S };
