import { Game } from '../models/Game';
import { Player } from '../models/Player';

export interface RootState {
  game: Game;
  player: Player;
}
