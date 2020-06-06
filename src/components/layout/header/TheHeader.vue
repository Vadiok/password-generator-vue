<template lang="pug">
v-app-bar(
  app
  :color="color"
  dark
)
  TheHeaderTitle
  v-spacer
  TheHeaderLangSwitcher
  TheHeaderThemeSwitcher
</template>

<script lang="ts">
import {
  Component,
  Vue,
} from 'vue-property-decorator';
import { interfaceSettingsModule } from '@/store';
import { Themes } from '@/store/settings/InterfaceSettingsStore';
import TheHeaderTitle from './TheHeaderTitle.vue';
import TheHeaderLangSwitcher from './TheHeaderLangSwitcher.vue';
import TheHeaderThemeSwitcher from './TheHeaderThemeSwitcher.vue';

@Component({
  components: {
    TheHeaderLangSwitcher,
    TheHeaderThemeSwitcher,
    TheHeaderTitle,
  },
})
export default class TheHeader extends Vue {
  get color() {
    const { theme } = interfaceSettingsModule;
    if (theme === Themes.dark) {
      return 'teal darken-4';
    }
    if (theme === Themes.black) {
      return 'blackgrey darken-4';
    }
    return 'teal';
  }
}
</script>
