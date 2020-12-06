<template lang="pug">
  //- img.bottom-0(src="/img/profile.jpg")
  .w-full.h-full.bg-center.bg-cover(:style="backgroundImage")
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { FullImage } from '../src/components';

export default Vue.extend({
  name: 'FullImage',
  props: {
    data: {
      type: Object as PropType<FullImage>,
      required: true,
    },
  },
  computed: {
    backgroundImage() {
      return `background-image: url("${this.data.imageUrl}")`;
    },
  },
});
</script>
