import GameLoadDone from './GameLoadDone';
import GameStart from './GameStart';
import InteractableHarvest from './InteractableHarvest';
import InventoryItemAdd from './InventoryItemAdd';
import InventoryToggle from './InventoryToggle';
import OutfitToggle from './OutfitToggle';
import PlayerMove from './PlayerMove';
import { Event as EventInterface } from './types';

interface BuildProps {
  event: string;
}

const events = [
  GameLoadDone,
  GameStart,
  InteractableHarvest,
  InventoryItemAdd,
  InventoryToggle,
  OutfitToggle,
  PlayerMove,
];

class EventFactory {
  public static build(props: BuildProps): EventInterface<any> {
    const Event = events.find((EventClass) => EventClass.event === props.event);
    if (!Event) {
      throw new Error(`Event "${props.event}" not found`);
    }
    return new Event();
  }
}

export default EventFactory;
