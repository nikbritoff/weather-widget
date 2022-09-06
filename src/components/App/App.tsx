import styled from '@emotion/styled';
import { useState } from 'react';
import { CityCoords } from '../../types/cityCoods';
import Card from '../Card/Card';
import CitiesList from '../CitiesList/CitiesList';
import { ThemeProvider } from '@emotion/react';
import { useChangeTheme } from '../../hooks/useChangeTheme';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';

const StyledDiv = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.bg};
`;

const App = ():JSX.Element => {
  const [city, setCity] = useState({} as CityCoords);
  const [userCoords, setUserCoords] = useState({} as CityCoords);
  const [gettingCoords, setGettingCoords] = useState(true);
  const [coordsError, setCoordsError] = useState(false);
  const { isDark, currentTheme: theme, changeTheme } = useChangeTheme();

  return (
    <ThemeProvider theme={theme}>
      <StyledDiv>
        <CitiesList 
          setGettingCoords={setGettingCoords}
          setCoordsError={setCoordsError}
          setCity={setCity}
          setUserCoords={setUserCoords}
          userCoords={userCoords}
          city={city}
        />
        <Card city={city} gettingCoords={gettingCoords} coordsError={coordsError}/>
        <ThemeSwitcher changeTheme={changeTheme} isDark={isDark}/>
      </StyledDiv>
    </ThemeProvider>
  );
};

export default App;
