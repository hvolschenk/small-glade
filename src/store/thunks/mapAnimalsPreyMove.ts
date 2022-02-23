import { AnyAction, ThunkAction } from '@reduxjs/toolkit';

import { Direction } from '~/src/models/Direction';
import { Position } from '~/src/models/Position';
import positionFromDirection from '~/src/utilities/positionFromDirection';

import { mapAnimalMove as mapAnimalMoveAction } from '../reducers/map';
import { selectMapAnimalsPrey, selectMapTileAtPosition } from '../reducers/map/selectors';
import { selectPlayerPosition } from '../reducers/player/selectors';
import { RootState } from '../types';
import mapAnimalMove from './mapAnimalMove';

const calculateDirections = (
  differenceHorizontal: number,
  differenceVertical: number,
): Direction[] => {
  const directionWeights: Record<Direction, number> = {
    down: 0,
    left: 0,
    right: 0,
    up: 0,
  };
  const animalToRight = differenceHorizontal < 0;
  const animalBelow = differenceVertical < 0;
  if (Math.abs(differenceHorizontal) > Math.abs(differenceVertical)) {
    directionWeights.down = animalBelow ? 1 : 0;
    directionWeights.left = animalToRight ? 0 : 2;
    directionWeights.right = animalToRight ? 2 : 0;
    directionWeights.up = animalBelow ? 0 : 1;
  } else {
    directionWeights.down = animalBelow ? 2 : 0;
    directionWeights.left = animalToRight ? 0 : 1;
    directionWeights.right = animalToRight ? 1 : 0;
    directionWeights.up = animalBelow ? 0 : 2;
  }
  const directions = (Object.keys(directionWeights) as Direction[])
    .filter((direction) => directionWeights[direction] > 0)
    .sort((a, b) => (a > b ? 1 : -1));
  return directions;
};

const mapAnimalsPreyMove =
  (): ThunkAction<void, RootState, void, AnyAction> => (dispatch, getState) => {
    const positionPlayer = selectPlayerPosition(getState());
    const preyAnimals = selectMapAnimalsPrey(getState());
    preyAnimals.forEach((row, rowIndex) => {
      row.forEach((prey, preyIndex) => {
        if (prey) {
          if (prey.isFleeing) {
            const positionPrey: Position = { left: preyIndex, top: rowIndex };
            const differenceHorizontal = positionPlayer.left - positionPrey.left;
            const differenceVertical = positionPlayer.top - positionPrey.top;
            const directions = calculateDirections(differenceHorizontal, differenceVertical);
            directions.some((direction) => {
              const positionPossible = positionFromDirection({ direction, position: positionPrey });
              const tile = selectMapTileAtPosition(getState(), positionPossible);
              if (tile && tile.isAccessible) {
                dispatch(
                  mapAnimalMoveAction({
                    animal: prey,
                    positions: { new: positionPossible, old: positionPrey },
                  }),
                );
                return true;
              }
              return false;
            });
          } else {
            const position: Position = { left: preyIndex, top: rowIndex };
            dispatch(mapAnimalMove(prey, position));
          }
        }
      });
    });
  };

export default mapAnimalsPreyMove;
