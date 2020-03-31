<template>
  <LinkPreview
    class="social-item"
    :href="social.link"
    :image-url="social.imageURI"
    image-alt-text="network"
    image-class="logo"
  >
    <div class="network-name">
      <b>{{ social.network }}</b>
    </div>
    <div class="handle">
      {{ social.handle }}
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
  max-width: 360px;

  .logo {
    height: $logo-size;
    padding: 1em;
  }

  .network-name {
    margin-bottom: 0.25em;
  }

  .handle {
    margin-top: 0.25em;
  }
}
</style>
