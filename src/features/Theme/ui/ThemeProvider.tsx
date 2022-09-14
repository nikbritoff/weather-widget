import { ThemeProvider } from '@emotion/react';
import { useChangeTheme } from '../useChangeTheme';

type ThemeProviderComponentProps = {
  children: React.ReactNode,
}

const ThemeProviderComponent = ({ children }: ThemeProviderComponentProps): JSX.Element => {
  const { currentTheme } = useChangeTheme();

  return (
    <ThemeProvider theme={currentTheme}>
      {children}
    </ThemeProvider>
  );
};

export default ThemeProviderComponent;
