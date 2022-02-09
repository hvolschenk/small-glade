import { Inventory } from '~/src/models/Inventory/types';
import inventorySelectedItemUpdate from '~/src/store/thunks/inventorySelectedItemUpdate';

import EventAbstract from './EventAbstract';
import { Effect, EventOptions, Validator } from './types';

export interface InventorySelectedItemUpdateOptions {
  item: Inventory['selectedItem'];
}
type Options = EventOptions & InventorySelectedItemUpdateOptions;

class InventorySelectedItemUpdate extends EventAbstract<Options> {
  public static event: string = 'inventory:selected-item:update';

  effects: Effect<Options>[] = [];
  validators: Validator<Options>[] = [];

  // eslint-disable-next-line class-methods-use-this
  handler(options: Options): void {
    options.dispatch(inventorySelectedItemUpdate(options.item));
  }
}

export default InventorySelectedItemUpdate;
