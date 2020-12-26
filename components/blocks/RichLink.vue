<template>
  <a
    class="flex flex-col p-4 items-center justify-between group"
    :class="data.classes"
    :href="data.linkUrl"
    :title="linkAltText"
  >
    <img
      class="w-16 h-16"
      :src="data.imageUrl"
      :alt="linkAltText"
    />
    <div
      class="text-xl"
    >
      {{data.title}}
    </div>
    <div
      class="link after:chevron group-hover:underline"
    >
      {{data.text}}
    </div>
  </a>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import RichLink from '../../src/components/RichLink';

export default Vue.extend({
  name: 'RichLink',
  props: {
    data: Object as PropType<RichLink>,
  },
  computed: {
    linkAltText(): string {
      return `${this.data.title} - ${this.data.text}`;
    },
  },
});
</script>
