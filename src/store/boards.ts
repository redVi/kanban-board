import { getParent, types, Instance, flow } from 'mobx-state-tree';
import api from '@/services/api';

export interface IBoardTask extends Instance<typeof Task> {}

const Task = types.model('Task', {
  id: types.identifier,
  title: types.string,
  description: types.string,
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
      } catch (err) {
        console.error(err);
      }
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
    afterCreate() {
      this.load();
    },
  };
});
