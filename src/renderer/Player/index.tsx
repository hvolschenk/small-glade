import React from 'react';

import MovementControls from './MovementControls';
import configuration from '../../configuration';
import { useEngine } from '../../engine';
import { PlayerMoveOptions } from '../../engine/event/PlayerMove';
import { Direction } from '../../models/Direction';
import { useSelector } from '../../store/hooks';
import { selectPlayerPosition } from '../../store/reducers/player';

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
