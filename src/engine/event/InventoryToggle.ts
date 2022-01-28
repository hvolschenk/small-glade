import EventAbstract from './EventAbstract';
import { Effect, EventOptions, Validator } from './types';
import inventoryToggle from '../../store/thunks/inventoryToggle';

class InventoryToggle extends EventAbstract {
  public static event: string = 'inventory:toggle';

  effects: Effect<EventOptions>[] = [];
  validators: Validator<EventOptions>[] = [];

  // eslint-disable-next-line class-methods-use-this
  handler(options: EventOptions): void {
    options.dispatch(inventoryToggle());
  }
}

export default InventoryToggle;
