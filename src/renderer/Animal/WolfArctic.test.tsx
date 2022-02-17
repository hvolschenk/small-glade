import React from 'react';

import { Predator } from '~/src/models/Animal/types';
import wolfArctic from '~/src/models/Animal/WolfArctic';
import { render, RenderResult } from '~/src/testing';

import WolfArctic from './WolfArctic';

describe('When the predator is not aggroed', () => {
  let wrapper: RenderResult;

  beforeEach(() => {
    const predator: Predator = { ...wolfArctic, isAggroed: false };
    wrapper = render(<WolfArctic animal={predator} />);
  });

  test('Does not show the aggro indicator', () => {
    expect(wrapper.queryByTestId('animal__wolf-arctic__aggro-indicator')).not.toBeInTheDocument();
  });
});

describe('When the predator is aggroed', () => {
  let wrapper: RenderResult;

  beforeEach(() => {
    const predator: Predator = { ...wolfArctic, isAggroed: true };
    wrapper = render(<WolfArctic animal={predator} />);
  });

  test('Show the aggro indicator', () => {
    expect(wrapper.queryByTestId('animal__wolf-arctic__aggro-indicator')).toBeInTheDocument();
  });
});
