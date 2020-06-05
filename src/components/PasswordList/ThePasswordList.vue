<template lang="pug">
div
  PasswordListItem(
    v-for="i in passwordsToDisplay"
    :key="i"
  )
</template>

<script lang="ts">
import {
  Component,
  Vue,
} from 'vue-property-decorator';
import PasswordListItem from './PasswordListItem.vue';

const PASSWORDS_TO_DISPLAY = 10;
@Component({
  components: {
    PasswordListItem,
  },
})
export default class ThePasswordList extends Vue {
  get passwordsToDisplay(): number {
    return PASSWORDS_TO_DISPLAY;
  }
}
</script>
