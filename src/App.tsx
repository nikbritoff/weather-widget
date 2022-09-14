import { ThemeProvider } from '@emotion/react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './features/AppRouter/AppRouter';
import { useChangeTheme } from './features/Theme/theme.useChangeTheme';
import { UserLocationProvider } from './features/UserLocation/UserLocationProvider';


const App = ():JSX.Element => {
  const { currentTheme } = useChangeTheme();
  
  return (
    <BrowserRouter>
      <ThemeProvider theme={currentTheme}>
        <UserLocationProvider>
          <AppRouter />
        </UserLocationProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
