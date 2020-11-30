<template lang="pug">
  section.content.w-full.relative.my-16
    .container.px-2.grid.grid-cols-1.gap-4.auto-rows-80.grid-flow-column-dense(class="lg:grid-cols-3 sm:p-0 sm:mx-auto")
      .card.m-0 Hello
      .card.m-0 Hello
      .card.m-0 Hello
      .card.m-0.row-span-3 Hello
      .card.m-0 Hello
      .card.m-0.row-span-2 Hello
      .card.m-0.row-span-2 Hello
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import GridConfig from '../../src/layouts/GridConfig';

export default Vue.extend({
  name: 'GridLayout',
  props: {
    config: {
      type: Object as PropType<GridConfig>,
      required: true,
    },
    data: {
      type: Object,
      required: true,
    },
  },
  
});
</script>
