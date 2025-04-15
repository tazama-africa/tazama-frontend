import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  tailwindcss: {
    config: {
      theme: {
        extend: {
          colors: {
            tazama: "#ff6600",
          },
          fontFamily: {
            montserrat: ['Montserrat', 'sans-serif'],
          },
        },
      },
    },
  },
})
