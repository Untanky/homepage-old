<template>
  <div class="social-item">
    <img
      class="social-logo"
      :src="social.imageURI"
      :alt="network"
    >
    <div class="wrapper">
      <h3 class="network-name">
        {{ social.network }}
      </h3>
      <div class="handle">
        <a :href="social.link">{{ social.handle }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SocialItem',
  props: {
    social: {
      type: Object,
      default: () => {},
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../_variables";
$logo-size: 96px;

.social-item {
  max-width: 360px;
  height: $logo-size;
  display: grid;
  grid-template-columns: $logo-size 1fr;
  gap: 2em;
  background-color: white;
  border-left: $border-primary;
  border-radius: $border-radius;
  margin: 0 auto;
  box-shadow: $shadow;

  .social-logo {
    box-sizing: border-box;
    height: $logo-size;
    padding: 1em;
    border-top: $border-primary;
    border-bottom: $border-primary;
    border-radius: $border-radius 0 0 $border-radius;
  }

  .wrapper {
    text-align: left;
  }
}
</style>
