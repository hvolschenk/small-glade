import { AnyAction, ThunkAction } from '@reduxjs/toolkit';

import { PredatorStatus } from '~/src/models/Animal/Predator/types';
import { Position } from '~/src/models/Position';
import radiusAroundPosition from '~/src/utilities/radiusAroundPosition';

import { mapAnimalPredatorStatus } from '../reducers/map';
import { selectMapAnimalsPredator } from '../reducers/map/selectors';
import { selectPlayerPosition } from '../reducers/player/selectors';
import { RootState } from '../types';

const mapAnimalsPredatorAggro =
  (): ThunkAction<void, RootState, void, AnyAction> => (dispatch, getState) => {
    const predators = selectMapAnimalsPredator(getState());
    const playerPosition = selectPlayerPosition(getState());
    predators.forEach((row, rowIndex) => {
      row.forEach((predator, predatorIndex) => {
        if (predator) {
          if (predator.status !== PredatorStatus.FLEEING) {
            const position: Position = { left: predatorIndex, top: rowIndex };
            const aggroRange = radiusAroundPosition({
              position,
              radius: predator.aggroRadius,
            });
            const isAggroed = aggroRange.some(
              (aggroPosition) =>
                aggroPosition.left === playerPosition.left &&
                aggroPosition.top === playerPosition.top,
            );
            dispatch(
              mapAnimalPredatorStatus({
                position,
                status: isAggroed ? PredatorStatus.AGGROED : PredatorStatus.IDLE,
              }),
            );
          }
        }
      });
    });
  };

export default mapAnimalsPredatorAggro;
