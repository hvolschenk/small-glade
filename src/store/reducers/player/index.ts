/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Player, Vitals } from '~/src/models/Player/types';
import { Position } from '~/src/models/Position';

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

export const { playerPositionUpdate, playerVitalsUpdate } = playerSlice.actions;
export default playerSlice.reducer;
