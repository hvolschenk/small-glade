import React from 'react';

import './interaction-overlay.css';

interface InteractinoOverlayAction {
  action: () => void;
  disabled?: boolean;
  title: string;
}

interface InteractionOverlayProps {
  actions: InteractinoOverlayAction[];
}

const InteractionOverlay: React.FC<InteractionOverlayProps> = ({ actions }) => (
  <div id="interaction-overlay">
    <div className="interaction-overlay__content">
      {actions.map((action) => (
        <button disabled={action.disabled} key={action.title} onClick={action.action} type="button">
          {action.title}
        </button>
      ))}
    </div>
  </div>
);

export default InteractionOverlay;
