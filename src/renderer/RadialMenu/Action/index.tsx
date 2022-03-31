import React from 'react';

import { RadialMenuAction } from '../types';
import Fire from './Fire';
import { ActionRendererProps } from './types';

const actionFactory = (action: RadialMenuAction): React.ComponentType<ActionRendererProps> => {
  const actions: Record<RadialMenuAction, React.ComponentType<ActionRendererProps>> = {
    [RadialMenuAction.FIRE]: Fire,
    [RadialMenuAction.NONE]: () => null,
  };
  return actions[action];
};

const Action: React.FC<ActionRendererProps> = ({ action, onComplete }) => {
  const ActionRenderer = actionFactory(action);
  return <ActionRenderer action={action} onComplete={onComplete} />;
};

export default Action;
