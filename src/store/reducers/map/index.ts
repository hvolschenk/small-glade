/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Map } from '~/src/models/Map/types';
import { Position } from '~/src/models/Position';

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

export const { mapInteractableInteract, mapNameUpdate } = mapSlice.actions;
export default mapSlice.reducer;
