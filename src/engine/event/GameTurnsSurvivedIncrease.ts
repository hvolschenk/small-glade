import gameTurnsSurvivedIncrease from '~/src/store/thunks/gameTurnsSurvivedIncrease';

import EventAbstract from './EventAbstract';
import { Effect, EventOptions, Validator } from './types';

class GameTurnsSurvivedIncrease extends EventAbstract {
  public static event: string = 'game:turns-survived:increase';

  effects: Effect<EventOptions>[] = [];
  validators: Validator<EventOptions>[] = [];

  // eslint-disable-next-line class-methods-use-this
  handler(options: EventOptions): void {
    options.dispatch(gameTurnsSurvivedIncrease());
  }
}

export default GameTurnsSurvivedIncrease;
