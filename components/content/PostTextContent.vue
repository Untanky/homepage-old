<template>
  <p>
    {{ content.text }}
  </p>
</template>

<script>
export default {
  name: 'PostTextContent',
  props: {
    content: {
      type: Object,
      default: () => 'Lorem ipsum',
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
