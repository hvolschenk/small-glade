import { Game } from '../models/Game';
import { Inventory } from '../models/Inventory/types';
import { Map } from '../models/Map/types';
import { Player } from '../models/Player';

export interface RootState {
  game: Game;
  inventory: Inventory;
  map: Map;
  player: Player;
}
