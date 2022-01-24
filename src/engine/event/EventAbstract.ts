import { Effect, Event, EventOptions, Validator } from './types';

abstract class EventAbstract implements Event {
  public static event: string;

  abstract effects: Effect<EventOptions>[];
  abstract validators: Validator<EventOptions>[];

  abstract handler(options?: EventOptions): void;
}

export default EventAbstract;
