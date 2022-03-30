import { AnyAction, ThunkAction } from '@reduxjs/toolkit';

import { Fire } from '~/src/models/Fire/types';
import { FireFuel, FireStarter, FireTinder } from '~/src/models/Item/Fire/types';

import { mapFireStart } from '../reducers/map';
import { selectPlayerPosition } from '../reducers/player/selectors';
import { RootState } from '../types';
import inventoryItemRemove from './inventoryItemRemove';

const fireStart =
  (
    fuel: FireFuel,
    starter: FireStarter,
    tinder: FireTinder,
  ): ThunkAction<void, RootState, void, AnyAction> =>
  (dispatch, getState) => {
    const playerPosition = selectPlayerPosition(getState());
    const fire: Fire = {
      duration: 10,
      heat: 10,
      position: playerPosition,
    };
    dispatch(mapFireStart({ fire }));
    dispatch(inventoryItemRemove(fuel));
    dispatch(inventoryItemRemove(starter));
    dispatch(inventoryItemRemove(tinder));
  };

export default fireStart;
