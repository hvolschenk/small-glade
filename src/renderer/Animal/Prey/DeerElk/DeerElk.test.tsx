import React from 'react';

import deerElk from '~/src/models/Animal/Prey/DeerElk';
import { Position } from '~/src/models/Position';
import { render, RenderResult } from '~/src/testing';

import DeerElk from './index';

const position: Position = { left: 11, top: 3 };

let wrapper: RenderResult;

beforeEach(() => {
  wrapper = render(<DeerElk animal={{ ...deerElk, position }} />);
});

test('Vanity test', () => {
  expect(wrapper.queryByTestId('animal__deer-elk')).toBeInTheDocument();
});
