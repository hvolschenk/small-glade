import gamePauseMenuToggle from '~/src/store/thunks/gamePauseMenuToggle';

import EventAbstract from './EventAbstract';
import { Effect, EventOptions, Validator } from './types';

class GamePauseMenuToggle extends EventAbstract {
  public static event: string = 'game:pause-menu:toggle';

  effects: Effect<EventOptions>[] = [];
  validators: Validator<EventOptions>[] = [];

  // eslint-disable-next-line class-methods-use-this
  handler(options: EventOptions): void {
    options.dispatch(gamePauseMenuToggle());
  }
}

export default GamePauseMenuToggle;
