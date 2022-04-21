import { AnyAction, ThunkAction } from '@reduxjs/toolkit';

import { PredatorStatus } from '~/src/models/Animal/types';
import { Position } from '~/src/models/Position';
import radiusAroundPosition from '~/src/utilities/radiusAroundPosition';

import { mapAnimalPredatorStatus } from '../reducers/map';
import { selectMapAnimalsPredator } from '../reducers/map/selectors';
import { selectPlayerPosition } from '../reducers/player/selectors';
import { RootState } from '../types';

const mapAnimalsPredatorFlee =
  (): ThunkAction<void, RootState, void, AnyAction> => (dispatch, getState) => {
    const playerPosition = selectPlayerPosition(getState());
    const predators = selectMapAnimalsPredator(getState());
    predators.forEach((row, rowIndex) => {
      row.forEach((predator, predatorIndex) => {
        if (predator) {
          if (predator.status === PredatorStatus.FLEEING) {
            const position: Position = { left: predatorIndex, top: rowIndex };
            const fleeRadius = radiusAroundPosition({
              position,
              radius: predator.fleeRadius,
            });
            const isFleeing = fleeRadius.some(
              (fleePosition) =>
                fleePosition.left === playerPosition.left &&
                fleePosition.top === playerPosition.top,
            );
            if (!isFleeing) {
              dispatch(mapAnimalPredatorStatus({ position, status: PredatorStatus.IDLE }));
            }
          }
        }
      });
    });
  };

export default mapAnimalsPredatorFlee;
