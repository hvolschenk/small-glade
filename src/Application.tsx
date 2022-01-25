import React from 'react';
import { Provider as ReactReduxProvider } from 'react-redux';

import { Provider as EngineProvider } from './engine';
import Game from './renderer/Game';
import Player from './renderer/Player';
import { store } from './store';

const Application: React.FC = () => (
  <ReactReduxProvider store={store}>
    <EngineProvider>
      <Game />
      <Player />
    </EngineProvider>
  </ReactReduxProvider>
);

export default Application;
