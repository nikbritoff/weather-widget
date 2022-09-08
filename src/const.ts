import { Cities } from './types/cities';

export const CITIES: Cities = {
  SPB: {
    lat: '59.93',
    lon: '30.31',
  },
  Miami: {
    lat: '25.77',
    lon: '-80.19',
  },
  Mumbai: {
    lat: '19.07',
    lon: '72.88',
  },
};

export enum AppRoute {
  Index = '/',
  Other = '*',
  MyLocation = 'my-location',
  WorldWeather = 'world-weather',
  Settings = 'settings',
  NotFound = '404',
};

export enum LocalStorageKey {
  AutoDetection = 'autoDetection',
  DarkTheme = 'isDarkTheme',
  CurrentTheme = 'currentTheme',
};
