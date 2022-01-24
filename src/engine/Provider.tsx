import React from 'react';
import { useDispatch } from 'react-redux';

import EngineContext from './context';
import EventFactory from './event/EventFactory';
import { Engine } from './types';
import { store } from '../store';

const EngineProvider: React.FC = ({ children }) => {
  const dispatch = useDispatch();

  const trigger: Engine['trigger'] = React.useCallback((triggerEvent, triggerOptions) => {
    const event = EventFactory.build({ event: triggerEvent });
    const options = {
      ...triggerOptions,
      dispatch,
      getState: store.getState,
      trigger,
    };
    if (event.validators.every((validator) => validator(options))) {
      event.handler(options);
      event.effects.forEach((effect) => { effect(options); });
    }
  }, []);

  const value = React.useMemo(() => ({ trigger }), [trigger]);

  return (
    <EngineContext.Provider value={value}>{children}</EngineContext.Provider>
  );
};

export default EngineProvider;
