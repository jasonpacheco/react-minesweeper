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

const StateIcon = styled.span``;

export const GameStateBar = () => {
  const [flags, resetGame] = useGameStore((store) => [store.flags, store.resetGame]);

  return (
    <Wrapper>
      <Counter value={flags} />
      <Button square onClick={resetGame}>
        <StateIcon>😊</StateIcon>
      </Button>
      <Counter />
    </Wrapper>
  );
};
