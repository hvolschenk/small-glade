/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import startingInventory from '~/src/models/Inventory/StartingInventory';
import { Inventory } from '~/src/models/Inventory/types';
import { Item } from '~/src/models/Item/types';

const initialState: Inventory = startingInventory;

const inventorySlice = createSlice({
  initialState,
  name: 'inventory',
  reducers: {
    inventoryItemAdd: (state, action: PayloadAction<{ item: Item }>) => {
      state.items.push(action.payload.item);
    },
    inventoryItemRemove: (state, action: PayloadAction<{ item: Item }>) => {
      const itemIndex = state.items.findIndex((item) => item.id === action.payload.item.id);
      state.items.splice(itemIndex, 1);
    },
    inventorySelectedItemUpdate: (
      state,
      action: PayloadAction<{ item: Inventory['selectedItem'] }>,
    ) => {
      state.selectedItem = action.payload.item;
    },
    inventoryToggle: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const {
  inventoryItemAdd,
  inventoryItemRemove,
  inventorySelectedItemUpdate,
  inventoryToggle,
} = inventorySlice.actions;
export default inventorySlice.reducer;
