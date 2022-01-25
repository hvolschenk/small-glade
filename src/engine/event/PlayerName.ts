import EventAbstract from './EventAbstract';
import { Effect, EventOptions, Validator } from './types';
import playerUpdateName from '../../store/thunks/playerUpdateName';

class PlayerName extends EventAbstract {
  public static event: string = 'player:name';

  effects: Effect<EventOptions>[] = [];
  validators: Validator<EventOptions>[] = [];

  handler(options: EventOptions): void {
    options.dispatch(playerUpdateName('Nod'));
  }
}

export default PlayerName;
