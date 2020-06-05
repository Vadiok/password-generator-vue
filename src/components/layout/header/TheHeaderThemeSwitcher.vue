<script lang="ts">
import {
  Component,
} from 'vue-property-decorator';
import { mdiThemeLightDark } from '@mdi/js';
import { interfaceSettingsModule } from '@/store';
import { Themes } from '@/store/settings/InterfaceSettingsStore';
import AbstractHeaderPropertySwitcher from './AbstractHeaderPropertySwitcher/AbstractHeaderPropertySwitcher.vue';

@Component
export default class TheHeaderThemeSwitcher extends AbstractHeaderPropertySwitcher {
  protected icon: string = mdiThemeLightDark;

  protected languageKey = 'themes';

  get activeItem(): string {
    return interfaceSettingsModule.theme;
  }

  get tooltip(): string {
    return this.$vuetify.lang.t('$vuetify.changeTheme');
  }

  get items(): Themes[] {
    return interfaceSettingsModule.availableThemes;
  }

  protected onItemClick(key: Themes) {
    interfaceSettingsModule.setTheme(key);
  }
}
</script>
