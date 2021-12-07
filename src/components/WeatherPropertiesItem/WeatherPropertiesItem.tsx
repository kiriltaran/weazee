import type { FC, ReactNode } from 'react';

import styles from './WeatherPropertiesItem.module.scss';

interface WeatherPropertiesItemProps {
  icon: ReactNode;
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
        <div className={styles.weatherPropertiesItemTitleName}>{title}</div>
        <span className={styles.weatherPropertiesItemTitleValue}>{value}</span>
      </div>
    </div>
  );
};
