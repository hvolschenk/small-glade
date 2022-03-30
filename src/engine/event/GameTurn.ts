import { GameStatus } from '~/src/models/Game';
import { selectGameStatus } from '~/src/store/reducers/game/selectors';

import EventAbstract from './EventAbstract';
import { Effect, EventOptions, Validator } from './types';

const effectGameEnd: Effect<EventOptions> = (options) => {
  options.trigger('game:end');
};

const effectMapAnimalsPredatorMove: Effect<EventOptions> = (options) => {
  options.trigger('map:animals:predator:move');
};

const effectMapAnimalsPreyMove: Effect<EventOptions> = (options) => {
  options.trigger('map:animals:prey:move');
};

const effectMapFiresDurationUpdate: Effect<EventOptions> = (options) => {
  options.trigger('map:fires:duration:update');
};

const effectPlayerVitalsUpdate: Effect<EventOptions> = (options) => {
  options.trigger('player:vitals:update');
};

const effectWeatherUpdate: Effect<EventOptions> = (options) => {
  options.trigger('weather:update');
};

const validateGameStatusNotEnded: Validator<EventOptions> = (options) => {
  const gameStatus = selectGameStatus(options.getState());
  return gameStatus !== GameStatus.GAME_STATUS_ENDED;
};

class GameTurn extends EventAbstract {
  public static event: string = 'game:turn';

  effects: Effect<EventOptions>[] = [
    effectGameEnd,
    effectPlayerVitalsUpdate,
    effectMapAnimalsPredatorMove,
    effectMapAnimalsPreyMove,
    effectMapFiresDurationUpdate,
    effectWeatherUpdate,
  ];
  validators: Validator<EventOptions>[] = [validateGameStatusNotEnded];

  // eslint-disable-next-line class-methods-use-this
  handler(): void {}
}

export default GameTurn;
