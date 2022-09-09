import { ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';
import Header from '../../components/Header/Header';
import ThemeSwitcher from '../../components/ThemeSwitcher/ThemeSwitcher';
import { LocationContextProvider } from '../../context/userLocationContext';
import { useChangeTheme } from '../../hooks/useChangeTheme';

const StyledPageContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.bg};
`;

const StyledContent = styled.div`
  padding-top: 180px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

type MainLayoutProps = {
  children: React.ReactNode,
}

const MainLayout = ({ children }: MainLayoutProps): JSX.Element => {
  const { isDark, changeTheme, currentTheme } = useChangeTheme();

  return (
    <ThemeProvider theme={currentTheme}>
      <LocationContextProvider>
        <StyledPageContainer>
          <Header />
          <ThemeSwitcher changeTheme={changeTheme} isDark={isDark}/>
          <StyledContent>
            {children}
          </StyledContent>
        </StyledPageContainer>
      </LocationContextProvider>
    </ThemeProvider>
  );
};

export default MainLayout;
