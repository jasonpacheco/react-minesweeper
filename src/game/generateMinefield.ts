import countAdjacentMines from './countAdjacentMines';
import type Cell from '~/types/Cell';

const generateMinefield = (
  size: [number, number],
  mineCount: number,
  startIndex: number,
): Cell[] => {
  const [rows, cols] = size;
  const cellTotal = rows * cols;
  if (mineCount > cellTotal)
    throw new Error('Mine count cannot be greater than number of cells');

  const minefield = Array.from<Cell>({ length: cellTotal }).fill({
    isMine: false,
    isFlag: false,
    isRevealed: false,
    adjacentMines: 0,
  });

  let minesRemaining = mineCount;
  while (minesRemaining > 0) {
    const randIndex = Math.floor(Math.random() * cellTotal);
    if (randIndex !== startIndex && !minefield[randIndex].isMine) {
      minefield[randIndex] = {
        ...minefield[randIndex],
        isMine: true,
      };
      minesRemaining--;
    }
  }

  return countAdjacentMines(minefield, rows, cols);
};

export default generateMinefield;
