import { WeaterData } from "../types/api";
import { wheatherApi } from "./weatherApi";

export const requestCurrentWeather = async (lat: string, lon: string): Promise<WeaterData> => {
  const { data } = await wheatherApi.get<WeaterData>('weather', {
    params: {
      lat,
      lon,
      appid: 'fc5afa1b7c428eda684e25bdb2bf6be5',
    },
  });

  return data;
};