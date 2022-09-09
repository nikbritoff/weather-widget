import { WeaterData } from '../types/api';
import { wheatherApi } from './weatherApi';

const API_KEY = process.env.REACT_APP_API_KEY;

export const requestCurrentWeather = async (lat: string, lon: string): Promise<WeaterData> => {
  const { data } = await wheatherApi.get<WeaterData>('weather', {
    params: {
      lat,
      lon,
      appid: API_KEY,
    },
  });

  return data;
};