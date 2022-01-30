import { AnyAction, ThunkAction } from '@reduxjs/toolkit';

import gameStatusUpdate from './gameStatusUpdate';
import { outfitToggle as outfitToggleAction, selectOutfitIsOpen } from '../reducers/outfit';
import { RootState } from '../types';
import { GameStatus } from '../../models/Game';

const outfitToggle = (): ThunkAction<void, RootState, void, AnyAction> => (dispatch, getState) => {
  dispatch(outfitToggleAction());
  const isOpen = selectOutfitIsOpen(getState());
  if (isOpen) {
    dispatch(gameStatusUpdate(GameStatus.GAME_STATUS_PAUSED));
  } else {
    dispatch(gameStatusUpdate(GameStatus.GAME_STATUS_IDLE));
  }
};

export default outfitToggle;
