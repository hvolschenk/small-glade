import GameLoadDone from './GameLoadDone';
import GameStart from './GameStart';
import PlayerName from './PlayerName';
import { Event } from './types';

interface BuildProps {
  event: string;
}

const events = [GameLoadDone, GameStart, PlayerName];

class EventFactory {
  public static build(props: BuildProps): Event<any> {
    const Event = events.find((EventClass) => EventClass.event === props.event);
    if (!Event) {
      throw new Error(`Event "${props.event}" not found`);
    }
    return new Event();
  }
}

export default EventFactory;
