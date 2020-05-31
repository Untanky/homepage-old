<template>
  <nav class="navbar">
    <nuxt-link
      active-class="active"
      class="link"
      to="/"
    >
      <span class="material-icons-outlined">home</span>
      <span class="material-icons">home</span>
      <span class="text">Home</span>
    </nuxt-link>
    <nuxt-link
      active-class="active"
      class="link"
      to="/portfolio"
    >
      <span class="material-icons-outlined">list_alt</span>
      <span class="material-icons">list_alt</span>
      <span class="text">Portfolio</span>
    </nuxt-link>
    <nuxt-link
      active-class="active"
      class="link"
      to="/projects"
    >
      <span class="material-icons-outlined">keyboard</span>
      <span class="material-icons">keyboard</span>
      <span class="text">Projects</span>
    </nuxt-link>
    <nuxt-link
      active-class="active"
      class="link"
      to="/social"
    >
      <span class="material-icons-outlined">people</span>
      <span class="material-icons">people</span>
      <span class="text">Social</span>
    </nuxt-link>
    <nuxt-link
      active-class="active"
      class="link"
      to="/contact"
    >
      <span class="material-icons-outlined">more</span>
      <span class="material-icons">more</span>
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
  background: $primary-secondary-gradient;
  text-align: center;
  box-shadow: $shadow;
  z-index: 1;

  @include tablet-up {
    display: block;
    top: 0;
    bottom: unset;
    color: white;
    text-align: left;
  }

  .link {
    display: inline-block;
    // background-color: transparent;
    // background-blend-mode: overlay;
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

      .material-icons, .material-icons-outlined {
        vertical-align: text-bottom;
        margin-right: 0.25em;
      }
    }

    &:hover {
      background-color: rgba(240, 240, 240, 0.25);
      transition: background-color 0.5s ease;
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

    .material-icons {
      display: none;
    }

    &.exact-active {
      border-bottom: 2px solid black;

      .material-icons {
        display: block;
        text-decoration: unset;

        @include tablet-up {
          display: inline;
          text-decoration: none;
        }
      }

      .material-icons-outlined {
        display: none;
      }
    }
  }
}
</style>
