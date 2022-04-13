// eslint-disable-next-line import/no-extraneous-dependencies
import { render, RenderOptions } from '@testing-library/react';
import React from 'react';
import { Provider as ReactReduxProvider } from 'react-redux';

import { Provider as EngineProvider } from '~/src/engine';
import { store } from '~/src/store';

interface TestWrapperProps {
  children: React.ReactNode;
}

const TestWrapper: React.FC<TestWrapperProps> = ({ children }) => (
  <ReactReduxProvider store={store}>
    <EngineProvider>{children}</EngineProvider>
  </ReactReduxProvider>
);

const customRender = (ui: React.ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: TestWrapper, ...options });

// eslint-disable-next-line import/no-extraneous-dependencies
export * from '@testing-library/react';
export { customRender as render };
