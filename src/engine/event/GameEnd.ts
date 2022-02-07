import { GameStatus } from '~/src/models/Game';
import { selectPlayerVitals } from '~/src/store/reducers/player';
import gameStatusUpdate from '~/src/store/thunks/gameStatusUpdate';

import EventAbstract from './EventAbstract';
import { Effect, EventOptions, Validator } from './types';

const validatePlayerHealthZero: Validator<EventOptions> = (options) => {
  const vitals = selectPlayerVitals(options.getState());
  return vitals.health === 0;
};

class GameEnd extends EventAbstract {
  public static event: string = 'game:end';

  effects: Effect<EventOptions>[] = [];
  validators: Validator<EventOptions>[] = [validatePlayerHealthZero];

  // eslint-disable-next-line class-methods-use-this
  handler(options: EventOptions): void {
    options.dispatch(gameStatusUpdate(GameStatus.GAME_STATUS_ENDED));
  }
}

export default GameEnd;
