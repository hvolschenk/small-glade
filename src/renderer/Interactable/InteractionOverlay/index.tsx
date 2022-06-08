import React from 'react';

import { Position } from '~/src/models/Position';
import { useSelector } from '~/src/store/hooks';
import { selectPlayerPosition } from '~/src/store/reducers/player/selectors';
import positionsEqual from '~/src/utilities/positionsEqual';

import './interaction-overlay.css';

interface InteractinoOverlayAction {
  action: () => void;
  disabled?: boolean;
  title: string;
}

interface InteractionOverlayProps {
  actions: InteractinoOverlayAction[];
  position: Position;
}

const InteractionOverlay: React.FC<InteractionOverlayProps> = ({ actions, position }) => {
  const playerPosition = useSelector(selectPlayerPosition);

  if (positionsEqual(position, playerPosition)) {
    return (
      <div id="interaction-overlay">
        <div className="interaction-overlay__content">
          {actions.map((action) => (
            <button
              disabled={action.disabled}
              key={action.title}
              onClick={action.action}
              type="button"
            >
              {action.title}
            </button>
          ))}
        </div>
      </div>
    );
  }

  return null;
};

export default InteractionOverlay;
