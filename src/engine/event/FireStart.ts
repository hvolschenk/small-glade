import { FireFuel, FireStarter, FireTinder } from '~/src/models/Item/Fire/types';
import fireStart from '~/src/store/thunks/fireStart';

import EventAbstract from './EventAbstract';
import { Effect, EventOptions, Validator } from './types';

export interface FireStartOptions {
  fuel: FireFuel;
  starter: FireStarter;
  tinder: FireTinder;
}

type Options = EventOptions & FireStartOptions;

const effectGameTurn: Effect<Options> = (options) => {
  options.trigger('game:turn');
};

class FireStart extends EventAbstract<Options> {
  public static event: string = 'fire:start';

  effects: Effect<Options>[] = [effectGameTurn, effectGameTurn];
  validators: Validator<Options>[] = [];

  // eslint-disable-next-line class-methods-use-this
  handler(options: Options): void {
    options.dispatch(fireStart(options.fuel, options.starter, options.tinder));
  }
}

export default FireStart;
