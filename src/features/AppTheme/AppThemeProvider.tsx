import { ThemeProvider } from '@emotion/react';
import { useChangeTheme } from './useChangeTheme';
import { Global } from '@emotion/react/macro';
import { getRebootCSS } from './globalStyle';
import { ThemeVariant } from './appTheme.constants';

type AppThemeProviderProps = {
  children: React.ReactNode,
};

const AppThemeProvider = ({ children }: AppThemeProviderProps): JSX.Element => {
  const { themeVariat } = useChangeTheme();

  return (
    <ThemeProvider theme={{themeVariant: themeVariat, isDark: themeVariat === ThemeVariant.Dark}}>
      <Global styles={getRebootCSS(themeVariat)}/>
      {children}
    </ThemeProvider>
  );
};

export default AppThemeProvider;
