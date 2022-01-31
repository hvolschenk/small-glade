import EventAbstract from './EventAbstract';
import { Effect, EventOptions, Validator } from './types';

const effectPlayerVitalsUpdate: Effect<EventOptions> = (options) => {
  options.trigger('player:vitals:update');
};

class GameTurn extends EventAbstract {
  public static event: string = 'game:turn';

  effects: Effect<EventOptions>[] = [effectPlayerVitalsUpdate];
  validators: Validator<EventOptions>[] = [];

  // eslint-disable-next-line class-methods-use-this
  handler(): void {}
}

export default GameTurn;
