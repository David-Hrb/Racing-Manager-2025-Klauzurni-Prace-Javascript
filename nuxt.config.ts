export default defineNuxtConfig({
  devtools: { enabled: true },

  compatibilityDate: '2025-09-04',
  typescript: {
    strict: true,
    typeCheck: true
  },

  css: [
    '~/assets/css/style.scss',
    'flag-icons/css/flag-icons.min.css'
  ],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
          //additionalData: '@use "~/assets/css/variables.scss" as *;'
        }
      }
    }
  },

  modules: [
    //'@nuxthub/core',
    '@nuxt/icon',
    '@pinia/nuxt'
  ],

  future: {
    compatibilityVersion: 4
  },
/*
  experimental: {
    typedPages: true
  },
*/

  app: {
    head: {
      title: 'Motorsport Fun Manager',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },      
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ],
      script: [
        {
          src: 'https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js'
        }
      ]
    }
  },

  build: {
    transpile: []
  },

  nitro: {
    preset: 'node-server',
    experimental: {
      wasm: true,
      database: true
    },
    database: {
      myDB: {
        connector: 'sqlite',
        options: {
          name: 'mydbfile'
        }
      }
    } 
  },
/*
  router: {
    options: {
      strict: true
    }
  }
  */

})