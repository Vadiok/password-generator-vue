<template lang="pug">
div
  header {{ label }}
  v-text-field.pt-0(
    type="number"
    v-model="value"
  )
</template>

<script lang="ts">
import {
  Component,
  Vue,
  Watch,
} from 'vue-property-decorator';
import { passwordSettingsModule } from '@/store/settings/PasswordSettingsStore';

@Component
export default class ThePasswordSettingsLength extends Vue {
  protected value: number = passwordSettingsModule.passwordLength;

  get storeValue(): number {
    return passwordSettingsModule.passwordLength;
  }

  get label(): string {
    return this.$vuetify.lang.t('$vuetify.passwordLength');
  }

  @Watch('value')
  protected onValueChange(value: number) {
    passwordSettingsModule.setPasswordLength(value);
    if (this.value !== this.storeValue) {
      this.$nextTick(() => {
        this.value = this.storeValue;
      });
    }
  }

  @Watch('storeValue', { immediate: true })
  protected onValueFromStoreChange(value: number) {
    if (this.value !== value) {
      this.value = value;
      const input: Vue|null = (this.$refs.input as Vue);
      if (input) {
        input.$forceUpdate();
      }
    }
  }
}
</script>
