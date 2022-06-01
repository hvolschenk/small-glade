import { AnyAction, ThunkAction } from '@reduxjs/toolkit';

import { mapFireDurationUpdate } from '../reducers/map';
import { selectMapFires } from '../reducers/map/selectors';
import { RootState } from '../types';

const mapFiresDurationUpdate =
  (): ThunkAction<void, RootState, void, AnyAction> => (dispatch, getState) => {
    const fires = selectMapFires(getState());
    fires.forEach((fire) => {
      if (fire.duration > 0) {
        dispatch(mapFireDurationUpdate({ duration: fire.duration - 1, id: fire.id }));
      }
    });
  };

export default mapFiresDurationUpdate;
