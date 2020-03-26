<template>
  <div class="post-link-content">
    <linxios :url="content.link">
      <div slot-scope="{ state, actions }">
        <div>{{ state }} /// {{ actions }}</div>
      </div>
    </linxios>
  </div>
</template>

<script>
import { Linxios } from '@webdataorg/linxios-vue';

export default {
  name: 'PostContentLink',
  components: {
    Linxios,
  },
  props: {
    content: {
      type: Object,
      required: true,
      default: () => ({}),
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
