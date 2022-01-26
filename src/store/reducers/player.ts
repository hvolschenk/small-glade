/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../types';
import { Player } from '../../models/Player';

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
    playerNameUpdate: (state, action: PayloadAction<{ name: Player['name'] }>) => {
      state.name = action.payload.name;
    },
  },
});

export const selectPlayerName = (state: RootState): Player['name'] => state.player.name;

export const { playerNameUpdate } = playerSlice.actions;
export default playerSlice.reducer;
