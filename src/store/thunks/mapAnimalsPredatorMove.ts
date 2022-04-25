import { AnyAction, ThunkAction } from '@reduxjs/toolkit';

import { PredatorStatus } from '~/src/models/Animal/Predator/types';
import AStar from '~/src/utilities/AStar';

import { mapAnimalMove as mapAnimalMoveAction } from '../reducers/map';
import { selectMapAnimalsPredator, selectMapTiles } from '../reducers/map/selectors';
import { selectPlayerPosition } from '../reducers/player/selectors';
import { RootState } from '../types';
import mapAnimalFlee from './mapAnimalFlee';
import mapAnimalMove from './mapAnimalMove';

const mapAnimalsPredatorMove =
  (): ThunkAction<void, RootState, void, AnyAction> => (dispatch, getState) => {
    const predators = selectMapAnimalsPredator(getState());
    predators.forEach((predator) => {
      switch (predator.status) {
        case PredatorStatus.AGGROED: {
          const playerPosition = selectPlayerPosition(getState());
          const tiles = selectMapTiles(getState());
          const grid = tiles.map((tileRow) => tileRow.map((tile) => tile.isAccessible));
          const path = AStar.search(grid, predator.position, playerPosition);
          if (path.length > 0) {
            dispatch(
              mapAnimalMoveAction({
                animal: predator,
                positionNew: path[0],
              }),
            );
          }
          break;
        }
        case PredatorStatus.FLEEING: {
          dispatch(mapAnimalFlee(predator));
          break;
        }
        case PredatorStatus.IDLE:
        default: {
          dispatch(mapAnimalMove(predator));
          break;
        }
      }
    });
  };

export default mapAnimalsPredatorMove;
