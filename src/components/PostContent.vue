<template>
  <component
    :is="component"
    :content="content"
  />
</template>

<script>
// eslint-disable-next-line no-unused-vars
const MediaTypes = {
  SECTION: 'TITLE',
  TEXT: 'TEXT',
  VIDEO: 'YOUTUBE_VIDEO',
  IMAGE: 'IMAGE',
  CODE: 'CODE',
  LINK: 'LINK',
};

export default {
  name: 'PostContent',
  props: {
    type: {
      type: String,
      default: () => 'TEXT',
    },
    content: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    component(type) {
      switch (type) {
        case MediaTypes.SECTION:
          return 'post-section-title';
        case MediaTypes.TEXT:
          return 'post-text-content';
        case MediaTypes.VIDEO:
          return 'post-video-content';
        case MediaTypes.IMAGE:
          return 'post-image-content';
        case MediaTypes.CODE:
          return 'post-code-content';
        case MediaTypes.LINK:
          return 'post-link-content';
        default:
          return '';
      }
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
