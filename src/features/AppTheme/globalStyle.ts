import { css } from '@emotion/react/macro';

export const globalStyle = css`
  html {
    height: 100%;
  }

  body {
    margin: 0;  
    font-family: 'Open Sans', 'Arial', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
  }

  #root {
    height: 100%;
  }

  * {
    box-sizing: border-box;
  }

  @font-face {
    font-family: 'Open Sans';
    src: url('./shared/assets/fonts/OpenSans-Bold.woff2') format('woff2'),
        url('./shared/assets/fonts/OpenSans-Bold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Open Sans';
    src: url('./shared/assets/fonts/OpenSans-SemiBold.woff2') format('woff2'),
        url('./shared/assets/fonts/OpenSans-SemiBold.woff') format('woff');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }
`;
