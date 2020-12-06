<template lang="pug">
  .stacked-text.flex.flex-col
    div(v-for="formattedText, index in formattedTexts" :key="index" :class="formattedText.classes") {{ formattedText.text }}
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import FormattedText from '../src/FormattedText';

export default Vue.extend({
  name: 'StackedText',
  props: {
    formattedTexts: {
      type: Array as PropType<Array<FormattedText>>,
      required: true,
    },
  },
});
</script>
