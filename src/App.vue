<template>
  <div id="app">
    <Navbar />
    <router-view class="main-view" />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  name: 'App',
  components: {
    Navbar,
  },
};
</script>

<style lang="scss">
@import "./_variables";

body {
  background-color: rgb(245, 245, 245);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  .main-view {
    margin-top: 96px;
  }
}
</style>
