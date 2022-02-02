import { Direction } from '~/src/models/Direction';
import { GameStatus } from '~/src/models/Game';
import { selectGameStatus } from '~/src/store/reducers/game';
import { selectMapTiles } from '~/src/store/reducers/map';
import { selectPlayerPosition } from '~/src/store/reducers/player';
import playerMove from '~/src/store/thunks/playerMove';
import positionFromDirection from '~/src/utilities/positionFromDirection';

import EventAbstract from './EventAbstract';
import { Effect, EventOptions, Validator } from './types';

export interface PlayerMoveOptions {
  direction: Direction;
}
type Options = EventOptions & PlayerMoveOptions;

const effectGameTurn: Effect<Options> = (options) => {
  options.trigger('game:turn');
};

const validateGameStatusIdle: Validator<Options> = (options) => {
  const status = selectGameStatus(options.getState());
  return status === GameStatus.GAME_STATUS_IDLE;
};

const validateInMapBounds: Validator<Options> = (options) => {
  const state = options.getState();
  const playerPosition = selectPlayerPosition(state);
  const position = positionFromDirection({
    direction: options.direction,
    position: playerPosition,
  });
  if (position.left < 0 || position.top < 0) {
    return false;
  }
  const tiles = selectMapTiles(state);
  if (position.top > tiles.length) {
    return false;
  }
  if (!tiles[0] || position.left > tiles[0].length) {
    return false;
  }
  return true;
};

const validateTileAccessible: Validator<Options> = (options) => {
  const state = options.getState();
  const playerPosition = selectPlayerPosition(state);
  const position = positionFromDirection({
    direction: options.direction,
    position: playerPosition,
  });
  const tiles = selectMapTiles(state);
  const row = tiles[position.top];
  if (row) {
    const tile = row[position.left];
    if (tile) {
      return tile.isAccessible;
    }
  }
  return false;
};

class PlayerMove extends EventAbstract<Options> {
  public static event: string = 'player:move';

  effects: Effect<Options>[] = [effectGameTurn];
  validators: Validator<Options>[] = [
    validateGameStatusIdle,
    validateInMapBounds,
    validateTileAccessible,
  ];

  // eslint-disable-next-line class-methods-use-this
  handler(options: Options): void {
    options.dispatch(playerMove(options.direction));
  }
}

export default PlayerMove;
