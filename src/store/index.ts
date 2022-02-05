import { configureStore } from '@reduxjs/toolkit';

import startingInventory from '~/src/models/Inventory/StartingInventory';
import smallGlade from '~/src/models/Map/SmallGlade';
import baseOutfit from '~/src/models/Outfit/BaseOutfit';

import reducers from './reducers';
import { RootState } from './types';

export type Dispatch = typeof store.dispatch;
export type GetState = typeof store.getState;

export const store = configureStore<RootState>({
  preloadedState: {
    inventory: startingInventory,
    map: smallGlade,
    outfit: baseOutfit,
  },
  reducer: reducers,
});
