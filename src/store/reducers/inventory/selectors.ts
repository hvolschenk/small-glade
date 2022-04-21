import { createSelector } from '@reduxjs/toolkit';

import { Item } from '~/src/models/Item/types';

import { RootState } from '../../types';

export const selectInventory = (state: RootState) => state.inventory;
export const selectInventoryIsOpen = createSelector(
  [selectInventory],
  (inventory) => inventory.isOpen,
);
export const selectInventoryItemsOfCategory = createSelector(
  [selectInventory, (_, category: Item['category']) => category],
  (inventory, category) => inventory.items.filter((item) => item.category === category),
);
export const selectInventoryItemsOfType = createSelector(
  [
    selectInventory,
    (_, category: Item['category']) => category,
    (_, __, type: Item['type']) => type,
  ],
  (inventory, category, type) =>
    inventory.items.filter((item) => item.category === category && item.type === type),
);
export const selectInventorySelectedItem = createSelector(
  [selectInventory],
  (inventory) => inventory.selectedItem,
);
