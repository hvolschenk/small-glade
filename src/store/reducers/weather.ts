/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../types';
import { Weather } from '../../models/Weather/types';

const initialState: Weather = {
  conditions: 'sunny',
  temperature: -10,
};

const weatherSlice = createSlice({
  initialState,
  name: 'weather',
  reducers: {
    weatherConditionsUpdate: (
      state,
      action: PayloadAction<{ conditions: Weather['conditions'] }>,
    ) => {
      state.conditions = action.payload.conditions;
    },
    weatherTemperatureUpdate: (
      state,
      action: PayloadAction<{ temperature: Weather['temperature'] }>,
    ) => {
      state.temperature = action.payload.temperature;
    },
  },
});

export const selectWeather = (state: RootState): Weather => state.weather;

export const { weatherConditionsUpdate, weatherTemperatureUpdate } = weatherSlice.actions;
export default weatherSlice.reducer;
