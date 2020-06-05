<template lang="pug">
v-app(
  :class="{ 'theme--black': isBlackTheme }"
)
  TheHeader
  TheContent
</template>

<script lang="ts">
import {
  Component,
  Vue,
} from 'vue-property-decorator';
import { interfaceSettingsModule } from '@/store';
import { Themes } from '@/store/settings/InterfaceSettingsStore';
import TheHeader from '@/components/layout/header/TheHeader.vue';
import TheContent from '@/components/layout/content/TheContent.vue';

@Component({
  components: {
    TheContent,
    TheHeader,
  },
})
export default class App extends Vue {
  get isBlackTheme() {
    return interfaceSettingsModule.theme === Themes.black;
  }
}
</script>

<style lang="scss">
.v-application {
  min-width: 320px;
  &.theme--black {
    &, &.theme--dark {
      background: #000;
    }
  }
}
</style>
