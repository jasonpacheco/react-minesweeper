import type Cell from './Cell';
import type GameState from './GameState';

type GameStoreState = {
  state: GameState;
  rows: number;
  cols: number;
  mines: number;
  minefield: Cell[];
  updateMinefield(index: number): void;
  resetGame(): void;
};

export default GameStoreState;
