import FireStart from './FireStart';
import GameEnd from './GameEnd';
import GameLoadDone from './GameLoadDone';
import GamePauseMenuToggle from './GamePauseMenuToggle';
import GameRadialMenuToggle from './GameRadialMenuToggle';
import GameStart from './GameStart';
import GameTurn from './GameTurn';
import InteractableHarvest from './InteractableHarvest';
import InventoryItemAdd from './InventoryItemAdd';
import InventorySelectedItemUpdate from './InventorySelectedItemUpdate';
import InventoryToggle from './InventoryToggle';
import ItemConsumableDrink from './ItemConsumableDrink';
import ItemConsumableEat from './ItemConsumableEat';
import MapAnimalsPredatorAggro from './MapAnimalsPredatorAggro';
import MapAnimalsPredatorMove from './MapAnimalsPredatorMove';
import MapAnimalsPreyFlee from './MapAnimalsPreyFlee';
import MapAnimalsPreyMove from './MapAnimalsPreyMove';
import MapFiresDurationUpdate from './MapFiresDurationUpdate';
import OutfitItemWear from './OutfitItemWear';
import OutfitSelectedTypeUpdate from './OutfitSelectedTypeUpdate';
import OutfitToggle from './OutfitToggle';
import PlayerMove from './PlayerMove';
import PlayerVitalsUpdate from './PlayerVitalsUpdate';
import { Event as EventInterface } from './types';
import WeatherUpdate from './WeatherUpdate';

interface BuildProps {
  event: string;
}

const events = [
  FireStart,
  GameEnd,
  GameLoadDone,
  GamePauseMenuToggle,
  GameRadialMenuToggle,
  GameStart,
  GameTurn,
  InteractableHarvest,
  InventoryItemAdd,
  InventorySelectedItemUpdate,
  InventoryToggle,
  ItemConsumableDrink,
  ItemConsumableEat,
  MapAnimalsPredatorAggro,
  MapAnimalsPredatorMove,
  MapAnimalsPreyFlee,
  MapAnimalsPreyMove,
  MapFiresDurationUpdate,
  OutfitItemWear,
  OutfitSelectedTypeUpdate,
  OutfitToggle,
  PlayerMove,
  PlayerVitalsUpdate,
  WeatherUpdate,
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
