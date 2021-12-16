import styles from './Weazee.module.scss';
import * as weazeeImages from 'assets/images/weathers';
import { WeazeeForecasts } from 'components/WeazeeForecasts';
import { WeazeeProperties } from 'components/WeazeeProperties';
import { WeazeeDay } from 'components/WeazeeDay';
import { Fog } from 'icons';

type WeatherType = 'Fog' | 'Rain' | 'Wind' | 'Thunderstorm' | 'Snow' | 'Sun';

const weatherImagesMap = {
  Fog: [
    weazeeImages.Fog1,
    weazeeImages.Fog2,
    weazeeImages.Fog3,
    weazeeImages.Fog4,
    weazeeImages.Fog5,
  ],
  Rain: [
    weazeeImages.Rain1,
    weazeeImages.Rain2,
    weazeeImages.Rain3,
    weazeeImages.Rain4,
    weazeeImages.Rain5,
  ],
  Thunderstorm: [
    weazeeImages.Thunderstorm1,
    weazeeImages.Thunderstorm2,
    weazeeImages.Thunderstorm3,
    weazeeImages.Thunderstorm4,
    weazeeImages.Thunderstorm5,
  ],
  Wind: [
    weazeeImages.Wind1,
    weazeeImages.Wind2,
    weazeeImages.Wind3,
    weazeeImages.Wind4,
    weazeeImages.Wind5,
  ],
  Snow: [
    weazeeImages.Snow1,
    weazeeImages.Snow2,
    weazeeImages.Snow3,
    weazeeImages.Snow4,
    weazeeImages.Snow5,
  ],
  Sun: [
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

export const Weazee = () => {
  return (
    <div
      className={styles.weazee}
      style={{
        backgroundImage: `url(${getRandomImageUrlByWeatherType('Sun')})`,
      }}
    >
      <main className={styles.weazeeContent}>
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
      </main>
    </div>
  );
};
