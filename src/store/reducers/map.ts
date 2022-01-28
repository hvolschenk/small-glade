/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../types';
import { Map } from '../../models/Map/types';
import { Position } from '../../models/Position';

const initialState: Map = {
  identifier: '',
  interactables: [],
  name: '',
  tiles: [],
};

const mapSlice = createSlice({
  initialState,
  name: 'map',
  reducers: {
    mapInteractableInteract: (state, action: PayloadAction<{ position: Position }>) => {
      const { left, top } = action.payload.position;
      const row = state.interactables[top];
      if (row) {
        const interactable = row[left];
        if (interactable) {
          interactable.hasBeenInteractedWith = true;
        }
      }
    },
    mapNameUpdate: (state, action: PayloadAction<{ name: Map['name'] }>) => {
      state.name = action.payload.name;
    },
  },
});

export const selectMap = (state: RootState): Map => state.map;
export const selectMapTiles = (state: RootState): Map['tiles'] => state.map.tiles;

export const { mapInteractableInteract, mapNameUpdate } = mapSlice.actions;
export default mapSlice.reducer;
