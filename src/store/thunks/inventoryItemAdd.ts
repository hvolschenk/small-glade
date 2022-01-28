import { AnyAction, ThunkAction } from '@reduxjs/toolkit';

import { inventoryItemAdd as inventoryItemAddAction } from '../reducers/inventory';
import { RootState } from '../types';
import { Item } from '../../models/Item/types';

const inventoryItemAdd =
  (item: Item): ThunkAction<void, RootState, void, AnyAction> =>
  (dispatch) => {
    dispatch(inventoryItemAddAction({ item }));
  };

export default inventoryItemAdd;
