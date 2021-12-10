import type { FC } from 'react';
import classNames from 'classnames';

import styles from './WeatherForecastsItem.module.scss';

interface WeatherForecastsItemProps {
  isActive: boolean;
  time: string;
  temperature: string;
  temperatureFeelsLike: string;
}

export const WeatherForecastsItem: FC<WeatherForecastsItemProps> = ({
  isActive,
  time,
  temperature,
  temperatureFeelsLike,
}) => {
  return (
    <div
      className={classNames(styles.weatherForecastsItem, {
        [styles.weatherForecastsActive]: isActive,
      })}
    >
      <div className={styles.weatherForecastsItemTime}>{time}</div>
      <div className={styles.weatherForecastsItemTemperature}>
        {temperature} °C
      </div>
      {isActive && (
        <div className={styles.weatherForecastsItemFeelLike}>
          Feels like {temperatureFeelsLike} °C
        </div>
      )}
    </div>
  );
};
