import { GameStatus } from '~/src/models/Game';
import gameStatusUpdate from '~/src/store/thunks/gameStatusUpdate';

import EventAbstract from './EventAbstract';
import { Effect, EventOptions, Validator } from './types';

class GameIdle extends EventAbstract {
  public static event: string = 'game:idle';

  effects: Effect<EventOptions>[] = [];
  validators: Validator<EventOptions>[] = [];

  // eslint-disable-next-line class-methods-use-this
  handler(options: EventOptions): void {
    options.dispatch(gameStatusUpdate(GameStatus.GAME_STATUS_IDLE));
  }
}

export default GameIdle;
