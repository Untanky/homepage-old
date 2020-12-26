<template>
  <div
    class="text-lg"
    :class="data.classes"
  >
    <span
      class="font-bold"
    >
      {{data.key}}:
    </span>
    <span>
      {{data.value}}
    </span>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import KeyValue from '../../src/components/KeyValue';

export default Vue.extend({
  name: 'KeyValue',
  props: {
    data: {
      type: Object as PropType<KeyValue>,
      required: true,
    },
  },
});
</script>
