import { combineReducers } from 'redux';

import { RootState } from '../types';
import game from './game';
import inventory from './inventory';
import map from './map';
import outfit from './outfit';
import player from './player';
import weather from './weather';

export default combineReducers<RootState>({ game, inventory, map, outfit, player, weather });
