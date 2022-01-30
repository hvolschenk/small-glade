import { Game } from '../models/Game';
import { Inventory } from '../models/Inventory/types';
import { Map } from '../models/Map/types';
import { Outfit } from '../models/Outfit/types';
import { Player } from '../models/Player/types';

export interface RootState {
  game: Game;
  inventory: Inventory;
  map: Map;
  outfit: Outfit;
  player: Player;
}
