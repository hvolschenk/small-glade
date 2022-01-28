import { Position } from '../models/Position';

const positionsEqual = (positionA: Position, positionB: Position): boolean =>
  positionA.top === positionB.top && positionA.left === positionB.left;

export default positionsEqual;
