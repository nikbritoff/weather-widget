import CitiesList from '../../components/CitiesList/CitiesList';
import { useUserLocationContext } from '../../context/userLocationContext';

const Settings = (): JSX.Element => {
  const {
    autoDetection,
    changeAutoDetection,
    setUserLocation,
    setGettingCoords,
    setCoordsError,
    userLocation,
  } = useUserLocationContext();

  return (
    <>
      <p></p>
      <label>
        My location: Auto detected
        <input
          type='checkbox'
          checked={autoDetection}
          onChange={() => {
            changeAutoDetection(!autoDetection);
            setGettingCoords(true);
          }}
        />        
      </label>
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
