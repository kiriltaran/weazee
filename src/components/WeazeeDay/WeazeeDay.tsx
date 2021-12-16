import type { FC, ReactNode } from 'react';
import styles from './WeazeeDay.module.scss';

interface WeazeeDayProps {
  icon: ReactNode;
  weather: string;
  date: string;
  city: string;
  temperature: string;
}

export const WeazeeDay: FC<WeazeeDayProps> = ({
  icon,
  weather,
  date,
  city,
  temperature,
}) => {
  return (
    <div>
      <div className={styles.weazeeDayIcon}>{icon}</div>
      <div className={styles.weazeeDayWeather}>{weather}</div>
      <div className={styles.weazeeDayDate}>{date},</div>
      <div className={styles.weazeeDayCity}>{city} City</div>
      <div className={styles.weazeeDayTemperature}>{temperature}</div>
    </div>
  );
};
