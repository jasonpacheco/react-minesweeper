import { useState } from 'react';
// @ts-ignore
import { Button } from 'react95';
import styled from 'styled-components';
import generateMinefield from '~/game/generateMinefield';
import handleCellClick from '~/game/handleCellClick';
import type Cell from '~/types/Cell';

const MinefieldWrapper = styled.div<{ rows: number; cols: number }>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.cols}, 1fr);
  grid-template-rows: repeat(${(props) => props.rows}, 1fr);
`;

const MinefieldCell = styled(Button)``;

export const Minefield = () => {
  const rows = 10;
  const cols = 10;
  const mines = 10;
  const [gameState, setGameState] = useState<'initial' | 'active' | 'game-over'>(
    'initial',
  );
  const [minefield, setMinefield] = useState<Cell[]>(() =>
    Array.from<Cell>({ length: rows * cols }).fill({
      adjacentMines: 0,
      isFlag: false,
      isMine: false,
      isRevealed: false,
    }),
  );

  const onCellClick = (index: number) => () => {
    let _minefield = minefield;
    if (gameState === 'game-over') return;
    if (gameState === 'initial') {
      setGameState('active');
      _minefield = generateMinefield([rows, cols], mines, index);
    }

    if (_minefield[index].isMine) {
      setGameState('game-over');
    }
    setMinefield(handleCellClick(index, _minefield, rows, cols));
  };

  return (
    <MinefieldWrapper rows={rows} cols={cols}>
      {minefield.map((cell, index) => (
        <MinefieldCell
          key={index}
          onClick={onCellClick(index)}
          active={cell.isRevealed && cell.adjacentMines === 0 && !cell.isMine}
          disabled={gameState === 'game-over' && !cell.isRevealed}
          square
        >
          {cell.isRevealed ? (cell.isMine ? 'M' : cell.adjacentMines || '') : null}
        </MinefieldCell>
      ))}
    </MinefieldWrapper>
  );
};
