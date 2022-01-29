import React from 'react';

import configuration from '../../configuration';
import { useEngine } from '../../engine';
import { PlayerMoveOptions } from '../../engine/event/PlayerMove';
import { useSelector } from '../../store/hooks';
import { selectPlayerPosition } from '../../store/reducers/player';

import './player.css';

const Player: React.FC = () => {
  const { trigger } = useEngine();
  const position = useSelector(selectPlayerPosition);

  return (
    <div
      id="player"
      style={{
        left: position.left * configuration.tileSize(),
        top: position.top * configuration.tileSize(),
      }}
    >
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
