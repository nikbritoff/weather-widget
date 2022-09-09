import { Cities } from './types/cities';

export const CITIES: Cities = {
  Athens: {
    lat: '37.9838',
    lon: '23.7278',
  },
  Blagoveshchensk: {
    lat: '48.4827',
    lon: '135.084',
  },
  Chicago: {
    lat: '41.85003',
    lon: '87.65005',
  },
  Khabarovsk: {
    lat: '48.4827',
    lon: '135.084',
  },
  London: {
    lat: '51.5085',
    lon: '-0.12574',
  },
  Miami: {
    lat: '25.77',
    lon: '-80.19',
  },
  Minsk: {
    lat: '53.9',
    lon: '27.5667',
  },
  Mumbai: {
    lat: '19.07',
    lon: '72.88',
  },
  'Saint-Petersburg': {
    lat: '59.93',
    lon: '30.31',
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
