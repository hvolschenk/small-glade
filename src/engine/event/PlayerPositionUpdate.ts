import { Position } from '~/src/models/Position';
import playerPositionUpdate from '~/src/store/thunks/playerPositionUpdate';

import EventAbstract from './EventAbstract';
import { Effect, EventOptions, Validator } from './types';

export interface PlayerPositionUpdateOptions {
  position: Position;
}
type Options = EventOptions & PlayerPositionUpdateOptions;

const effectMapFogOfWarUpdateVisible: Effect<Options> = (options) => {
  options.trigger('map:fog-of-war:update-visible');
};

class PlayerPositionUpdate extends EventAbstract<Options> {
  public static event: string = 'player:position:update';

  effects: Effect<Options>[] = [effectMapFogOfWarUpdateVisible];
  validators: Validator<Options>[] = [];

  // eslint-disable-next-line class-methods-use-this
  handler(options: Options): void {
    options.dispatch(playerPositionUpdate(options.position));
  }
}

export default PlayerPositionUpdate;
