import EventAbstract from './EventAbstract';
import { InventoryItemAddOptions } from './InventoryItemAdd';
import { Effect, EventOptions, Validator } from './types';
import { Interactable } from '../../models/Interactable/types';
import { Item } from '../../models/Item/types';
import { Position } from '../../models/Position';
import { selectInventory } from '../../store/reducers/inventory';
import mapInteractableInteract from '../../store/thunks/mapInteractableInteract';

export interface InteractableHarvestOptions {
  item: Item;
  interactable: Interactable;
  position: Position;
}

type Options = EventOptions & InteractableHarvestOptions;

const effectInventoryItemAdd: Effect<Options> = (options) => {
  options.trigger<InventoryItemAddOptions>('inventory:item:add', { item: options.item });
};

const validateInventoryHasSpace: Validator<Options> = (options) => {
  const inventory = selectInventory(options.getState());
  return inventory.items.length < inventory.capacity;
};

class InteractableHarvest extends EventAbstract<Options> {
  public static event: string = 'interactable:harvest';

  effects: Effect<Options>[] = [effectInventoryItemAdd];
  validators: Validator<Options>[] = [validateInventoryHasSpace];

  // eslint-disable-next-line class-methods-use-this
  handler(options: Options): void {
    options.dispatch(mapInteractableInteract(options.position));
  }
}

export default InteractableHarvest;
