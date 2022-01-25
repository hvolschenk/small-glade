import { combineReducers } from 'redux';

import game from './game';
import player from './player';
import { RootState } from '../types';

export default combineReducers<RootState>({ game, player });
