import { css } from '@emotion/react/macro';
import { ThemeVariant } from './appTheme.constants';

const themeLight = {
  shadow: 'rgba(0, 0, 0, 0.25)',
  bg: '#ffffff',
  caption: '#ffffff',
  textPrimary: '#191919',
  textSecondary: '#6B6B6B',
  accent: '#ff6d00',
  isDark: false,
};

const themeDark = {
  shadow: 'rgba(255, 255, 255, 0.25)',
  bg: '#000000',
  caption: '#000000',
  textPrimary: '#e6e6e6',
  textSecondary: '#949494',
  accent: '#ff6d00',
  isDark: true,
};

export const appTheme = {
  light: themeLight,
  dark: themeDark,
};

export const getRebootCSS = (themeVariat : ThemeVariant) => css`
  :root {
    --colors-shadow: ${appTheme[themeVariat].shadow};
    --colors-bg: ${appTheme[themeVariat].bg};
    --colors-caption: ${appTheme[themeVariat].caption};
    --colors-textPrimary: ${appTheme[themeVariat].textPrimary};
    --colors-textSecondary: ${appTheme[themeVariat].textSecondary};
    --colors-accent: ${appTheme[themeVariat].accent};
  }

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
