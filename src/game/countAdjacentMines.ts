import type Cell from '~/types/Cell';

const getAdjacent = (
  [row, col]: number[],
  rowColValue: (row: number, col: number) => number,
): number => {
  return (
    rowColValue(row - 1, col - 1) +
    rowColValue(row - 1, col) +
    rowColValue(row - 1, col + 1) +
    rowColValue(row, col - 1) +
    rowColValue(row, col + 1) +
    rowColValue(row + 1, col - 1) +
    rowColValue(row + 1, col) +
    rowColValue(row + 1, col + 1)
  );
};

const countAdjacentMines = (minefield: Cell[], rows: number, cols: number): Cell[] => {
  const indexToRowCol = (index: number) => {
    const row = Math.floor(index / rows);
    const col = index - row * cols;
    return [row, col];
  };
  const rowColValue = (row: number, col: number): number => {
    if (row < 0 || row >= rows || col < 0 || col >= cols) return 0;
    const index = row * cols + col;
    return minefield[index].isMine ? 1 : 0;
  };

  return minefield.map((cell, index) => ({
    ...cell,
    adjacentMines: getAdjacent(indexToRowCol(index), rowColValue),
  }));
};

export default countAdjacentMines;
