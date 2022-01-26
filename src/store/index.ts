import { configureStore } from '@reduxjs/toolkit';

import reducers from './reducers';
import { RootState } from './types';
import smallGlade from '../data/maps/small-glade.json';

export type Dispatch = typeof store.dispatch;
export type GetState = typeof store.getState;

export const store = configureStore<RootState>({
  preloadedState: { map: smallGlade },
  reducer: reducers,
});
