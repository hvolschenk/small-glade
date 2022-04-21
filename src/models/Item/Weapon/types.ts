import { Item } from '../types';

export interface Weapon extends Item {
  category: 'weapon';
  damage: number;
}
