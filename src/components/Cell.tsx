import type { FunctionComponent } from 'react';
import styled, { css } from 'styled-components';
import type CellType from '~/types/Cell';

const colorFromValue = (value: number) => {
  switch (value) {
    case 1:
      return 'blue';
    case 2:
      return 'green';
    case 3:
      return 'red';
    case 4:
      return 'purple';
    case 5:
      return 'maroon';
    case 6:
      return 'turquoise';
    case 7:
      return 'black';
    case 8:
      return 'gray';
    default:
      return 'black';
  }
};

const CellWrapper = styled.span<{ cell: CellType }>`
  ${(props) =>
    props.cell.isRevealed &&
    css`
      color: ${props.cell.isMine ? 'red' : colorFromValue(props.cell.adjacentMines)};
      font-weight: bold;
    `}
`;

export const Cell: FunctionComponent<{ cell: CellType }> = ({ cell }) => {
  return (
    <CellWrapper cell={cell}>
      {cell.isRevealed ? (cell.isMine ? 'M' : cell.adjacentMines || '') : null}
    </CellWrapper>
  );
};
