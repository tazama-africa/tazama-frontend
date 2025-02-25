import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  tailwindcss: {
    config: {
      theme: {
        extend: {
          colors: {
            tazama: "#ff6600", // Replace with your desired color
          },
        },
      },
    },
  },
})
