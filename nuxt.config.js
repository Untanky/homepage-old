
module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons+Outlined|Material+Icons' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap' },
    ],
  },// Will register file from project api directory to handle /api/* requires
  serverMiddleware: [
    { path: '/api/v1/mail', handler: '~/api/v1/mail.js' },
  ],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    // Doc: https://nuxt-community.github.io/nuxt-i18n/
    'nuxt-i18n',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Nuxt i18n
  */
  i18n: {
    locales: ['en', 'de'],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: {
          welcome: 'Welcome',
        },
        de: {
          welcome: 'Willkommen',
        },
      },
    },
  },
  /*
  ** Build configuration
  */
  router: {
    linkExactActiveClass: 'exact-active',
  },
  build: {
    /*
    ** You can extend webpack config here
    */
    // eslint-disable-next-line no-unused-vars
    extend(config, ctx) {

    },
  },
};
