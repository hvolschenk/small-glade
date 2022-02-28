import React from 'react';

import configuration from '~/src/configuration';
import { useEngine } from '~/src/engine';
import { PlayerMoveOptions } from '~/src/engine/event/PlayerMove';
import { Direction } from '~/src/models/Direction';
import { useSelector } from '~/src/store/hooks';
import { selectPlayerPosition } from '~/src/store/reducers/player/selectors';

import MovementControls from './MovementControls';

import './player.css';

const Player: React.FC = () => {
  const { trigger } = useEngine();
  const position = useSelector(selectPlayerPosition);

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
