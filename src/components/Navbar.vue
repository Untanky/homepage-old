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
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: $primary;
  text-align: left;

  .link {
    display: inline-block;
    color: $text-on-primary;
    text-decoration: none;
    padding: 0.5em 1em;
    transition: background-color 0.5s ease;

    &:hover {
      background-color: $primary-variation1;
      transition: background-color 0.5s ease;
    }
  }
}
</style>
