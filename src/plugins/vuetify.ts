import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import en from '@/locale/en';
import ru from '@/locale/ru';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {},
      dark: {},
    },
  },
  lang: {
    locales: {
      en,
      ru,
    },
    current: 'en',
  },
});
