import { Game } from '../models/Game';
import { Player } from '../models/Player';

import { store } from './index';

export type Dispatch = typeof store.dispatch;
export type GetState = typeof store.getState;

export interface RootState {
  game: Game;
  player: Player;
}
