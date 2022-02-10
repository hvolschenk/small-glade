/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Game, GameStatus } from '~/src/models/Game';

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

export const { gameStatusUpdate } = gameSlice.actions;
export default gameSlice.reducer;
