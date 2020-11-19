<template lang="pug">
  .timeline
    div(v-for="(element, index) in elements")
      timeline-event(:element="element")
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import TimelineEvent from './TimelineEvent.vue';
import TimelineElement from '../src/TimelineElement';

export default Vue.extend({
  name: 'Timeline',
  components: {
    TimelineEvent,
  },
  props: {
    elements: {
      type: Array as PropType<Array<TimelineElement>>,
      required: true,
    },
  },
});
</script>

<style lang="postcss" scoped>
.timeline {
  @apply p-4;
  @apply h-auto;
  @apply relative;
}

.timeline::before {
  content: "";
  @apply w-1;
  @apply h-full;
  @apply block;
  @apply absolute;
  @apply bg-gray-600;
  @apply left-11;
  @apply top-11;
}

.timeline > *:last-child::before {
  content: "";
  @apply block;
  @apply absolute;
  @apply bg-white;
  @apply w-1;
  @apply h-48;
  @apply left-11;
  @apply -bottom-20;
}
</style>
