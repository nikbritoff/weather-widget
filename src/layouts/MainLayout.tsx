import { ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';
import Header from '../features/Header/Header';
import ThemeSwitcher from '../features/Theme/ui/ThemeSwitcher';
// import { LocationContextProvider } from '../../context/userLocationContext';
import { useChangeTheme } from '../features/Theme/useChangeTheme';
import { UserLocationProvider } from '../features/UserLocation/UserLocationProvider';

const StyledPageContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.bg};
`;

const StyledContent = styled.div`
  padding-top: 150px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

type MainLayoutProps = {
  children: React.ReactNode,
}

const MainLayout = ({ children }: MainLayoutProps): JSX.Element => {
  const { changeTheme, currentTheme } = useChangeTheme();

  return (
    <ThemeProvider theme={currentTheme}>
      {/* <LocationContextProvider> */}
        <UserLocationProvider>
        <StyledPageContainer>
          <Header />
          <ThemeSwitcher changeTheme={changeTheme} />
          <StyledContent>
            {children}
          </StyledContent>
        </StyledPageContainer>
        </UserLocationProvider>
      {/* </LocationContextProvider> */}
    </ThemeProvider>
  );
};

export default MainLayout;
