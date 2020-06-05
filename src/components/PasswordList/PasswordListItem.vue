<template lang="pug">
div
  .password-item.py-2(
    v-ripple
    @click.prevent="copyToClipboard"
  )
    span.mr-2(
    )
      v-icon {{ iconCopy }}
    | {{ password }}
  v-snackbar.text-center(
    v-model="snackbar"
    color="success"
    vertical
    :timeout="1500"
  )
    .pb-1 {{ copiedText }}
</template>

<script lang="ts">
import {
  Component,
  Vue,
  Watch,
} from 'vue-property-decorator';
import copy from 'copy-to-clipboard';
import { mdiClipboardArrowDownOutline } from '@mdi/js';
import { passwordModule } from '@/store/passwords/PasswordStore';
import { passwordSettingsModule } from '@/store/settings/PasswordSettingsStore';
import { generatePassword } from './generatePassword';

@Component
export default class PasswordListItem extends Vue {
  protected password = '';

  protected snackbar = false;

  get passwordUpdated() {
    return passwordModule.passwordUpdated;
  }

  get iconCopy(): string {
    return mdiClipboardArrowDownOutline;
  }

  get passwordSymbols(): string {
    return passwordSettingsModule.symbols;
  }

  get passwordLength(): number {
    return passwordSettingsModule.passwordLength;
  }

  get copiedText() {
    return this.$vuetify.lang.t('$vuetify.copied');
  }

  protected updatePassword() {
    this.password = generatePassword(this.passwordSymbols, this.passwordLength);
  }

  protected copyToClipboard() {
    copy(this.password, {
      onCopy: () => {
        this.snackbar = true;
      },
    });
  }

  @Watch('passwordUpdated')
  onPasswordUpdatedChange(): void {
    this.updatePassword();
  }

  @Watch('passwordSymbols', { immediate: true })
  onPasswordSymbolsChange(): void {
    this.updatePassword();
  }

  @Watch('passwordLength', { immediate: true })
  onPasswordLengthChange(): void {
    this.updatePassword();
  }
}
</script>

<style lang="scss" scoped>
.password-item {
  cursor: pointer;
  word-break: break-all;
}
</style>
