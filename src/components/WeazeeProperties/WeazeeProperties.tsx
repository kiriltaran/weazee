import type { FC } from 'react';
import styles from './WeazeeProperties.module.scss';
import { WeazeePropertiesItem } from 'components/WeazeePropertiesItem';
import { Humidity, AirPressure, Rain, Breezy } from 'icons';

export const WeazeeProperties: FC = () => {
  const properties = [
    { icon: <Humidity width={34} />, title: 'Humidity', value: '50 %' },
    {
      icon: <AirPressure width={34} />,
      title: 'Air Pressure',
      value: '1009.483 PS',
    },
    { icon: <Rain width={34} />, title: 'Chance of Rain', value: '0 %' },
    { icon: <Breezy width={34} />, title: 'Wind Speed', value: '1.4 km/h' },
  ];

  return (
    <div className={styles.weazeeProperties}>
      {properties.map((property, idx) => (
        <WeazeePropertiesItem
          key={idx}
          icon={property.icon}
          title={property.title}
          value={property.value}
        />
      ))}
    </div>
  );
};
