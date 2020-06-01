<template>
  <footer class="legal-footer">
    <hr class="rule">
    <div class="footer-container">
      <nuxt-link
        class="footer-link"
        :to="localePath('/imprint')"
      >
        {{ $t('pages.imprint') }}
      </nuxt-link>
      <nuxt-link
        class="footer-link"
        :to="localePath('/data-protection')"
      >
        {{ $t('pages.dataProtection') }}
      </nuxt-link>
      <nuxt-link
        class="footer-link"
        :to="localePath('/sitemap')"
      >
        {{ $t('pages.sitemap') }}
      </nuxt-link>
      <choice-box-input
        id="lanuage-switcher"
        class="language-switcher"
        :label="`${$t('language')}:`"
        :choices="languages"
        v-model="selected"
        @change="changeLanguage"
      />
    </div>
  </footer>
</template>

<script>
import ChoiceBoxInput from './ChoiceBoxInput.vue';

export default {
  name: 'LegalFooter',
  components: {
    ChoiceBoxInput,
  },
  data() {
    return {
      selected: this.$i18n.locale,
      languages: this.$i18n.locales,
    };
  },
  methods: {
    changeLanguage(evt) {
      this.$router.push(this.switchLocalePath(evt));
    },
  },
};
</script>

<style lang='scss' scoped>
@import "../assets/scss/variables";

.legal-footer {
  .rule {
    border: 1px solid $primary;
  }

  .footer-container {
    .footer-link {
      margin: 1em;
    }

    .language-switcher {
      display: inline-block;
      padding: 1em;
    }
  }
}
</style>
