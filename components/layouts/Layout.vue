<template lang="pug">
  component(:is="config.component" :data="data")
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import LayoutConfig from '../../src/layouts/LayoutConfig';

export default Vue.extend({
  name: 'Layout',
  props: {
    config: {
      type: Object as PropType<LayoutConfig<any>>,
      required: true,
    },
    data: {
      type: Object,
      required: true,
    },
  },
});
</script>
