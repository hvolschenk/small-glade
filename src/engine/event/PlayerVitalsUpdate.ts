import playerVitalsUpdate from '~/src/store/thunks/playerVitalsUpdate';

import EventAbstract from './EventAbstract';
import { Effect, EventOptions, Validator } from './types';

class PlayerVitalsUpdate extends EventAbstract {
  public static event: string = 'player:vitals:update';

  effects: Effect<EventOptions>[] = [];
  validators: Validator<EventOptions>[] = [];

  // eslint-disable-next-line class-methods-use-this
  handler(options: EventOptions): void {
    options.dispatch(playerVitalsUpdate());
  }
}

export default PlayerVitalsUpdate;
