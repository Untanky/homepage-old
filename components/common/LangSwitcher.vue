<template lang="pug">
  .lang-switcher
    select.bg-gray-200.pl-4.pr-6.py-2.rounded-md.border-gray-300.border.appearance-none(@change="changeLocale")
      option(v-for="locale in locales" :key="locale.code" :value="locale.code" :selected="locale.isSelected") {{ `${locale.flag}&nbsp;&nbsp;${locale.name}` }}
</template>

<script lang="ts">
import Vue from 'vue';

type SelectEvent = {
  target: HTMLSelectElement;
}

export default Vue.extend({
  name: 'LangSwitcher',
  methods: {
    changeLocale(event: SelectEvent) {
      this.$i18n.setLocale(event.target
        ? event.target.value
        : this.$i18n.fallbackLocale.toString());
    },
  },
  computed: {
    locales() {
      if (!this.$i18n.locales) return [];
      return this.$i18n.locales.map((locale) => {
        if (typeof locale === 'string') {
          return null;
        }

        return {
          isSelected: locale.code === this.$i18n.locale,
          ...locale,
        };
      });
    },
  },
});
</script>

<style lang="postcss">
.lang-switcher {
  @apply inline;
  @apply relative;
}

.lang-switcher::before {
  content: "›";
  @apply block;
  @apply absolute;
  @apply right-3;
  @apply -top-1;
  @apply transform;
  @apply rotate-90;
  @apply text-lg;
}
</style>
