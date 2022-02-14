import { Board, BoardHeader } from '@/components';
import * as s from './Home.styles';

export const Home = () => {
  return (
    <s.Wrapper>
      <BoardHeader />
      <Board />
    </s.Wrapper>
  );
};
