import { FC } from 'react';
import { observer } from 'mobx-react-lite';
import { Draggable } from 'react-beautiful-dnd';
import { IBoardTask, IBoardSection } from '@/store/boards';
import { Avatar, Card, Tag, Text, Title } from '@/components';

interface IBoard {
  section: IBoardSection,
}

const getItemStyle = (isDragging: boolean, draggableStyle: any) => {
  return {
    padding: 2,
    marginBottom: 8,
    ...draggableStyle,
    background: isDragging ? 'pink' : 'transparent',
  };
};

export const Column: FC<IBoard> = observer(({ section }) => (
  <>
    {section.tasks.map((task: IBoardTask, index: number) => (
      <Draggable draggableId={task.id} index={index} key={index}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            style={getItemStyle(
              snapshot.isDragging,
              provided.draggableProps.style,
            )}
          >
            {/* @ts-ignore */}
            <Card Header={<Tag text={task.tag} kind={task.tag} />} Footer={<Avatar />}>
              <Title tag='h2' text={task.title} />
              <Text>{task.description}</Text>
            </Card>
          </div>
        )}
      </Draggable>
    ))}
  </>
));
