/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

import { useState } from 'react';
import { CityCoords } from '../../types/cityCoods';
import Card from '../Card/Card';
import CitiesList from '../CitiesList/CitiesList';
import styles from './App.module.scss';
import { ThemeProvider } from '@emotion/react';
import { useChangeTheme } from '../../hooks/useChangeTheme';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';


function App() {
  const [city, setCity] = useState({} as CityCoords);
  const [userCoords, setUserCoords] = useState({} as CityCoords);
  const [gettingCoords, setGettingCoords] = useState(true);
  const [coordsError, setCoordsError] = useState(false);
  const { isDark, currentTheme: theme, changeTheme } = useChangeTheme();

  const style = css({
    backgroundColor: theme.bg,
  });

  return (
    <ThemeProvider theme={theme}>
      <div className={styles.app} css={style}>
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
      </div>
    </ThemeProvider>
  );
}

export default App;
