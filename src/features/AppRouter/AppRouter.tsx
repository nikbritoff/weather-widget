import { Routes, Route } from 'react-router-dom';
import { AppRoute } from './appRouter.constants';
import MyLocation from '../../pages/MyLocation/MyLocation';
import NotFound from '../../pages/NotFound/NotFound';
import Settings from '../../pages/Settings/Settings';
import WorldWeather from '../../pages/WorldWeather/WorldWeather';
import MainLayout from '../../layouts/MainLayout';

const AppRouter = (): JSX.Element => {
  return (
    <Routes>
      <Route path='/' element={<MainLayout/>}>
        <Route index element={<WorldWeather/>} />
        <Route path={AppRoute.MyLocation} element={<MyLocation/>} />
        <Route path={AppRoute.Settings} element={<Settings/>} />
        <Route path={'*' || AppRoute.NotFound} element={<NotFound/>} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
