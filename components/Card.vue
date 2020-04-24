<template>
  <section class="card">
    <header
      :class="{ 'has-border': headerBorder }"
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
  background-color: white;
  border-radius: $border-radius;
  box-shadow: $shadow;

  > * {
    padding: 1em;
  }

  header {
    &.has-border {
      border-bottom: $border-primary;
    }

    &:not(.has-border) {
      padding-bottom: 0;
    }
  }

  footer {
    &.has-border {
      border-top: $border-primary;
    }

    &:not(.has-border) {
      padding-top: 0;
    }
  }
}
</style>
