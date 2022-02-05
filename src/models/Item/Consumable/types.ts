import { Item } from '../types';

export interface Consumable extends Item {
  category: 'consumable';
  fullness: number;
  hydration: number;
}
