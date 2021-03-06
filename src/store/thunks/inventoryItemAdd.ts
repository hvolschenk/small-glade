import { AnyAction, ThunkAction } from '@reduxjs/toolkit';

import itemFactory from '~/src/models/Item/factory';
import { Item } from '~/src/models/Item/types';

import { inventoryItemAdd as inventoryItemAddAction } from '../reducers/inventory';
import { RootState } from '../types';

const inventoryItemAdd =
  (item: Item): ThunkAction<void, RootState, void, AnyAction> =>
  (dispatch) => {
    dispatch(inventoryItemAddAction({ item: itemFactory(item) }));
  };

export default inventoryItemAdd;
