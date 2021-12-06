import type { FC } from 'react';

import styles from './WeatherPropertiesItem.module.scss';

interface WeatherPropertiesItemProps {
  icon: JSX.Element;
  title: string;
  value: string;
}

export const WeatherPropertiesItem: FC<WeatherPropertiesItemProps> = ({
  icon,
  title,
  value,
}) => {
  return (
    <div className={styles.weatherPropertiesItem}>
      {icon}
      <div className={styles.weatherPropertiesItemTitle}>
        <span className={styles.weatherPropertiesItemTitleName}>{title}</span>
        <span className={styles.weatherPropertiesItemTitleValue}>{value}</span>
      </div>
    </div>
  );
};
