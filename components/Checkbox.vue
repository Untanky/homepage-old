<template>
  <div class="checkbox-container">
    <input
      type="checkbox"
      class="checkbox"
      :id="id"
      :class="classes"
      :value="value"
      @input="$emit('input', $event.target.value)"
    >
    <label
      class="checkbox-label"
      :for="id"
    >
      {{label}}
    </label>
  </div>
</template>

<script>
export default {
  name: 'CheckBox',
  props: {
    id: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    value: {
      type: Boolean,
      default: () => false,
    },
  },
  computed: {
    classes() {
      return this.class;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
