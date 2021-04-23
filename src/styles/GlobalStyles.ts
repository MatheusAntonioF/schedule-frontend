import { createGlobalStyle, css } from 'styled-components';

import { darken } from 'polished';

const GlobalStyles = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Nunito', sans-serif;
  }

  html {
    --antd-wave-shadow-color: ${({ theme: { pallete } }) =>
      pallete.primary.main}
  }

  html, body, #root {
    height: 100vh;
  }

  body {
    height: 100vh;
    width: 100vw;
    font-family: 'Nunito', sans-serif;
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
    font-family: 'Nunito', sans-serif;
  }

  a {
    text-decoration: none;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px transparent;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme: { pallete } }) => pallete.primary.main};
    border-radius: 10px;

    transition: all 250ms ease-in-out;
  }

  ::-webkit-scrollbar-thumb:hover {
     ${({ theme: { pallete } }) => css`
       background: ${darken(0.2, pallete.primary.main)};
     `};
  }
`;

export { GlobalStyles };
