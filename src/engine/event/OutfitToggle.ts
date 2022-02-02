import outfitToggle from '~/src/store/thunks/outfitToggle';

import EventAbstract from './EventAbstract';
import { Effect, EventOptions, Validator } from './types';

class OutfitToggle extends EventAbstract {
  public static event: string = 'outfit:toggle';

  effects: Effect<EventOptions>[] = [];
  validators: Validator<EventOptions>[] = [];

  // eslint-disable-next-line class-methods-use-this
  handler(options: EventOptions): void {
    options.dispatch(outfitToggle());
  }
}

export default OutfitToggle;
