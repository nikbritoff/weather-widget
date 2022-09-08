import Card from '../../components/Card/Card';
import CitiesList from '../../components/CitiesList/CitiesList';
import { useUserLocationContext } from '../../context/userLocationContext';

const WorldWeather = (): JSX.Element => {
  const {
    setGettingCoords,
    setCoordsError,
    worldLocation,
    setWorldLocation,
  } = useUserLocationContext();

  return (
    <>
      <h2>World weather</h2>    
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
