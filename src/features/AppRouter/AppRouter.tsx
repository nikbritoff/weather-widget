import { Routes, Route, Navigate } from 'react-router-dom';
import { AppRoute } from './appRouter.constants';
import MyLocation from '../../pages/MyLocation/MyLocation';
import NotFound from '../../pages/NotFound/NotFound';
import Settings from '../../pages/Settings/Settings';
import WorldWeather from '../../pages/WorldWeather/WorldWeather';

const AppRouter = (): JSX.Element => {
  return (
    <Routes>
      <Route path={AppRoute.Index} element={<Navigate to={AppRoute.WorldWeather}/>} />
        <Route path={AppRoute.WorldWeather} element={<WorldWeather/>} />
        <Route path={AppRoute.MyLocation} element={<MyLocation/>} />
        <Route path={AppRoute.Settings} element={<Settings/>} />
        <Route path={'*' || AppRoute.NotFound} element={<NotFound/>} />
    </Routes>
  );
};

export default AppRouter;
