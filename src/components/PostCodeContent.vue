<template>
  <div class="post-code-content">
    <highlight-code
      class="code"
      :lang="content.language"
    >
      {{ content.code }}
    </highlight-code>
  </div>
</template>

<script>
export default {
  name: 'PostCodeContent',
  props: {
    content: {
      type: Object,
      required: true,
      default: () => {},
    },
  },
};
</script>

<style lang="scss">
@import "../_variables.scss";

.post-code-content {
  .code {
    .hljs {
      padding: 1.5em;
      border-radius: $border-radius;
    }
  }
}
</style>
