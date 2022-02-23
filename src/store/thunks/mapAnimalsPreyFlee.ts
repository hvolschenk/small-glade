import { AnyAction, ThunkAction } from '@reduxjs/toolkit';

import { Position } from '~/src/models/Position';
import radiusAroundPosition from '~/src/utilities/radiusAroundPosition';

import { mapAnimalPreyFlee } from '../reducers/map';
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
            (aggroPosition) =>
              aggroPosition.left === playerPosition.left &&
              aggroPosition.top === playerPosition.top,
          );
          dispatch(mapAnimalPreyFlee({ isFleeing, position }));
        }
      });
    });
  };

export default mapAnimalsPreyFlee;
