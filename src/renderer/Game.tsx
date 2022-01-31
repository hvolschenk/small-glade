import React from 'react';

import Controls from './Controls';
import Inventory from './Inventory';
import Map from './Map';
import Outfit from './Outfit';
import { useEngine } from '../engine';
import { GameStatus } from '../models/Game';
import { useSelector } from '../store/hooks';
import { selectGameStatus } from '../store/reducers/game';

const Game: React.FC = () => {
  const { trigger } = useEngine();
  const status = useSelector(selectGameStatus);

  React.useEffect(() => {
    // HENDRIK: Load all assets here
    trigger('game:load:done');
  }, [trigger]);

  if (status === GameStatus.GAME_STATUS_LOADING) {
    return (
      <div className="game__loading">
        <p>Loading</p>
      </div>
    );
  }

  if (status === GameStatus.GAME_STATUS_UNSTARTED) {
    return (
      <div className="game__unstarted">
        <p>What the hell happened? Where am I?</p>
        <button onClick={() => trigger('game:start')} type="button">
          Shit
        </button>
      </div>
    );
  }

  return (
    <React.Fragment>
      <Inventory />
      <Outfit />
      <Map />
      <Controls />
    </React.Fragment>
  );
};

export default Game;
