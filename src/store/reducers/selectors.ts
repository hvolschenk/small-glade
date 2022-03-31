/*
  Top level cross-slice selectors go in this file only.
  Selectors for specific slices go in their own `selectors.ts` files.
*/
import { createSelector } from '@reduxjs/toolkit';

import { Position } from '~/src/models/Position';
import radiusAroundPosition from '~/src/utilities/radiusAroundPosition';

import { RootState } from '../types';
import { selectWeatherTemperature } from './weather/selectors';

// eslint-disable-next-line import/prefer-default-export
export const selectTemperatureAtPosition = createSelector(
  [(state) => state, (state: RootState) => state.map.fires, (_, position: Position) => position],
  (state, fires, position) => {
    const temperature = selectWeatherTemperature(state);
    const firesWithinRadius = fires
      .filter((fire) => {
        const fireRadius = radiusAroundPosition({ position: fire.position, radius: 2 });
        return fireRadius.some(
          (firePosition) =>
            firePosition.left === position.left && firePosition.top === position.top,
        );
      })
      .sort((fireA, fireB) => fireA.heat - fireB.heat);

    return firesWithinRadius.length > 0 ? firesWithinRadius[0].heat : temperature;
  },
);
