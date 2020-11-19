<template lang="pug">
  div
    .text-xl.font-bold {{element.title}}
    .italic {{element.subtitle}}
    .text-gray-600 {{element.description}}
</template>

<script lang="ts">
import Vue from 'vue';
import TimelineElement from '~/src/TimelineElement';

export default Vue.extend({
  name: 'StackedExperienceText',
  props: {
    element: {
      type: TimelineElement,
      required: true,
    },
  },
});
</script>
