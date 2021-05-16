import { InjectionKey } from 'vue';
import { createStore, Store, useStore as baseUseStore } from 'vuex';
import { State } from './State';
import { mutations } from './mutations';
import createPersistedState from 'vuex-persistedstate';

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  plugins: [createPersistedState()],
  state: {
    tasks: []
  },
  mutations
});

// define your own `useStore` composition function
export function useStore() {
  return baseUseStore(key);
}
