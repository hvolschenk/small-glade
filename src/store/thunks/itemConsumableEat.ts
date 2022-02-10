import { AnyAction, ThunkAction } from '@reduxjs/toolkit';

import { Consumable } from '~/src/models/Item/Consumable/types';

import { inventoryItemRemove } from '../reducers/inventory';
import { playerVitalsUpdate } from '../reducers/player';
import { selectPlayerVitals } from '../reducers/player/selectors';
import { RootState } from '../types';

const itemConsumableEat =
  (item: Consumable): ThunkAction<void, RootState, void, AnyAction> =>
  (dispatch, getState) => {
    const vitals = selectPlayerVitals(getState());
    dispatch(
      playerVitalsUpdate({
        vitals: { ...vitals, fullness: Math.min(vitals.fullness + item.fullness, 100) },
      }),
    );
    dispatch(inventoryItemRemove({ item }));
  };

export default itemConsumableEat;
