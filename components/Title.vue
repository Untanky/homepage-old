<template>
  <h1 class="title">
    <slot />
  </h1>
</template>

<script>
export default {
  name: 'Title',
};
</script>

<style lang="scss" scoped>
h1.title {
  text-align: center;
  font-size: 48px;
  font-weight: 800;
  padding: 0;
  margin: 0em 0 2em 0;
}
</style>
