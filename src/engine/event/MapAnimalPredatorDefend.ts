import { Predator } from '~/src/models/Animal/Predator/types';
import mapAnimalPredatorDefend from '~/src/store/thunks/mapAnimalPredatorDefend';

import EventAbstract from './EventAbstract';
import { Effect, EventOptions, Validator } from './types';

export interface MapAnimalPredatorDefendOptions {
  predator: Predator;
}
type Options = EventOptions & MapAnimalPredatorDefendOptions;

const effectGameIdle: Effect<Options> = (options) => {
  options.trigger('game:idle');
};

class MapAnimalPredatorDefend extends EventAbstract<Options> {
  public static event: string = 'map:animal:predator:defend';

  effects: Effect<Options>[] = [effectGameIdle];
  validators: Validator<Options>[] = [];

  // eslint-disable-next-line class-methods-use-this
  handler(options: Options): void {
    options.dispatch(mapAnimalPredatorDefend(options.predator));
  }
}

export default MapAnimalPredatorDefend;
