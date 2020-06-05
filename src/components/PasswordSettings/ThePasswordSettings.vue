<template lang="pug">
v-form.mt-8(
  @submit.prevent
)
  ThePasswordSettingsLength
  ThePasswordSettingsCharacters
  ThePasswordSettingsFooter
</template>

<script lang="ts">
import {
  Component,
  Vue,
} from 'vue-property-decorator';
import ThePasswordSettingsLength from './ThePasswordSettingsLength.vue';
import ThePasswordSettingsCharacters from './ThePasswordSettingsSymbols.vue';
import ThePasswordSettingsFooter from './ThePasswordSettingsFooter.vue';

@Component({
  components: {
    ThePasswordSettingsFooter,
    ThePasswordSettingsCharacters,
    ThePasswordSettingsLength,
  },
})
export default class ThePasswordSettings extends Vue {
}
</script>
