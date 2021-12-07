import type { FC } from 'react';
import styles from './WeatherBackground.module.scss';
import * as weatherImages from 'assets/images/weathers';

type WeatherType = 'Fog' | 'Rain' | 'Wind' | 'Thunderstorm' | 'Snow' | 'Sun';
interface WeatherBackgroundProps {
  type: WeatherType;
}

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
  const MAX_IMG_IDX = 4;
  const randomImageIdx = Math.floor(Math.random() * MAX_IMG_IDX) + 1;

  return weatherImagesMap[type][randomImageIdx];
};

export const WeatherBackground: FC<WeatherBackgroundProps> = ({ type }) => {
  return (
    <div
      className={styles.weatherBackground}
      style={{
        backgroundImage: `url(${getRandomImageUrlByWeatherType(type)})`,
      }}
    />
  );
};
