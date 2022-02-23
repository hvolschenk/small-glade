import { GameStatus } from '~/src/models/Game';
import { selectGameStatus } from '~/src/store/reducers/game/selectors';
import mapAnimalsPreyFlee from '~/src/store/thunks/mapAnimalsPreyFlee';

import EventAbstract from './EventAbstract';
import { Effect, EventOptions, Validator } from './types';

const validateGameStatusIdle: Validator<EventOptions> = (options) => {
  const status = selectGameStatus(options.getState());
  return status === GameStatus.GAME_STATUS_IDLE;
};

class MapAnimalsPreyFlee extends EventAbstract {
  public static event: string = 'map:animals:prey:flee';

  effects: Effect<EventOptions>[] = [];
  validators: Validator<EventOptions>[] = [validateGameStatusIdle];

  // eslint-disable-next-line class-methods-use-this
  handler(options: EventOptions): void {
    options.dispatch(mapAnimalsPreyFlee());
  }
}

export default MapAnimalsPreyFlee;
