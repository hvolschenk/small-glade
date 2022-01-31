import { Position } from '../Position';

export interface Vitals {
  fullness: number;
  health: number;
  hydration: number;
  warmth: number;
}

export interface Player {
  position: Position;
  vitals: Vitals;
}
