import { AnyAction, ThunkAction } from '@reduxjs/toolkit';

import gameStatusUpdate from './gameStatusUpdate';
import {
  inventoryToggle as inventoryToggleAction,
  selectInventoryIsOpen,
} from '../reducers/inventory';
import { RootState } from '../types';
import { GameStatus } from '../../models/Game';

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
