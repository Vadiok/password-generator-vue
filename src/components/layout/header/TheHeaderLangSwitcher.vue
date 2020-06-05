<script lang="ts">
import {
  Component,
} from 'vue-property-decorator';
import { mdiTranslate } from '@mdi/js';
import {
  interfaceSettingsModule,
  Languages,
} from '@/store/settings/InterfaceSettingsStore';
import AbstractHeaderPropertySwitcher from './AbstractHeaderPropertySwitcher/AbstractHeaderPropertySwitcher.vue';

@Component
export default class TheHeaderLangSwitcher extends AbstractHeaderPropertySwitcher {
  protected icon: string = mdiTranslate;

  protected languageKey = 'languages';

  get activeItem(): string {
    return interfaceSettingsModule.language;
  }

  get tooltip(): string {
    return this.$vuetify.lang.t('$vuetify.changeLanguage');
  }

  get items(): Languages[] {
    return interfaceSettingsModule.availableLanguages;
  }

  protected onItemClick(key: Languages) {
    interfaceSettingsModule.setLanguage(key);
  }
}
</script>
