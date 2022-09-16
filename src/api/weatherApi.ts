import axios from 'axios';

const BACKEND_URL = 'https://api.openweathermap.org/data/2.5';

export const wheatherApi = axios.create({
  baseURL: BACKEND_URL,
});
