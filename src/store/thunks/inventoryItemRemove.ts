import { AnyAction, ThunkAction } from '@reduxjs/toolkit';

import { Item } from '~/src/models/Item/types';

import { inventoryItemRemove as inventoryItemRemoveAction } from '../reducers/inventory';
import { RootState } from '../types';

const inventoryItemRemove =
  (item: Item): ThunkAction<void, RootState, void, AnyAction> =>
  (dispatch) => {
    dispatch(inventoryItemRemoveAction({ item }));
  };

export default inventoryItemRemove;
