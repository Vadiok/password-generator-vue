<template lang="pug">
v-menu
  template(v-slot:activator="{ on }")
    v-tooltip(
      bottom
    )
      template(
        v-slot:activator="tooltipActivator"
      )
        div(
          v-on="tooltipActivator.on"
        )
          v-btn(
            text
            v-on="on"
          )
            v-icon.mr-1 {{ icon }}
            | {{ activeTitle }}
      span {{ tooltip }}
  v-list
    v-list-item(
      v-for="item in propertyList"
      :key="item.value"
      @click="onItemClick(item.value)"
    )
      v-list-item-title {{ item.title }}
</template>

<script lang="ts">
import {
  Component,
  Vue,
} from 'vue-property-decorator';

interface InterfaceProperty<T> {
  value: T;
  title: string;
}

@Component
export default class AbstractHeaderPropertySwitcher<T extends string = string> extends Vue {
  protected icon = '';

  protected languageKey = '';

  get activeItem(): string {
    return '';
  }

  get activeTitle(): string {
    return this.getItemTranslation(this.activeItem);
  }

  get tooltip(): string {
    return '';
  }

  get items(): Array<T> {
    return [];
  }

  get propertyList(): InterfaceProperty<T>[] {
    return [...this.items]
      .map((item) => ({
        value: item,
        title: this.getItemTranslation(item),
      }));
  }

  protected getItemTranslation(itemKey: string): string {
    return this.$vuetify.lang.t(`$vuetify.${this.languageKey}.${itemKey}`);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected onItemClick(key: string) {}
}
</script>
