<template>
  <div class="post-image-content">
    <img
      class
      :src="content.src"
      :alt="content.alt"
    >
  </div>
</template>

<script>
export default {
  name: 'PostImageContent',
  props: {
    content: {
      type: Object,
      required: true,
      default: () => ({
        src: 'https://www.pride.com/sites/www.pride.com/files/styles/vertical_gallery_desktop_1x/public/2018/06/13/01-pride_flags.jpg?itok=W2cQgupQ&timestamp=1528927091',
        alt: 'Default Image',
      }),
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../_variables";

.post-image-content {
  img {
    width: 100%;
    border: $thin-border-primary;
    border-radius: $border-radius;
  }
}
</style>
