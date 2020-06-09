import Vue from 'vue';
import Vuex from 'vuex';
import { getModule } from 'vuex-module-decorators';
import createPersistedState from 'vuex-persistedstate';
import createMutationsSharer from 'vuex-shared-mutations';
import { ModuleTitles } from './ModuleTitles';
import { InterfaceSettingsStore } from './settings/InterfaceSettingsStore';
import { PasswordSettingsStore } from './settings/PasswordSettingsStore';
import { PasswordStore } from './passwords/PasswordStore';

Vue.use(Vuex);

interface AppState {
  [ModuleTitles.InterfaceSettings]: InterfaceSettingsStore;
  [ModuleTitles.PasswordSettings]: PasswordSettingsStore;
  [ModuleTitles.Password]: PasswordStore;
}

const store = new Vuex.Store({
  modules: {
    [ModuleTitles.InterfaceSettings]: InterfaceSettingsStore,
    [ModuleTitles.PasswordSettings]: PasswordSettingsStore,
    [ModuleTitles.Password]: PasswordStore,
  },
  plugins: [
    createPersistedState({
      reducer(state: AppState) {
        return {
          [ModuleTitles.InterfaceSettings]: state.InterfaceSettings,
          [ModuleTitles.PasswordSettings]: state.PasswordSettings,
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

export default store;

export const interfaceSettingsModule = getModule(InterfaceSettingsStore, store);
export const passwordSettingsModule = getModule(PasswordSettingsStore, store);
export const passwordModule = getModule(PasswordStore, store);
