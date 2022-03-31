import mapFiresDurationUpdate from '~/src/store/thunks/mapFiresDurationUpdate';

import EventAbstract from './EventAbstract';
import { Effect, EventOptions, Validator } from './types';

class MapFiresDurationUpdate extends EventAbstract {
  public static event: string = 'map:fires:duration:update';

  effects: Effect<EventOptions>[] = [];
  validators: Validator<EventOptions>[] = [];

  // eslint-disable-next-line class-methods-use-this
  handler(options: EventOptions): void {
    options.dispatch(mapFiresDurationUpdate());
  }
}

export default MapFiresDurationUpdate;
