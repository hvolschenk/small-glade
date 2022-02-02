import { AnyAction, ThunkAction } from '@reduxjs/toolkit';

import { GameStatus } from '~/src/models/Game';

import { gameStatusUpdate as gameStatusUpdateAction } from '../reducers/game';
import { RootState } from '../types';

const gameStatusUpdate =
  (status: GameStatus): ThunkAction<void, RootState, void, AnyAction> =>
  (dispatch) => {
    dispatch(gameStatusUpdateAction({ status }));
  };

export default gameStatusUpdate;
