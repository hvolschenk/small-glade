import { AnyAction, ThunkAction } from '@reduxjs/toolkit';

import { GameStatus } from '~/src/models/Game';

import { outfitToggle as outfitToggleAction } from '../reducers/outfit';
import { selectOutfitIsOpen } from '../reducers/outfit/selectors';
import { RootState } from '../types';
import gameStatusUpdate from './gameStatusUpdate';

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
