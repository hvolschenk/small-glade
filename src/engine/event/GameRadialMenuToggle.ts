import gameRadialMenuToggle from '~/src/store/thunks/gameRadialMenuToggle';

import EventAbstract from './EventAbstract';
import { Effect, EventOptions, Validator } from './types';

class GameRadialMenuToggle extends EventAbstract {
  public static event: string = 'game:radial-menu:toggle';

  effects: Effect<EventOptions>[] = [];
  validators: Validator<EventOptions>[] = [];

  // eslint-disable-next-line class-methods-use-this
  handler(options: EventOptions): void {
    options.dispatch(gameRadialMenuToggle());
  }
}

export default GameRadialMenuToggle;
