import React from 'react';

import { useEngine } from '~/src/engine';
import l10n from '~/src/l10n';

import './controls.css';

const Controls: React.FC = () => {
  const { trigger } = useEngine();

  return (
    <div data-testid="controls" id="controls">
      <button
        className="control"
        data-testid="controls__control--pause-menu"
        onClick={() => trigger('game:pause-menu:toggle')}
        type="button"
      >
        {l10n.controlPauseMenuShortcut}
      </button>
      <button
        className="control"
        data-testid="controls__control--radial-menu"
        onClick={() => trigger('game:radial-menu:toggle')}
        type="button"
      >
        {l10n.controlRadialMenuShortcut}
      </button>
      <button
        className="control"
        data-testid="controls__control--inventory"
        onClick={() => trigger('inventory:toggle')}
        type="button"
      >
        {l10n.controlInventoryShortcut}
      </button>
      <button
        className="control"
        data-testid="controls__control--outfit"
        onClick={() => trigger('outfit:toggle')}
        type="button"
      >
        {l10n.controlOutfitShortcut}
      </button>
    </div>
  );
};

export default Controls;
