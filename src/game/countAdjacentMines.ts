import adjacentCells from './adjacentCells';
import { coordinateToIndex, indexToCoordinate } from './coordinateMappings';
import type Cell from '~/types/Cell';

const getAdjacent = (
  coordinate: number[],
  coordinateValue: (row: number, col: number) => number,
): number => {
  return adjacentCells(coordinate).reduce(
    (acc, cell) => acc + coordinateValue(cell[0], cell[1]),
    0,
  );
};

const countAdjacentMines = (minefield: Cell[], rows: number, cols: number): Cell[] => {
  const coordinateValue = (row: number, col: number): number => {
    const index = coordinateToIndex([row, col], rows, cols);
    if (index === -1) return 0;
    return minefield[index].isMine ? 1 : 0;
  };

  return minefield.map((cell, index) => ({
    ...cell,
    adjacentMines: getAdjacent(indexToCoordinate(index, rows, cols), coordinateValue),
  }));
};

export default countAdjacentMines;
