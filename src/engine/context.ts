import React from 'react';

import { Engine } from './types';

const EngineContext = React.createContext<Engine>({ trigger: () => undefined });

export default EngineContext;
