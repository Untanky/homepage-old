<template>
  <LinkPreview
    class="post-link-content"
    :href="content.link"
    :image-url="content.imageUrl"
    :image-alt-text="content.imageAltText"
  >
    <div class="link-title"><b>{{ content.title }}</b></div>
    <div class="link-text">{{ content.text }}</div>
  </LinkPreview>
</template>

<script>
import LinkPreview from '../LinkPreview.vue';

export default {
  name: 'PostContentLink',
  components: {
    LinkPreview,
  },
  props: {
    content: {
      type: Object,
      required: true,
      default: () => ({}),
    },
  },
};
</script>

<style lang="scss" scoped>
.post-link-content {
  .link-title {
    margin-top: 1em;
    margin-bottom: 0.25em;
  }

  .link-text {
    margin-top: 0.25em;
    margin-bottom: 1em;
  }
}
</style>
