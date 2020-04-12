<template>
  <div
    v-if="caption"
    class="caption"
  >
    <span
      v-if="type"
    >
      {{ type }}:
    </span>
    {{ caption }}
  </div>
</template>

<script>
export default {
  name: 'Caption',
  props: {
    caption: {
      type: String,
      required: true,
      default: () => 'Default caption',
    },
    type: {
      type: String,
      required: false,
      default: () => null,
    },
  },
};
</script>

<style lang="scss" scoped>
.caption {
  color: rgb(100, 100, 100);
  font-size: 14px;
  margin: 0 1em;
}
</style>
