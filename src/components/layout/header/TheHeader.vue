<template lang="pug">
v-app-bar(
  app
  color="primary"
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
}
</script>
