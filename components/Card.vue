<template>
  <section class="card">
    <header
      class="header"
    >
        <slot name="header" />
    </header>

    <div class="body">
      <slot />
    </div>

    <footer
      :class="{ 'has-border': footerBorder }"
    >
      <slot name="footer" />
    </footer>
  </section>
</template>

<script>
export default {
  name: 'Card',
  props: {
    headerBorder: {
      type: Boolean,
      required: false,
      default: () => true,
    },
    footerBorder: {
      type: Boolean,
      required: false,
      default: () => true,
    },
  },
};
</script>

<style lang="scss">
@import "../assets/scss/variables";

.card {
  box-sizing: border-box;
  background: white;
  border-radius: $border-radius;
  box-shadow: $shadow;

  > * {
    padding: 1em;
  }

  .header {
    background: $primary-secondary-gradient;
    border-radius: $border-radius $border-radius 0 0;
  }

  footer {
    &.has-border {
    }

    &:not(.has-border) {
      padding-top: 0;
    }
  }
}
</style>
