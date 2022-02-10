import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../types';

export const selectGame = (state: RootState) => state.game;
export const selectGameStatus = createSelector([selectGame], (game) => game.status);
