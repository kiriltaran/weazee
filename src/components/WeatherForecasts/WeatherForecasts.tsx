import type { FC } from 'react';
import classNames from 'classnames';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import { WeatherForecastsItem } from 'components/WeatherForecastsItem';

import styles from './WeatherForecasts.module.scss';

interface Forecast {
  time: string;
  temperature: string;
  temperatureFeelsLike: string;
}
interface WeatherForecastsProps {
  forecasts: Forecast[];
}

const FORECASTS_PER_VIEW = 7;
const SPACE_BETWEEN_FORECASTS = 40;

const isActiveForecast = (forecastIdx: number) => forecastIdx === 0;

export const WeatherForecasts: FC<WeatherForecastsProps> = ({ forecasts }) => {
  return (
    <div className={styles.weatherForecasts}>
      <div className={styles.weatherForecastsSwiper}>
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: `.${styles.weatherForecastsNavigationButtonPrev}`,
            nextEl: `.${styles.weatherForecastsNavigationButtonNext}`,
          }}
          slidesPerView={FORECASTS_PER_VIEW}
          spaceBetween={SPACE_BETWEEN_FORECASTS}
        >
          {forecasts.map((forecast, idx) => (
            <SwiperSlide
              key={forecast.time}
              className={styles.weatherForecastsItemWrapper}
            >
              <div className={styles.weatherForecastsItem}>
                <WeatherForecastsItem
                  isActive={isActiveForecast(idx)}
                  time={forecast.time}
                  temperature={forecast.temperature}
                  temperatureFeelsLike={forecast.temperatureFeelsLike}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className={styles.weatherForecastsNavigation}>
        <button
          className={classNames(
            styles.weatherForecastsNavigationButton,
            styles.weatherForecastsNavigationButtonPrev,
          )}
        />
        <button
          className={classNames(
            styles.weatherForecastsNavigationButton,
            styles.weatherForecastsNavigationButtonNext,
          )}
        />
      </div>
    </div>
  );
};
