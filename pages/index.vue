<template lang="pug">
  p {{text}}
</template>

<script lang="ts">
// eslint-disable-next-line import/no-extraneous-dependencies
import Vue from 'vue';

export default Vue.extend({
  data: () => ({
    text: 'Hello World',
  }),
});
</script>
