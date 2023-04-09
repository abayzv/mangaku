// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["@pinia/nuxt"],

  nitro: {
    routeRules: {
      "/komik": {
        proxy: "https://komikcast.net/",
        cache: {
          maxAge: 60 * 60 * 24 * 7,
        },
        cors: true,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET",
        },
      },
    },
  },
});
