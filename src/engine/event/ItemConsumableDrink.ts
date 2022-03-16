import { Consumable } from '~/src/models/Item/Consumable/types';
import { selectPlayerVitals } from '~/src/store/reducers/player/selectors';
import itemConsumableDrink from '~/src/store/thunks/itemConsumableDrink';

import EventAbstract from './EventAbstract';
import { InventorySelectedItemUpdateOptions } from './InventorySelectedItemUpdate';
import { Effect, EventOptions, Validator } from './types';

export interface ItemConsumableDrinkOptions {
  item: Consumable;
}
type Options = EventOptions & ItemConsumableDrinkOptions;

const effectGameTurn: Effect<Options> = (options) => {
  options.trigger('game:turn');
};

const effectInventorySelectedItemUpdate: Effect<Options> = (options) => {
  options.trigger<InventorySelectedItemUpdateOptions>('inventory:selected-item:update', {
    item: undefined,
  });
};

const validateHydrationNotMaximum: Validator<Options> = (options) => {
  const vitals = selectPlayerVitals(options.getState());
  return vitals.hydration < 100;
};

class ItemConsumableDrink extends EventAbstract<Options> {
  public static event: string = 'item:consumable:drink';

  effects: Effect<Options>[] = [effectGameTurn, effectInventorySelectedItemUpdate];
  validators: Validator<Options>[] = [validateHydrationNotMaximum];

  // eslint-disable-next-line class-methods-use-this
  handler(options: Options): void {
    options.dispatch(itemConsumableDrink(options.item));
  }
}

export default ItemConsumableDrink;
