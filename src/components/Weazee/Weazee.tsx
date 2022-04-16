import classNames from 'classnames';
import { Routes, Route } from 'react-router-dom';
import * as weazeeImages from 'assets/images/weathers';
import { WeazeeForecasts } from 'components/WeazeeForecasts';
import { WeazeeProperties } from 'components/WeazeeProperties';
import { WeazeeDay } from 'components/WeazeeDay';
import { WeazeeSettings } from 'components/WeazeeSettings';

import styles from './Weazee.module.scss';

import { Fog } from 'icons';

type WeatherType = 'fog' | 'rain' | 'wind' | 'thunderstorm' | 'snow' | 'sun';

// TODO: get dynamic weather images map
const weatherImagesMap = {
  fog: [
    weazeeImages.Fog1,
    weazeeImages.Fog2,
    weazeeImages.Fog3,
    weazeeImages.Fog4,
    weazeeImages.Fog5,
  ],
  rain: [
    weazeeImages.Rain1,
    weazeeImages.Rain2,
    weazeeImages.Rain3,
    weazeeImages.Rain4,
    weazeeImages.Rain5,
  ],
  thunderstorm: [
    weazeeImages.Thunderstorm1,
    weazeeImages.Thunderstorm2,
    weazeeImages.Thunderstorm3,
    weazeeImages.Thunderstorm4,
    weazeeImages.Thunderstorm5,
  ],
  wind: [
    weazeeImages.Wind1,
    weazeeImages.Wind2,
    weazeeImages.Wind3,
    weazeeImages.Wind4,
    weazeeImages.Wind5,
  ],
  snow: [
    weazeeImages.Snow1,
    weazeeImages.Snow2,
    weazeeImages.Snow3,
    weazeeImages.Snow4,
    weazeeImages.Snow5,
  ],
  sun: [
    weazeeImages.Sun1,
    weazeeImages.Sun2,
    weazeeImages.Sun3,
    weazeeImages.Sun4,
    weazeeImages.Sun5,
  ],
};

const getRandomImageUrlByWeatherType = (type: WeatherType) => {
  const randomImageIdx =
    Math.floor(Math.random() * weatherImagesMap[type].length - 1) + 1;

  return weatherImagesMap[type][randomImageIdx];
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
  const backgroundImage = `url(${getRandomImageUrlByWeatherType('sun')})`;

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
