<template lang="pug">
  component(:is="config.component" :controller="controller")
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import LayoutSetting from '../../src/interfaces/LayoutSetting';
import LayoutController from '../../src/interfaces/LayoutController';
import LayoutConfig from '../../src/interfaces/LayoutConfig';
import ComponentData from '../../src/interfaces/ComponentData';

export default Vue.extend({
  name: 'Layout',
  props: {
    config: {
      type: Object as PropType<LayoutConfig<LayoutSetting>>,
      required: true,
    },
    data: {
      type: Array as PropType<Array<ComponentData>>,
      required: true,
    },
  },
  computed: {
    controller(): LayoutController<LayoutSetting> {
      return new LayoutController<LayoutSetting>(this.config, this.data);
    },
  },
});
</script>
