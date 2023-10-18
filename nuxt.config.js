// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
    'nuxt-swiper'
  ],

  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css'
        }
      ]
    }
  },
  css: ['~/assets/css/main.css'],
  runtimeConfig: {

    public: {
      // API_BEARER_TOKEN: process.env.VUE_APP_API_BEARER_TOKEN,
      // API: process.env.VUE_APP_API,

      apiKey: process.env.API_KEY,
      apiUrl: process.env.API_URL,
  

    }
  },


  devtools: { enabled: true }
})
