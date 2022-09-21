import CitiesList from '../../features/CitiesList/CitiesList';
import { Container, StyledInput, StyledLabel } from '../../features/Settings/settings.style';
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
    userLocationName,
    setUserLocationName,
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
        <StyledInput
          type='checkbox'
          checked={autoDetection}
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
          locationName={userLocationName}
          setLocationName={setUserLocationName}
          setLocation={setUserLocation}
          setCoordsError={setCoordsError}
          setGettingCoords={setGettingCoords}
        />
      }
    </>
  );
};

export default Settings;
