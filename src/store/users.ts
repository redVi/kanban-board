import { flow, types } from 'mobx-state-tree';
import api from '@/services/api';

export const User = types.model('User', {
  id: types.identifier,
  createdAt: types.string,
  name: types.string,
  avatar: types.string,
});

export const UsersStore = types.model('Users', {
  list: types.optional(types.array(User), []),
}).actions(self => {
  return {
    load: flow(function* () {
      try {
        self.list = yield api.get('users');
      } catch (err) {
        console.error(err);
      }
    }),
    afterCreate() {
      this.load();
    },
  };
});
