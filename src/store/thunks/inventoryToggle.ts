import { AnyAction, ThunkAction } from '@reduxjs/toolkit';

import { GameStatus } from '~/src/models/Game';

import {
  inventoryToggle as inventoryToggleAction,
  selectInventoryIsOpen,
} from '../reducers/inventory';
import { RootState } from '../types';
import gameStatusUpdate from './gameStatusUpdate';

const inventoryToggle =
  (): ThunkAction<void, RootState, void, AnyAction> => (dispatch, getState) => {
    dispatch(inventoryToggleAction());
    const isOpen = selectInventoryIsOpen(getState());
    if (isOpen) {
      dispatch(gameStatusUpdate(GameStatus.GAME_STATUS_PAUSED));
    } else {
      dispatch(gameStatusUpdate(GameStatus.GAME_STATUS_IDLE));
    }
  };

export default inventoryToggle;
