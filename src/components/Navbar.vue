<template>
  <nav class="navbar">
    <router-link
      class="link"
      to="/"
    >
      Home
    </router-link>
    <router-link
      class="link"
      to="/portfolio"
    >
      Portfolio
    </router-link>
    <router-link
      class="link"
      to="/projects"
    >
      Projects
    </router-link>
    <router-link
      class="link"
      to="/socials"
    >
      Socials
    </router-link>
    <router-link
      class="link"
      to="/contact"
    >
      Contact
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
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: white;
  text-align: left;
  border-bottom: 4px solid $primary;
  box-shadow: $shadow;
  z-index: 1;

  .link {
    display: inline-block;
    color: $text-on-primary;
    text-decoration: none;
    text-align: left;
    padding: 1em 2em;
    transition: background-color 0.5s ease;

    &:hover {
      background-color: $background-color;
      transition: background-color 0.5s ease;
    }
  }
}
</style>
