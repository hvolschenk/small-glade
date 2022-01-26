import { Game } from '../models/Game';
import { Map } from '../models/Map';
import { Player } from '../models/Player';

export interface RootState {
  game: Game;
  map: Map;
  player: Player;
}
