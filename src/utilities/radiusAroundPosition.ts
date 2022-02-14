// https://www.redblobgames.com/grids/circle-drawing/
import { Position } from '~/src/models/Position';

interface PositionsAroundPositionOptions {
  position: Position;
  radius: number;
}

const radiusAroundPosition = (options: PositionsAroundPositionOptions): Position[] => {
  const positions: Position[] = [];
  const { position, radius } = options;
  const top = position.top - radius;
  const bottom = position.top + radius;
  for (let y = top; y <= bottom; y += 1) {
    const dy = y - position.top;
    const dx = Math.sqrt(radius * radius - dy * dy);
    const left = Math.ceil(position.left - dx);
    const right = Math.floor(position.left + dx);
    for (let x = left; x <= right; x += 1) {
      const newPosition: Position = { left: x, top: y };
      positions.push(newPosition);
    }
  }
  return positions;
};

export default radiusAroundPosition;
