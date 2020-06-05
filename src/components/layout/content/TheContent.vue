<template lang="pug">
v-content
  v-container.content-container.mx-auto.pt-4.pt-lg-8
    ThePasswordList
    ThePasswordSettings
</template>

<script lang="ts">
import {
  Component,
  Vue,
} from 'vue-property-decorator';
import ThePasswordList from '@/components/PasswordList/ThePasswordList.vue';
import ThePasswordSettings from '@/components/PasswordSettings/ThePasswordSettings.vue';

@Component({
  components: {
    ThePasswordList,
    ThePasswordSettings,
  },
})
export default class TheContent extends Vue {}
</script>

<style lang="scss" scoped>
.content-container {
  max-width: 600px;
}
</style>
