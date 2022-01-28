import { Item } from '../Item/types';

export interface Inventory {
  capacity: number;
  isOpen: boolean;
  items: Item[];
}
