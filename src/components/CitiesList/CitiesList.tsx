import styled from '@emotion/styled';
import { useEffect } from 'react';
import { CITIES } from '../../const';
import { CityCoords } from '../../types/cityCoods';

type CitiesListProps = {
  setGettingCoords: (status: boolean) => void,
  setCoordsError: (status: boolean) => void,
  setUserCoords: (coords: CityCoords) => void,
  userCoords: CityCoords,
  setCity: (city: CityCoords) => void,
  city: CityCoords,
};

const StyledList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;

  li {
    margin-right: 20px;
    
    &:last-child {
      margin-right: 0;
    }
  }
`;

const StyledButton = styled.button`
  border: none;
  border-radius: 16px;
  padding: 10px;
  cursor: pointer;

  font-weight: 700;
  font-size: 15px;
  line-height: 20px;
  color: ${props => props.theme.caption};
  background-color: ${props => props.theme.textSecondary};
  opacity: 0.7;
`;

const CitiesList = ({
    setGettingCoords,
    setCoordsError,
    setUserCoords,
    userCoords,
    setCity,
    city,
  }: CitiesListProps): JSX.Element => {
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
    <StyledList>
      {Object.entries(CITIES).map((item) => (
        <li key={item[0]}>
          <StyledButton
            onClick={() => {
              setCoordsError(false);
              setCity(item[1]);
            }}
          >
            {item[0]}
          </StyledButton>
        </li>
      ))}
        <li>
          <StyledButton
            onClick={() => setCity(userCoords)}
          >
            User Position
          </StyledButton>
        </li>
    </StyledList>
  );
};

export default CitiesList;
