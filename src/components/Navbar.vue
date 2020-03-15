<template>
  <nav class="navbar">
    <router-link
      active-class="active"
      class="link"
      to="/"
    >
      Home
    </router-link>
    <router-link
      active-class="active"
      class="link"
      to="/portfolio"
    >
      Portfolio
    </router-link>
    <router-link
      active-class="active"
      class="link"
      to="/projects"
    >
      Projects
    </router-link>
    <router-link
      active-class="active"
      class="link"
      to="/socials"
    >
      Socials
    </router-link>
    <router-link
      active-class="active"
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
  background-color: white;
  text-align: left;
  border-bottom: $thick-border-primary;
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

    &.active-exact {
      background-color: $primary-variation2;
    }
  }
}
</style>
