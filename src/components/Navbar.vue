<template>
  <nav class="navbar">
    <router-link
      active-class="active"
      class="link"
      to="/"
    >
      <span class="material-icons">home</span>
      <span class="text">Home</span>
    </router-link>
    <router-link
      active-class="active"
      class="link"
      to="/portfolio"
    >
      <span class="material-icons">list_alt</span>
      <span class="text">Portfolio</span>
    </router-link>
    <router-link
      active-class="active"
      class="link"
      to="/projects"
    >
      <span class="material-icons">keyboard</span>
      <span class="text">Projects</span>
    </router-link>
    <router-link
      active-class="active"
      class="link"
      to="/socials"
    >
      <span class="material-icons">people</span>
      <span class="text">Socials</span>
    </router-link>
    <router-link
      active-class="active"
      class="link"
      to="/contact"
    >
      <span class="material-icons">more</span>
      <span class="text">Contact</span>
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
@import "../responsive.scss";

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

      .material-icons {
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
      }
    }

    .material-icons, .text {
      display: block;

      @include tablet-up {
        display: inline;
      }
    }
  }
}

// .navbar {
//   display: block;
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   background-color: white;
//   text-align: left;
//   border-bottom: $thick-border-primary;
//   box-shadow: $shadow;
//   z-index: 1;

//   .link {
//     display: inline-block;
//     color: $text-on-primary;
//     text-decoration: none;
//     text-align: left;
//     padding: 1em 2em;
//     transition: background-color 0.5s ease;

//     &:hover {
//       background-color: $background-color;
//       transition: background-color 0.5s ease;
//     }

//     &.active-exact {
//       background-color: $primary-variation2;
//     }
//   }
// }
</style>
