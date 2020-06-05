<template lang="pug">
v-toolbar-title.d-flex.align-center.display-1
  v-icon {{ logoIcon }}
    =' '
  h1.display-1.hidden-sm-and-down.ml-2
    =' '
    | {{ appTitle }}
</template>

<script lang="ts">
import {
  Component,
  Vue,
} from 'vue-property-decorator';
import { mdiChartScatterPlot } from '@mdi/js';

@Component
export default class TheHeaderTitle extends Vue {
  get logoIcon(): string {
    return mdiChartScatterPlot;
  }

  get appTitle() {
    return this.$vuetify.lang.t('$vuetify.appTitle');
  }
}
</script>
