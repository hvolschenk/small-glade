import { Predator } from '~/src/models/Animal/types';
import { Position } from '~/src/models/Position';
import mapAnimalsPredatorDefend from '~/src/store/thunks/mapAnimalsPredatorDefend';

import EventAbstract from './EventAbstract';
import { Effect, EventOptions, Validator } from './types';

export interface MapAnimalsPredatorDefendOptions {
  position: Position;
  predator: Predator;
}
type Options = EventOptions & MapAnimalsPredatorDefendOptions;

const effectGameIdle: Effect<Options> = (options) => {
  options.trigger('game:idle');
};

class MapAnimalsPredatorDefend extends EventAbstract<Options> {
  public static event: string = 'map:animals:predator:defend';

  effects: Effect<Options>[] = [effectGameIdle];
  validators: Validator<Options>[] = [];

  // eslint-disable-next-line class-methods-use-this
  handler(options: Options): void {
    options.dispatch(mapAnimalsPredatorDefend(options.predator, options.position));
  }
}

export default MapAnimalsPredatorDefend;
