import { AnyAction, ThunkAction } from '@reduxjs/toolkit';

import { Consumable } from '~/src/models/Item/Consumable/types';

import { inventoryItemRemove } from '../reducers/inventory';
import { playerVitalsUpdate, selectPlayerVitals } from '../reducers/player';
import { RootState } from '../types';

const itemConsumableDrink =
  (item: Consumable): ThunkAction<void, RootState, void, AnyAction> =>
  (dispatch, getState) => {
    const vitals = selectPlayerVitals(getState());
    dispatch(
      playerVitalsUpdate({
        vitals: { ...vitals, hydration: Math.min(vitals.hydration + item.hydration, 100) },
      }),
    );
    dispatch(inventoryItemRemove({ item }));
  };

export default itemConsumableDrink;
