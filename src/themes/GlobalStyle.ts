import { createGlobalStyle } from 'styled-components';
import theme from './mainTheme';

const GlobalStyle = createGlobalStyle`



    *, *::before, *::after {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    html {
        font-size: 62.5%;
        width: 100%;
    }

    body {
        min-width: 100%;
        max-width: 100%;
        min-height: 100vh;
        font-size: 1.6rem;
        font-family: "Roboto", sans-serif;
        margin: 0;
        padding: 0;
        overflow-x: hidden;
        
    }

    .withScroll {
        overflow-x: hidden;
  ::-webkit-scrollbar {
    width: 15px;
    background-color: ${theme.primary};
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${theme.green};
    border-radius: 10px;
    border: 3px solid;
    border: none;
    
  }

    }

    .notActive {
      pointer-events: none;
      border: 2px solid ${theme.transparentGray};
      color: ${theme.transparentGray};
      background-color: transparent;
    }

    .showElement {
      opacity: 0;
      animation-name: show;
      animation-duration: 0.3s;
      animation-fill-mode: forwards;

      @keyframes show {
        to {
          opacity: 1;
        }
      }
    }
`;

export default GlobalStyle;
