import React from 'react';
import { Provider as ReactReduxProvider } from 'react-redux';

import { Provider as EngineProvider } from './engine';
import Player from './renderer/Player';
import { store } from './store';

const Application: React.FC = () => (
  <ReactReduxProvider store={store}>
    <EngineProvider>
      <Player />
    </EngineProvider>
  </ReactReduxProvider>
);

export default Application;
