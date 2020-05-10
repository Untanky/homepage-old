<template>
  <span
    class="badge"
    :class="type"
  >
    <slot />
  </span>
</template>

<script>
const allowedTypes = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  BLACK: 'black',
  WHITE: 'white',
};

export default {
  name: 'Badge',
  props: {
    type: {
      type: String,
      required: false,
      default: () => 'primary',
      validator: (value) => Object.values(allowedTypes).includes(value),
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables";

.badge {
  display: inline-block;
  width: auto;
  padding: 0.125em 1em;
  border-radius: $border-radius;
  box-shadow: $shadow;

  &.primary {
    background-color: $primary;
    color: $text-on-primary;
  }

  &.secondary {
    background-color: $secondary;
    color: $text-on-secondary;
  }

  &.black {
    background-color: black;
    color: white;
  }

  &.white {
    background-color: white;
    color: black;
  }
}
</style>
