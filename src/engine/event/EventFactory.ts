import FireStart from './FireStart';
import GameEnd from './GameEnd';
import GameIdle from './GameIdle';
import GameLoadDone from './GameLoadDone';
import GamePauseMenuToggle from './GamePauseMenuToggle';
import GamePlayerDecision from './GamePlayerDecision';
import GameRadialMenuToggle from './GameRadialMenuToggle';
import GameStart from './GameStart';
import GameTurn from './GameTurn';
import GameTurnsSurvivedIncrease from './GameTurnsSurvivedIncrease';
import InteractableCarcassDeerElkHarvest from './InteractableCarcassDeerElkHarvest';
import InteractableHarvest from './InteractableHarvest';
import InventoryItemAdd from './InventoryItemAdd';
import InventorySelectedItemUpdate from './InventorySelectedItemUpdate';
import InventoryToggle from './InventoryToggle';
import ItemConsumableDrink from './ItemConsumableDrink';
import ItemConsumableEat from './ItemConsumableEat';
import MapAnimalPredatorDefend from './MapAnimalPredatorDefend';
import MapAnimalsPredatorAggro from './MapAnimalsPredatorAggro';
import MapAnimalsPredatorFlee from './MapAnimalsPredatorFlee';
import MapAnimalsPredatorMove from './MapAnimalsPredatorMove';
import MapAnimalsPreyFlee from './MapAnimalsPreyFlee';
import MapAnimalsPreyMove from './MapAnimalsPreyMove';
import MapContainerItemPickUp from './MapContainerItemPickUp';
import MapFiresDurationUpdate from './MapFiresDurationUpdate';
import MapFogOfWarUpdateVisible from './MapFogOfWarUpdateVisible';
import OutfitItemWear from './OutfitItemWear';
import OutfitSelectedTypeUpdate from './OutfitSelectedTypeUpdate';
import OutfitToggle from './OutfitToggle';
import PlayerMove from './PlayerMove';
import PlayerPositionUpdate from './PlayerPositionUpdate';
import PlayerVitalsUpdate from './PlayerVitalsUpdate';
import { Event as EventInterface } from './types';
import WeatherUpdate from './WeatherUpdate';

interface BuildProps {
  event: string;
}

const events = [
  FireStart,
  GameEnd,
  GameIdle,
  GameLoadDone,
  GamePauseMenuToggle,
  GamePlayerDecision,
  GameRadialMenuToggle,
  GameStart,
  GameTurn,
  GameTurnsSurvivedIncrease,
  InteractableCarcassDeerElkHarvest,
  InteractableHarvest,
  InventoryItemAdd,
  InventorySelectedItemUpdate,
  InventoryToggle,
  ItemConsumableDrink,
  ItemConsumableEat,
  MapAnimalPredatorDefend,
  MapAnimalsPredatorAggro,
  MapAnimalsPredatorFlee,
  MapAnimalsPredatorMove,
  MapAnimalsPreyFlee,
  MapAnimalsPreyMove,
  MapContainerItemPickUp,
  MapFiresDurationUpdate,
  MapFogOfWarUpdateVisible,
  OutfitItemWear,
  OutfitSelectedTypeUpdate,
  OutfitToggle,
  PlayerMove,
  PlayerPositionUpdate,
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
