import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import createMutationsSharer from 'vuex-shared-mutations';

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [
    createPersistedState({
      reducer(state: { InterfaceSettings: {}; PasswordSettings: {}; Password: {} }) {
        return {
          InterfaceSettings: state.InterfaceSettings,
          PasswordSettings: state.PasswordSettings,
        };
      },
    }),
    createMutationsSharer({
      predicate: (mutation) => (
        !!mutation.type && !/^Password\//.test(mutation.type)
      ),
    }),
  ],
});
