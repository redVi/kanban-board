import { StoreContext } from '../src';
import { useContext } from 'react';

export default function useStore() {
  return useContext(StoreContext);
}
