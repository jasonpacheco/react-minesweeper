// @ts-ignore
import { Button } from 'react95';
import styled from 'styled-components';
import { Cell } from './Cell';
import useGameStore from '~/gameStore';

const MinefieldWrapper = styled.div<{ rows: number; cols: number }>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.cols}, 1fr);
  grid-template-rows: repeat(${(props) => props.rows}, 1fr);
`;

const MinefieldCell = styled(Button)``;

export const Minefield = () => {
  const [state, rows, cols, minefield, updateMinefield] = useGameStore((store) => [
    store.state,
    store.rows,
    store.cols,
    store.minefield,
    store.updateMinefield,
  ]);

  return (
    <MinefieldWrapper rows={rows} cols={cols}>
      {minefield.map((cell, index) => (
        <MinefieldCell
          key={index}
          onClick={() => updateMinefield(index)}
          active={cell.isRevealed && cell.adjacentMines === 0 && !cell.isMine}
          disabled={state === 'game-over' && !cell.isRevealed}
          square
        >
          <Cell cell={cell} />
        </MinefieldCell>
      ))}
    </MinefieldWrapper>
  );
};
