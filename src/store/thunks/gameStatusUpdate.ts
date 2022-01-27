import { AnyAction, ThunkAction } from '@reduxjs/toolkit';

import { gameStatusUpdate as gameStatusUpdateAction } from '../reducers/game';
import { RootState } from '../types';
import { GameStatus } from '../../models/Game';

const gameStatusUpdate =
  (status: GameStatus): ThunkAction<void, RootState, void, AnyAction> =>
  (dispatch) => {
    dispatch(gameStatusUpdateAction({ status }));
  };

export default gameStatusUpdate;
