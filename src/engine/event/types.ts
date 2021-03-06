import { Dispatch, GetState } from '~/src/store';

import { Engine } from '../types';

export interface EventOptions {
  dispatch: Dispatch;
  getState: GetState;
  trigger: Engine['trigger'];
}

export type Effect<O extends EventOptions = EventOptions> = (options: O) => void;
export type Validator<O extends EventOptions = EventOptions> = (options: O) => boolean;

export interface Event<O extends EventOptions = EventOptions> {
  effects: Effect<O>[];
  validators: Validator<O>[];

  handler(options: O): void;
}
