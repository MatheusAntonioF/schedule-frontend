import { createGlobalStyle } from 'styled-components';

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
`;

export { GlobalStyles };
