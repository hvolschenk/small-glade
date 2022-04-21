import { GameStatus } from '~/src/models/Game';
import { selectGameStatus } from '~/src/store/reducers/game/selectors';
import mapAnimalsPredatorMove from '~/src/store/thunks/mapAnimalsPredatorMove';

import EventAbstract from './EventAbstract';
import { Effect, EventOptions, Validator } from './types';

const effectMapAnimalsPredatorAggro: Effect<EventOptions> = (options) => {
  options.trigger('map:animals:predator:aggro');
};

const effectMapAnimalsPredatorFlee: Effect<EventOptions> = (options) => {
  options.trigger('map:animals:predator:flee');
};

const validateGameStatusIdle: Validator<EventOptions> = (options) => {
  const status = selectGameStatus(options.getState());
  return status === GameStatus.GAME_STATUS_IDLE;
};

class MapAnimalsPredatorMove extends EventAbstract {
  public static event: string = 'map:animals:predator:move';

  effects: Effect<EventOptions>[] = [effectMapAnimalsPredatorAggro, effectMapAnimalsPredatorFlee];
  validators: Validator<EventOptions>[] = [validateGameStatusIdle];

  // eslint-disable-next-line class-methods-use-this
  handler(options: EventOptions): void {
    options.dispatch(mapAnimalsPredatorMove());
  }
}

export default MapAnimalsPredatorMove;
