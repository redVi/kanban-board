import { FormEvent } from 'react';
import { observer } from 'mobx-react-lite';
import { Header } from '@/components';
import useStore from '@/hooks/useStore';

export const BoardHeader = observer(() => {
  const { boards } = useStore();

  const changeBoard = (e: FormEvent<HTMLSelectElement>) => {
    boards.changeBoard(e.currentTarget.value);
  };

  return (
    <Header>
      <select id="boards" onChange={changeBoard} value={boards.active?.id}>
        {boards.list.map(board => (
          <option key={board.id} value={board.id}>{board.title}</option>
        ))}
      </select>
    </Header>
  );
});

BoardHeader.displayName = 'BoardHeader';
