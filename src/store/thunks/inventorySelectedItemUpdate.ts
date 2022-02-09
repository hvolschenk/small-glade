import { AnyAction, ThunkAction } from '@reduxjs/toolkit';

import { Inventory } from '~/src/models/Inventory/types';

import { inventorySelectedItemUpdate as inventorySelectedItemUpdateAction } from '../reducers/inventory';
import { RootState } from '../types';

const inventorySelectedItemUpdate =
  (item: Inventory['selectedItem']): ThunkAction<void, RootState, void, AnyAction> =>
  (dispatch) => {
    dispatch(inventorySelectedItemUpdateAction({ item }));
  };

export default inventorySelectedItemUpdate;
