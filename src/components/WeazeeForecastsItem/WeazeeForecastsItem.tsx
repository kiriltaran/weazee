import type { FC } from 'react';
import classNames from 'classnames';

import styles from './WeazeeForecastsItem.module.scss';

interface WeazeeForecastsItemProps {
  isActive: boolean;
  time: string;
  temperature: string;
  temperatureFeelsLike: string;
}

export const WeazeeForecastsItem: FC<WeazeeForecastsItemProps> = ({
  isActive,
  time,
  temperature,
  temperatureFeelsLike,
}) => {
  return (
    <div
      className={classNames(styles.weazeeForecastsItem, {
        [styles.weazeeForecastsActive]: isActive,
      })}
    >
      <div className={styles.weazeeForecastsItemTime}>{time}</div>
      <div className={styles.weazeeForecastsItemTemperature}>
        {temperature} °C
      </div>
      {isActive && (
        <div className={styles.weazeeForecastsItemFeelLike}>
          Feels like {temperatureFeelsLike} °C
        </div>
      )}
    </div>
  );
};
