<template lang="pug">
  .card.relative
    .card__title(v-if="title") {{ title }}
    slot
    div.h-8(v-if="linkText")
    a.card-link(v-if="linkText" :href="linkUrl")
      div.card-link__text(class="after:chevron hover:underline") {{ linkText }}

</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Card',
  props: {
    title: {
      type: String,
      required: false,
      default: () => '',
    },
    linkUrl: {
      type: String,
      required: false,
      default: () => null,
    },
    linkText: {
      type: String,
      required: false,
      default: () => null,
    },
  },
});
</script>

<style lang="postcss" scoped>

.card-link {
  @apply absolute;
  @apply w-full;
  @apply h-16;
  @apply bottom-0;
  @apply left-0;
  @apply rounded-lg;
  @apply bg-gradient-to-t;
  @apply from-white;
  @apply via-white;
  @apply to-transparent;
  /* @apply after\:chevron; */
}

.card-link__text {
  @apply text-link-500;
  @apply text-center;
  @apply cursor-pointer;
  @apply pt-8;
}
</style>
