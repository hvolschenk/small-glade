import { combineReducers } from 'redux';

import game from './game';
import map from './map';
import player from './player';
import { RootState } from '../types';

export default combineReducers<RootState>({ game, map, player });
