<template>
  <nav class="navbar">
    <router-link class="link" to="/">
      Home
    </router-link>
    <router-link class="link" to="/portfolio">
      Portfolio
    </router-link>
    <router-link class="link" to="/projects">
      Projects
    </router-link>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style lang="scss" scoped>
@import "../variables.scss";

.navbar {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: $primary;
  text-align: left;

  .link {
    display: inline-block;
    color: black;
    text-decoration: none;
    padding: 0.5em 1em;
  }
}
</style>
