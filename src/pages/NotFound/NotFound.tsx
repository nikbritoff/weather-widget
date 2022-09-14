import { Link } from 'react-router-dom';
import { AppRoute } from '../../features/AppRouter/appRouter.constants';

const NotFound = (): JSX.Element => {
  return (
    <>
      <p>Page Not Found</p>
      <Link to={AppRoute.WorldWeather}>Go to World WeatherPage</Link>
    </>
  );
};

export default NotFound;
