interface Tile {
  isAccessible: boolean;
  type: string;
  variant: string;
}

export interface Map {
  identifier: string;
  name: string;
  tiles: Tile[][];
}
