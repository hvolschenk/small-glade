import { AnyAction, ThunkAction } from '@reduxjs/toolkit';

import { gameTurnsSurvivedIncrease as gameTurnsSurvivedIncreaseAction } from '../reducers/game';
import { RootState } from '../types';

const gameTurnsSurvivedIncrease =
  (): ThunkAction<void, RootState, void, AnyAction> => (dispatch) => {
    dispatch(gameTurnsSurvivedIncreaseAction());
  };

export default gameTurnsSurvivedIncrease;
