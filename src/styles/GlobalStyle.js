import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *,*::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }


  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    background: #111111;
    color: #f5f5f5;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  img,
  video {
    max-width: 100%;
    display: block;
  }

  button,
  input,
  select,
  textarea {
    font: inherit;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  @media (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      transition-duration: 0.01ms !important;
    }
  }
`;

export default GlobalStyle;
