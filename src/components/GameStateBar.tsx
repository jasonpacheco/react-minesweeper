// @ts-ignore
import { Counter, Button } from 'react95';
import styled from 'styled-components';
import useGameStore from '~/gameStore';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const StateIcon = styled.span`
  position: relative;
  left: 2px;
`;

export const GameStateBar = () => {
  const [mines, resetGame] = useGameStore((store) => [store.mines, store.resetGame]);

  return (
    <Wrapper>
      <Counter value={mines} />
      <Button square onClick={resetGame}>
        <StateIcon>😊</StateIcon>
      </Button>
      <Counter />
    </Wrapper>
  );
};
