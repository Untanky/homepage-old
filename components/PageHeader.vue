<template lang="pug">
  header.h-full.w-full.relative
    .bg-gradient-to-r.from-primary-500.to-secondary-500.w-full.block.flex.justify-center.items-center.mb-6(class="h-2/3 md:h-4/5 lg:h-5/6")
      h1.text-6xl.font-bold.whitespace-normal.text-center(class="md:text-7xl lg:text-9xl xl:text-10xl") Lukas Grimm
    .text-center
      a.block.link.text-2xl.mb-4(class="md:mr-12 md:inline-block after:chevron" href="/contact") {{ $t('titlePage.contactCTA') }}
      a.block.link.text-2xl.mb-4(class="md:inline-block after:chevron" href="/contact") {{ $t('titlePage.downloadCTA') }}
    .absolute.bottom-16.right-4(class="md:bottom-4")
      lang-switcher
</template>

<i18n>
{
  "en": {
    "titlePage": {
      "contactCTA": "Contact me",
      "downloadCTA": "Download CV"
    }
  },
  "de": {
    "titlePage": {
      "contactCTA": "Nachricht verfassen",
      "downloadCTA": "Lebenslauf herunterladen"
    }
  }
}
</i18n>

<script lang="ts">
import Vue from 'vue';
import LangSwitcher from './LangSwitcher.vue';

export default Vue.extend({
  name: 'PageHeader',
  components: {
    LangSwitcher,
  },
});
</script>
