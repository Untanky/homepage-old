<template>
  <LinkPreview
    class="social-item"
    :href="social.link"
    :image-url="social.imageURI"
    image-alt-text="network"
    image-class="logo"
  >
    <h3 class="network-name">
      {{ social.network }}
    </h3>
    <div class="handle">
      <a :href="social.link">{{ social.handle }}</a>
    </div>
  </LinkPreview>
</template>

<script>
import LinkPreview from './LinkPreview.vue';

export default {
  name: 'SocialItem',
  components: {
    LinkPreview,
  },
  props: {
    social: {
      type: Object,
      default: () => {},
      required: true,
    },
  },
};
</script>

<style lang="scss">
@import "../_variables";
$logo-size: 96px;

.social-item {
  .logo {
    height: $logo-size;
    padding: 1em;
  }
}
</style>
