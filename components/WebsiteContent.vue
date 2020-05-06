<template>
  <card
      class="website-content"
      :footer-border="false"
    >
      <template
        slot="header"
      >
        <h3>
          {{ heading }}
        </h3>
      </template>

      <slot />

      <template
        slot="footer"
      >
        <slot name="footer" />
        <nuxt-link
          class="primary action"
          :to="linkPath"
        >
          <span class="material-icons">
            remove_red_eye
          </span>
          View
        </nuxt-link>
      </template>
    </card>
</template>

<script>
import Card from './Card.vue';

export default {
  name: 'WebsiteContent',
  components: {
    Card,
  },
  props: {
    heading: {
      type: String,
      required: true,
      default: () => 'Title',
    },
    linkPath: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
@import "../assets/scss/variables";
@import "../assets/scss/landing-page";

.website-content {
  max-width: $landing-page-width;
  text-align: left;
  margin: 1em auto 0;

  header {
    h3 {
      margin: 0;
    }
  }

  footer {
    display: flex;
    justify-content: flex-end;
    text-align: left;

    .action {
      display: inline-block;
      color: inherit;
      text-decoration: none;
      padding: 0.25em 1em;
      border: $thin-border-primary;
      border-radius: $border-radius / 2;
      box-shadow: $shadow;
      transition: 0.25s linear box-shadow;

      &:hover {
        box-shadow: $hover-shadow;
        transition: 0.25s linear box-shadow;
      }

      &.primary {
        background-color: $primary;
        color: white;
      }

      &:not(:last-child) {
        margin-right: 1em;
      }

      .material-icons {
        vertical-align: middle;
        margin-right: 0.25em;
      }
    }
  }
}
</style>
