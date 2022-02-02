import React from 'react';

import { Direction } from '~/src/models/Direction';
import { useSelector } from '~/src/store/hooks';
import { selectMapTileAtPosition } from '~/src/store/reducers/map';
import { selectPlayerPosition } from '~/src/store/reducers/player';

import './movement-controls.css';

interface MovementControlsProps {
  move: (direction: Direction) => void;
}

const MovementControls: React.FC<MovementControlsProps> = ({ move }) => {
  const position = useSelector(selectPlayerPosition);
  const down = useSelector((state) =>
    selectMapTileAtPosition(state, { left: position.left, top: position.top + 1 }),
  );
  const left = useSelector((state) =>
    selectMapTileAtPosition(state, { left: position.left - 1, top: position.top }),
  );
  const right = useSelector((state) =>
    selectMapTileAtPosition(state, { left: position.left + 1, top: position.top }),
  );
  const up = useSelector((state) =>
    selectMapTileAtPosition(state, { left: position.left, top: position.top - 1 }),
  );

  return (
    <React.Fragment>
      {down && down.isAccessible && (
        <div className="down movement-control">
          <button onClick={() => move('down')} type="button">
            &nbsp;
          </button>
        </div>
      )}
      {left && left.isAccessible && (
        <div className="left movement-control">
          <button onClick={() => move('left')} type="button">
            &nbsp;
          </button>
        </div>
      )}
      {right && right.isAccessible && (
        <div className="movement-control right">
          <button onClick={() => move('right')} type="button">
            &nbsp;
          </button>
        </div>
      )}
      {up && up.isAccessible && (
        <div className="movement-control up">
          <button onClick={() => move('up')} type="button">
            &nbsp;
          </button>
        </div>
      )}
    </React.Fragment>
  );
};

export default MovementControls;
