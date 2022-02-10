import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../types';

export const selectPlayer = (state: RootState) => state.player;
export const selectPlayerPosition = createSelector([selectPlayer], (player) => player.position);
export const selectPlayerVitals = createSelector([selectPlayer], (player) => player.vitals);
