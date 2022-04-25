import React from 'react';

import { PredatorStatus } from '~/src/models/Animal/Predator/types';
import wolfArctic from '~/src/models/Animal/Predator/WolfArctic';
import { Position } from '~/src/models/Position';
import { fireEvent, render, RenderResult } from '~/src/testing';

import Predator from './index';

const position: Position = {
  left: 3,
  top: 11,
};

describe('Default', () => {
  let wrapper: RenderResult;

  beforeEach(() => {
    wrapper = render(<Predator animal={{ ...wolfArctic, position }} />);
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

    describe('Clicking the predator again', () => {
      beforeEach(() => {
        fireEvent.click(wrapper.getByTestId('animal__predator'));
      });

      test('Hides the aggro radius again', () => {
        expect(wrapper.queryAllByTestId('predator__aggro-radius__position')).toHaveLength(0);
      });
    });
  });
});

describe('When the animal is idle', () => {
  let wrapper: RenderResult;

  beforeEach(() => {
    wrapper = render(
      <Predator animal={{ ...wolfArctic, position, status: PredatorStatus.IDLE }} />,
    );
  });

  test('Does not render the aggro indicator', () => {
    expect(wrapper.queryByTestId('animal__predator__aggro-indicator')).not.toBeInTheDocument();
    expect(wrapper.queryByTestId('animal__predator__fleeing-indicator')).not.toBeInTheDocument();
  });
});

describe('When the animal is aggroed', () => {
  let wrapper: RenderResult;

  beforeEach(() => {
    wrapper = render(
      <Predator animal={{ ...wolfArctic, position, status: PredatorStatus.AGGROED }} />,
    );
  });

  test('Renders the aggro indicator', () => {
    expect(wrapper.queryByTestId('animal__predator__aggro-indicator')).toBeInTheDocument();
  });
});

describe('When the animal is fleeing', () => {
  let wrapper: RenderResult;

  beforeEach(() => {
    wrapper = render(
      <Predator animal={{ ...wolfArctic, position, status: PredatorStatus.FLEEING }} />,
    );
  });

  test('Renders the aggro indicator', () => {
    expect(wrapper.queryByTestId('animal__predator__fleeing-indicator')).toBeInTheDocument();
  });
});
