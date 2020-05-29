<template>
  <ul class="strength-list">
    <li
      v-for="(sublist, category) of strengths"
      :key="category"
    >
      <h3 class="sublist-heading">
        {{ sublist.title }}
      </h3>
      <ul
        class="sublist"
      >
        <li
          v-for="(strength, index) in sublist.list"
          :key="index"
          class="sublist-item"
        >
          <b
            class="strength-name"
          >
            {{ strength.name }}
          </b>
          <span
            class="strength-description"
          >
            {{ strength.description }}
          </span>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'StrengthList',
  props: {
    strengths: {
      type: Object,
      required: true,
      default: () => {},
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables";

.strength-list {
  padding: 0 1em;
  list-style: none;

  > li {
    &:not(:last-child) {
      margin-bottom: 1em;
    }
  }

  .sublist-heading {
    padding: 8px;
    margin-block-start: 0;
    margin-block-end: 0;
  }

  .sublist {
    padding: 0;
    list-style: none;

    .sublist-item {
      background-color: $primary-variation1;
      padding: 0.5em;
      border-radius: 8px;
      margin-top: 0.5em;
      box-shadow: $collapsed-shadow;
    }
  }
}
</style>
