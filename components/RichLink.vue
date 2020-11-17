<template lang="pug">
  a.flex.flex-col.p-4.items-center.justify-between.group(:href="linkUrl" :title="linkAltText")
    img.w-16.h-16(:src="imageUrl" :alt="linkAltText")
    .text-xl {{title}}
    div(class="after:chevron") {{text}}
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'RichLink',
  props: {
    title: String,
    text: String,
    imageUrl: String,
    linkUrl: String,
  },
  computed: {
    linkAltText(): string {
      return `${this.title} - ${this.text}`;
    },
  },
});
</script>
