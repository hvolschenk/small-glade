import { AnyAction, ThunkAction } from '@reduxjs/toolkit';

import { Position } from '~/src/models/Position';
import AStar from '~/src/utilities/AStar';

import { mapAnimalMove as mapAnimalMoveAction } from '../reducers/map';
import { selectMapAnimalsPredator, selectMapTiles } from '../reducers/map/selectors';
import { selectPlayerPosition } from '../reducers/player/selectors';
import { RootState } from '../types';
import mapAnimalMove from './mapAnimalMove';

const mapAnimalsPredatorMove =
  (): ThunkAction<void, RootState, void, AnyAction> => (dispatch, getState) => {
    const predators = selectMapAnimalsPredator(getState());
    predators.forEach((row, rowIndex) => {
      row.forEach((predator, predatorIndex) => {
        if (predator) {
          const position: Position = { left: predatorIndex, top: rowIndex };
          if (predator.isAggroed) {
            const playerPosition = selectPlayerPosition(getState());
            const tiles = selectMapTiles(getState());
            const grid = tiles.map((tileRow) => tileRow.map((tile) => tile.isAccessible));
            const path = AStar.search(grid, position, playerPosition);
            if (path.length > 0) {
              dispatch(
                mapAnimalMoveAction({
                  animal: predator,
                  positions: { new: path[0], old: position },
                }),
              );
            }
          } else {
            dispatch(mapAnimalMove(predator, position));
          }
        }
      });
    });
  };

export default mapAnimalsPredatorMove;