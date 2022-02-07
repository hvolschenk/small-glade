import { GameStatus } from '~/src/models/Game';
import { selectGameStatus } from '~/src/store/reducers/game';
import outfitToggle from '~/src/store/thunks/outfitToggle';

import EventAbstract from './EventAbstract';
import { Effect, EventOptions, Validator } from './types';

const validateGameStatusNotEnded: Validator<EventOptions> = (options) => {
  const gameStatus = selectGameStatus(options.getState());
  return gameStatus !== GameStatus.GAME_STATUS_ENDED;
};

class OutfitToggle extends EventAbstract {
  public static event: string = 'outfit:toggle';

  effects: Effect<EventOptions>[] = [];
  validators: Validator<EventOptions>[] = [validateGameStatusNotEnded];

  // eslint-disable-next-line class-methods-use-this
  handler(options: EventOptions): void {
    options.dispatch(outfitToggle());
  }
}

export default OutfitToggle;
