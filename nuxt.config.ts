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
    devProxy: {
      "/komik": {
        target: "https://komikcast.net/",
        changeOrigin: true,
        prependPath: true,
      },
    },
  },
});
