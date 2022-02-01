import EventAbstract from './EventAbstract';
import { Effect, EventOptions, Validator } from './types';
import weatherUpdate from '../../store/thunks/weatherUpdate';

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
