// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  pages: true,
  modules: [['@nuxtjs/google-fonts', {
      families: {
        Mulish: [400, 600, 700]
      }
  }], "@nuxt/image"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})