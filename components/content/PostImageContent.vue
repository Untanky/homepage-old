<template>
  <div class="post-image-content">
    <img
      class="image"
      :src="content.src"
      :alt="content.alt"
    >
    <Caption
      type="Image"
      :caption="content.caption"
    />
  </div>
</template>

<script>
import Caption from '../Caption.vue';

export default {
  name: 'PostImageContent',
  components: {
    Caption,
  },
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
@import "../../assets/scss/variables";

.post-image-content {
  .image {
    width: 100%;
    border-radius: $border-radius;
    box-shadow: $shadow;
  }
}
</style>
