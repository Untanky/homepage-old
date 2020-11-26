export default {
  buildModules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/typescript-build',
  ],
  modules: [
    [
      'nuxt-i18n',
    ],
  ],
  plugins: [
  ],
  css: [
    '~/assets/css/main.css',
    '~/assets/css/main.scss',
  ],
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'my website description',
      },
    ],
  },
  i18n: {
    locales: [
      {
        code: 'en',
        name: 'Deutsch',
        iso: 'en-US',
        file: 'en.js',
      },
      {
        code: 'de',
        name: 'English',
        iso: 'de-DE',
        file: 'de.js',
      },
    ],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
    },
    vueI18nLoader: true,
    lazy: true,
    langDir: 'assets/i18n/',
  },
};
