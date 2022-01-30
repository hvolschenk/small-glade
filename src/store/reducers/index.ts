import { combineReducers } from 'redux';

import game from './game';
import inventory from './inventory';
import map from './map';
import outfit from './outfit';
import player from './player';
import { RootState } from '../types';

export default combineReducers<RootState>({ game, inventory, map, outfit, player });
