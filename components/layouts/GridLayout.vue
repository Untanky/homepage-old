<template lang="pug">
  section.content.w-full.relative.my-16
    .container.mx-auto.grid.grid-cols-1.gap-4.auto-rows-80.grid-flow-column-dense(class="lg:grid-cols-3")
      .card.m-0 Hello
      .card.m-0 Hello
      .card.m-0 Hello
      .card.m-0.row-span-3 Hello
      .card.m-0 Hello
      .card.m-0.row-span-2 Hello
      .card.m-0.row-span-2 Hello
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'GridLayout',
  props: {
    config: {
      type: Object,
      required: true,
    },
    data: {
      type: Object,
      required: true,
    },
  },
});
</script>
