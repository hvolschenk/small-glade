import { Animal } from '../types';

export enum PreyStatus {
  FLEEING = 'FLEEING',
  IDLE = 'IDLE',
}

export interface Prey extends Animal {
  category: 'prey';
  fleeRadius: number;
  status: PreyStatus;
}
