import styled from '@emotion/styled';
import { CITIES } from '../../const';
import { Cities } from '../../types/cities';
import { LocationCoordinates } from '../../types/locationCoordinates';

type CitiesListProps = {
  setCoordsError: (status: boolean) => void,
  setLocation: (coords: LocationCoordinates) => void,
  setGettingCoords: (status: boolean) => void,
  currentLocation: LocationCoordinates | null,
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
    setLocation,
    currentLocation,
  }: CitiesListProps): JSX.Element => {

  return (
    <>
    <StyledList>
      {Object.entries(CITIES).map((item) => (
        <li key={item[0]}>
          <StyledButton
            onClick={() => {
              setGettingCoords(false);
              setCoordsError(false);
              setLocation(item[1]);
            }}
          >
            {item[0]}
          </StyledButton>
        </li>
      ))}
    </StyledList>
    <select
      defaultValue='default'
      onChange={(evt) => {
        const key = evt.target.value as keyof Cities

        setGettingCoords(false);
        setCoordsError(false);
        setLocation(CITIES[key]);
      }
    }>
      <option value='default' disabled>Select location</option>
      {Object.entries(CITIES).map((item: [string, LocationCoordinates]) => (
          <option
            key={item[0]}
            value={item[0]}
          >
              {item[0]}
          </option>
        ))}
    </select>
    </>
  );
};

export default CitiesList;
