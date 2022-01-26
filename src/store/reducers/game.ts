/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../types';
import { Game, GameStatus } from '../../models/Game';

const initialState: Game = {
  status: GameStatus.GAME_STATUS_LOADING,
};

const gameSlice = createSlice({
  initialState,
  name: 'game',
  reducers: {
    gameStatusUpdate: (state, action: PayloadAction<{ status: GameStatus }>) => {
      state.status = action.payload.status;
    },
  },
});

export const selectGameStatus = (state: RootState): Game['status'] => state.game.status;

export const { gameStatusUpdate } = gameSlice.actions;
export default gameSlice.reducer;
