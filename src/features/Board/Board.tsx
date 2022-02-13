// @ts-nocheck-q
import { Fragment } from 'react';
import { observer } from 'mobx-react-lite';
import { IBoardTask } from '@/store/boards';
import { Avatar, Card, Grid, Tag, Text, Title } from '@/components';
import useStore from '@/hooks/useStore';

const Task = ({ task }: { task: IBoardTask }) => (
  <Card
    Header={<Tag text='android' kind='android' />}
    Footer={<Avatar />}
  >
    <Title tag='h2' text={task.title} />
    <Text>{task.description}</Text>
  </Card>
);

export const Board = observer(() => {
  const { boards } = useStore();

  return (
    <Grid>
      {boards.active?.sections.map(section => (
        <Fragment key={section.id}>
          <Title text={section.title} />
          {section.tasks.map(task => (
            <Task key={task.id} task={task} />
          ))}
        </Fragment>
      ))}
    </Grid>
  );
});

Board.displayName = 'Board';
