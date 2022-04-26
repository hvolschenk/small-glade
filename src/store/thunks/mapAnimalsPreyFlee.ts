import { AnyAction, ThunkAction } from '@reduxjs/toolkit';

import { PreyStatus } from '~/src/models/Animal/Prey/types';
import radiusAroundPosition from '~/src/utilities/radiusAroundPosition';

import { mapAnimalPreyStatus } from '../reducers/map';
import { selectMapAnimalsPrey } from '../reducers/map/selectors';
import { selectPlayerPosition } from '../reducers/player/selectors';
import { RootState } from '../types';

const mapAnimalsPreyFlee =
  (): ThunkAction<void, RootState, void, AnyAction> => (dispatch, getState) => {
    const preyAnimals = selectMapAnimalsPrey(getState());
    const playerPosition = selectPlayerPosition(getState());
    preyAnimals.forEach((prey) => {
      const fleeRadius = radiusAroundPosition({
        position: prey.position,
        radius: prey.fleeRadius,
      });
      const isFleeing = fleeRadius.some(
        (fleePosition) =>
          fleePosition.left === playerPosition.left && fleePosition.top === playerPosition.top,
      );
      dispatch(
        mapAnimalPreyStatus({
          prey,
          status: isFleeing ? PreyStatus.FLEEING : PreyStatus.IDLE,
        }),
      );
    });
  };

export default mapAnimalsPreyFlee;
