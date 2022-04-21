import { GameStatus } from '~/src/models/Game';
import { selectGameStatus } from '~/src/store/reducers/game/selectors';
import mapAnimalsPredatorFlee from '~/src/store/thunks/mapAnimalsPredatorFlee';

import EventAbstract from './EventAbstract';
import { Effect, EventOptions, Validator } from './types';

const validateGameStatusIdle: Validator<EventOptions> = (options) => {
  const status = selectGameStatus(options.getState());
  return status === GameStatus.GAME_STATUS_IDLE;
};

class MapAnimalsPredatorFlee extends EventAbstract {
  public static event: string = 'map:animals:predator:flee';

  effects: Effect<EventOptions>[] = [];
  validators: Validator<EventOptions>[] = [validateGameStatusIdle];

  // eslint-disable-next-line class-methods-use-this
  handler(options: EventOptions): void {
    options.dispatch(mapAnimalsPredatorFlee());
  }
}

export default MapAnimalsPredatorFlee;
