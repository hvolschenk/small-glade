import mapFogOfWarUpdateVisible from '~/src/store/thunks/mapFogOfWarUpdateVisible';

import EventAbstract from './EventAbstract';
import { Effect, EventOptions, Validator } from './types';

class MapFogOfWarUpdateVisible extends EventAbstract {
  public static event: string = 'map:fog-of-war:update-visible';

  effects: Effect<EventOptions>[] = [];
  validators: Validator<EventOptions>[] = [];

  // eslint-disable-next-line class-methods-use-this
  handler(options: EventOptions): void {
    options.dispatch(mapFogOfWarUpdateVisible());
  }
}

export default MapFogOfWarUpdateVisible;
