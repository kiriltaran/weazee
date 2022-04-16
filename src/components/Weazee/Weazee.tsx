import filter from 'lodash/filter';
import classNames from 'classnames';
import { Routes, Route } from 'react-router-dom';
import * as weazeeImages from 'assets/images/weathers';
import { WeazeeForecasts } from 'components/WeazeeForecasts';
import { WeazeeProperties } from 'components/WeazeeProperties';
import { WeazeeDay } from 'components/WeazeeDay';
import { WeazeeSettings } from 'components/WeazeeSettings';

import styles from './Weazee.module.scss';

import { Fog } from 'icons';

type Weather = 'fog' | 'rain' | 'wind' | 'thunderstorm' | 'snow' | 'sun';

type WeatherImagesMap = Partial<Record<Weather, string[]>>;

const getWeatherImages = (weather: Weather) => {
  return filter(weazeeImages, (_, key) =>
    key.startsWith(`${weather[0].toUpperCase()}${weather.slice(1)}`),
  );
};

const createWeatherImagesMap = (weathers: Weather[]) => {
  return weathers.reduce<WeatherImagesMap>((weathersMap, weather) => {
    return { ...weathersMap, [weather]: getWeatherImages(weather) };
  }, {});
};

const weatherImagesMap = createWeatherImagesMap([
  'fog',
  'rain',
  'wind',
  'thunderstorm',
  'snow',
  'sun',
]);

const getRandomImageUrlByWeather = (weather: Weather) => {
  const weatherImages = weatherImagesMap[weather];

  if (weatherImages) {
    const randomImageIdx =
      Math.floor(Math.random() * weatherImages?.length - 1) + 1;

    return weatherImages[randomImageIdx];
  }
};

const forecasts = [
  {
    time: '1AM',
    temperature: '24',
    temperatureFeelsLike: '27',
  },
  {
    time: '2AM',
    temperature: '24',
    temperatureFeelsLike: '27',
  },
  {
    time: '3AM',
    temperature: '24',
    temperatureFeelsLike: '27',
  },
  {
    time: '4AM',
    temperature: '24',
    temperatureFeelsLike: '27',
  },
  {
    time: '5AM',
    temperature: '24',
    temperatureFeelsLike: '27',
  },
  {
    time: '6AM',
    temperature: '24',
    temperatureFeelsLike: '27',
  },
  {
    time: '7AM',
    temperature: '24',
    temperatureFeelsLike: '27',
  },
  {
    time: '8AM',
    temperature: '24',
    temperatureFeelsLike: '27',
  },
  {
    time: '9AM',
    temperature: '24',
    temperatureFeelsLike: '27',
  },
  {
    time: '10AM',
    temperature: '24',
    temperatureFeelsLike: '27',
  },
  {
    time: '11AM',
    temperature: '24',
    temperatureFeelsLike: '27',
  },
  {
    time: '12AM',
    temperature: '24',
    temperatureFeelsLike: '27',
  },
];

// TODO: extract pages to separate files
const WeazeeSettingsPage = () => (
  <div className={classNames(styles.weazeeSettingsPage, styles.weazeePage)}>
    <WeazeeSettings />
  </div>
);

const WeazeeMainPage = () => (
  <div className={classNames(styles.weazeeMainPage, styles.weazeePage)}>
    <div className={styles.weazeeDay}>
      <WeazeeDay
        weather="Fog"
        date="24.12.2021"
        city="London"
        temperature="28 °C"
        icon={<Fog width={72} />}
      />
    </div>
    <div className={styles.weazeeProperties}>
      <WeazeeProperties />
    </div>
    <div className={styles.weazeeForecasts}>
      <WeazeeForecasts forecasts={forecasts} />
    </div>
  </div>
);

export const Weazee = () => {
  const backgroundImage = `url(${getRandomImageUrlByWeather('sun')})`;

  // TODO: create routes config
  return (
    <div
      className={styles.weazee}
      style={{
        backgroundImage,
      }}
    >
      <main className={styles.weazeeMain}>
        <Routes>
          <Route path="/" element={<WeazeeMainPage />} />
          <Route path="/settings" element={<WeazeeSettingsPage />} />
        </Routes>
      </main>
    </div>
  );
};
