import { InjectionKey } from 'vue';
import { createStore, Store, useStore as baseUseStore } from 'vuex';
import { State } from './State';
import { mutations } from './mutations';

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    tasks: [
      {
        id: '1',
        days: 123,
        subtasks: [
          { id: '3bjvzfgVedrJ3dLwGeqvE', completed: true, label: 'Task 1' },
          { id: 'ZdHbjwIgRC7iuM4m5ZsyV', completed: false, label: 'Task 2' },
          { id: 'MazQa0nsjhlC3YC_gNdI4', completed: true, label: 'Task 3' },
          { id: '74FpdRk34kSGnK9tF527Y', completed: false, label: 'Task 4' },
          { id: 'mJ5FHShUWfMPS5kIqiqwC', completed: true, label: 'Task 5' },
        ],
      },
    ],
  },
  mutations,
});

// define your own `useStore` composition function
export function useStore() {
  return baseUseStore(key);
}
