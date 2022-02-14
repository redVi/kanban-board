import { createContext } from 'react';
import { types } from 'mobx-state-tree';
import { BoardStore } from './boards';
import { UsersStore } from './users';

const RootStore = types.model('RootStore', {
  boards: types.optional(BoardStore, {}),
  users: types.optional(UsersStore, {}),
});

export const store = RootStore.create({});
export const StoreContext = createContext(store);
