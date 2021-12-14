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
          breakpoints={{
            1440: {
              slidesPerView: 6,
            },
          }}
        >
          {forecasts.map((forecast, idx) => (
            <SwiperSlide
              key={forecast.time}
              className={styles.weazeeForecastsItemWrapper}
            >
              <WeazeeForecastsItem
                isActive={isActiveForecast(idx)}
                time={forecast.time}
                temperature={forecast.temperature}
                temperatureFeelsLike={forecast.temperatureFeelsLike}
              />
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
