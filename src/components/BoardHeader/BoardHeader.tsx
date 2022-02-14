import { FormEvent, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Header, Tag } from '@/components';
import useStore from '@/hooks/useStore';
import { BoardHeaderForm }  from './BoardHeaderForm';
import * as s from './BoardHeader.styles';

export const BoardHeader = observer(() => {
  const { boards } = useStore();
  const [isModalOpened, setIsModalOpened] = useState(false);

  const changeBoard = (e: FormEvent<HTMLSelectElement>) => {
    boards.changeBoard(e.currentTarget.value);
  };

  const toggleModal = () => {
    setIsModalOpened(!isModalOpened);
  };

  return (
    <Header>
      <s.Form action="#">
        <select
          name="boards"
          onChange={changeBoard}
          defaultValue={boards.active?.id}
        >
          {boards.list.map(board => (
            <option key={board.id} value={board.id}>{board.title}</option>
          ))}
        </select>
      </s.Form>
      <Tag text='Add task' handleClick={toggleModal} />
      <BoardHeaderForm isOpened={isModalOpened} handleClose={toggleModal} />
    </Header>
  );
});

BoardHeader.displayName = 'BoardHeader';
