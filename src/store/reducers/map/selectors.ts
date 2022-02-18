import { createSelector } from '@reduxjs/toolkit';

import { Predator, Prey } from '~/src/models/Animal/types';
import { Position } from '~/src/models/Position';
import radiusAroundPosition from '~/src/utilities/radiusAroundPosition';

import { RootState } from '../../types';

export const selectMap = (state: RootState) => state.map;
export const selectMapAnimals = createSelector([selectMap], (map) => map.animals);
export const selectMapAnimalsPredator = createSelector([selectMapAnimals], (animals) =>
  animals.map((row) =>
    row.map((animal) => (animal?.category === 'predator' ? (animal as Predator) : undefined)),
  ),
);
export const selectMapAnimalsPrey = createSelector([selectMapAnimals], (animals) =>
  animals.map((row) =>
    row.map((animal) => (animal?.category === 'prey' ? (animal as Prey) : undefined)),
  ),
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
  [selectMapTiles, selectMapAnimalsPredator, (_, position: Position) => position],
  (tiles, predators, position): Position[] => {
    const predatorsRow = predators[position.top];
    if (predatorsRow) {
      const predator = predatorsRow[position.left];
      if (predator) {
        const positions = radiusAroundPosition({ position, radius: predator.aggroRadius });
        return positions.filter((aggroPosition) => {
          const row = tiles[aggroPosition.top];
          if (row) {
            const tile = row[aggroPosition.left];
            return Boolean(tile);
          }
          return false;
        });
      }
    }
    return [];
  },
);
