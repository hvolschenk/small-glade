import { AnyAction, ThunkAction } from '@reduxjs/toolkit';

import { PreyStatus } from '~/src/models/Animal/Prey/types';

import { selectMapAnimalsPrey } from '../reducers/map/selectors';
import { RootState } from '../types';
import mapAnimalFlee from './mapAnimalFlee';
import mapAnimalMove from './mapAnimalMove';

const mapAnimalsPreyMove =
  (): ThunkAction<void, RootState, void, AnyAction> => (dispatch, getState) => {
    const preyAnimals = selectMapAnimalsPrey(getState());
    preyAnimals.forEach((prey) => {
      if (prey.status === PreyStatus.FLEEING) {
        dispatch(mapAnimalFlee(prey));
      } else {
        dispatch(mapAnimalMove(prey));
      }
    });
  };

export default mapAnimalsPreyMove;
