import {
  TypedUseSelectorHook,
  useDispatch as useDispatchOriginal,
  useSelector as useSelectorOriginal,
} from 'react-redux';

import type { RootState } from './types';

import { Dispatch } from './index';

export const useDispatch = () => useDispatchOriginal<Dispatch>();
export const useSelector: TypedUseSelectorHook<RootState> = useSelectorOriginal;
