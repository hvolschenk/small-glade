/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Predator, PredatorStatus } from '~/src/models/Animal/Predator/types';
import { Prey, PreyStatus } from '~/src/models/Animal/Prey/types';
import { Animal } from '~/src/models/Animal/types';
import { Fire } from '~/src/models/Fire/types';
import { Interactable } from '~/src/models/Interactable/types';
import { FogOfWarStatus, Map } from '~/src/models/Map/types';
import { Position } from '~/src/models/Position';
import positionsEqual from '~/src/utilities/positionsEqual';

const initialState: Map = {
  animals: [],
  fires: [],
  fogOfWar: [],
  identifier: '',
  interactables: [],
  name: '',
  startingPositions: [],
  tiles: [],
};

const mapSlice = createSlice({
  initialState,
  name: 'map',
  reducers: {
    mapAnimalMove: (state, action: PayloadAction<{ animal: Animal; positionNew: Position }>) => {
      const animalToMove = state.animals.find((animal) => animal.id === action.payload.animal.id);
      if (animalToMove) {
        animalToMove.position = action.payload.positionNew;
      }
    },
    mapAnimalPredatorStatus: (
      state,
      action: PayloadAction<{ predator: Predator; status: PredatorStatus }>,
    ) => {
      const predator = state.animals.find((animal) => animal.id === action.payload.predator.id);
      if (predator) {
        (predator as Predator).status = action.payload.status;
      }
    },
    mapAnimalPreyStatus: (state, action: PayloadAction<{ prey: Prey; status: PreyStatus }>) => {
      const prey = state.animals.find((animal) => animal.id === action.payload.prey.id);
      if (prey) {
        (prey as Prey).status = action.payload.status;
      }
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
    mapFogOfWarUpdateVisible: (state, action: PayloadAction<{ positions: Position[] }>) => {
      state.fogOfWar = state.fogOfWar.map((row, rowIndex) =>
        row.map((tile, tileIndex) => {
          const tilePosition: Position = { left: tileIndex, top: rowIndex };
          const isVisible = action.payload.positions.some((position) =>
            positionsEqual(position, tilePosition),
          );
          if (isVisible) {
            return FogOfWarStatus.VISIBLE;
          }
          return tile === FogOfWarStatus.VISIBLE ? FogOfWarStatus.EXPLORED : tile;
        }),
      );
    },
    mapInteractableInteract: (state, action: PayloadAction<{ interactable: Interactable }>) => {
      const interactableToInteract = state.interactables.find(
        (interactable) => interactable.id === action.payload.interactable.id,
      );
      if (interactableToInteract) {
        interactableToInteract.hasBeenInteractedWith = true;
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
  mapFogOfWarUpdateVisible,
  mapInteractableInteract,
  mapNameUpdate,
} = mapSlice.actions;
export default mapSlice.reducer;
