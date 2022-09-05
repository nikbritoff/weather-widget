
/** @jsxImportSource @emotion/react */

import { css, useTheme } from '@emotion/react';

import { useEffect } from 'react';
import { CITIES } from '../../const';
import { CityCoords } from '../../types/cityCoods';
import styles from './CitiesList.module.scss';

type CitiesListProps = {
  setGettingCoords: (status: boolean) => void,
  setCoordsError: (status: boolean) => void,
  setUserCoords: (coords: CityCoords) => void,
  userCoords: CityCoords,
  setCity: (city: CityCoords) => void,
  city: CityCoords,
};

const CitiesList = ({
    setGettingCoords,
    setCoordsError,
    setUserCoords,
    userCoords,
    setCity,
    city,
  }: CitiesListProps): JSX.Element => {
    const theme = useTheme();

    
    const style = css({
      color: theme.caption,
      backgroundColor: theme.textSecondary,
    });

    useEffect(() => {
      const geo = navigator.geolocation;

      const onChange: PositionCallback = ({coords: {latitude: lat, longitude: lon}}) => {
        if (!city.lat) {
          setCity({lat: String(lat), lon: String(lon)});
        }
      
        setUserCoords({lat: String(lat), lon: String(lon)});
        setGettingCoords(false);
      };

      const onError = () => {
        if (!city.lat) {
          setCoordsError(true);
        }
        
        setGettingCoords(false);
      };

      if (!geo) {
        setGettingCoords(false);
        setCoordsError(true);
        return;
      }


    const watcher = geo.watchPosition(
      onChange,
      onError
    );
    
    return () => geo.clearWatch(watcher);
  }, [city.lat, setCity, setCoordsError, setGettingCoords, setUserCoords]);

  return (
    <ul className={styles.list}>
      {Object.entries(CITIES).map((item) => (
        <li key={item[0]}>
          <button
            className={styles.btn}
            css={style}
            onClick={() => {
              setCoordsError(false);
              setCity(item[1]);
            }}
          >
            {item[0]}
          </button>
        </li>
      ))}
        <li>
          <button
            className={styles.btn}
            css={style}
            onClick={() => setCity(userCoords)}
          >
            User Position
          </button>
        </li>
    </ul>
  );
};

export default CitiesList;
