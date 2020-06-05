<template lang="pug">
div
  header {{ label }}
  ThePasswordSettingsSymbolsSwitch(
    v-for="symbolType in symbolTypes"
    :key="symbolType"
    :symbolType="symbolType"
  )
</template>

<script lang="ts">
import {
  Component,
  Vue,
} from 'vue-property-decorator';
import ThePasswordSettingsSymbolsSwitch, { SymbolTypes } from './ThePasswordSettingsSymbolsSwitch.vue';

@Component({
  components: {
    ThePasswordSettingsSymbolsSwitch,
  },
})
export default class ThePasswordSettingsSymbols extends Vue {
  get label(): string {
    return this.$vuetify.lang.t('$vuetify.symbols');
  }

  get symbolTypes(): SymbolTypes[] {
    return [
      SymbolTypes.lowercase,
      SymbolTypes.capital,
      SymbolTypes.numbers,
      SymbolTypes.special,
    ];
  }
}
</script>
