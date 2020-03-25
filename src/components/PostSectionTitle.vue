<template>
  <h2 class="post-section-title">
    {{ content.title }}
  </h2>
</template>

<script>
export default {
  name: 'PostSectionTitle',
  props: {
    content: {
      type: Object,
      default: () => 'Lorem ipsum',
    },
  },
};
</script>

<style>
.post-section-title {
  text-align: center;
  font-size: 32px;
}
</style>
