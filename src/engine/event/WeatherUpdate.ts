import weatherUpdate from '~/src/store/thunks/weatherUpdate';

import EventAbstract from './EventAbstract';
import { Effect, EventOptions, Validator } from './types';

class WeatherUpdate extends EventAbstract {
  public static event: string = 'weather:update';

  effects: Effect<EventOptions>[] = [];
  validators: Validator<EventOptions>[] = [];

  // eslint-disable-next-line class-methods-use-this
  handler(options: EventOptions): void {
    options.dispatch(weatherUpdate());
  }
}

export default WeatherUpdate;
