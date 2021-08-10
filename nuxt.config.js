export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['@/assets/scss/main.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~plugins/viewport.js',
    { ssr: false, src: '~plugins/carousel.js' }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    '@aceforth/nuxt-optimized-images',
    '@nuxtjs/global-components'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    'cookie-universal-nuxt',
    [
      'nuxt-i18n',
      {
        locales: [
          {
            code: 'en',
            name: 'English',
            file: 'en-EN.js'
          },
          {
            code: 'pl',
            name: 'Polish',
            file: 'pl-PL.js'
          },
          {
            code: 'it',
            name: 'Italiano',
            file: 'it-IT.js'
          }
        ],
        defaultLocale: 'pl',
        lazy: true,
        seo: false,
        langDir: 'translations/',
        detectBrowserLanguage: {
          useCookie: true,
          cookieKey: 'i18n_redirected'
        }
      }
    ],
    [
      'nuxt-mq',
      {
        defaultBreakpoint: 'default',
        breakpoints: {
          xs: 575,
          sm: 767,
          md: 991,
          lg: 1199,
          xl: Infinity
        }
      }
    ],
    ['@nuxtjs/google-tag-manager', { id: 'GTM-WFNGW3H' }]
  ],
  optimizedImages: {
    optimizeImages: true
  },
  styleResources: {
    scss: './assets/scss/resources.scss'
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    filenames: {
      img: ({ isDev }) => (isDev ? '[path][name].[ext]' : 'img/[name].[ext]')
    },
    extend(config, ctx) {}
  }
}
