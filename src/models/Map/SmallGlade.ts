import bushBearberry from '../Interactable/BushBearberry';
import placeholderEmpty from '../Tile/PlaceholderEmpty';
import treeBirch from '../Tile/TreeBirch';
import { Map } from './types';

const smallGlade: Map = {
  identifier: 'small-glade',
  interactables: [[, , bushBearberry], []],
  name: 'Small glade',
  tiles: [
    [placeholderEmpty, placeholderEmpty, placeholderEmpty],
    [placeholderEmpty, placeholderEmpty, treeBirch],
  ],
};

export default smallGlade;
