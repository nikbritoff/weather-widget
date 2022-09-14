import CitiesList from '../../features/CitiesList/CitiesList';
import { Container, StyledLabel } from '../../features/Settings/settings.style';
import { useUserLocationContext } from '../../features/UserLocation/userLocation.hook';
import Caption from '../../shared/components/Caption/Caption';
import Toggle from '../../shared/components/Toggle/Toggle';

const Settings = (): JSX.Element => {
  const {
    autoDetection,
    changeAutoDetection,
    setUserLocation,
    setGettingCoords,
    setCoordsError,
    userLocation,
  } = useUserLocationContext();

  const toggleAutoDetection = () => {
    changeAutoDetection(!autoDetection);
    setGettingCoords(true);
  };

  return (
    <>
      <Caption>Settings</Caption>
      <Container>

      <StyledLabel>
        My location: Auto detected
        <input
          type='checkbox'
          checked={autoDetection}
          className='visuallyHidden'
          onChange={toggleAutoDetection}
          />
      </StyledLabel>
      <Toggle
        name='auto-detection'
        isActive={autoDetection}
        changeAction={toggleAutoDetection}
      />
      </Container>
      {!autoDetection &&
        <CitiesList 
          setLocation={setUserLocation}
          setCoordsError={setCoordsError}
          setGettingCoords={setGettingCoords}
          currentLocation={userLocation}
        />
      }
    </>
  );
};

export default Settings;
