import { useCallback } from 'react';
import { observer } from 'mobx-react-lite';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { Grid, Title } from '@/components';
import useStore from '@/hooks/useStore';
import { Column } from './Column';

const BoardFeature = () => {
  const { boards } = useStore();

  const onDragEnd = useCallback((event: any) => {
    const { source, destination, draggableId: taskId } = event;
    boards.active?.moveTask(taskId, source, destination);
  }, [boards]);

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Grid>
        {boards.active?.sections.map(section => (
          <Droppable droppableId={section.id} key={section.id}>
            {provided => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                <Title text={section.title} />
                <Column section={section} />
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
      </Grid>
    </DragDropContext>
  );
};

export const Board = observer(BoardFeature);

Board.displayName = 'Board';
