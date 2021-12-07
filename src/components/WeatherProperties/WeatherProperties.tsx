import type { FC } from 'react';
import styles from './WeatherProperties.module.scss';
import { WeatherPropertiesItem } from 'components/WeatherPropertiesItem';
import { Fog, Rain, Breezy } from 'icons';

export const WeatherProperties: FC = () => {
  // TODO: fix icons for Humidity and Air Pressure
  const properties = [
    { icon: <Fog width={34} />, title: 'Humidity', value: '50 %' },
    { icon: <Fog width={34} />, title: 'Air Pressure', value: '1009.483 PS' },
    { icon: <Rain width={34} />, title: 'Chance of Rain', value: '0 %' },
    { icon: <Breezy width={34} />, title: 'Wind Speed', value: '1.4 km/h' },
  ];

  return (
    <div className={styles.weatherProperties}>
      {properties.map((property, idx) => (
        <WeatherPropertiesItem
          key={idx}
          icon={property.icon}
          title={property.title}
          value={property.value}
        />
      ))}
    </div>
  );
};
