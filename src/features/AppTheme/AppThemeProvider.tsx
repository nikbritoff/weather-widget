import { ThemeProvider } from '@emotion/react';
import { useChangeTheme } from './useChangeTheme';
import { Global } from '@emotion/react/macro';
import { globalStyle } from './globalStyle';

type AppThemeProviderProps = {
  children: React.ReactNode,
};

const AppThemeProvider = ({ children }: AppThemeProviderProps): JSX.Element => {
  const { currentTheme } = useChangeTheme();

  return (
    <ThemeProvider theme={currentTheme}>
      <Global styles={globalStyle}/>
      {children}
    </ThemeProvider>
  );
};

export default AppThemeProvider;
