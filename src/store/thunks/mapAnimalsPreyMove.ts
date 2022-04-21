import { AnyAction, ThunkAction } from '@reduxjs/toolkit';

import { PreyStatus } from '~/src/models/Animal/types';
import { Position } from '~/src/models/Position';

import { selectMapAnimalsPrey } from '../reducers/map/selectors';
import { RootState } from '../types';
import mapAnimalFlee from './mapAnimalFlee';
import mapAnimalMove from './mapAnimalMove';

const mapAnimalsPreyMove =
  (): ThunkAction<void, RootState, void, AnyAction> => (dispatch, getState) => {
    const preyAnimals = selectMapAnimalsPrey(getState());
    preyAnimals.forEach((row, rowIndex) => {
      row.forEach((prey, preyIndex) => {
        if (prey) {
          if (prey.status === PreyStatus.FLEEING) {
            dispatch(mapAnimalFlee(prey, { left: preyIndex, top: rowIndex }));
          } else {
            const position: Position = { left: preyIndex, top: rowIndex };
            dispatch(mapAnimalMove(prey, position));
          }
        }
      });
    });
  };

export default mapAnimalsPreyMove;
