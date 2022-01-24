import { configureStore } from '@reduxjs/toolkit';

import reducers from './reducers';
import { RootState } from './types';

export const store = configureStore<RootState>({ reducer: reducers });
