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

const StyledSelect = styled.select`
  margin-top: 20px;
  font-weight: 700;
  font-size: 15px;
  line-height: 20px;
  color: ${props => props.theme.textPrimary};
  opacity: 0.7;
  padding: 10px 30px;
  border-radius: 16px;
  border: 1px solid ${props => props.theme.shadow};
  box-shadow: 0px 8px 16px ${props => props.theme.shadow};
  background-color: ${props => props.theme.bg};

  & option {
    font-size: 15px;
    line-height: 20px;
  }
  `;
  
  const StyledOption = styled.option`
  color: ${props => props.theme.textPrimary};
  background-color: ${props => props.theme.bg};
`;

const CitiesList = ({
    setGettingCoords,
    setCoordsError,
    setLocation,
  }: CitiesListProps): JSX.Element => {

  return (
    <>
    <StyledSelect
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
          <StyledOption
            key={item[0]}
            value={item[0]}
          >
              {item[0]}
          </StyledOption>
        ))}
    </StyledSelect>
    </>
  );
};

export default CitiesList;
