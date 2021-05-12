import { InjectionKey } from 'vue';
import { createStore, Store, useStore as baseUseStore } from 'vuex';
import { State } from './State';
import { mutations } from './mutations';
import createPersistedState from 'vuex-persistedstate';
import { createLogger } from 'vuex';

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  plugins: [createPersistedState(), createLogger()],
  state: {
    tasks: [],
    modalIsOpen: false,
  },
  mutations,
});

// define your own `useStore` composition function
export function useStore() {
  return baseUseStore(key);
}
