import { WeatherBackground } from 'components/WeatherBackground';
import styles from './App.module.scss';

export const App = () => {
  return (
    <div className={styles.app}>
      <WeatherBackground type="Sun" />
    </div>
  );
};
