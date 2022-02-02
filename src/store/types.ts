import { Game } from '~/src/models/Game';
import { Inventory } from '~/src/models/Inventory/types';
import { Map } from '~/src/models/Map/types';
import { Outfit } from '~/src/models/Outfit/types';
import { Player } from '~/src/models/Player/types';
import { Weather } from '~/src/models/Weather/types';

export interface RootState {
  game: Game;
  inventory: Inventory;
  map: Map;
  outfit: Outfit;
  player: Player;
  weather: Weather;
}
