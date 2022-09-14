import Card from '../../features/Card/Card';
import CitiesList from '../../features/CitiesList/CitiesList';
import { useUserLocationContext } from '../../features/UserLocation/userLocation.hook';
// import { useUserLocationContext } from '../../context/userLocationContext';
import Caption from '../../shared/Caption/Caption';

const WorldWeather = (): JSX.Element => {
  const {
    setGettingCoords,
    setCoordsError,
    worldLocation,
    setWorldLocation,
  } = useUserLocationContext();

  return (
    <>
      <Caption>World weather</Caption>    
      <Card location={worldLocation} coordsError={false}/>
      <CitiesList 
        setLocation={setWorldLocation}
        setCoordsError={setCoordsError}
        setGettingCoords={setGettingCoords}
        currentLocation={worldLocation}
      />
    </>
  );
};

export default WorldWeather;
