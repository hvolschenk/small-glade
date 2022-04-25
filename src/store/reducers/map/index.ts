/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { PredatorStatus } from '~/src/models/Animal/Predator/types';
import { PreyStatus } from '~/src/models/Animal/Prey/types';
import { Animal } from '~/src/models/Animal/types';
import { Fire } from '~/src/models/Fire/types';
import { Map } from '~/src/models/Map/types';
import { Position } from '~/src/models/Position';
import positionsEqual from '~/src/utilities/positionsEqual';

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
    mapAnimalMove: (state, action: PayloadAction<{ animal: Animal; positionNew: Position }>) => {
      state.animals = state.animals.map((animal) => {
        if (positionsEqual(animal.position, action.payload.animal.position)) {
          return { ...animal, position: action.payload.positionNew };
        }
        return animal;
      });
    },
    mapAnimalPredatorStatus: (
      state,
      action: PayloadAction<{ position: Position; status: PredatorStatus }>,
    ) => {
      state.animals = state.animals.map((animal) => {
        if (
          positionsEqual(action.payload.position, animal.position) &&
          animal.category === 'predator'
        ) {
          return { ...animal, status: action.payload.status };
        }
        return animal;
      });
    },
    mapAnimalPreyStatus: (
      state,
      action: PayloadAction<{ position: Position; status: PreyStatus }>,
    ) => {
      state.animals = state.animals.map((animal) => {
        if (
          positionsEqual(action.payload.position, animal.position) &&
          animal.category === 'prey'
        ) {
          return { ...animal, status: action.payload.status };
        }
        return animal;
      });
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
