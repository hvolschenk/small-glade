import { GameStatus } from '~/src/models/Game';
import { selectGameStatus } from '~/src/store/reducers/game/selectors';
import gameStatusUpdate from '~/src/store/thunks/gameStatusUpdate';

import EventAbstract from './EventAbstract';
import { Effect, EventOptions, Validator } from './types';

const validateGameNotStarted: Validator<EventOptions> = (options) => {
  const status = selectGameStatus(options.getState());
  return status === GameStatus.GAME_STATUS_UNSTARTED;
};

class GameStart extends EventAbstract {
  public static event: string = 'game:start';

  effects: Effect<EventOptions>[] = [];
  validators: Validator<EventOptions>[] = [validateGameNotStarted];

  // eslint-disable-next-line class-methods-use-this
  handler(options: EventOptions): void {
    options.dispatch(gameStatusUpdate(GameStatus.GAME_STATUS_IDLE));
  }
}

export default GameStart;
