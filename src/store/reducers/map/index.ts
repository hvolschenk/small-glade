/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Animal, Predator, Prey } from '~/src/models/Animal/types';
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
    mapAnimalMove: (
      state,
      action: PayloadAction<{ animal: Animal; positions: { new: Position; old: Position } }>,
    ) => {
      const { left: leftOld, top: topOld } = action.payload.positions.old;
      const { left: leftNew, top: topNew } = action.payload.positions.new;
      state.animals[topOld][leftOld] = undefined;
      state.animals[topNew][leftNew] = action.payload.animal;
    },
    mapAnimalPredatorAggro: (
      state,
      action: PayloadAction<{ isAggroed: Predator['isAggroed']; position: Position }>,
    ) => {
      const {
        isAggroed,
        position: { left, top },
      } = action.payload;
      const predator = state.animals[top][left] as Predator;
      predator.isAggroed = isAggroed;
    },
    mapAnimalPreyFlee: (
      state,
      action: PayloadAction<{ isFleeing: Prey['isFleeing']; position: Position }>,
    ) => {
      const {
        isFleeing,
        position: { left, top },
      } = action.payload;
      const prey = state.animals[top][left] as Prey;
      prey.isFleeing = isFleeing;
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
  mapAnimalPredatorAggro,
  mapAnimalPreyFlee,
  mapInteractableInteract,
  mapNameUpdate,
} = mapSlice.actions;
export default mapSlice.reducer;
