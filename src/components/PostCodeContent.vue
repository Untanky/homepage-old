<template>
  <div class="post-code-content">
    <highlight-code
      class="code"
      :lang="content.language"
    >
      {{ content.code }}
    </highlight-code>
    <Caption
      class="caption"
      type="Code"
      :caption="content.caption"
    />
  </div>
</template>

<script>
import Caption from './Caption.vue';

export default {
  name: 'PostCodeContent',
  components: {
    Caption,
  },
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

  .caption {
    margin-top: -0.75em;
  }
}
</style>
