import type { AxiosResponse } from 'axios';
import axios from 'axios';
import camelCase from 'lodash/camelCase';
import { deepMapKeys } from './deepMapKeys';

const transformResponse = ({ data }: AxiosResponse) =>
  deepMapKeys(data, camelCase);

const config = {
  baseURL: 'http://api.openweathermap.org',
  method: 'get',
  params: {
    appid: process.env.REACT_APP_OPEN_WEATHER_API_KEY,
  },
} as const;

const openWeatherClient = axios.create(config);

openWeatherClient.interceptors.response.use(transformResponse);

export { openWeatherClient };
