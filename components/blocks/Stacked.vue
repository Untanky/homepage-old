<template>
  <div
    class="stacked flex h-full"
    :class="[flexDirection, data.classes]"
  >
    <component
      v-for="(componentData,index) in data.componentData"
      :key="index"
      :is="componentData.setting.component"
      :data="componentData.data"
    />
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import Stacked, { StackDirection } from '../../src/components/Stacked';

export default Vue.extend({
  name: 'Stacked',
  props: {
    data: {
      type: Object as PropType<Stacked>,
      required: true,
    },
  },
  computed: {
    flexDirection() {
      switch (this.data.direction) {
        case StackDirection.Vertical:
          return 'flex-col';
        case StackDirection.Horizontal:
          return 'flex-row';
        default:
          return '';
      }
    }
  }
});
</script>
