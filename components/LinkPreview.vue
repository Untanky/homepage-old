<template>
  <a
    class="link-preview"
    :href="href"
  >
    <img
      class="link-image"
      :src="imageUrl"
      :alt="imageAltText"
      :class="imageClass"
    >
    <div class="wrapper">
      <slot
        class="content"
      />
    </div>
  </a>
</template>

<script>
export default {
  name: 'PreviewLink',
  props: {
    href: {
      type: String,
      required: true,
      default: () => ''
    },
    imageUrl: {
      type: String,
      required: true,
      default: () => ''
    },
    imageAltText: {
      type: String,
      required: true,
      default: () => ''
    },
    imageClass: {
      type: String,
      required: false,
      default: () => ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables";
$logo-size: 96px;

.link-preview {
  height: $logo-size;
  display: grid;
  grid-template-columns: $logo-size 1fr;
  gap: 2em;
  background-color: white;
  border-left: $border-primary;
  border-radius: $border-radius;
  margin: 0 auto;
  box-shadow: $shadow;
  text-decoration: none;

  .link-image {
    box-sizing: border-box;
    height: $logo-size;
    padding: 0.5em;
    border-top: $border-primary;
    border-bottom: $border-primary;
    border-radius: $border-radius 0 0 $border-radius;
  }

  .wrapper {
    text-align: left;
    align-self: center;

    * {
      color: initial;
    }
  }
}
</style>
