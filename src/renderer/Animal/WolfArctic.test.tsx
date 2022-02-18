import React from 'react';

import { Predator } from '~/src/models/Animal/types';
import wolfArctic from '~/src/models/Animal/WolfArctic';
import { Position } from '~/src/models/Position';
import { fireEvent, render, RenderResult } from '~/src/testing';

import WolfArctic from './WolfArctic';

// If the map changes this will be wrong
const position: Position = { left: 3, top: 11 };

describe('When the predator is not aggroed', () => {
  let wrapper: RenderResult;

  beforeEach(() => {
    const predator: Predator = { ...wolfArctic, isAggroed: false };
    wrapper = render(<WolfArctic animal={predator} position={position} />);
  });

  test('Does not show the aggro indicator', () => {
    expect(wrapper.queryByTestId('animal__wolf-arctic__aggro-indicator')).not.toBeInTheDocument();
  });
});

describe('When the predator is aggroed', () => {
  let wrapper: RenderResult;

  beforeEach(() => {
    const predator: Predator = { ...wolfArctic, isAggroed: true };
    wrapper = render(<WolfArctic animal={predator} position={position} />);
  });

  test('Show the aggro indicator', () => {
    expect(wrapper.queryByTestId('animal__wolf-arctic__aggro-indicator')).toBeInTheDocument();
  });
});

describe('Default', () => {
  let wrapper: RenderResult;

  beforeEach(() => {
    const predator: Predator = { ...wolfArctic, isAggroed: true };
    wrapper = render(<WolfArctic animal={predator} position={position} />);
  });

  test('Does not show the aggro radius', () => {
    expect(wrapper.queryAllByTestId('predator-aggro-radius__position')).toHaveLength(0);
  });

  describe('When clicking on the predator', () => {
    beforeEach(() => {
      fireEvent.click(wrapper.getByTestId('animal__wolf-arctic'));
    });

    test('Shows the aggro radius', () => {
      expect(wrapper.queryAllByTestId('predator-aggro-radius__position')).not.toHaveLength(0);
    });

    describe('When clicking on the predator again', () => {
      beforeEach(() => {
        fireEvent.click(wrapper.getByTestId('animal__wolf-arctic'));
      });

      test('Does not show the aggro radius', () => {
        expect(wrapper.queryAllByTestId('predator-aggro-radius__position')).toHaveLength(0);
      });
    });
  });
});
