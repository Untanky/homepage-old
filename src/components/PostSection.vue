<template>
  <div
    class="post-section"
    :class="{ [layout]: true }"
  >
    <component
      :is="component(data.type)"
      v-for="(data, index) in content"
      :key="index"
      :content="data"
    />
  </div>
</template>

<script>
import { MediaTypes } from './ProjectPost.vue';

export default {
  name: 'PostSection',
  props: {
    layout: {
      type: String,
      required: true,
      default: () => 'single',
      validator(value) {
        return (value === 'single' || value === 'double' || value === 'full');
      },
    },
    type: {
      type: String,
      required: true,
      default: () => 'TEXT',
    },
    content: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  methods: {
    component(type) {
      switch (type) {
        case MediaTypes.SECTION:
          return 'post-section-title';
        case MediaTypes.TEXT:
          return 'post-text-content';
        case MediaTypes.VIDEO:
          return 'post-video-content';
        case MediaTypes.IMAGE:
          return 'post-image-content';
        case MediaTypes.CODE:
          return 'post-code-content';
        case MediaTypes.LINK:
          return 'post-link-content';
        default:
          return '';
      }
    },
  },
};
</script>

<style lang="scss" scoped>
$single-width: 600px;
$double-width: 900px;

.post-section {
  margin: 0.5em auto;

  &.single {
    max-width: $single-width;
  }

  &.full {
    max-width: $double-width;
  }

  &.double {
    display: flex;
    max-width: $double-width;

    > :nth-child(1), > :nth-child(2) {
      box-sizing: border-box;
      align-self: center;
      display: inline-block;
      width: 50%;
    }

    > :nth-child(1) {
      padding-right: 1em;
    }

    > :nth-child(2) {
      padding-left: 1em;
    }
  }
}
</style>
