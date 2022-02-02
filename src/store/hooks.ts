import {
  TypedUseSelectorHook,
  useDispatch as useDispatchOriginal,
  useSelector as useSelectorOriginal,
} from 'react-redux';

import { Dispatch } from './index';

import type { RootState } from './types';

export const useDispatch = () => useDispatchOriginal<Dispatch>();
export const useSelector: TypedUseSelectorHook<RootState> = useSelectorOriginal;
