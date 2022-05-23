import { Container } from '~/src/models/Container/types';
import { Item } from '~/src/models/Item/types';
import { selectInventory } from '~/src/store/reducers/inventory/selectors';
import mapContainerItemPickUp from '~/src/store/thunks/mapContainerItemPickUp';

import EventAbstract from './EventAbstract';
import { Effect, EventOptions, Validator } from './types';

export interface MapContainerItemPickUpOptions {
  container: Container;
  item: Item;
}
type Options = EventOptions & MapContainerItemPickUpOptions;

const validateInventoryHasSpace: Validator<Options> = (options) => {
  const inventory = selectInventory(options.getState());
  return inventory.items.length < inventory.capacity;
};

class MapContainerItemPickUp extends EventAbstract<Options> {
  public static event: string = 'map:container:item:pick-up';

  effects: Effect<Options>[] = [];
  validators: Validator<Options>[] = [validateInventoryHasSpace];

  // eslint-disable-next-line class-methods-use-this
  handler(options: Options): void {
    options.dispatch(mapContainerItemPickUp(options.container, options.item));
  }
}

export default MapContainerItemPickUp;
