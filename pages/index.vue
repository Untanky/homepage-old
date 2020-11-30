<template lang="pug">
  #home.h-full
    gradient-header
    grid-layout(:config="config" :data="data")
</template>

<script lang="ts">
import Vue from 'vue';
import GradientHeader from '../components/headers/GradientHeader.vue';
import Layout from '../components/layouts/index';
import GridConfig from '../src/layouts/GridConfig';

export default Vue.extend({
  name: 'Index',
  components: {
    GradientHeader,
    Layout,
  },
  data: () => ({
    config: new GridConfig(),
    data: {},
  }),
});
</script>
