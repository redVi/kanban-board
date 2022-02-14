import { FC } from 'react';
import { observer } from 'mobx-react-lite';
import useStore from '@/hooks/useStore';
import { useForm } from 'react-hook-form';
import { Modal } from '@/components';
import * as s from './BoardHeader.styles';

interface IFormProps {
  isOpened: boolean
  handleClose: () => void
}

export const BoardHeaderForm: FC<IFormProps> = observer(({ isOpened, handleClose }) => {
  const { boards } = useStore();
  const { register, handleSubmit, formState: { errors }, clearErrors, resetField } = useForm();

  const addTask = (task: any) => {
    boards.active && boards.active.addTask(task);
    clearErrors();
    resetField('title');
    resetField('description');
    handleClose();
  };

  return (
    <Modal isOpen={isOpened} onClose={handleClose}>
      <s.Wrapper onSubmit={handleSubmit(addTask)}>
        <s.Input defaultValue="New task" {...register('title', { required: true })} />

        <s.Input as="select" defaultValue="analytics" {...register('tag')}>
          <option value="analytics">Analytics</option>
          <option value="web">Web</option>
          <option value="ios">iOS</option>
          <option value="android">Android</option>
        </s.Input>

        <s.Input as="textarea" {...register('description', { required: true })} />
        {errors.description && <s.ErrorField>This field is required</s.ErrorField>}

        <s.Button type="submit" />
      </s.Wrapper>
    </Modal>
  );
});

BoardHeaderForm.displayName = 'BoardHeaderForm';
