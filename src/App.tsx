import { ThemeProvider } from '@emotion/react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './features/AppRouter/AppRouter';
import { useChangeTheme } from './features/Theme/useChangeTheme';
import MainLayout from './layouts/MainLayout';


const App = ():JSX.Element => {
  const { currentTheme } = useChangeTheme();

  return (
      // <ThemeProvider theme={currentTheme}>
    <BrowserRouter>
        <MainLayout>
          <AppRouter />
        </MainLayout>
    </BrowserRouter>
      // </ThemeProvider>
  );
};

export default App;
