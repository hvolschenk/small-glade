import { AnyAction, ThunkAction } from '@reduxjs/toolkit';

import { RootState } from '../types';
import { Direction } from '../../models/Direction';
import { playerPositionUpdate, selectPlayerPosition } from '../reducers/player';
import positionFromDirection from '../../utilities/positionFromDirection';

const playerMove =
  (direction: Direction): ThunkAction<void, RootState, void, AnyAction> =>
  (dispatch, getState) => {
    const playerPosition = selectPlayerPosition(getState());
    const position = positionFromDirection({ direction, position: playerPosition });
    dispatch(playerPositionUpdate({ position }));
  };

export default playerMove;
