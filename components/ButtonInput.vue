<template>
  <button
    @click="$emit('click')"
    class="button"
    type="button"
    :class="classes"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>

<script>
import classNames from 'classnames';

export default {
  name: 'InputButton',
  props: {
    type: {
      type: String,
      default: () => 'primary',
      validator: (value) => value === 'gradient' || value === 'primary' || value === 'secondary' || value === 'outline-primary' || value === 'outline-secondary',
    },
    disabled: {
      type: Boolean,
      default: () => false,
    },
  },
  computed: {
    classes() {
      return classNames(this.type);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables";

.button {
  font-size: 20px;
  padding: 0.5em 2em;
  border: none;
  border-radius: $border-radius;
  box-shadow: $shadow;
  outline: none;
  transition: 0.25s linear box-shadow, 0.25s linear background-color;

  &:hover {
    cursor: pointer;
    box-shadow: $hover-shadow;
    transition: 0.25s linear box-shadow, 0.25s linear background-color;
  }

  &.gradient {
    background-color: transparent;
    background-blend-mode: overlay;
    background: $primary-secondary-gradient;

    &:hover {
      background-color: rgb(163, 163, 163);
    }

    &:disabled {
      cursor: unset;
      box-shadow: $collapsed-shadow;
      background-color: rgb(100, 100, 100);
    }
  }

  &.primary {
    background-color: $primary;

    &:hover {
      background-color: $primary-variation1;
    }
  }

  &.secondary {
    background-color: $secondary;

    &:hover {
      background-color: $secondary-variation1;
    }
  }

  &.outline-primary {
    background-color: transparent;
    border: 2px solid $primary;
    transition: 0.25s linear box-shadow, 0.25s linear border-color;

    &:hover {
      border-color: $primary-variation1;
      transition: 0.25s linear box-shadow, 0.25s linear border-color;
    }
  }

  &.outline-secondary {
    background-color: transparent;
    border: 2px solid $secondary;
    transition: 0.25s linear box-shadow, 0.25s linear border-color;

    &:hover {
      border-color: $secondary-variation1;
      transition: 0.25s linear box-shadow, 0.25s linear border-color;
    }
  }

  &:disabled {
    cursor: unset;
    box-shadow: $collapsed-shadow;
    background-color: rgb(212, 212, 212);
    border-color: rgb(161, 161, 161);
    transition: 0.25s linear box-shadow, 0.25s linear background-color;

    &:hover {
      background-color: rgb(212, 212, 212);
      border-color: rgb(161, 161, 161);
    }
  }
}
</style>
