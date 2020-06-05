import Vue from 'vue';
import store, { interfaceSettingsModule } from '@/store';
import { Themes } from '@/store/settings/InterfaceSettingsStore';
import vuetify from './plugins/vuetify';
import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
  store,
  vuetify,
  render: (h) => h(App),
  computed: {
    language: () => interfaceSettingsModule.language,
    theme: () => interfaceSettingsModule.theme,
  },
  watch: {
    language: {
      immediate: true,
      handler(language) {
        if (!interfaceSettingsModule.availableLanguages.includes(language)) {
          return;
        }
        if (this.$vuetify.lang.current !== language) {
          this.$vuetify.lang.current = language;
        }
      },
    },
    theme: {
      immediate: true,
      handler(theme) {
        if (!interfaceSettingsModule.availableThemes.includes(theme)) {
          return;
        }
        const isDark = Themes.light !== theme;
        if (this.$vuetify.theme.dark !== isDark) {
          this.$vuetify.theme.dark = isDark;
        }
        if (!isDark) {
          return;
        }
        const isBlack = Themes.black === theme;
        this.$vuetify.theme.themes.dark.background = isBlack ? '#000' : '#121212';
      },
    },
  },
}).$mount('#app');
