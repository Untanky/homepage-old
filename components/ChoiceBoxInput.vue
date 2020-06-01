<template>
  <div class="choice-box-container">
    <label
      class="choice-box-label"
      :for="id"
    >
      {{ label }}
    </label>
    <select
      class="choice-box"
      :id="id"
      :value="value"
      @change="$emit('change', $event.target.value)"
    >
      <option
        v-for="(value, index, key) in choices"
        class="choice"
        :key="key"
        :value="value.code"
      >
        {{ value.name }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'ChoiceBoxInput',
  props: {
    value: {
      type: String,
      default: () => this.$i18n.locale,
    },
    choices: {
      type: Array,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables";

.choice-box {
  appearance: none;
  outline: none;
  padding: 1em 2em 1em 1em;
  border: $border-primary;
  border-radius: $border-radius;
  background-image: url("~@/assets/img/arrow.svg");
  background-repeat: no-repeat, repeat;
  background-position: right .7em top 50%, 0 0;
  background-size: .65em auto, 100%;;
}
</style>
