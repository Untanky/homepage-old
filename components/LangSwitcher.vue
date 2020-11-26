<template lang="pug">
  .group
    div.p-2.rounded-md.bg-gray-300.inline-block(class="active:rounded-t-0")
      gb-flag.mr-1(:code="currentLocale.flag" size="mini")
      span {{ currentLocale.name }}
    nuxt-link.p-2.rounded-md.bg-gray-300.inline-block(v-for="locale in availableLocales" :key="locale.code" :to="switchLocalePath(locale.code)") 
      gb-flag(:code="locale.flag" size="mini")
      span {{ locale.name }}
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'LangSwitcher',
  computed: {
    currentLocale() {
      if (!this.$i18n.locales) return this.$i18n.fallbackLocale;
      return this.$i18n.locales.find((locale) => (typeof locale === 'string' ? locale : locale.code) === this.$i18n.locale);
    },
    availableLocales() {
      if (!this.$i18n.locales) return this.$i18n.fallbackLocale;
      return this.$i18n.locales.filter((locale) => (typeof locale === 'string' ? locale : locale.code) !== this.$i18n.locale);
    },
  },
});
</script>
