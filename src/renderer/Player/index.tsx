import React from 'react';

import configuration from '../../configuration';
import { useEngine } from '../../engine';
import { PlayerMoveOptions } from '../../engine/event/PlayerMove';
import { useSelector } from '../../store/hooks';
import { selectPlayerName, selectPlayerPosition } from '../../store/reducers/player';

import './player.css';

const Player: React.FC = () => {
  const { trigger } = useEngine();
  const name = useSelector(selectPlayerName);
  const position = useSelector(selectPlayerPosition);

  return (
    <div
      id="player"
      style={{
        left: position.left * configuration.tileSize(),
        top: position.top * configuration.tileSize(),
      }}
    >
      <p>{name}</p>
      <button onClick={() => trigger('player:name')} type="button">
        Change name
      </button>
      <button
        onClick={() => trigger<PlayerMoveOptions>('player:move', { direction: 'right' })}
        type="button"
      >
        Right
      </button>
    </div>
  );
};

export default Player;
