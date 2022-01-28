import EventAbstract from './EventAbstract';
import { Effect, EventOptions, Validator } from './types';
import { Item } from '../../models/Item/types';
import inventoryItemAdd from '../../store/thunks/inventoryItemAdd';
import { selectInventory } from '../../store/reducers/inventory';

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
