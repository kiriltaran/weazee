import axios from 'axios';

const config = {
  baseURL: 'http://api.openweathermap.org',
  method: 'get',
  params: {
    appid: process.env.REACT_APP_OPEN_WEATHER_API_KEY,
  },
} as const;

const openWeatherClient = axios.create(config);

openWeatherClient.interceptors.response.use(({ data }) => data);

export { openWeatherClient };
