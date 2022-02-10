import { Item } from '~/src/models/Item/types';
import { selectInventory } from '~/src/store/reducers/inventory/selectors';
import inventoryItemAdd from '~/src/store/thunks/inventoryItemAdd';

import EventAbstract from './EventAbstract';
import { Effect, EventOptions, Validator } from './types';

export interface InventoryItemAddOptions {
  item: Item;
}
type Options = EventOptions & InventoryItemAddOptions;

const validateInventoryHasSpace: Validator<Options> = (options) => {
  const inventory = selectInventory(options.getState());
  return inventory.items.length < inventory.capacity;
};

class InventoryItemAdd extends EventAbstract<Options> {
  public static event: string = 'inventory:item:add';

  effects: Effect<Options>[] = [];
  validators: Validator<Options>[] = [validateInventoryHasSpace];

  // eslint-disable-next-line class-methods-use-this
  handler(options: Options): void {
    options.dispatch(inventoryItemAdd(options.item));
  }
}

export default InventoryItemAdd;
