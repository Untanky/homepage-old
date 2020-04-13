<template>
  <div class="website-content">
    <div class="content-header">
      <h3>{{ heading }}</h3>
    </div>
    <div class="content-body">
      <slot />
    </div>
    <div class="content-footer">
      <nuxt-link
        class="primary action"
        to="/portfolio"
      >
        <span class="material-icons">
          remove_red_eye
        </span>
        View
      </nuxt-link>
      <a
        class="action"
        href="#"
      >
        <span class="material-icons">
          cloud_download
        </span>
        Download
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WebsiteContent',
  props: {
    heading: {
      type: String,
      required: true,
      default: () => 'Title',
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables";
@import "../assets/scss/landing-page";

.website-content {
  box-sizing: border-box;
  max-width: $landing-page-width;
  background-color: white;
  border-radius: $border-radius;
  margin: 1em auto 0;
  box-shadow: $shadow;

  .content-header {
    padding: 1em;
    text-align: left;
    border-bottom: $border-primary;

    h3 {
      margin: 0;
    }
  }

  .content-body {
    padding: 1em 1em 0.25em;
    text-align: left;

    h3 {
      margin: 0;
    }
  }

  .content-footer {
    display: flex;
    justify-content: flex-end;
    padding: 0.25em 1em 1em;
    text-align: left;

    .action {
      display: block;
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
