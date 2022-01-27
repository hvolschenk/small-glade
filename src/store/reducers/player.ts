/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../types';
import { Player } from '../../models/Player';
import { Position } from '../../models/Position';

const initialState: Player = {
  name: 'Don',
  position: {
    left: 0,
    top: 0,
  },
};

const playerSlice = createSlice({
  initialState,
  name: 'player',
  reducers: {
    playerPositionUpdate: (state, action: PayloadAction<{ position: Position }>) => {
      state.position = action.payload.position;
    },
    playerNameUpdate: (state, action: PayloadAction<{ name: Player['name'] }>) => {
      state.name = action.payload.name;
    },
  },
});

export const selectPlayer = (state: RootState): Player => state.player;
export const selectPlayerName = (state: RootState): Player['name'] => state.player.name;
export const selectPlayerPosition = (state: RootState): Position => state.player.position;

export const { playerPositionUpdate, playerNameUpdate } = playerSlice.actions;
export default playerSlice.reducer;
