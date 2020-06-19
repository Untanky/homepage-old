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
@import '../assets/scss/responsive';

h1.title {
  text-align: center;
  font-size: 48px;
  font-weight: 800;
  padding: 0;
  margin: 2em 0 2em 0;

  @include tablet-up {
    margin-top: 0;
  }
}
</style>
