import React from 'react';

import { useEngine } from '~/src/engine';
import { fireEvent, render, RenderResult } from '~/src/testing';

import Controls from './index';

jest.mock('~/src/engine/hook');

let wrapper: RenderResult;

beforeEach(() => {
  wrapper = render(<Controls />);
});

describe('Inventory control', () => {
  test('Renders the inventory control', () => {
    expect(wrapper.queryByTestId('controls__control--inventory')).toBeInTheDocument();
  });

  describe('Clicking the button', () => {
    beforeEach(() => {
      (useEngine().trigger as jest.Mock).mockClear();
      fireEvent.click(wrapper.getByTestId('controls__control--inventory'));
    });

    test('Triggers the inventory toggle method', () => {
      expect(useEngine().trigger).toHaveBeenCalledWith('inventory:toggle');
    });
  });
});

describe('Outfit control', () => {
  test('Renders the outfit control', () => {
    expect(wrapper.queryByTestId('controls__control--outfit')).toBeInTheDocument();
  });

  describe('Clicking the button', () => {
    beforeEach(() => {
      (useEngine().trigger as jest.Mock).mockClear();
      fireEvent.click(wrapper.getByTestId('controls__control--outfit'));
    });

    test('Triggers the outfit toggle method', () => {
      expect(useEngine().trigger).toHaveBeenCalledWith('outfit:toggle');
    });
  });
});
