<template lang="pug">
  component(:is="config.component" :data="data")
</template>

<script lang="ts">
import Vue from 'vue';
import GridConfig from '../../src/layouts/GridConfig';

export default Vue.extend({
  name: 'Layout',
  props: {
    config: {
      type: GridConfig,
      required: true,
    },
    data: {
      type: Object,
      required: true,
    },
  },
});
</script>
