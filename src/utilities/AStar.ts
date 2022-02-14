import { Position } from '~/src/models/Position';

type Heuristic = (pos0: Position, pos1: Position) => number;

interface Node {
  f: number;
  g: number;
  h: number;
  left: number;
  parent: Node | null;
  top: number;
  walkable: boolean;
}

class AStar {
  public static heuristicManhattan: Heuristic = (pos0, pos1) => {
    const distance1 = Math.abs(pos1.top - pos0.top);
    const distance2 = Math.abs(pos1.left - pos0.left);
    return distance1 + distance2;
  };

  private static initializeGrid(grid: boolean[][]): Node[][] {
    return grid.map((row, rowIndex) =>
      row.map((walkable, cellIndex) => AStar.nodeFromWalkable(cellIndex, rowIndex, walkable)),
    );
  }

  private static neighbours(nodes: Node[][], node: Node): Node[] {
    const neighbours: Node[] = [];
    const { left, top } = node;
    if (nodes[top - 1] && nodes[top - 1][left] && nodes[top - 1][left].walkable) {
      neighbours.push(nodes[top - 1][left]);
    }
    if (nodes[top + 1] && nodes[top + 1][left] && nodes[top + 1][left].walkable) {
      neighbours.push(nodes[top + 1][left]);
    }
    if (nodes[top][left - 1] && nodes[top][left - 1] && nodes[top][left - 1].walkable) {
      neighbours.push(nodes[top][left - 1]);
    }
    if (nodes[top][left + 1] && nodes[top][left + 1] && nodes[top][left + 1].walkable) {
      neighbours.push(nodes[top][left + 1]);
    }
    return neighbours;
  }

  private static nodeFromPosition(position: Position): Node {
    const node: Node = {
      f: 0,
      g: 0,
      h: 0,
      left: position.left,
      parent: null,
      top: position.top,
      walkable: true,
    };
    return node;
  }

  private static nodeFromWalkable(left: number, top: number, walkable: boolean): Node {
    const node: Node = {
      f: 0,
      g: 0,
      h: 0,
      left,
      parent: null,
      top,
      walkable,
    };
    return node;
  }

  private static positionFromNode(node: Node): Position {
    const position: Position = { left: node.left, top: node.top };
    return position;
  }

  public static search(
    grid: boolean[][],
    start: Position,
    goal: Position,
    heuristic: Heuristic = AStar.heuristicManhattan,
  ): Position[] {
    const nodes: Node[][] = AStar.initializeGrid(grid);

    const listClosed: Node[] = [];
    let listOpen: Node[] = [];

    const startNode = AStar.nodeFromPosition(start);
    listOpen.push(startNode);

    while (listOpen.length > 0) {
      let lowestIndex = 0;
      lowestIndex = listOpen.reduce<number>(
        // eslint-disable-next-line @typescript-eslint/no-loop-func
        (accumulator, listOpenItem, listOpenIndex) =>
          listOpenItem.f < listOpen[lowestIndex].f ? listOpenIndex : accumulator,
        lowestIndex,
      );

      const currentNode = listOpen[lowestIndex];

      if (currentNode.left === goal.left && currentNode.top === goal.top) {
        let current: Node = currentNode;
        const path: Node[] = [];
        while (current.parent) {
          path.push(current);
          current = current.parent;
        }
        return path.reverse().map(AStar.positionFromNode);
      }

      listOpen = listOpen.filter((filterNode) => filterNode !== currentNode);
      listClosed.push(currentNode);

      const neighbors = AStar.neighbours(nodes, currentNode);
      for (let i = 0; i < neighbors.length; i += 1) {
        const neighbor = neighbors[i];
        if (!listClosed.includes(neighbor)) {
          const gScore = currentNode.g + 1;
          let gScoreIsBest = false;

          if (!listOpen.includes(neighbor)) {
            gScoreIsBest = true;
            neighbor.h = heuristic(AStar.positionFromNode(neighbor), goal);
            listOpen.push(neighbor);
          } else if (gScore < neighbor.g) {
            gScoreIsBest = true;
          }

          if (gScoreIsBest) {
            neighbor.parent = currentNode;
            neighbor.g = gScore;
            neighbor.f = neighbor.g + neighbor.h;
          }
        }
      }
    }

    return [];
  }
}

export default AStar;
