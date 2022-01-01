import { openWeatherClient } from './openWeatherClient';

export interface ServerLocation {
  name: string;
  local_names: Record<string, string>;
  lat: number;
  lon: number;
  country: string;
  state: string;
}

const LIMIT = 10;

export const openWeatherAPI = {
  getLocationByLocationName: (name: string) =>
    openWeatherClient.request<unknown, ServerLocation[]>({
      url: 'geo/1.0/direct',
      params: {
        q: name,
        limit: LIMIT,
      },
    }),
  getLocationByCoordinates: (lat: number, lon: number) =>
    openWeatherClient.request<unknown, ServerLocation[]>({
      url: 'geo/1.0/reverse',
      params: {
        lat,
        lon,
        limit: LIMIT,
      },
    }),
};
