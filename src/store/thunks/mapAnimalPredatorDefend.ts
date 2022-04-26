import { AnyAction, ThunkAction } from '@reduxjs/toolkit';

import { Predator, PredatorStatus } from '~/src/models/Animal/Predator/types';
import { GameStatus } from '~/src/models/Game';
import { mapAnimalPredatorStatus } from '~/src/store/reducers/map';
import { selectMapAnimalsPredator } from '~/src/store/reducers/map/selectors';
import { selectOutfitProtection } from '~/src/store/reducers/outfit/selectors';
import { playerVitalsUpdate } from '~/src/store/reducers/player';
import { selectPlayerPosition, selectPlayerVitals } from '~/src/store/reducers/player/selectors';

import { RootState } from '../types';
import gameStatusUpdate from './gameStatusUpdate';

const mapAnimalPredatorDefend =
  (predator: Predator): ThunkAction<void, RootState, void, AnyAction> =>
  (dispatch, getState) => {
    // lose health
    const playerPosition = selectPlayerPosition(getState());
    const predators = selectMapAnimalsPredator(getState());
    const protection = selectOutfitProtection(getState());
    const vitals = selectPlayerVitals(getState());
    const damage = Math.max(predator.damage - protection, 0);
    const newHealth = Math.max(vitals.health - damage, 0);
    const newVitals = {
      ...vitals,
      health: newHealth,
    };
    dispatch(playerVitalsUpdate({ vitals: newVitals }));
    // set predator to fleeing
    dispatch(
      mapAnimalPredatorStatus({
        predator,
        status: PredatorStatus.FLEEING,
      }),
    );
    // if no other predators on player, set status back to normal
    const isDefendingAnotherPredator = predators.some((animal) => {
      if (
        animal.status === PredatorStatus.AGGROED &&
        playerPosition.left === animal.position.left &&
        playerPosition.top === animal.position.top
      ) {
        return true;
      }
      return false;
    });
    if (!isDefendingAnotherPredator) {
      dispatch(gameStatusUpdate(GameStatus.GAME_STATUS_IDLE));
    }
  };

export default mapAnimalPredatorDefend;
