<template lang="pug">
  .timeline-event(:class="{ active: element.active }")
    .text-xl.font-medium {{element.date}}
    slot
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import TimelineElement from '../src/TimelineElement';

export default Vue.extend({
  name: 'TimelineEvent',
  props: {
    element: {
      type: Object as PropType<TimelineElement>,
      required: true,
    },
  },
});
</script>

<style lang="postcss" scoped>
.timeline-event {
  @apply py-2;
  @apply pr-4;
  @apply pl-12;
  @apply inline-block;
  @apply relative;
}

.timeline-event::after {
  content: "";
  @apply w-3;
  @apply h-3;
  @apply block;
  @apply absolute;
  @apply bg-red-500;
  @apply rounded-full;
  @apply top-4;
  @apply left-6;
}

.active::before {
  content: "›";
  @apply w-3;
  @apply h-3;
  @apply block;
  @apply absolute;
  @apply text-red-500;
  @apply font-black;
  @apply text-2xl;
  @apply top-0.25;
  @apply left-2;
}
</style>
