<template lang="pug">
  .timeline
    .relative
      div(v-for="(element, index) in elements.list", :key="index")
        timeline-event(:element="element.timelineEntry")
          slot(:name="`timeline-event__${index}`")
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import TimelineEvent from './TimelineEvent.vue';
import { TimelineList } from '../../src/components';

export default Vue.extend({
  name: 'Timeline',
  components: {
    TimelineEvent,
  },
  props: {
    elements: {
      type: Object as PropType<TimelineList>,
      required: true,
    },
  },
});
</script>

<style lang="postcss" scoped>
.timeline {
  @apply h-auto;
  @apply relative;
  @apply p-4;
  @apply my-4;
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
  @apply h-5;
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
