import { observer } from 'mobx-react-lite';
import { IBoardTask, IBoardSection } from '@/store/boards';
import { Grid, Card, Tag, Avatar, Title, Text } from '@/components';
import useStore from '@/hooks/useStore';
import * as s from './Home.styles';

const Task = ({ task }: { task: IBoardTask }) => (
  <Card
    Header={<Tag text='android' kind='android' />}
    Footer={<Avatar />}
  >
    <Title tag='h2' text={task.title} />
    <Text>{task.description}</Text>
  </Card>
);

const Board = observer(({ board }: { board: IBoardSection }) => (
  <>
    <h2>{board.title}</h2>
    {board.tasks.map(task => (
      <Task key={task.id} task={task} />
    ))}
  </>
));

const Boards = observer(() => {
  const { boards } = useStore();

  return (
    <Grid>
      {boards.active?.sections.map(board => (
        <Board key={board.id} board={board} />
      ))}
    </Grid>
  );
});

export const Home = () => {
  return (
    <s.Wrapper>
      <Boards />
    </s.Wrapper>
  );
};

Boards.displayName = 'Boards';
