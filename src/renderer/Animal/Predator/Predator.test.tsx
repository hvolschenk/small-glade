import React from 'react';

import wolfArctic from '~/src/models/Animal/WolfArctic';
import { Position } from '~/src/models/Position';
import { fireEvent, render, RenderResult } from '~/src/testing';

import Predator from './index';

const position: Position = {
  left: 3,
  top: 11,
};

let wrapper: RenderResult;

beforeEach(() => {
  wrapper = render(<Predator animal={wolfArctic} position={position} />);
});

test('Does not render the aggro radius by default', () => {
  expect(wrapper.queryAllByTestId('predator__aggro-radius__position')).toHaveLength(0);
});

describe('After clicking the predator', () => {
  beforeEach(() => {
    fireEvent.click(wrapper.getByTestId('animal__predator'));
  });

  test('Renders the aggro radius', () => {
    expect(wrapper.queryAllByTestId('predator__aggro-radius__position')).not.toHaveLength(0);
  });
});
