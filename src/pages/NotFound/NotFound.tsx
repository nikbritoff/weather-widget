import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

const NotFound = (): JSX.Element => {
  return (
    <>
      <p>Page Not Found</p>
      <Link to={AppRoute.WorldWeather}>Go to World WeatherPage</Link>
    </>
  );
};

export default NotFound;
