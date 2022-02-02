/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Map } from '~/src/models/Map/types';
import { Position } from '~/src/models/Position';
import { Tile } from '~/src/models/Tile/types';

import { RootState } from '../types';

const initialState: Map = {
  animals: [],
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
export const selectMapTileAtPosition = (state: RootState, position: Position): null | Tile => {
  const row = state.map.tiles[position.top];
  if (row) {
    const tile = row[position.left];
    if (tile) {
      return tile;
    }
  }
  return null;
};
export const selectMapTiles = (state: RootState): Map['tiles'] => state.map.tiles;

export const { mapInteractableInteract, mapNameUpdate } = mapSlice.actions;
export default mapSlice.reducer;
