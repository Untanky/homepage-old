<template>
  <div
    class="post-section"
    :class="{ [type]: true }"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'PostSection',
  props: {
    type: {
      type: String,
      required: true,
      default: () => 'single',
      validator(value) {
        return (value === 'single' || value === 'double');
      },
    },
  },
};
</script>

<style lang="scss" scoped>
$single-width: 600px;
$double-width: 900px;

.post-section {
  margin: 0.5em auto;

  &.single {
    max-width: $single-width;
  }

  &.double {
    display: flex;
    max-width: $double-width;

    :nth-child(1), :nth-child(2) {
      box-sizing: border-box;
      align-self: center;
      display: inline-block;
      width: 50%;
    }

    :nth-child(1) {
      padding-right: 1em;
    }

    :nth-child(2) {
      padding-left: 1em;
    }
  }
}
</style>
