import type { FC, ReactNode } from 'react';

import styles from './WeazeePropertiesItem.module.scss';

interface WeazeePropertiesItemProps {
  icon: ReactNode;
  title: string;
  value: string;
}

export const WeazeePropertiesItem: FC<WeazeePropertiesItemProps> = ({
  icon,
  title,
  value,
}) => {
  return (
    <div className={styles.weazeePropertiesItem}>
      {icon}
      <div className={styles.weazeePropertiesItemTitle}>
        <div className={styles.weazeePropertiesItemTitleName}>{title}</div>
        <span className={styles.weazeePropertiesItemTitleValue}>{value}</span>
      </div>
    </div>
  );
};
