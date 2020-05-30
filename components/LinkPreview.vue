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
      default: () => '',
    },
    imageUrl: {
      type: String,
      required: true,
      default: () => '',
    },
    imageAltText: {
      type: String,
      required: true,
      default: () => '',
    },
    imageClass: {
      type: String,
      required: false,
      default: () => '',
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables";
$logo-size: 96px;

.link-preview {
  height: $logo-size;
  display: grid;
  grid-template-columns: $logo-size 1fr;
  gap: 2em;
  background-color: transparent;
  background-blend-mode: overlay;
  background: $primary-secondary-gradient;
  border-radius: $border-radius;
  margin: 0 auto;
  box-shadow: $shadow;
  text-decoration: none;
  transition: 0.25s ease-in-out box-shadow, 0.25s ease-in-out background-color;

  &:hover {
    background-color: rgb(163, 163, 163);
    box-shadow: $hover-shadow;
    transition: 0.25s ease-in-out box-shadow, 0.25s ease-in-out background-color;

    .link-image {
      filter: brightness(1.2);
      transition: 0.25s ease-in-out filter;
    }
  }

  .link-image {
    box-sizing: border-box;
    height: $logo-size;
    background: white;
    padding: 1em;
    border-radius: $border-radius;
    transition: 0.25s ease-in-out filter;
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
