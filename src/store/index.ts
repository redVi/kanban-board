import { createContext } from 'react';
import { types } from 'mobx-state-tree';
import { BoardStore } from './boards';

const RootStore = types.model('RootStore', {
  boards: types.optional(BoardStore, {}),
});

export const store = RootStore.create({});
export const StoreContext = createContext(store);
