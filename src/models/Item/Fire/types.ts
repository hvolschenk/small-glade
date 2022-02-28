import { Item } from '../types';

export interface Fire extends Item {
  category: 'fire';
}

export interface FireFuel extends Fire {
  burnDuration: number;
  type: 'fuel';
}

export interface FireStarter extends Fire {
  lights: number;
  type: 'starter';
}

export interface FireTinder extends Fire {
  type: 'tinder';
}
