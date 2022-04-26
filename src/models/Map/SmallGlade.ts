import { v4 as uuidv4 } from 'uuid';

import wolfArctic from '../Animal/Predator/WolfArctic';
import deerElk from '../Animal/Prey/DeerElk';
import { Animal } from '../Animal/types';
import bushBearberry from '../Interactable/BushBearberry';
import fuelStick from '../Interactable/FuelStick';
import starterMatches from '../Interactable/StarterMatches';
import tinderNewspaper from '../Interactable/TinderNewspaper';
import { Position } from '../Position';
import placeholderEmpty from '../Tile/PlaceholderEmpty';
import rockBasic from '../Tile/RockBasic';
import treeBirch from '../Tile/TreeBirch';
import waterBasic from '../Tile/WaterBasic';
import { Map } from './types';

const animal = (animalModel: Animal, left: Position['left'], top: Position['top']) => ({
  ...animalModel,
  id: uuidv4(),
  position: { left, top },
});

const smallGlade: Map = {
  animals: [animal(deerElk, 11, 3), animal(wolfArctic, 3, 11)],
  fires: [],
  identifier: 'small-glade',
  interactables: [
    [, , bushBearberry, fuelStick, tinderNewspaper],
    [, , , , , , , , , bushBearberry],
    [],
    [],
    [],
    [, , starterMatches],
  ],
  name: 'Small glade',
  tiles: [
    [
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
    ],
    [
      placeholderEmpty,
      placeholderEmpty,
      treeBirch,
      treeBirch,
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
      rockBasic,
      rockBasic,
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
    ],
    [
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
      treeBirch,
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
      rockBasic,
      rockBasic,
      rockBasic,
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
    ],
    [
      waterBasic,
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
      rockBasic,
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
    ],
    [
      waterBasic,
      waterBasic,
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
    ],
    [
      waterBasic,
      waterBasic,
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
      rockBasic,
      placeholderEmpty,
      placeholderEmpty,
    ],
    [
      waterBasic,
      waterBasic,
      waterBasic,
      waterBasic,
      placeholderEmpty,
      placeholderEmpty,
      waterBasic,
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
      rockBasic,
      rockBasic,
      rockBasic,
      placeholderEmpty,
    ],
    [
      waterBasic,
      waterBasic,
      waterBasic,
      waterBasic,
      placeholderEmpty,
      rockBasic,
      waterBasic,
      waterBasic,
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
    ],
    [
      waterBasic,
      waterBasic,
      waterBasic,
      waterBasic,
      waterBasic,
      waterBasic,
      waterBasic,
      waterBasic,
      waterBasic,
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
    ],
    [
      waterBasic,
      waterBasic,
      waterBasic,
      waterBasic,
      waterBasic,
      waterBasic,
      waterBasic,
      waterBasic,
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
    ],
    [
      waterBasic,
      waterBasic,
      waterBasic,
      waterBasic,
      waterBasic,
      waterBasic,
      waterBasic,
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
    ],
    [
      waterBasic,
      waterBasic,
      waterBasic,
      waterBasic,
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
      placeholderEmpty,
    ],
  ],
};

export default smallGlade;
