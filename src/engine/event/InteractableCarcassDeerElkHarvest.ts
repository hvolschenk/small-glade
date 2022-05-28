import { Interactable } from '~/src/models/Interactable/types';
import { selectInventoryWeaponsHarvesting } from '~/src/store/reducers/inventory/selectors';
import interactableCarcassDeerElkHarvest from '~/src/store/thunks/interactableCarcassDeerElkHarvest';

import EventAbstract from './EventAbstract';
import { Effect, EventOptions, Validator } from './types';

export interface InteractableCarcassDeerElkHarvestOptions {
  carcassDeerElk: Interactable;
}

type Options = EventOptions & InteractableCarcassDeerElkHarvestOptions;

const effectGameTurn: Effect<Options> = (options) => {
  options.trigger('game:turn');
};

const validateOwnsHarvestingTool: Validator<Options> = (options) => {
  const harvestingWeapons = selectInventoryWeaponsHarvesting(options.getState());
  return harvestingWeapons.length > 0;
};

class InteractableCarcassDeerElkHarvest extends EventAbstract<Options> {
  public static event: string = 'interactable:carcass-deer:harvest';

  effects: Effect<Options>[] = [
    effectGameTurn,
    effectGameTurn,
    effectGameTurn,
    effectGameTurn,
    effectGameTurn,
  ];
  validators: Validator<Options>[] = [validateOwnsHarvestingTool];

  // eslint-disable-next-line class-methods-use-this
  handler(options: Options): void {
    options.dispatch(interactableCarcassDeerElkHarvest(options.carcassDeerElk));
  }
}

export default InteractableCarcassDeerElkHarvest;
