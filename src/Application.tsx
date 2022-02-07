import React from 'react';
import { Provider as ReactReduxProvider } from 'react-redux';

import { Provider as EngineProvider } from './engine';
import Renderer from './renderer';
import { store } from './store';

import './index.css';

const Application: React.FC = () => (
  <ReactReduxProvider store={store}>
    <EngineProvider>
      <Renderer />
    </EngineProvider>
  </ReactReduxProvider>
);

export default Application;
