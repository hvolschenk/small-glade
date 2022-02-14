import { AnyAction, ThunkAction } from '@reduxjs/toolkit';

import { Position } from '~/src/models/Position';
import radiusAroundPosition from '~/src/utilities/radiusAroundPosition';

import { mapAnimalPredatorAggro } from '../reducers/map';
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
          dispatch(mapAnimalPredatorAggro({ isAggroed, position }));
        }
      });
    });
  };

export default mapAnimalsPredatorAggro;
