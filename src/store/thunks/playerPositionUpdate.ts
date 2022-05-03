import { AnyAction, ThunkAction } from '@reduxjs/toolkit';

import { Position } from '~/src/models/Position';

import { playerPositionUpdate as playerPositionUpdateAction } from '../reducers/player';
import { RootState } from '../types';

const playerPositionUpdate =
  (position: Position): ThunkAction<void, RootState, void, AnyAction> =>
  (dispatch) => {
    dispatch(playerPositionUpdateAction({ position }));
  };

export default playerPositionUpdate;
