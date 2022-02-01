import { AnyAction, ThunkAction } from '@reduxjs/toolkit';

import {
  selectWeather,
  weatherConditionsUpdate,
  weatherTemperatureUpdate,
} from '../reducers/weather';
import { RootState } from '../types';
import configuration from '../../configuration';
import { Weather } from '../../models/Weather/types';

const getUpdatedConditions = (conditions: Weather['conditions']): Weather['conditions'] => {
  const otherConditions: Weather['conditions'][] = (
    ['overcast', 'snowing', 'sunny'] as Weather['conditions'][]
  ).filter((otherCondition) => otherCondition !== conditions);
  const conditionsModifiers = [...new Array(8)].map(() => conditions);
  conditionsModifiers.push(...otherConditions);
  const conditionsModifierIndex = Math.floor(Math.random() * conditionsModifiers.length);
  return conditionsModifiers[conditionsModifierIndex];
};

const getUpdatedTemperature = (temperature: Weather['temperature']): Weather['temperature'] => {
  const weatherModifiers = [-1, 0, 0, 0, 1]; // ~40% chance to change
  const weatherModifierIndex = Math.floor(Math.random() * weatherModifiers.length);
  let newTemperature = temperature + weatherModifiers[weatherModifierIndex];
  if (newTemperature < configuration.weather.temperatureLimitLower()) {
    newTemperature = configuration.weather.temperatureLimitLower();
  }
  if (newTemperature > configuration.weather.temperatureLimitUpper()) {
    newTemperature = configuration.weather.temperatureLimitUpper();
  }
  return newTemperature;
};

const weatherUpdate = (): ThunkAction<void, RootState, void, AnyAction> => (dispatch, getState) => {
  const weather = selectWeather(getState());
  dispatch(weatherTemperatureUpdate({ temperature: getUpdatedTemperature(weather.temperature) }));
  dispatch(weatherConditionsUpdate({ conditions: getUpdatedConditions(weather.conditions) }));
};

export default weatherUpdate;
