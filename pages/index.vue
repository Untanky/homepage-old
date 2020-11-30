<template lang="pug">
  #home.h-full
    page-header
    grid-layout

</template>

<script lang="ts">
import Vue from 'vue';
import PageHeader from '../components/PageHeader.vue';
import GridLayout from '../components/layouts/GridLayout.vue';

export default Vue.extend({
  name: 'Index',
  components: {
    PageHeader,
    GridLayout,
  },
});
</script>
