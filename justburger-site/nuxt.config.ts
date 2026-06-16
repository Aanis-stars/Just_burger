// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/sitemap'
  ],
  // Sitemap configuration
  site: {
    url: 'https://justburger.fr'
  },
  sitemap: {
    exclude: ['/api/**']
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'fr'
      },
      title: 'JustBurger - Let us cook',
      titleTemplate: '%s | JustBurger',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'JustBurger - Restaurant de burgers artisanaux a Mulhouse. Click and collect disponible. 100% Halal et fait maison.' },
        { name: 'keywords', content: 'burger, fast food, halal, Mulhouse, click and collect, restaurant, smash burger, fait maison' },
        { name: 'author', content: 'JustBurger' },
        { name: 'robots', content: 'index, follow' },
        { name: 'theme-color', content: '#003d18' },
        // Open Graph
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'JustBurger' },
        { property: 'og:locale', content: 'fr_FR' },
        { property: 'og:title', content: 'JustBurger - Let us cook' },
        { property: 'og:description', content: 'Restaurant de burgers artisanaux a Mulhouse. Click and collect disponible. 100% Halal et fait maison.' },
        { property: 'og:image', content: '/images/og-image.jpg' },
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'JustBurger - Let us cook' },
        { name: 'twitter:description', content: 'Restaurant de burgers artisanaux a Mulhouse. Click and collect disponible. 100% Halal.' },
        { name: 'twitter:image', content: '/images/og-image.jpg' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://justburger.fr' }
      ]
    }
  },
  // SEO optimizations
  routeRules: {
    '/': { prerender: true },
    '/menu': { prerender: true },
    '/nous-contacter': { prerender: true }
  }
})
