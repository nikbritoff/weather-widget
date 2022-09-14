import axios from 'axios';
import { WeaterData } from '../shared/types/api';

const BACKEND_URL = 'https://api.openweathermap.org/data/2.5';

export const wheatherApi = axios.create({
  baseURL: BACKEND_URL,
});

export const mock: WeaterData = {
  "coord": {
      "lon": 30.31,
      "lat": 59.93
  },
  "weather": [
      {
          "id": 501,
          "main": "Rain",
          "description": "moderate rain",
          "icon": "10d"
      }
  ],
  "base": "stations",
  "main": {
      "temp": 282.03,
      "feels_like": 278.97,
      "temp_min": 282.03,
      "temp_max": 282.2,
      "pressure": 1009,
      "humidity": 84
  },
  "visibility": 10000,
  "wind": {
      "speed": 6,
      "deg": 350
  },
  "rain": {
      "1h": 1.15
  },
  "clouds": {
      "all": 100
  },
  "dt": 1662029713,
  "sys": {
      "type": 2,
      "id": 197864,
      "country": "RU",
      "sunrise": 1662000812,
      "sunset": 1662051877
  },
  "timezone": 10800,
  "id": 519690,
  "name": "Novaya Gollandiya",
  "cod": 200
};
