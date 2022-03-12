import { AnyAction, ThunkAction } from '@reduxjs/toolkit';

import { Outfit } from '~/src/models/Outfit/types';

import { outfitSelectedTypeUpdate as outfitSelectedTypeUpdateAction } from '../reducers/outfit';
import { RootState } from '../types';

const outfitSelectedTypeUpdate =
  (selectedType: Outfit['selectedType']): ThunkAction<void, RootState, void, AnyAction> =>
  (dispatch) => {
    dispatch(outfitSelectedTypeUpdateAction({ selectedType }));
  };

export default outfitSelectedTypeUpdate;
