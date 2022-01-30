import { configureStore } from '@reduxjs/toolkit';

import reducers from './reducers';
import { RootState } from './types';
import smallGlade from '../models/Map/SmallGlade';
import baseOutfit from '../models/Outfit/BaseOutfit';

export type Dispatch = typeof store.dispatch;
export type GetState = typeof store.getState;

export const store = configureStore<RootState>({
  preloadedState: { map: smallGlade, outfit: baseOutfit },
  reducer: reducers,
});
