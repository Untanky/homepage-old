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
    '~/plugins/vueflags.js',
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
        name: 'English',
        iso: 'en-US',
        flag: 'us',
        file: 'en.js',
      },
      {
        code: 'de',
        name: 'Deutsch',
        iso: 'de-DE',
        flag: 'de',
        file: 'de.js',
      },
    ],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
    },
    vueI18nLoader: true,
    lazy: true,
    langDir: 'static/i18n/',
  },
};
