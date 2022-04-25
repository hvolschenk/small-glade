import { AnyAction, ThunkAction } from '@reduxjs/toolkit';

import { Animal } from '~/src/models/Animal/types';
import { Direction } from '~/src/models/Direction';
import positionFromDirection from '~/src/utilities/positionFromDirection';

import { mapAnimalMove as mapAnimalMoveAction } from '../reducers/map';
import { selectMapTileAtPosition } from '../reducers/map/selectors';
import { RootState } from '../types';

const mapAnimalMove =
  (animal: Animal): ThunkAction<void, RootState, void, AnyAction> =>
  (dispatch, getState) => {
    const directions: Direction[] = ['down', 'left', 'right', 'up'];
    const direction = directions[Math.floor(Math.random() * directions.length)];
    const newPosition = positionFromDirection({ direction, position: animal.position });
    const tile = selectMapTileAtPosition(getState(), newPosition);
    if (tile && tile.isAccessible) {
      dispatch(mapAnimalMoveAction({ animal, positionNew: newPosition }));
    }
  };

export default mapAnimalMove;
