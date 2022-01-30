import EventAbstract from './EventAbstract';
import { Effect, EventOptions, Validator } from './types';
import outfitToggle from '../../store/thunks/outfitToggle';

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
