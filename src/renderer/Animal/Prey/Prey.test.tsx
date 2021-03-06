import React from 'react';

import deerElk from '~/src/models/Animal/Prey/DeerElk';
import { PreyStatus } from '~/src/models/Animal/Prey/types';
import { Position } from '~/src/models/Position';
import { fireEvent, render, RenderResult } from '~/src/testing';

import Prey from './index';

const position: Position = {
  left: 11,
  top: 3,
};

describe('Default', () => {
  let wrapper: RenderResult;

  beforeEach(() => {
    wrapper = render(<Prey animal={{ ...deerElk, position }} />);
  });

  test('Does not render the flee radius by default', () => {
    expect(wrapper.queryAllByTestId('prey__flee-radius__position')).toHaveLength(0);
  });

  describe('When clicking the prey animal', () => {
    beforeEach(() => {
      fireEvent.click(wrapper.getByTestId('animal__prey'));
    });

    test('Renders the flee radius', () => {
      expect(wrapper.queryAllByTestId('prey__flee-radius__position')).not.toHaveLength(0);
    });

    describe('When clicking the prey animal again', () => {
      beforeEach(() => {
        fireEvent.click(wrapper.getByTestId('animal__prey'));
      });

      test('Hides the flee radius', () => {
        expect(wrapper.queryAllByTestId('prey__flee-radius__position')).toHaveLength(0);
      });
    });
  });
});

describe('When the prey animal is not fleeing', () => {
  let wrapper: RenderResult;

  beforeEach(() => {
    wrapper = render(<Prey animal={{ ...deerElk, position, status: PreyStatus.IDLE }} />);
  });

  test('Does not display the fleeing indicator', () => {
    expect(wrapper.queryByTestId('animal__prey__fleeing-indicator')).not.toBeInTheDocument();
  });
});

describe('When the prey animal is fleeing', () => {
  let wrapper: RenderResult;

  beforeEach(() => {
    wrapper = render(<Prey animal={{ ...deerElk, position, status: PreyStatus.FLEEING }} />);
  });

  test('Displays the fleeing indicator', () => {
    expect(wrapper.queryByTestId('animal__prey__fleeing-indicator')).toBeInTheDocument();
  });
});
