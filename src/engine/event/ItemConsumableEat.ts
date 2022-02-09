import { Consumable } from '~/src/models/Item/Consumable/types';
import { selectPlayerVitals } from '~/src/store/reducers/player';
import itemConsumableEat from '~/src/store/thunks/itemConsumableEat';

import EventAbstract from './EventAbstract';
import { InventorySelectedItemUpdateOptions } from './InventorySelectedItemUpdate';
import { Effect, EventOptions, Validator } from './types';

export interface ItemConsumableEatOptions {
  item: Consumable;
}
type Options = EventOptions & ItemConsumableEatOptions;

const effectInventorySelectedItemUpdate: Effect<Options> = (options) => {
  options.trigger<InventorySelectedItemUpdateOptions>('inventory:selected-item:update', {
    item: undefined,
  });
};

const validateFullnessNotMaximum: Validator<Options> = (options) => {
  const vitals = selectPlayerVitals(options.getState());
  return vitals.fullness < 100;
};

class ItemConsumableEat extends EventAbstract<Options> {
  public static event: string = 'item:consumable:eat';

  effects: Effect<Options>[] = [effectInventorySelectedItemUpdate];
  validators: Validator<Options>[] = [validateFullnessNotMaximum];

  // eslint-disable-next-line class-methods-use-this
  handler(options: Options): void {
    options.dispatch(itemConsumableEat(options.item));
  }
}

export default ItemConsumableEat;
