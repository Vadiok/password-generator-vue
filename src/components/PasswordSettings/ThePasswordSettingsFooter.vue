<template lang="pug">
v-row.ma-0(
  justify="space-between"
)
  v-btn(
    color="primary"
    @click.prevent="refreshPasswords"
  )
    v-icon.mr-1 {{ iconRefresh }}
    | {{ labelRefresh }}
  v-spacer
  v-btn(
    @click.prevent="resetSettings"
  )
    v-icon.mr-1 {{ iconReset }}
    | {{ labelReset }}
</template>

<script lang="ts">
import {
  Component,
  Vue,
} from 'vue-property-decorator';
import { mdiRefresh, mdiCogRefresh } from '@mdi/js';
import { passwordSettingsModule } from '@/store/settings/PasswordSettingsStore';
import { passwordModule } from '@/store/passwords/PasswordStore';

@Component
export default class ThePasswordSettingsFooter extends Vue {
  get labelRefresh(): string {
    return this.$vuetify.lang.t('$vuetify.refresh');
  }

  get labelReset(): string {
    return this.$vuetify.lang.t('$vuetify.reset');
  }

  get iconRefresh(): string {
    return mdiRefresh;
  }

  get iconReset(): string {
    return mdiCogRefresh;
  }

  protected refreshPasswords() {
    passwordModule.updatePassword();
  }

  protected resetSettings() {
    passwordSettingsModule.resetToDefaults();
  }
}
</script>
