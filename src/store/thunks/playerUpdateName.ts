import { AnyAction, ThunkAction } from '@reduxjs/toolkit';
import { Player } from '../../models/Player/types';
import { playerNameUpdate } from '../reducers/player';
import { RootState } from '../types';

const playerUpdateName =
  (name: Player['name']): ThunkAction<void, RootState, void, AnyAction> =>
  (dispatch) => {
    dispatch(playerNameUpdate({ name }));
  };

export default playerUpdateName;
