<template lang="pug">
  #home.h-full
    gradient-header
    layout(:config="config" :data="data")
</template>

<script lang="ts">
import Vue from 'vue';
import GradientHeader from '../components/headers/GradientHeader.vue';
import Layout from '../components/layouts/index';
import GridSetting from '../src/layouts/GridSetting';
import GridConfig from '../src/layouts/GridConfig';
import LayoutController from '../src/interfaces/LayoutController';
import { StackDirection } from '~/src/components/Stacked';

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
        direction: StackDirection.Vertical,
        componentData: [
          {
            setting: {
              component: 'formatted-text',
            },
            data: {
              text: 'Hello World!',
              bold: false,
              italic: false,
              underline: false,
              classes: [],
            },
          },
          {
            setting: {
              component: 'formatted-text',
            },
            data: {
              text: 'Goodbye World!',
              bold: true,
              italic: true,
              underline: true,
              size: 'xl',
              color: 'primary-500',
              classes: [],
            },
          },
        ],
        classes: ['justify-between'],
      },
      {
        imageUrl: '/img/profile.jpg',
        classes: [],
      },
      {
        direction: StackDirection.Vertical,
        componentData: [
          {
            setting: {
              component: 'formatted-text',
            },
            data: {
              text: 'Hello World!',
              bold: false,
              italic: false,
              underline: false,
              classes: [],
            },
          },
          {
            setting: {
              component: 'formatted-text',
            },
            data: {
              text: 'Goodbye World!',
              bold: true,
              italic: true,
              underline: true,
              size: 'xl',
              color: 'primary-500',
              classes: [],
            },
          },
        ],
        classes: ['justify-between'],
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
