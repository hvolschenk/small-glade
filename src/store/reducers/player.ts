/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../types';
import { Player, Vitals } from '../../models/Player/types';
import { Position } from '../../models/Position';

const initialState: Player = {
  position: { left: 0, top: 0 },
  vitals: {
    fullness: 100,
    health: 100,
    hydration: 100,
    warmth: 100,
  },
};

const playerSlice = createSlice({
  initialState,
  name: 'player',
  reducers: {
    playerPositionUpdate: (state, action: PayloadAction<{ position: Position }>) => {
      state.position = action.payload.position;
    },
    playerVitalsUpdate: (state, action: PayloadAction<{ vitals: Vitals }>) => {
      state.vitals = action.payload.vitals;
    },
  },
});

export const selectPlayer = (state: RootState): Player => state.player;
export const selectPlayerPosition = (state: RootState): Position => state.player.position;
export const selectPlayerVitals = (state: RootState): Vitals => state.player.vitals;

export const { playerPositionUpdate, playerVitalsUpdate } = playerSlice.actions;
export default playerSlice.reducer;
