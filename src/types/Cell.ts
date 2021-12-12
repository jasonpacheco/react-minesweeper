type Cell = {
  isMine: boolean;
  isFlag: boolean;
  isRevealed: boolean;
  adjacentMines: number;
};

export default Cell;
