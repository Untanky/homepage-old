<template lang="pug">
  .px-4.py-2.rounded-md
    gb-flag.mr-2(:code="flag" size="mini")
    span
      slot
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'LanguageDisplay',
  props: {
    flag: {
      type: String,
      required: true,
    },
  },
});
</script>
