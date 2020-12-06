<template lang="pug">
  .stacked-text.flex.flex-col.h-full(:class="data.stackedTextOptions.classes")
    div(v-for="formattedText, index in data.formattedTexts" :key="index" :class="formattedText.classes") {{ formattedText.text }}
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { FormattedText } from '../src/components';

export default Vue.extend({
  name: 'StackedText',
  props: {
    data: {
      type: Object as PropType<FormattedText>,
      required: true,
    },
  },
});
</script>
