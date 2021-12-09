import styles from './Weazee.module.scss';
import * as weatherImages from 'assets/images/weathers';
import { WeatherForecasts } from 'components/WeatherForecasts';

type WeatherType = 'Fog' | 'Rain' | 'Wind' | 'Thunderstorm' | 'Snow' | 'Sun';

const weatherImagesMap = {
  Fog: [
    weatherImages.Fog1,
    weatherImages.Fog2,
    weatherImages.Fog3,
    weatherImages.Fog4,
    weatherImages.Fog5,
  ],
  Rain: [
    weatherImages.Rain1,
    weatherImages.Rain2,
    weatherImages.Rain3,
    weatherImages.Rain4,
    weatherImages.Rain5,
  ],
  Thunderstorm: [
    weatherImages.Thunderstorm1,
    weatherImages.Thunderstorm2,
    weatherImages.Thunderstorm3,
    weatherImages.Thunderstorm4,
    weatherImages.Thunderstorm5,
  ],
  Wind: [
    weatherImages.Wind1,
    weatherImages.Wind2,
    weatherImages.Wind3,
    weatherImages.Wind4,
    weatherImages.Wind5,
  ],
  Snow: [
    weatherImages.Snow1,
    weatherImages.Snow2,
    weatherImages.Snow3,
    weatherImages.Snow4,
    weatherImages.Snow5,
  ],
  Sun: [
    weatherImages.Sun1,
    weatherImages.Sun2,
    weatherImages.Sun3,
    weatherImages.Sun4,
    weatherImages.Sun5,
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

export const Weazee = () => {
  return (
    <div
      className={styles.weazee}
      style={{
        backgroundImage: `url(${getRandomImageUrlByWeatherType('Sun')})`,
      }}
    >
      <main className={styles.weazeeContent}>
        <div className={styles.weazeeForecasts}>
          {/* TODO: rename all Weather-like components to Weazee-like components */}
          <WeatherForecasts forecasts={forecasts} />
        </div>
      </main>
    </div>
  );
};
