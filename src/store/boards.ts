import { v4 as uuid } from 'uuid';
import { getParent, types, Instance, flow, onSnapshot, getSnapshot } from 'mobx-state-tree';
import api from '@/services/api';
import { User } from '@/store/users';

export interface IBoardTask extends Instance<typeof Task> {}
export interface IBoardSection extends Instance<typeof BoardSection> {}

const Task = types.model('Task', {
  id: types.identifier,
  title: types.string,
  tag: types.string,
  description: types.string,
  assignee: types.safeReference(User),
});

const BoardSection = types.model('BoardSection', {
  id: types.identifier,
  title: types.string,
  tasks: types.array(Task),
}).actions(self => {
  const { id } = self;
  const { id: boardID } = getParent(self, 2);

  return {
    load: flow(function* () {
      try {
        const { tasks } = yield api.get(`boards/${boardID}/tasks/${id}`);
        self.tasks = tasks;
        // @ts-ignore
        onSnapshot(self, self.save);
      } catch (err) {
        console.error(err);
      }
    }),
    save: flow(function* ({ tasks }) {
      yield api.put(`boards/${boardID}/tasks/${id}`, { tasks });
    }),
    afterCreate() {
      this.load();
    },
  };
});

const Board = types.model('Board', {
  id: types.identifier,
  title: types.string,
  sections: types.array(BoardSection),
}).actions(self => {
  return {
    moveTask: function (taskId: string, source: any, destination: any) {
      const fromSection = self.sections.find(section => section.id === source.droppableId);
      const toSection = self.sections.find(section => section.id === destination.droppableId);

      if (!fromSection || !toSection) return;

      const taskToMoveIndex = fromSection.tasks.findIndex(task => task.id === taskId);
      const [task] = fromSection.tasks.splice(taskToMoveIndex, 1);

      toSection.tasks.splice(destination.index, 0, getSnapshot(task));
    },
    addTask: function (task: IBoardTask) {
      task.id = uuid();
      self.sections[0].tasks.push(task);
    },
  };
});

export const BoardStore = types.model('BoardStore', {
  list: types.optional(types.array(Board), []),
  active: types.safeReference(Board),
}).actions(self => {
  return {
    load: flow(function* () {
      try {
        self.list = yield api.get('boards');
        // @ts-ignore
        self.active = 'DESIGN';
      } catch (err) {
        console.error(err);
      }
    }),
    changeBoard: function (boardName: string) {
      // @ts-ignore
      self.active = boardName;
    },
    afterCreate() {
      this.load();
    },
  };
});
