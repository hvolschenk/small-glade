import { AnyAction, ThunkAction } from '@reduxjs/toolkit';

import { Direction } from '~/src/models/Direction';
import positionFromDirection from '~/src/utilities/positionFromDirection';

import { playerPositionUpdate } from '../reducers/player';
import { selectPlayerPosition } from '../reducers/player/selectors';
import { RootState } from '../types';

const playerMove =
  (direction: Direction): ThunkAction<void, RootState, void, AnyAction> =>
  (dispatch, getState) => {
    const playerPosition = selectPlayerPosition(getState());
    const position = positionFromDirection({ direction, position: playerPosition });
    dispatch(playerPositionUpdate({ position }));
  };

export default playerMove;
