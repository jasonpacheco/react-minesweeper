export const indexToCoordinate = (index: number, rows: number, cols: number) => {
  const row = Math.floor(index / cols);
  const col = index - row * cols;
  return [row, col];
};

export const coordinateToIndex = (coordinate: number[], rows: number, cols: number) => {
  const [row, col] = coordinate;
  if (row < 0 || row >= rows || col < 0 || col >= cols) return -1;
  return row * cols + col;
};
