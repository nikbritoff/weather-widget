import { Link } from 'react-router-dom';
import Card from '../../components/Card/Card';
import { AppRoute } from '../../const';
import { useUserLocationContext } from '../../context/userLocationContext';

const MyLocation = (): JSX.Element => {
  const {
    autoDetection,
    userLocation,
    coordsError,
  } = useUserLocationContext();

  return (
    <>
      <h2>My location</h2>
      {autoDetection
      ? <Card coordsError={coordsError} location={userLocation}/>
      : <p>Please, select your position in <Link to={`/${AppRoute.Settings}`}>settings</Link></p>}
      
    </>
  );
};

export default MyLocation;
