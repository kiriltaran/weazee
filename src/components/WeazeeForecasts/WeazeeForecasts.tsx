import type { FC } from 'react';
import classNames from 'classnames';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import { WeazeeForecastsItem } from 'components/WeazeeForecastsItem';

import styles from './WeazeeForecasts.module.scss';

interface Forecast {
  time: string;
  temperature: string;
  temperatureFeelsLike: string;
}
interface WeazeeForecastsProps {
  forecasts: Forecast[];
}

const FORECASTS_PER_VIEW = 7;
const SPACE_BETWEEN_FORECASTS = 40;

const isActiveForecast = (forecastIdx: number) => forecastIdx === 0;

export const WeazeeForecasts: FC<WeazeeForecastsProps> = ({ forecasts }) => {
  return (
    <div className={styles.weazeeForecasts}>
      <div className={styles.weazeeForecastsSwiper}>
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: `.${styles.weazeeForecastsNavigationButtonPrev}`,
            nextEl: `.${styles.weazeeForecastsNavigationButtonNext}`,
          }}
          slidesPerView={FORECASTS_PER_VIEW}
          spaceBetween={SPACE_BETWEEN_FORECASTS}
        >
          {forecasts.map((forecast, idx) => (
            <SwiperSlide
              key={forecast.time}
              className={styles.weazeeForecastsItemWrapper}
            >
              <div className={styles.weazeeForecastsItem}>
                <WeazeeForecastsItem
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
      <div className={styles.weazeeForecastsNavigation}>
        <button
          className={classNames(
            styles.weazeeForecastsNavigationButton,
            styles.weazeeForecastsNavigationButtonPrev,
          )}
        />
        <button
          className={classNames(
            styles.weazeeForecastsNavigationButton,
            styles.weazeeForecastsNavigationButtonNext,
          )}
        />
      </div>
    </div>
  );
};
