import React from 'react';

import wolfArctic from '~/src/models/Animal/WolfArctic';
import { Position } from '~/src/models/Position';
import { render, RenderResult } from '~/src/testing';

import WolfArctic from './index';

const position: Position = { left: 3, top: 11 };

let wrapper: RenderResult;

beforeEach(() => {
  wrapper = render(<WolfArctic animal={wolfArctic} position={position} />);
});

test('Vanity test', () => {
  expect(wrapper.queryByTestId('animal__wolf-arctic')).toBeInTheDocument();
});
