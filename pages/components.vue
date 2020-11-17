<template lang="pug">
  rich-link(linkUrl="https://www.google.com" title="GitHub" text="Untanky" imageUrl="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png")
</template>

<script lang="ts">
import Vue from 'vue';
import RichLink from '../components/RichLink.vue';

export default Vue.extend({
  components: {
    RichLink,
  },
});
</script>
