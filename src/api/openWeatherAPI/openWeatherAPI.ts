import { openWeatherClient } from './openWeatherClient';

export const openWeatherAPI = {
  getCoordinatesByLocationName: (locationName: string) =>
    openWeatherClient.request({
      url: 'geo/1.0/direct',
      params: {
        q: locationName,
      },
    }),
  getLocationNameByCoordinates: (lat: number, lon: number) =>
    openWeatherClient.request({
      url: 'geo/1.0/reverse',
      params: {
        lat,
        lon,
      },
    }),
};
