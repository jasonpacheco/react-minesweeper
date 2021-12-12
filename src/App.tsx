import { useState } from 'react';
import styled from 'styled-components';
import generateMinefield from './game/generateMinefield';

const Minefield = styled.div<{ rows: number; cols: number }>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.cols}, 1fr);
  grid-template-rows: repeat(${(props) => props.rows}, 1fr);
`;

const Cell = styled.div`
  border: 1px solid #000;
  height: 100px;
  text-align: center;
`;

export const App = () => {
  const rows = 10;
  const cols = 10;
  const mines = 10;
  const [minefield] = useState(() => generateMinefield([rows, cols], mines, 0));

  return (
    <Minefield rows={rows} cols={cols}>
      {minefield.map((cell, index) => (
        <Cell key={index}>{cell.isMine ? 'M' : cell.adjacentMines || ''}</Cell>
      ))}
    </Minefield>
  );
};
