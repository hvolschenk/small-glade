export interface Animal {
  health: number;
  name: string;
  type: string;
  variant: string;
}

export interface Predator extends Animal {
  aggroRadius: number;
  damage: number;
  isAggroed: boolean;
}

export interface Prey extends Animal {
  fleeRadius: number;
  isFleeing: boolean;
}
