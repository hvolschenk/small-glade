/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import startingInventory from '~/src/models/Inventory/StartingInventory';
import { Inventory } from '~/src/models/Inventory/types';
import { Item } from '~/src/models/Item/types';

import { RootState } from '../types';

const initialState: Inventory = startingInventory;

const inventorySlice = createSlice({
  initialState,
  name: 'inventory',
  reducers: {
    inventoryItemAdd: (state, action: PayloadAction<{ item: Item }>) => {
      state.items.push(action.payload.item);
    },
    inventoryToggle: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const selectInventory = (state: RootState): Inventory => state.inventory;
export const selectInventoryIsOpen = (state: RootState): Inventory['isOpen'] =>
  state.inventory.isOpen;

export const { inventoryItemAdd, inventoryToggle } = inventorySlice.actions;
export default inventorySlice.reducer;
