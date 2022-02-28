import { Item } from '../types';

export interface Consumable extends Item {
  category: 'consumable';
  fullness: number;
  hydration: number;
}

export interface ConsumableBerry extends Consumable {
  type: 'berry';
}

export interface ConsumableBottle extends Consumable {
  type: 'bottle';
}

export interface ConsumableCrisps extends Consumable {
  type: 'crisps';
}
