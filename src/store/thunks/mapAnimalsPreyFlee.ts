import { AnyAction, ThunkAction } from '@reduxjs/toolkit';

import { PreyStatus } from '~/src/models/Animal/types';
import { Position } from '~/src/models/Position';
import radiusAroundPosition from '~/src/utilities/radiusAroundPosition';

import { mapAnimalPreyStatus } from '../reducers/map';
import { selectMapAnimalsPrey } from '../reducers/map/selectors';
import { selectPlayerPosition } from '../reducers/player/selectors';
import { RootState } from '../types';

const mapAnimalsPreyFlee =
  (): ThunkAction<void, RootState, void, AnyAction> => (dispatch, getState) => {
    const preyAnimals = selectMapAnimalsPrey(getState());
    const playerPosition = selectPlayerPosition(getState());
    preyAnimals.forEach((row, rowIndex) => {
      row.forEach((prey, preyIndex) => {
        if (prey) {
          const position: Position = { left: preyIndex, top: rowIndex };
          const fleeRadius = radiusAroundPosition({
            position,
            radius: prey.fleeRadius,
          });
          const isFleeing = fleeRadius.some(
            (fleePosition) =>
              fleePosition.left === playerPosition.left && fleePosition.top === playerPosition.top,
          );
          dispatch(
            mapAnimalPreyStatus({
              position,
              status: isFleeing ? PreyStatus.FLEEING : PreyStatus.IDLE,
            }),
          );
        }
      });
    });
  };

export default mapAnimalsPreyFlee;
