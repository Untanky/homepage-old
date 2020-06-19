<i18n>
{
  "en": {
    "view": "View"
  },
  "de": {
    "view": "Anschauen"
  }
}
</i18n>

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
          {{ $t('view') }}
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
  margin: 3em auto 0;

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
      background-color: transparent;
      background-blend-mode: overlay;
      text-decoration: white;
      padding: 0.5em 2em;
      border-radius: $border-radius;
      box-shadow: $shadow;
      transition: 0.25s linear box-shadow, 0.25s ease-in-out background-color;

      &:hover {
        box-shadow: $hover-shadow;
        transition: 0.25s linear box-shadow, 0.25s ease-in-out background-color;
      }

      &.primary {
        background: $primary-secondary-gradient;
        // background-color: $primary;
        color: $text-on-primary;

        &:hover {
          background-color: rgb(163, 163, 163);
        }
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
