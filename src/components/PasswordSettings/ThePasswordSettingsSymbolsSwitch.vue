<template lang="pug">
v-switch(
  v-model="value"
  :label="label"
  :disabled="disabled"
)
</template>

<script lang="ts">
import {
  Component,
  Vue,
  Prop,
  Watch,
} from 'vue-property-decorator';
import { passwordSettingsModule } from '@/store/settings/PasswordSettingsStore';

export enum SymbolTypes {
  lowercase = 'lowercase',
  capital = 'capital',
  numbers = 'numbers',
  special = 'special',
}

const getStoreValue = (symbolType: SymbolTypes): boolean => {
  switch (symbolType) {
    case SymbolTypes.lowercase:
      return passwordSettingsModule.useLowercase;
    case SymbolTypes.capital:
      return passwordSettingsModule.useCapital;
    case SymbolTypes.numbers:
      return passwordSettingsModule.useNumbers;
    case SymbolTypes.special:
      return passwordSettingsModule.useSpecial;
    default:
      return false;
  }
};

const setStoreValue = (symbolType: SymbolTypes, value: boolean): void => {
  switch (symbolType) {
    case SymbolTypes.lowercase:
      passwordSettingsModule.setUseLowercase(value);
      break;
    case SymbolTypes.capital:
      passwordSettingsModule.setUseCapital(value);
      break;
    case SymbolTypes.numbers:
      passwordSettingsModule.setUseNumbers(value);
      break;
    case SymbolTypes.special:
      passwordSettingsModule.setUseSpecial(value);
      break;
    default:
  }
};

@Component
export default class ThePasswordSettingsSymbols extends Vue {
  @Prop({
    type: String,
    required: true,
  }) public symbolType!: SymbolTypes;

  protected value: boolean = getStoreValue(this.symbolType);

  get storeValue() {
    return getStoreValue(this.symbolType);
  }

  get label() {
    return this.$vuetify.lang.t(`$vuetify.${this.symbolType}`);
  }

  get disabled(): boolean {
    return (this.value && Object
      .values(SymbolTypes)
      .filter((symbolType) => (symbolType !== this.symbolType) && getStoreValue(symbolType))
      .length < 1);
  }

  @Watch('value')
  protected onValueChange(value: boolean) {
    setStoreValue(this.symbolType, value);
  }

  @Watch('storeValue', { immediate: true })
  protected onStoreValueChange(value: boolean) {
    if (this.value !== value) {
      this.value = value;
    }
  }
}
</script>
