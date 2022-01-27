import { Direction } from '../models/Direction';
import { Position } from '../models/Position';

interface PositionFromDirectionOptions {
  direction: Direction;
  position: Position;
}

const positionFromDirection = (options: PositionFromDirectionOptions): Position => {
  const position: Position = { left: options.position.left, top: options.position.top };
  switch (options.direction) {
    case 'down':
      position.top += 1;
      break;
    case 'left':
      position.left -= 1;
      break;
    case 'right':
      position.left += 1;
      break;
    case 'up':
      position.top -= 1;
      break;
    default:
      break;
  }
  return position;
};

export default positionFromDirection;
