import {
  TypedUseSelectorHook,
  useDispatch as useDispatchOriginal,
  useSelector as useSelectorOriginal,
} from 'react-redux';

import type { RootState, Dispatch } from './types';

export const useDispatch = () => useDispatchOriginal<Dispatch>();
export const useSelector: TypedUseSelectorHook<RootState> = useSelectorOriginal;
