import { configureStore } from '@reduxjs/toolkit';

import reducers from './reducers';
import { RootState } from './types';

export type Dispatch = typeof store.dispatch;
export type GetState = typeof store.getState;

export const store = configureStore<RootState>({ reducer: reducers });
