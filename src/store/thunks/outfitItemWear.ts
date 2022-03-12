import { AnyAction, ThunkAction } from '@reduxjs/toolkit';

import { Clothing } from '~/src/models/Item/Clothing/types';

import { outfitItemWear as outfitItemWearAction } from '../reducers/outfit';
import { RootState } from '../types';

const outfitItemWear =
  (item: Clothing): ThunkAction<void, RootState, void, AnyAction> =>
  (dispatch) => {
    dispatch(outfitItemWearAction({ item }));
  };

export default outfitItemWear;
