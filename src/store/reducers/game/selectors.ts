import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../types';

export const selectGame = (state: RootState) => state.game;
export const selectGameIsPauseMenuOpen = createSelector(
  [selectGame],
  (game) => game.isPauseMenuOpen,
);
export const selectGameIsRadialMenuOpen = createSelector(
  [selectGame],
  (game) => game.isRadialMenuOpen,
);
export const selectGameStatus = createSelector([selectGame], (game) => game.status);
export const selectGameTurnsSurvived = createSelector([selectGame], (game) => game.turnsSurvived);
