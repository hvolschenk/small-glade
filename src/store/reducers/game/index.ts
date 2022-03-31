/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Game, GameStatus } from '~/src/models/Game';

const initialState: Game = {
  isPauseMenuOpen: false,
  isRadialMenuOpen: false,
  status: GameStatus.GAME_STATUS_LOADING,
};

const gameSlice = createSlice({
  initialState,
  name: 'game',
  reducers: {
    gamePauseMenuToggle: (state) => {
      state.isPauseMenuOpen = !state.isPauseMenuOpen;
    },
    gameRadialMenuToggle: (state) => {
      state.isRadialMenuOpen = !state.isRadialMenuOpen;
    },
    gameStatusUpdate: (state, action: PayloadAction<{ status: GameStatus }>) => {
      state.status = action.payload.status;
    },
  },
});

export const { gamePauseMenuToggle, gameRadialMenuToggle, gameStatusUpdate } = gameSlice.actions;
export default gameSlice.reducer;
