import { createSelector } from '@reduxjs/toolkit';

import { Predator } from '~/src/models/Animal/Predator/types';
import { Prey } from '~/src/models/Animal/Prey/types';
import { Position } from '~/src/models/Position';
import radiusAroundPosition from '~/src/utilities/radiusAroundPosition';

import { RootState } from '../../types';

export const selectMap = (state: RootState) => state.map;
export const selectMapAnimals = createSelector([selectMap], (map) => map.animals);
export const selectMapAnimalsPredator = createSelector(
  [selectMapAnimals],
  (animals) => animals.filter((animal) => animal.category === 'predator') as Predator[],
);
export const selectMapAnimalsPrey = createSelector(
  [selectMapAnimals],
  (animals) => animals.filter((animal) => animal.category === 'prey') as Prey[],
);
export const selectMapFires = createSelector([selectMap], (map) => map.fires);
export const selectMapStartingPositions = createSelector(
  [selectMap],
  (map) => map.startingPositions,
);
export const selectMapTileAtPosition = createSelector(
  [selectMap, (_, position: Position) => position],
  (map, position) => {
    const row = map.tiles[position.top];
    if (row) {
      const tile = row[position.left];
      if (tile) {
        return tile;
      }
    }
    return null;
  },
);
export const selectMapTiles = createSelector([selectMap], (map) => map.tiles);
export const selectMapAnimalPredatorAggroRange = createSelector(
  [selectMapTiles, (_, predator: Predator) => predator],
  (tiles, predator) => {
    const { aggroRadius, position } = predator;
    const positions = radiusAroundPosition({ position, radius: aggroRadius });
    return positions.filter((aggroPosition) => {
      const row = tiles[aggroPosition.top];
      if (row) {
        const tile = row[aggroPosition.left];
        return Boolean(tile);
      }
      return false;
    });
  },
);
export const selectMapAnimalPreyFleeRadius = createSelector(
  [selectMapTiles, (_, prey: Prey) => prey],
  (tiles, prey) => {
    const { fleeRadius, position } = prey;
    const positions = radiusAroundPosition({ position, radius: fleeRadius });
    return positions.filter((fleePosition) => {
      const row = tiles[fleePosition.top];
      if (row) {
        const tile = row[fleePosition.left];
        return Boolean(tile);
      }
      return false;
    });
  },
);
