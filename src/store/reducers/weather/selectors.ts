import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../types';

export const selectWeather = (state: RootState) => state.weather;
export const selectWeatherTemperature = createSelector(
  [selectWeather],
  (weather) => weather.temperature,
);
