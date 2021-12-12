import adjacentCells from './adjacentCells';
import { coordinateToIndex, indexToCoordinate } from './coordinateMappings';
import type Cell from '~/types/Cell';

const radiate = (
  collector: number[],
  index: number,
  minefield: Cell[],
  rows: number,
  cols: number,
) => {
  if (index === -1) return;
  if (
    collector.includes(index) ||
    minefield[index].isMine ||
    minefield[index].adjacentMines > 0
  ) {
    if (minefield[index].adjacentMines > 0) {
      collector.push(index);
    }
    return;
  }

  collector.push(index);
  const coordinate = indexToCoordinate(index, rows, cols);

  adjacentCells(coordinate).forEach((cell) => {
    const cellIndex = coordinateToIndex(cell, rows, cols);
    radiate(collector, cellIndex, minefield, rows, cols);
  });
};

const handleCellClick = (
  index: number,
  minefield: Cell[],
  rows: number,
  cols: number,
) => {
  const clickedCell = minefield[index];
  if (clickedCell.isRevealed) return minefield;
  if (clickedCell.isMine) {
    return minefield.map((cell) => (cell.isMine ? { ...cell, isRevealed: true } : cell));
  }
  if (!clickedCell.isRevealed) {
    if (clickedCell.adjacentMines > 0) {
      return minefield.map((cell, i) =>
        index === i ? { ...cell, isRevealed: true } : cell,
      );
    }
    let neighborsToReveal: number[] = [];
    radiate(neighborsToReveal, index, minefield, rows, cols);
    return minefield.map((cell, i) =>
      neighborsToReveal.includes(i) ? { ...cell, isRevealed: true } : cell,
    );
  }
  return minefield;
};

export default handleCellClick;
