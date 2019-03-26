
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: '清竹茶馆博客-vadxq',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width,minimum-scale=1,maximum-scale=1,user-scalable=no' },
      { hid: 'keywords', name: 'keywords', content: 'vadxq,清竹茶馆,宇许清竹,清竹博客,vadxq.com,blog.vadxq.com' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'description', name: 'description', content: '清竹茶馆博客：vadxq的个人博客，欢迎来到宇许清竹的清竹茶馆小窝~' },
      { name: 'renderer', content: 'webkit' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'https://qnimg.vadxq.com/blog/2017/logo.jpg' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#009688' },

  manifest: {
    short_name: '清竹茶馆',
    name: '清竹茶馆博客',
    description: 'vadxq的清竹茶馆博客',
    theme_color: '#009688',
    background_color: '#f5f5f5',
    // display: 'standalone',
    // publicPath: '',
    // start_url: '',
    // lang: '',
    icons: [
      {
        'src': 'https://qnimg.vadxq.com/blog/2017/logo.jpg'
      }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/style/app.styl',
    '~/assets/style/main.css',
    'quill/dist/quill.snow.css',
    'quill/dist/quill.bubble.css',
    'quill/dist/quill.core.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/vuetify',
    '@/plugins/axios',
    { src: '@/plugins/quill', ssr: false }
    // { src: '~/plugins/ga', ssr: false },
    // { src: '~/plugins/ckedit', ssr: false }
  ],

  // router:{
  //   middleware:['authenticated']
  // },

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    ['@nuxtjs/google-analytics', {
      id: 'UA-83694330-2'
    }]
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    transpile: ['vuetify/lib'],
    plugins: [new VuetifyLoaderPlugin()],
    loaders: {
      stylus: {
        import: ["~assets/style/variables.styl"]
      }
    },
    
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  }
}
