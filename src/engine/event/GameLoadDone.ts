import { GameStatus } from '~/src/models/Game';
import { selectGameStatus } from '~/src/store/reducers/game';
import gameStatusUpdate from '~/src/store/thunks/gameStatusUpdate';

import EventAbstract from './EventAbstract';
import { Effect, EventOptions, Validator } from './types';

const validateGameLoading: Validator<EventOptions> = (options) => {
  const status = selectGameStatus(options.getState());
  return status === GameStatus.GAME_STATUS_LOADING;
};

class GameLoadDone extends EventAbstract {
  public static event: string = 'game:load:done';

  effects: Effect<EventOptions>[] = [];
  validators: Validator<EventOptions>[] = [validateGameLoading];

  // eslint-disable-next-line class-methods-use-this
  handler(options: EventOptions): void {
    options.dispatch(gameStatusUpdate(GameStatus.GAME_STATUS_UNSTARTED));
  }
}

export default GameLoadDone;
