<template>
  <nav class="navbar">
    <nuxt-link
      active-class="active"
      class="link"
      to="/"
    >
      <span class="material-icons-outlined">home</span>
      <span class="text">Home</span>
    </nuxt-link>
    <nuxt-link
      active-class="active"
      class="link"
      to="/portfolio"
    >
      <span class="material-icons-outlined">list_alt</span>
      <span class="text">Portfolio</span>
    </nuxt-link>
    <nuxt-link
      active-class="active"
      class="link"
      to="/blog"
    >
      <span class="material-icons-outlined">keyboard</span>
      <span class="text">Projects</span>
    </nuxt-link>
    <nuxt-link
      active-class="active"
      class="link"
      to="/social"
    >
      <span class="material-icons-outlined">people</span>
      <span class="text">Social</span>
    </nuxt-link>
    <nuxt-link
      active-class="active"
      class="link"
      to="/contact"
    >
      <span class="material-icons-outlined">more</span>
      <span class="text">Contact</span>
    </nuxt-link>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables";
@import "../assets/scss/responsive";

.navbar {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: white;
  text-align: center;
  border-top: $thick-border-primary;
  z-index: 1;

  @include tablet-up {
    display: block;
    top: 0;
    bottom: unset;
    text-align: left;
    border-top: unset;
    border-bottom: $thick-border-primary;
  }

  .link {
    display: inline-block;
    color: $text-on-primary;
    text-decoration: none;
    padding: 0.5em 0;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently */
    transition: background-color 0.5s ease;

    @include tablet-up {
      padding: 0.75em 1.5em;

      .material-icons-outlined {
        vertical-align: text-bottom;
        margin-right: 0.25em;
      }
    }

    &:hover {
      background-color: $background-color;
      transition: background-color 0.5s ease;
    }

    &.active-exact {
      background-color: $primary-variation2;
    }

    .text {
      font-size: 12px;
      @include tablet-up {
        font-size: 18px;
        font-weight: 600;
      }
    }

    .material-icons-outlined, .text {
      display: block;

      @include tablet-up {
        display: inline;
      }
    }
  }
}
</style>
