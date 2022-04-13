import React from 'react';

import { Predator } from '~/src/models/Animal/types';

import { AnimalRendererProps } from '../types';

export interface PredatorRendererProps extends AnimalRendererProps {
  animal: Predator;
  children?: React.ReactNode;
}
