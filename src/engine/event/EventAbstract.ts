import { Effect, Event, EventOptions, Validator } from './types';

abstract class EventAbstract<O extends EventOptions = EventOptions> implements Event<O> {
  public static event: string;

  abstract effects: Effect<O>[];
  abstract validators: Validator<O>[];

  abstract handler(options: O): void;
}

export default EventAbstract;
