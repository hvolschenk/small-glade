/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Predator, PredatorStatus } from '~/src/models/Animal/Predator/types';
import { Prey, PreyStatus } from '~/src/models/Animal/Prey/types';
import { Animal } from '~/src/models/Animal/types';
import { Container } from '~/src/models/Container/types';
import { Fire } from '~/src/models/Fire/types';
import { Interactable } from '~/src/models/Interactable/types';
import { Item } from '~/src/models/Item/types';
import { FogOfWarStatus, Map } from '~/src/models/Map/types';
import { Position } from '~/src/models/Position';

const initialState: Map = {
  animals: [],
  containers: [],
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
    mapContainerItemRemove: (
      state,
      action: PayloadAction<{ container: Container; item: Item }>,
    ) => {
      state.containers = state.containers.map((container) => {
        if (container.id === action.payload.container.id) {
          return {
            ...container,
            items: container.items.filter((item) => item.id !== action.payload.item.id),
          };
        }
        return container;
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
    mapFogOfWarUpdateVisible: (state, action: PayloadAction<{ positions: Position[] }>) => {
      state.fogOfWar = state.fogOfWar.map((row) =>
        row.map((tile) => (tile === FogOfWarStatus.VISIBLE ? FogOfWarStatus.EXPLORED : tile)),
      );
      action.payload.positions.forEach((position) => {
        state.fogOfWar[position.top][position.left] = FogOfWarStatus.VISIBLE;
      });
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
  mapContainerItemRemove,
  mapFireDurationUpdate,
  mapFireStart,
  mapFogOfWarUpdateVisible,
  mapInteractableInteract,
  mapNameUpdate,
} = mapSlice.actions;
export default mapSlice.reducer;
