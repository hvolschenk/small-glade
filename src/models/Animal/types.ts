export interface Animal {
  category: 'predator' | 'prey';
  health: number;
  name: string;
  type: string;
  variant: string;
}

export interface Predator extends Animal {
  aggroRadius: number;
  category: 'predator';
  damage: number;
  isAggroed: boolean;
}

export interface Prey extends Animal {
  category: 'prey';
  fleeRadius: number;
  isFleeing: boolean;
}
