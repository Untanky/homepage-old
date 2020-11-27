<template lang="pug">
  .group.inline-flex.flex-col.divide-y-2.divide-gray-400
    .rounded-md.bg-gray-200(class="group-hover:rounded-b-none")
        language-display(:flag="currentLocale.flag") {{ currentLocale.name }}
    div(class="group-hover:inline-block hidden rounded-b-md bg-gray-200")
      nuxt-link.block(v-for="locale in availableLocales" :key="locale.code" :to="switchLocalePath(locale.code)") 
        language-display(:flag="locale.flag" class="hover:bg-gray-300") {{ locale.name }}
</template>

<script lang="ts">
import Vue from 'vue';
import LanguageDisplay from './LanguageDisplay.vue';

export default Vue.extend({
  name: 'LangSwitcher',
  components: {
    LanguageDisplay,
  },
  data: () => ({
    expanded: false,
  }),
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
