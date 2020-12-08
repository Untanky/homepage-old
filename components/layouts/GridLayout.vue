<template lang="pug">
  section.content.w-full.relative.my-16
    .container.px-2.grid.grid-cols-1.gap-4.auto-rows-80.grid-flow-column-dense(class="lg:grid-cols-3 sm:mx-auto")
      .card.m-0(v-for="data, index in layout.layout" :key="index" :class="gridClass(data)")
        component(:is="data.setting.component" :data="data.data")
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import StackedText from '../StackedText.vue';
import FullImage from '../FullImage.vue';
import LayoutData from '../../src/LayoutData';
import GridSetting from '../../src/layouts/GridSetting';

export default Vue.extend({
  name: 'GridLayout',
  components: {
    StackedText,
    FullImage,
  },
  props: {
    layout: {
      type: Object as PropType<LayoutData<GridSetting>>,
      required: true,
    },
  },
  methods: {
    gridClass(data: Object) {
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
