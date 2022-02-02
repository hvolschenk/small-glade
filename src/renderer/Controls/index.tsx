import React from 'react';

import { useEngine } from '~/src/engine';

import './controls.css';

const Controls: React.FC = () => {
  const { trigger } = useEngine();

  return (
    <div id="controls">
      <button className="control" onClick={() => trigger('inventory:toggle')} type="button">
        I
      </button>
      <button className="control" onClick={() => trigger('outfit:toggle')} type="button">
        O
      </button>
    </div>
  );
};

export default Controls;
