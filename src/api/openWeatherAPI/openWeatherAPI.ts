import { openWeatherClient } from './openWeatherClient';

export interface Location {
  name: string;
  localNames: Record<string, string>;
  lat: number;
  lon: number;
  country: string;
  state: string;
}

const LIMIT = 10;

export const openWeatherAPI = {
  getLocationByLocationName: (name: string) =>
    openWeatherClient.request<unknown, Location[]>({
      url: 'geo/1.0/direct',
      params: {
        q: name,
        limit: LIMIT,
      },
    }),
  getLocationByCoordinates: (lat: number, lon: number) =>
    openWeatherClient.request<unknown, Location[]>({
      url: 'geo/1.0/reverse',
      params: {
        lat,
        lon,
        limit: LIMIT,
      },
    }),
};
