import { createSelector } from '@reduxjs/toolkit';

import { Position } from '~/src/models/Position';

import { RootState } from '../../types';

export const selectMap = (state: RootState) => state.map;
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
