
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
            cv: 'Portfolio',
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
          dataProtection: {
            reason: 'Type and purpose of processing:',
            legal: 'Legal basis:',
            receiver: 'Recipient:',
            duration: 'Storage duration:',
            transfer: 'Transfer to third countries:',
            accept: 'Provision required or required:',
            cancelation: 'Revocation of consent:',
            general: {
              title: 'Collection of general information when visiting my website',
              reason: `<p>If you access my website, i.e. if you do not register or otherwise provide information, information of a general nature is automatically collected. This information (server log files) includes, for example, the type of web browser, the operating system used, the domain name of your Internet service provider, your IP address and the like.</p>
              <p>The purpose of these information is:</p>
              <ul>
              <li>creating a connection to the website,</li>
              <li>assuring problem-free usage of my Website,</li>
              <li>assessment of system security and stability, as well as</li>
              <li>other administrive purposes.</li>
              </ul>
              <p>This information is not used, to make conclusion about your person. Information of this kind will be assessed statically to enhace the website and the technology behind it.</p>`,
              legal: '<p>The processing is in accordance with article 6 paragraph 1f DSGVO on the basis of enhancing the website%apos;s stability and functionality.</p>',
              receiver: '<p>Recipients of this information are technical services, which are responsible of the operation and maintenance of the website.</p>',
              duration: '<p>The information will be deleted as soon as they are no longer required to fulfill the given purpose. For information in regard to proving the website this usually means, after the session ends.</p>',
              accept: '<p>Providing of the information is neither required by law nor contract. Without the IP address, the functionality and the service of the website cannot be provided. Revocation is therefor impossible.</p>',
            },
            contact: {
              title: 'Contact form',
              reason: '<p>The information you provide will be stored to insure individual communication. Therefor, you are required to provide a valid e-mail address and your name. This is used to associate the request and the following reply. Providing more information is optional.</p>',
              legal: `<p>The processing of information provided in the contact form is based on legitimate interest (article 6 paragraph 1f DSGVO).</p>
              <p>By providing the contact form, I want to give you an easy way to get into contact with me. Your provided information will be stored to process your request and future questions.</p>`,
              receiver: '<p>The recipients of the data may be processors.</p>',
              duration: '<p>Information will be deleted 6 months after processing the request.</p>',
              accept: '<p>Provision of your personal information is voluntary. Your request can only be processed, if you provide e-mail address, name and the reason for your request.</p>',
            },
            script: {
              title: 'Usage of scripting libraries (Google Webfonts)',
              reason: `<p>I use "Google Web Fonts" to correctly and appeallingly display typography cross-browser on this website. "Google Web Fonts" is provided by Google LLC (1600 Amphitheatre Parkway, Mountain View, CA 94043, USA; below "Google").</p>
              <p>The data protection terms of Google can be found here: <a href="https://www.google.com/policies/privacy/">https://www.google.com/policies/privacy/</a></p>`,
              legal: '<p>The legal basis for the integration of Google web fonts and the associated data transfer to Google is your consent (article 6 paragraph 1a DSGVO). </p>',
              receiver: '<p>Calling script libraries or font libraries automatically triggers a connection to the operator of the library. It is theoretically possible - but currently unclear whether and if so for what purposes - that the operator collects Google data in this case.</p>',
              duration: `<p>I do not collect any personal information by integrating Google web fonts.</p>
              <p>More information about Google Web Fonts can be found here: <a href="https://developers.google.com/fonts/faq">https://developers.google.com/fonts/faq</a> und in der Datenschutzerklärung von Google: <a href="https://www.google.com/policies/privacy/">https://www.google.com/policies/privacy/</a>.</p>`,
              transfer: '<p>Google processes your information in the United States of America and has accepted the EU_US Privacy Shield <a href="https://www.privacyshield.gov/EU-US-Framework">https://www.privacyshield.gov/EU-US-Framework</a>.</p>',
              accept: '<p>The provision of personal data is neither legally nor contractually required. However, the correct presentation of the content by standard fonts may not be possible.</p>',
              cancelation: '<p>The JavaScript programming language is regularly used to display the content. You can therefore object to data processing by deactivating the execution of JavaScript in your browser or installing a JavaScript blocker. Please note that this may result in functional restrictions on the website.</p>',
            },
            ssl: {
              title: 'SSL Encryption',
              text: '<p>To ensure security of your information while transmitting, I use state of art encryption technology, e.g. SSL using HTTPS.</p>',
            },
            change: {
              title: 'Changes of data protection terms',
              text: '<p>The data protection declaration might change in the future, to accomondate current legal requirements and new services of the website. For renewed connections to the website, these terms then apply.</p>',
            },
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
          dataProtection: {
            reason: 'Art und Zweck der Verarbeitung:',
            legal: 'Rechtsgrundlage:',
            receiver: 'Empfänger:',
            duration: 'Speicherdauer:',
            transfer: 'Drittlandtransfer:',
            accept: 'Bereitstellung vorgeschrieben oder erforderlich:',
            cancelation: 'Widerruf der Einwilligung:',
            general: {
              title: 'Erfassung allgemeiner Informationen beim Besuch meiner Website',
              reason: `<p>Wenn Sie auf meine Website zugreifen, d.h., wenn Sie sich nicht registrieren oder anderweitig Informationen übermitteln, werden automatisch Informationen allgemeiner Natur erfasst. Diese Informationen (Server-Logfiles) beinhalten etwa die Art des Webbrowsers, das verwendete Betriebssystem, den Domainnamen Ihres Internet-Service-Providers, Ihre IP-Adresse und ähnliches. </p>
              <p>Sie werden insbesondere zu folgenden Zwecken verarbeitet:</p>
              <ul>
              <li>Sicherstellung eines problemlosen Verbindungsaufbaus der Website,</li>
              <li>Sicherstellung einer reibungslosen Nutzung meiner Website,</li>
              <li>Auswertung der Systemsicherheit und -stabilität sowie</li>
              <li>zu weiteren administrativen Zwecken.</li>
              </ul>
              <p>Ich verwende Ihre Daten nicht, um Rückschlüsse auf Ihre Person zu ziehen. Informationen dieser Art werden von mir ggfs. statistisch ausgewertet, um meinen Internetauftritt und die dahinterstehende Technik zu optimieren.</p>`,
              legal: '<p>Die Verarbeitung erfolgt gemäß Art. 6 Abs. 1 lit. f DSGVO auf Basis meines berechtigten Interesses an der Verbesserung der Stabilität und Funktionalität meiner Website.</p>',
              receiver: '<p>Empfänger der Daten sind ggf. technische Dienstleister, die für den Betrieb und die Wartung meiner Webseite als Auftragsverarbeiter tätig werden.</p>',
              duration: '<p>Die Daten werden gelöscht, sobald diese für den Zweck der Erhebung nicht mehr erforderlich sind. Dies ist für die Daten, die der Bereitstellung der Webseite dienen, grundsätzlich der Fall, wenn die jeweilige Sitzung beendet ist.</p>',
              accept: '<p>Die Bereitstellung der vorgenannten personenbezogenen Daten ist weder gesetzlich noch vertraglich vorgeschrieben. Ohne die IP-Adresse ist jedoch der Dienst und die Funktionsfähigkeit meiner Website nicht gewährleistet. Zudem können einzelne Dienste und Services nicht verfügbar oder eingeschränkt sein. Aus diesem Grund ist ein Widerspruch ausgeschlossen.</p>',
            },
            contact: {
              title: 'Kontaktformular',
              reason: '<p>Die von Ihnen eingegebenen Daten werden zum Zweck der individuellen Kommunikation mit Ihnen gespeichert. Hierfür ist die Angabe einer validen E-Mail-Adresse sowie Ihres Namens erforderlich. Diese dient der Zuordnung der Anfrage und der anschließenden Beantwortung derselben. Die Angabe weiterer Daten ist optional.</p>',
              legal: `<p>Die Verarbeitung der in das Kontaktformular eingegebenen Daten erfolgt auf der Grundlage eines berechtigten Interesses (Art. 6 Abs. 1 lit. f DSGVO).</p>
              <p>Durch Bereitstellung des Kontaktformulars möchte ich Ihnen eine unkomplizierte Kontaktaufnahme ermöglichen. Ihre gemachten Angaben werden zum Zwecke der Bearbeitung der Anfrage sowie für mögliche Anschlussfragen gespeichert.</p>`,
              receiver: '<p>Empfänger der Daten sind ggf. Auftragsverarbeiter.</p>',
              duration: '<p>Daten werden spätestens 6 Monate nach Bearbeitung der Anfrage gelöscht.</p>',
              accept: '<p>Die Bereitstellung Ihrer personenbezogenen Daten erfolgt freiwillig. Ich kann Ihre Anfrage jedoch nur bearbeiten, sofern Sie mir Ihren Namen, Ihre E-Mail-Adresse und den Grund der Anfrage mitteilen.</p>',
            },
            script: {
              title: 'Verwendung von Scriptbibliotheken (Google Webfonts)',
              reason: `<p>Um meine Inhalte browserübergreifend korrekt und grafisch ansprechend darzustellen, verwende ich auf dieser Website „Google Web Fonts“ der Google LLC (1600 Amphitheatre Parkway, Mountain View, CA 94043, USA; nachfolgend „Google“) zur Darstellung von Schriften.</p>
              <p>Die Datenschutzrichtlinie des Bibliothekbetreibers Google finden Sie hier: <a href="https://www.google.com/policies/privacy/">https://www.google.com/policies/privacy/</a></p>`,
              legal: '<p>Rechtsgrundlage für die Einbindung von Google Webfonts und dem damit verbundenen Datentransfer zu Google ist Ihre Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). </p>',
              receiver: '<p>Der Aufruf von Scriptbibliotheken oder Schriftbibliotheken löst automatisch eine Verbindung zum Betreiber der Bibliothek aus. Dabei ist es theoretisch möglich – aktuell allerdings auch unklar ob und ggf. zu welchen Zwecken – dass der Betreiber in diesem Fall Google Daten erhebt.</p>',
              duration: `<p>Ich erhebe keine personenbezogenen Daten, durch die Einbindung von Google Webfonts.</p>
              <p>Weitere Informationen zu Google Web Fonts finden Sie unter <a href="https://developers.google.com/fonts/faq">https://developers.google.com/fonts/faq</a> und in der Datenschutzerklärung von Google: <a href="https://www.google.com/policies/privacy/">https://www.google.com/policies/privacy/</a>.</p>`,
              transfer: '<p>Google verarbeitet Ihre Daten in den USA und hat sich dem EU_US Privacy Shield unterworfen <a href="https://www.privacyshield.gov/EU-US-Framework">https://www.privacyshield.gov/EU-US-Framework</a>.</p>',
              accept: '<p>Die Bereitstellung der personenbezogenen Daten ist weder gesetzlich, noch vertraglich vorgeschrieben. Allerdings kann ggfs. die korrekte Darstellung der Inhalte durch Standardschriften nicht möglich sein.</p>',
              cancelation: '<p>Zur Darstellung der Inhalte wird regelmäßig die Programmiersprache JavaScript verwendet. Sie können der Datenverarbeitung daher widersprechen, indem Sie die Ausführung von JavaScript in Ihrem Browser deaktivieren oder einen JavaScript-Blocker installieren. Bitte beachten Sie, dass es hierdurch zu Funktionseinschränkungen auf der Website kommen kann.</p>',
            },
            ssl: {
              title: 'SSL-Verschlüsselung',
              text: '<p>Um die Sicherheit Ihrer Daten bei der Übertragung zu schützen, verwende ich dem aktuellen Stand der Technik entsprechende Verschlüsselungsverfahren (z. B. SSL) über HTTPS.</p>',
            },
            change: {
              title: 'Änderung meiner Datenschutzbestimmungen',
              text: '<p>Ich behalte mir vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen meiner Leistungen in der Datenschutzerklärung umzusetzen, z.B. bei der Einführung neuer Services. Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.</p>',
            },
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
