import Card from '../../features/Card/Card';
import CitiesList from '../../features/CitiesList/CitiesList';
import { useUserLocationContext } from '../../features/UserLocation/userLocation.hook';
import Caption from '../../shared/components/Caption/Caption';

const WorldWeather = (): JSX.Element => {
  const {
    setGettingCoords,
    setCoordsError,
    worldLocation,
    setWorldLocation,
    worldLocationName,
    setWorldLocationName
  } = useUserLocationContext();

  return (
    <>
      <Caption>World weather</Caption>    
      <Card location={worldLocation} coordsError={false}/>
      <CitiesList
        locationName={worldLocationName}
        setLocationName={setWorldLocationName}
        setLocation={setWorldLocation}
        setCoordsError={setCoordsError}
        setGettingCoords={setGettingCoords}
      />
    </>
  );
};

export default WorldWeather;
