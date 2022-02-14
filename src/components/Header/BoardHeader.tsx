import { FormEvent } from 'react';
import { observer } from 'mobx-react-lite';
import { Header } from '@/components';
import { useForm } from 'react-hook-form';
import useStore from '@/hooks/useStore';

const SubmitForm = observer(() => {
  const { boards } = useStore();
  const { register, handleSubmit, formState: { errors }, clearErrors, resetField } = useForm();

  const addTask = (task: any) => {
    boards.active && boards.active.addTask(task);
    clearErrors();
    resetField('title');
    resetField('description');
  };

  return (
    <form onSubmit={handleSubmit(addTask)}>
      <h2>Add task</h2>

      <input defaultValue="New task" {...register('title')} />

      <select defaultValue="analytics" {...register('tag')}>
        <option value="analytics">Analytics</option>
        <option value="web">Web</option>
        <option value="ios">iOS</option>
        <option value="android">Android</option>
      </select>

      <input {...register('description', { required: true })} />
      {errors.description && <span>This field is required</span>}

      <input type="submit" />
    </form>
  );
});

export const BoardHeader = observer(() => {
  const { boards } = useStore();

  const changeBoard = (e: FormEvent<HTMLSelectElement>) => {
    boards.changeBoard(e.currentTarget.value);
  };

  return (
    <Header>
      <form action="#">
        <select name="boards" id="boards" onChange={changeBoard} defaultValue={boards.active?.id}>
          {boards.list.map(board => (
            <option key={board.id} value={board.id}>{board.title}</option>
          ))}
        </select>
      </form>
      <SubmitForm />
    </Header>
  );
});

BoardHeader.displayName = 'BoardHeader';
SubmitForm.displayName = 'SubmitForm';
