import React from 'react';

import fireBasic from '~/src/models/Fire/Basic';
import fireFactory from '~/src/models/Fire/factory';
import { store } from '~/src/store';
import { mapFireStart } from '~/src/store/reducers/map';
import { selectMapFogOfWarPosition } from '~/src/store/reducers/map/selectors';
import { fireEvent, render, RenderResult } from '~/src/testing';

import Fire from './index';

jest.mock('~/src/store/reducers/map/selectors');

beforeEach(() => {
  (selectMapFogOfWarPosition as unknown as jest.Mock<boolean>).mockReturnValue(false);
});

describe('With a duration of `0`', () => {
  let wrapper: RenderResult;

  beforeEach(() => {
    const fire = fireFactory({ ...fireBasic, duration: 0 }, 2, 2);
    store.dispatch(mapFireStart({ fire }));
    wrapper = render(<Fire fire={fire} />);
  });

  test('Does not render the fire', () => {
    expect(wrapper.queryByTestId('fire')).not.toBeInTheDocument();
  });
});

describe('With a duration greater than `0`', () => {
  let wrapper: RenderResult;

  beforeEach(() => {
    const fire = fireFactory(fireBasic, 2, 2);
    store.dispatch(mapFireStart({ fire }));
    wrapper = render(<Fire fire={fire} />);
  });

  test('Renders the fire', () => {
    expect(wrapper.queryByTestId('fire')).toBeInTheDocument();
  });

  test('Does not render the heat radius overlay', () => {
    expect(wrapper.queryAllByTestId('fire__heat-radius__position')).toHaveLength(0);
  });

  describe('After clicking the fire action', () => {
    beforeEach(() => {
      fireEvent.click(wrapper.getByTestId('fire__action'));
    });

    test('Renders the heat radius overlay', () => {
      expect(wrapper.queryAllByTestId('fire__heat-radius__position')).not.toHaveLength(0);
    });

    describe('After clicking the fire action again', () => {
      beforeEach(() => {
        fireEvent.click(wrapper.getByTestId('fire__action'));
      });

      test('Hides the heat radius overlay again', () => {
        expect(wrapper.queryAllByTestId('fire__heat-radius__position')).toHaveLength(0);
      });
    });
  });
});
