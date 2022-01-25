import EventAbstract from './EventAbstract';
import { Effect, EventOptions, Validator } from './types';
import { GameStatus } from '../../models/Game';
import { selectGameStatus } from '../../store/reducers/game';
import gameStatusUpdate from '../../store/thunks/gameStatusUpdate';

const validateGameLoading: Validator<EventOptions> = (options) => {
  const status = selectGameStatus(options.getState());
  return status === GameStatus.GAME_STATUS_LOADING;
};

class GameLoadDone extends EventAbstract {
  public static event: string = 'game:load:done';

  effects: Effect<EventOptions>[] = [];
  validators: Validator<EventOptions>[] = [validateGameLoading];

  handler(options?: EventOptions): void {
    options.dispatch(gameStatusUpdate(GameStatus.GAME_STATUS_UNSTARTED));
  }
}

export default GameLoadDone;
