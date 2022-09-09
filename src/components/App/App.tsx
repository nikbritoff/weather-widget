import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { AppRoute } from '../../const';
import WorldWeather from '../../pages/WorldWeather/WorldWeather';
import MyLocation from '../../pages/MyLocation/MyLocation';
import Settings from '../../pages/Settings/Settings';
import NotFound from '../../pages/NotFound/NotFound';
import MainLayout from '../../layouts/MainLayout/MainLayout';

const App = ():JSX.Element => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path={AppRoute.Index} element={<Navigate to={AppRoute.WorldWeather}/>} />
            <Route path={AppRoute.WorldWeather} element={<WorldWeather/>} />
            <Route path={AppRoute.MyLocation} element={<MyLocation/>} />
            <Route path={AppRoute.Settings} element={<Settings/>} />
            <Route path={AppRoute.Other || AppRoute.NotFound} element={<NotFound/>} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};

export default App;
