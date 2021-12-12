import create from 'zustand';
import generateMinefield from './game/generateMinefield';
import handleCellClick from './game/handleCellClick';

import type Cell from './types/Cell';
import type GameStoreState from './types/GameStoreState';

const rows = 10;
const cols = 10;
const mines = 10;
const initialMinefield = () =>
  Array.from<Cell>({ length: rows * cols }).fill({
    adjacentMines: 0,
    isFlag: false,
    isMine: false,
    isRevealed: false,
  });

const useGameStore = create<GameStoreState>((set, get) => ({
  state: 'initial',
  rows,
  cols,
  mines,
  flags: mines,
  minefield: initialMinefield(),
  resetGame: () => set({ state: 'initial', minefield: initialMinefield(), flags: mines }),
  updateMinefield: (index) => {
    const { state, rows, cols, mines, minefield } = get();
    if (state === 'game-over') return;
    if (state === 'initial') {
      set({ state: 'active', minefield: generateMinefield([rows, cols], mines, index) });
    }

    if (minefield[index].isMine) {
      set({ state: 'game-over' });
    }

    set((prev) => ({
      ...prev,
      minefield: handleCellClick(index, prev.minefield, rows, cols),
    }));
  },
}));

export default useGameStore;
