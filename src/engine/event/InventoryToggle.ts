import { GameStatus } from '~/src/models/Game';
import { selectGameStatus } from '~/src/store/reducers/game';
import inventoryToggle from '~/src/store/thunks/inventoryToggle';

import EventAbstract from './EventAbstract';
import { Effect, EventOptions, Validator } from './types';

const validateGameStatusNotEnded: Validator<EventOptions> = (options) => {
  const gameStatus = selectGameStatus(options.getState());
  return gameStatus !== GameStatus.GAME_STATUS_ENDED;
};

class InventoryToggle extends EventAbstract {
  public static event: string = 'inventory:toggle';

  effects: Effect<EventOptions>[] = [];
  validators: Validator<EventOptions>[] = [validateGameStatusNotEnded];

  // eslint-disable-next-line class-methods-use-this
  handler(options: EventOptions): void {
    options.dispatch(inventoryToggle());
  }
}

export default InventoryToggle;
