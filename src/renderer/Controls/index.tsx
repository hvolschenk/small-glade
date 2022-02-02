import React from 'react';

import { useEngine } from '~/src/engine';
import l10n from '~/src/l10n';

import './controls.css';

const Controls: React.FC = () => {
  const { trigger } = useEngine();

  return (
    <div id="controls">
      <button className="control" onClick={() => trigger('inventory:toggle')} type="button">
        {l10n.controlInventoryShortcut}
      </button>
      <button className="control" onClick={() => trigger('outfit:toggle')} type="button">
        {l10n.controlOutfitShortcut}
      </button>
    </div>
  );
};

export default Controls;
