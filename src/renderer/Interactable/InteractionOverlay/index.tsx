import React from 'react';

import './interaction-overlay.css';

interface InteractinoOverlayAction {
  action: () => void;
  title: string;
}

interface InteractionOverlayProps {
  actions: InteractinoOverlayAction[];
}

const InteractionOverlay: React.FC<InteractionOverlayProps> = ({ actions }) => (
  <div id="interaction-overlay">
    <div className="interaction-overlay__content">
      {actions.map((action) => (
        <button key={action.title} onClick={action.action} type="button">
          {action.title}
        </button>
      ))}
    </div>
  </div>
);

export default InteractionOverlay;
