<template>
  <div class="text-input-container">
    <label
      class="text-input-label"
      :for="id"
    >
      {{label}}
    </label>
    <input
      v-if="rows === 1"
      type="text"
      class="text-input"
      :class="classes"
      :placeholder="placeholder"
    >
    <textarea
      v-else
      class="text-input"
      :class="classes"
      :placeholder="placeholder"
      :style="style"
    />
  </div>
</template>

<script>
export default {
  name: 'TextInput',
  props: {
    id: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    class: {
      type: String,
      default: () => '',
    },
    fullWidth: {
      type: Boolean,
      default: () => false,
    },
    rows: {
      type: Number,
      default: () => 1,
    },
  },
  computed: {
    classes() {
      return this.class + this.fullWidth ? 'full-width' : '';
    },
    style() {
      return `height: ${(this.rows) * 22}px;`;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables";

.text-input-container {
  width: 100%;

  .text-input-label {
    padding: 0.25em 1em;
    display: block;
    border-radius: $border-radius;
  }

  .text-input {
    font-size: 16px;
    padding: 1em 1em;
    border: 1px solid $primary;
    border-radius: $border-radius;
    outline: none;
    resize: none;

    &.full-width {
      box-sizing: border-box;
      width: 100%;
    }

    &:focus {
      border: 1px solid $secondary;
    }
  }
}
</style>
