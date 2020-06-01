<template>
  <div class="root">
    <navbar />
    <nuxt class="wrapper" />
    <legal-footer />
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import LegalFooter from '../components/LegalFooter.vue';

export default {
  components: {
    Navbar,
    LegalFooter,
  },
};
</script>

<style lang="scss">
@import "../assets/scss/variables";
@import "../assets/scss/responsive";

html {
  font-family: 'Open Sans', 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  text-align: center;

  body {
    background-color: $background-color;
  }
}

.root {
  margin-bottom: 72px;

  @include tablet-up {
    margin-bottom: 0;
  }

  .wrapper {
    min-height: 100vh;

    @include tablet-up {
      margin-top: 8em;
      margin-bottom: 6em;
    }
  }
}
</style>
