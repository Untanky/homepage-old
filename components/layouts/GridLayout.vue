<template lang="pug">
  section.content.w-full.relative.my-16
    .container.px-2.grid.grid-cols-1.gap-4.auto-rows-80.grid-flow-column-dense(class="lg:grid-cols-3 sm:mx-auto")
      .card.m-0(v-for="composition, index in controller.layout" :key="index" :class="gridClass(composition)")
        component(:is="composition.setting.component" :data="composition.data")
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import StackedText from '../StackedText.vue';
import FullImage from '../FullImage.vue';
import LayoutController from '../../src/interfaces/LayoutController';
import GridSetting from '../../src/layouts/GridSetting';
import LayoutComposition from '../../src/interfaces/LayoutComposition';

export default Vue.extend({
  name: 'GridLayout',
  components: {
    StackedText,
    FullImage,
  },
  props: {
    controller: {
      type: Object as PropType<LayoutController<GridSetting>>,
      required: true,
    },
  },
  methods: {
    gridClass(data: LayoutComposition<GridSetting>) {
      return [
        ...data.setting.classes,
        this.getSizeClass(data.setting.size),
        this.getPriorityClass(data.setting.priority),
        this.getColumnClass(data.setting.column),
      ];
    },
    getSizeClass(size: string): string {
      switch (size) {
        case 'LARGE':
          return 'row-span-3';
        case 'MEDIUM':
          return 'row-span-2';
        case 'SMALL':
        default:
          return '';
      }
    },
    getPriorityClass(priority: number): string {
      return `order-${priority} md:order-none`;
    },
    getColumnClass(column: number): string {
      return `md:column-start-${column}`;
    },
  },
});
</script>
