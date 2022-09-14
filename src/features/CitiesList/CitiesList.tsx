import { CITIES } from './citiesList.mock';
import { LocationCoordinates } from '../../shared/types/locationCoordinates';
import { Locations } from '../../shared/types/locations';
import { StyledOption, StyledSelect } from './citiesList.style';

type CitiesListProps = {
  setCoordsError: (status: boolean) => void,
  setLocation: (coords: LocationCoordinates) => void,
  setGettingCoords: (status: boolean) => void,
  currentLocation: LocationCoordinates | null,
};

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
        const key = evt.target.value as keyof Locations

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
