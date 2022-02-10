import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../types';

export const selectInventory = (state: RootState) => state.inventory;
export const selectInventoryIsOpen = createSelector(
  [selectInventory],
  (inventory) => inventory.isOpen,
);
export const selectInventorySelectedItem = createSelector(
  [selectInventory],
  (inventory) => inventory.selectedItem,
);
