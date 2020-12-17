<i18n>
{
  "en": {
    "timeline": {
      "now": "now"
    }
  },
  "de": {
    "timeline": {
      "now": "zurzeit"
    }
  }
}
</i18n>

<template lang="pug">
  .timeline-event(:class="{ active: element.active }")
    .text-xl.font-medium {{ dateString }}
    slot
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { TimelineEntry } from '../src/components';

const DATE_FORMAT = { month: 'long', year: 'numeric' };

export default Vue.extend({
  name: 'TimelineEvent',
  props: {
    element: {
      type: Object as PropType<TimelineEntry>,
      required: true,
    },
  },
  computed: {
    dateString(): string {
      const fromString = this.element.from
        .setLocale(this.$i18n.locale)
        .toLocaleString(DATE_FORMAT);
      const toString = this.formatToString();
      const optionalHyphen = toString !== '' ? ' - ' : '';

      return `${fromString}${optionalHyphen}${toString}`;
    },
  },
  methods: {
    formatToString(): string {
      if (this.element.active) {
        return this.$i18n.t('timeline.now').toString();
      }

      if (this.element.to) {
        return this.element.to
          .setLocale(this.$i18n.locale)
          .toLocaleString(DATE_FORMAT);
      }

      return '';
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
  @apply bg-gradient-to-r;
  @apply from-primary-500;
  @apply to-secondary-500;
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
  @apply text-primary-500;
  @apply font-black;
  @apply text-2xl;
  @apply top-0.25;
  @apply left-2;
}
</style>
