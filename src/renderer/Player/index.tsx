import React from 'react';

import configuration from '~/src/configuration';
import { useEngine } from '~/src/engine';
import { PlayerMoveOptions } from '~/src/engine/event/PlayerMove';
import { PlayerPositionUpdateOptions } from '~/src/engine/event/PlayerPositionUpdate';
import { Direction } from '~/src/models/Direction';
import { useSelector } from '~/src/store/hooks';
import { selectMapStartingPositions } from '~/src/store/reducers/map/selectors';
import { selectPlayerPosition } from '~/src/store/reducers/player/selectors';

import MovementControls from './MovementControls';

import './player.css';

const Player: React.FC = () => {
  const { trigger } = useEngine();
  const position = useSelector(selectPlayerPosition);
  const startingPositions = useSelector(selectMapStartingPositions);

  const move = React.useCallback(
    (direction: Direction) => {
      trigger<PlayerMoveOptions>('player:move', { direction });
    },
    [trigger],
  );

  const handleKeyDown = React.useCallback(
    (event: KeyboardEvent) => {
      const movementControls: Record<string, Direction> = {
        ArrowDown: 'down',
        ArrowLeft: 'left',
        ArrowRight: 'right',
        ArrowUp: 'up',
        // eslint-disable-next-line sort-keys
        a: 'left',
        d: 'right',
        s: 'down',
        w: 'up',
      };
      if (Object.keys(movementControls).includes(event.key)) {
        move(movementControls[event.key]);
      }
    },
    [move],
  );

  React.useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  React.useEffect(() => {
    const startingPosition =
      startingPositions[Math.floor(Math.random() * startingPositions.length)];
    trigger<PlayerPositionUpdateOptions>('player:position:update', { position: startingPosition });
  }, [startingPositions, trigger]);

  React.useEffect(() => {
    const $player = document.getElementById('player');
    if ($player) {
      $player.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
    }
  }, [position]);

  return (
    <div
      id="player"
      style={{
        left: position.left * configuration.tileSize(),
        top: position.top * configuration.tileSize(),
      }}
    >
      <MovementControls move={move} />
    </div>
  );
};

export default Player;
