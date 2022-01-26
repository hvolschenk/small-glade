import React from 'react';
import { useSelector } from 'react-redux';

import Player from './Player';
import { useEngine } from '../engine';
import { GameStatus } from '../models/Game';
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
        <button onClick={() => trigger('game:start')} type="button">Shit</button>
      </div>
    );
  }

  return (
    <React.Fragment>
      <Player />
    </React.Fragment>
  );
};

export default Game;
