<template lang="pug">
  #home.h-full
    gradient-header
    grid-layout

</template>

<script lang="ts">
import Vue from 'vue';
import GradientHeader from '../components/headers/GradientHeader.vue';
import GridLayout from '../components/layouts/GridLayout.vue';

export default Vue.extend({
  name: 'Index',
  components: {
    GradientHeader,
    GridLayout,
  },
});
</script>
