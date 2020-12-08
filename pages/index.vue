<template lang="pug">
  #home.h-full
    gradient-header
    grid-layout(:layout="layout")
</template>

<script lang="ts">
import Vue from 'vue';
import GradientHeader from '../components/headers/GradientHeader.vue';
import Layout from '../components/layouts/index';
import GridSetting from '~/src/layouts/GridSetting';
import GridConfig from '../src/layouts/GridConfig';
import LayoutController from '../src/interfaces/LayoutController';

export default Vue.extend({
  name: 'Index',
  components: {
    GradientHeader,
    Layout,
  },
  data: () => ({
    config: new GridConfig(),
    data: [
      {
        formattedTexts: [
          {
            text: 'Hello World',
            classes: ['font-bold', 'text-xl'],
          },
          {
            text: 'Goodbye World',
            classes: ['italic', 'text-xl'],
          },
        ],
        stackedTextOptions: {
          classes: ['justify-between'],
        },
      },
      {
        imageUrl: '/img/profile.jpg',
      },
      {
        formattedTexts: [
          {
            text: 'Hello World',
            classes: ['font-bold', 'text-xl'],
          },
          {
            text: 'Goodbye World',
            classes: ['italic', 'text-xl'],
          },
        ],
        stackedTextOptions: {
          classes: ['justify-between'],
        },
      },
    ],
  }),
  computed: {
    layout() {
      return new LayoutController<GridSetting>(this.config, this.data);
    },
  },
});
</script>
