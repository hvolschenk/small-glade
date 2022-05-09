import { AnyAction, ThunkAction } from '@reduxjs/toolkit';

import configuration from '~/src/configuration';
import radiusAroundPosition from '~/src/utilities/radiusAroundPosition';

import { mapFogOfWarUpdateVisible as mapFogOfWarUpdateVisibleAction } from '../reducers/map';
import { selectMapTiles } from '../reducers/map/selectors';
import { selectPlayerPosition } from '../reducers/player/selectors';
import { RootState } from '../types';

const mapFogOfWarUpdateVisible =
  (): ThunkAction<void, RootState, void, AnyAction> => (dispatch, getState) => {
    const playerPosition = selectPlayerPosition(getState());
    const tiles = selectMapTiles(getState());
    const positions = radiusAroundPosition({
      position: playerPosition,
      radius: configuration.player.visionRadius(),
    }).filter((position) => {
      const row = tiles[position.top];
      if (row) {
        const tile = row[position.left];
        return Boolean(tile);
      }
      return false;
    });
    dispatch(mapFogOfWarUpdateVisibleAction({ positions }));
  };

export default mapFogOfWarUpdateVisible;
