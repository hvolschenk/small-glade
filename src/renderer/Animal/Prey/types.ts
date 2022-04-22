import React from 'react';

import { Prey } from '~/src/models/Animal/Prey/types';

import { AnimalRendererProps } from '../types';

export interface PreyRendererProps extends AnimalRendererProps {
  animal: Prey;
  children?: React.ReactNode;
}
