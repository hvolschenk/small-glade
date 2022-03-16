import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../types';

export const selectGame = (state: RootState) => state.game;
export const selectGameIsPauseMenuOpen = createSelector(
  [selectGame],
  (game) => game.isPauseMenuOpen,
);
export const selectGameStatus = createSelector([selectGame], (game) => game.status);
