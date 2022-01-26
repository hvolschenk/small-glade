/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../types';
import { Map } from '../../models/Map';

const initialState: Map = {
  identifier: '',
  name: '',
  tiles: [],
};

const mapSlice = createSlice({
  initialState,
  name: 'map',
  reducers: {
    mapNameUpdate: (state, action: PayloadAction<{ name: Map['name'] }>) => {
      state.name = action.payload.name;
    },
  },
});

export const selectMapTiles = (state: RootState): Map['tiles'] => state.map.tiles;

export const { mapNameUpdate } = mapSlice.actions;
export default mapSlice.reducer;
