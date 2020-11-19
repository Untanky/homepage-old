<template lang="pug">
  .timeline
    .relative
      div(v-for="(element, index) in elements")
        timeline-event(:element="element")
          components(:is="element.component", :element="element")
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

.timeline > .relative::before {
  content: "";
  @apply w-1;
  @apply h-full;
  @apply block;
  @apply absolute;
  @apply bg-gray-600;
  @apply left-7;
}

.timeline > .relative > *:first-child::before {
  content: "";
  @apply block;
  @apply absolute;
  @apply bg-white;
  @apply w-1;
  @apply h-4;
  @apply left-7;
}

.timeline > .relative > *:last-child {
  @apply relative;
}

.timeline > .relative > *:last-child > *::before {
  content: "";
  @apply block;
  @apply absolute;
  @apply bg-white;
  @apply w-1;
  @apply h-full;
  @apply left-7;
  @apply -bottom-4;
}
</style>
