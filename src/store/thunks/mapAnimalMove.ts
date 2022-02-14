import { AnyAction, ThunkAction } from '@reduxjs/toolkit';

import { Animal } from '~/src/models/Animal/types';
import { Direction } from '~/src/models/Direction';
import { Position } from '~/src/models/Position';
import positionFromDirection from '~/src/utilities/positionFromDirection';

import { mapAnimalMove as mapAnimalMoveAction } from '../reducers/map';
import { selectMapTileAtPosition } from '../reducers/map/selectors';
import { RootState } from '../types';

const mapAnimalMove =
  (animal: Animal, position: Position): ThunkAction<void, RootState, void, AnyAction> =>
  (dispatch, getState) => {
    const directions: Direction[] = ['down', 'left', 'right', 'up'];
    const direction = directions[Math.floor(Math.random() * directions.length)];
    const newPosition = positionFromDirection({ direction, position });
    const tile = selectMapTileAtPosition(getState(), newPosition);
    if (tile && tile.isAccessible) {
      dispatch(mapAnimalMoveAction({ animal, positions: { new: newPosition, old: position } }));
    }
  };

export default mapAnimalMove;
