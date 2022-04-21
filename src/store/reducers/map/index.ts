/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Animal, Predator, PredatorStatus, Prey, PreyStatus } from '~/src/models/Animal/types';
import { Fire } from '~/src/models/Fire/types';
import { Map } from '~/src/models/Map/types';
import { Position } from '~/src/models/Position';

const initialState: Map = {
  animals: [],
  fires: [],
  identifier: '',
  interactables: [],
  name: '',
  tiles: [],
};

const mapSlice = createSlice({
  initialState,
  name: 'map',
  reducers: {
    mapAnimalMove: (
      state,
      action: PayloadAction<{ animal: Animal; positions: { new: Position; old: Position } }>,
    ) => {
      const { left: leftOld, top: topOld } = action.payload.positions.old;
      const { left: leftNew, top: topNew } = action.payload.positions.new;
      state.animals[topOld][leftOld] = undefined;
      state.animals[topNew][leftNew] = action.payload.animal;
    },
    mapAnimalPredatorStatus: (
      state,
      action: PayloadAction<{ position: Position; status: PredatorStatus }>,
    ) => {
      const {
        position: { left, top },
        status,
      } = action.payload;
      const predator = state.animals[top][left] as Predator;
      predator.status = status;
    },
    mapAnimalPreyStatus: (
      state,
      action: PayloadAction<{ position: Position; status: PreyStatus }>,
    ) => {
      const {
        position: { left, top },
        status,
      } = action.payload;
      const prey = state.animals[top][left] as Prey;
      prey.status = status;
    },
    mapFireDurationUpdate: (
      state,
      action: PayloadAction<{ duration: Fire['duration']; index: number }>,
    ) => {
      state.fires[action.payload.index].duration = action.payload.duration;
    },
    mapFireStart: (state, action: PayloadAction<{ fire: Fire }>) => {
      state.fires.push(action.payload.fire);
    },
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

export const {
  mapAnimalMove,
  mapAnimalPredatorStatus,
  mapAnimalPreyStatus,
  mapFireDurationUpdate,
  mapFireStart,
  mapInteractableInteract,
  mapNameUpdate,
} = mapSlice.actions;
export default mapSlice.reducer;
