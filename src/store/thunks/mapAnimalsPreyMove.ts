import { AnyAction, ThunkAction } from '@reduxjs/toolkit';

import { Position } from '~/src/models/Position';

import { selectMapAnimalsPrey } from '../reducers/map/selectors';
import { RootState } from '../types';
import mapAnimalMove from './mapAnimalMove';

const mapAnimalsPreyMove =
  (): ThunkAction<void, RootState, void, AnyAction> => (dispatch, getState) => {
    const preyAnimals = selectMapAnimalsPrey(getState());
    preyAnimals.forEach((row, rowIndex) => {
      row.forEach((prey, preyIndex) => {
        if (prey) {
          if (prey.isFleeing) {
            // Move away from player.
            // How the hell is this achieved?
          } else {
            const position: Position = { left: preyIndex, top: rowIndex };
            dispatch(mapAnimalMove(prey, position));
          }
        }
      });
    });
  };

export default mapAnimalsPreyMove;
