import { Item } from '../types';

export interface Weapon extends Item {
  canDefend: boolean;
  canHarvest: boolean;
  category: 'weapon';
  damage: number;
}
