const adjacentCells = ([row, col]: number[]) => [
  [row - 1, col - 1],
  [row - 1, col],
  [row - 1, col + 1],
  [row, col - 1],
  [row, col + 1],
  [row + 1, col - 1],
  [row + 1, col],
  [row + 1, col + 1],
];

export default adjacentCells;
