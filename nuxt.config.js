
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
  }, // Will register file from project api directory to handle /api/* requires
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
    locales: [
      {
        code: 'en',
        name: 'English',
      },
      {
        code: 'de',
        name: 'Deutsch',
      },
    ],
    defaultLocale: 'en',
    vueI18nLoader: true,
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: {
          error: 'Unfortunately, there was an error',
          language: 'Language',
          pages: {
            home: 'Home',
            cv: 'Porfolio',
            projects: 'Projects',
            socials: 'Socials',
            contact: 'Contact',
            imprint: 'Imprint',
            dataProtection: 'Data protection',
            privacyNotice: 'Privacy notice',
            sitemap: 'Sitemap',
          },
          homepageContent: {
            subTitle: 'Computer Scientist, Programmer and Hobby-Cook',
            introduction: `<p>
                Lukas was born and grew up in Berlin, Germany.
                He studied applied computer science at the University of Applied Sciences in Berlin.
                There he learn how to develop applications and work in a team. His focus of study was
                on Usability and User Experience.
              </p>
              <p>
                He got his first job at WBS Coding School, where he developed an online platform for
                the students and worked on micro services with AWS.
              </p>`,
            portfolio: `Got an open position? Want to hire a new face? Interested in Lukas? <br> 
              You can check if he matches your requirements for an open position by reading through his cv. 
              You can check his skills and previous employments there.`,
            projects: `Want to see what Lukas has already created? <br>
              Go checkout his projects page, where you can see his most recent projects and
              previously complete projects. For some there might even be a live-demo.`,
            socials: `On his social media, Lukas posts about his life. He shares progress on his projects,
              recipes he cooked and adventures he survived. Interested in getting to know him
              a bit more? <br>
              So, go on and follow him on my social media platforms.`,
          },
        },
        de: {
          error: 'Es kam leider zu einem Fehler',
          language: 'Sprache',
          pages: {
            home: 'Start',
            cv: 'Lebenslauf',
            projects: 'Projekte',
            socials: 'Sozial',
            contact: 'Kontakt',
            imprint: 'Impressum',
            dataProtection: 'Datenschutz',
            privacyNotice: 'Privacy notice',
            sitemap: 'Sitemap',
          },
          homepageContent: {
            subTitle: 'Informatiker, Entwickler and Hobby-Koch',
            introduction: `<p>
                Lukas ist geborener Berliner und wohnt dort schon sein ganzes Leben.
                Aktuelle studiert er Angewandte Informatik an der Hochschule für Technik und Wirtschaft in Berlin.
                Dort lernte er wie mir Anwendungen im Team entwicklet. Sein Fokus lag dabei auf Usability und User
                Experience.
              </p>
              <p>
                Während seiner ersten Joberfahrungen sammelte er viele Erfahrungen im entwickeln einer Online-Lernplattform 
                und machte Erfahrungen mit AWS.
              </p>`,
            portfolio: `Offene Stelle? Neues Gesicht fürs Unternehmen gesucht? Interessiert an Lukas? <br> 
              Sie können schauen ob er in Ihre Unternehmen passen würde, in dem Sie seinen Lebenslauf lesen. 
              Dort finden Sie unter anderem seine vorherigen Arbeitsgeber und eine Übersicht über seine Fähigkeiten.`,
            projects: `Wollen Sie sehen was Lukas bereits erstellt hat? <br>
              Besuchen Sie seine Projektseite um seine neuesten und abgeschlossenen Projekte zu sehen.
              Für einige gibt es sogar Live-Demos.`,
            socials: `Auf seinen Social Media Kanälen postet Lukas über sein Leben, Rezepte, die er gekocht hat, und Abenteuer,
              die er überstanden hat. Willen Sie ihn etwas näher kennenlernen? <br>
              Besuchen Sie eine Seiten und folgen Sie ihm doch auch.`,
          },
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
  loaders: {
    vue: {
      compilerOptions: {
        preserveWhitespace: true,
      },
    },
  },
};
