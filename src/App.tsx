import { BrowserRouter } from 'react-router-dom';
import AppRouter from './features/AppRouter/AppRouter';
import { UserLocationProvider } from './features/UserLocation/UserLocationProvider';
import AppThemeProvider from './features/AppTheme/AppThemeProvider';

const App = ():JSX.Element => {  
  return (
    <AppThemeProvider>
      <BrowserRouter>
        <UserLocationProvider>
          <AppRouter />
        </UserLocationProvider>
      </BrowserRouter>
    </AppThemeProvider>
  );
};

export default App;
