<template>
    <div>
  
      <Head>
        <Title>ABOUT - TAZAMA</Title>
      </Head>
  
      <nav
        class="bg-gradient-to-r opacity-1 from-white to-yellow-500 via-white lg:px-20  fixed w-full z-20 top-0 start-0 border-b border-gray-200 ">
        <div class="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto lg:p-1  p-2">
          <nuxt-link to="/" class="flex items-center lg:space-x-3 rtl:space-x-reverse">
            <NuxtImg src="/logo-long-t.png" class="lg:w-[80%] h-12 lg:h-20 object-cover" />
            <!-- <span class="self-center font-semibold whitespace-nowrap gradient-text text-xl text-yellow-600">
              Tazama
            </span> -->
          </nuxt-link>
          <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <nuxt-link to="/accounts/login"
              class="text-white flex gap-2 bg-gradient-to-l from-orange-600 to-yellow-600  hover:bg-gradient-to-r hover:from-indigo-950 hover:to-orange-950 lg:px-10 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:focus:ring-yellow-800">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5" viewBox="0 0 24 24">
                  <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 17v4m-2-1l4-2m-4 0l4 2m-9-3v4m-2-1l4-2m-4 0l4 2m12-3v4m-2-1l4-2m-4 0l4 2M9 6a3 3 0 1 0 6 0a3 3 0 0 0-6 0m-2 8a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2" />
                </svg>
              </div>
              <div>
                Login
              </div>
            </nuxt-link>
  
            <button data-collapse-toggle="navbar-sticky" type="button"
              class="items-center hidden p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
              aria-controls="navbar-sticky" aria-expanded="false">
              <span class="sr-only">Open main menu</span>
              <svg class="w-5 h-5 text-gray-50" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>
          <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul
              class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
              <li>
                <nuxt-link to="/"
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yellow-700 md:p-0">
                  Home
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="/about"
                  class="block py-2 px-3 text-orange-600 rounded md:bg-transparent md:text-orange-700 md:p-0">
                  About
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="/contact"
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yellow-700 md:p-0">
                  Contact
                </nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
       
      <!-- features -->
      <div class="relative bg-gradient-to-r from-yellow-400 to-orange-500 via-yellow-500 lg:px-40 lg:pt-36 pt-20 py-10">
        <h2 class="text-center lg:text-4xl text-2xl font-bold text-gray-800 mb-2">
          Features
        </h2>
        <div class="overflow-x-auto flex space-x-6 pb-4 py-5 px-5">
          <!-- Feature 1: Stream Music & Videos with Friends -->
          <div
            class="min-w-[250px] bg-yellow-300 rounded-lg lg:p-10 p-4 text-center shadow-lg hover:scale-105 transition-transform">
            <div class="w-16 h-16 mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                class="h-full w-full text-yellow-600">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <h3 class="lg:text-xl text-lg font-semibold text-gray-800 mb-2">
              Stream Music Together
            </h3>
            <p class="text-gray-600 text-sm">
              Enjoy synchronized music & video streaming with friends, anytime,
              anywhere.
            </p>
          </div>
  
          <!-- Feature 2: AI-Generated Playlists -->
          <div
            class="min-w-[250px] bg-yellow-300 rounded-lg lg:p-10 p-4 text-center shadow-lg hover:scale-105 transition-transform">
            <div class="w-16 h-16 mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                class="h-full w-full text-yellow-600">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </div>
            <h3 class="lg:text-xl text-lg font-semibold text-gray-800 mb-2">
              AI-Powered Playlists
            </h3>
            <p class="text-gray-600 text-sm">
              Let AI curate music for you, based on your personal preferences and
              moods.
            </p>
          </div>
  
          <!-- Feature 3: Collaborative Playlists -->
          <div
            class="min-w-[250px] bg-yellow-300 rounded-lg lg:p-10 p-4 text-center shadow-lg hover:scale-105 transition-transform">
            <div class="w-16 h-16 mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                class="h-full w-full text-yellow-600">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h7m7 0h4m-7 4h7M4 6h16" />
              </svg>
            </div>
            <h3 class="lg:text-xl text-lg font-semibold text-gray-800 mb-2">
              Collaborative Playlists
            </h3>
            <p class="text-gray-600 text-sm">
              Add, vote, and rank songs with friends to create the ultimate
              playlist.
            </p>
          </div>
  
          <!-- Feature 4: Music Video Library -->
          <div
            class="min-w-[250px] bg-yellow-300 rounded-lg lg:p-10 p-4 text-center shadow-lg hover:scale-105 transition-transform">
            <div class="w-16 h-16 mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                class="h-full w-full text-yellow-600">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4h16v16H4V4z" />
              </svg>
            </div>
            <h3 class="lg:text-xl text-lg font-semibold text-gray-800 mb-2">
              Music Video Library
            </h3>
            <p class="text-gray-600 text-sm">
              Access a full library of music videos and enjoy the full
              audio-visual experience.
            </p>
          </div>
  
          <!-- Additional Features: Repeat as needed... -->
        </div>
      </div>
      <!-- end features -->
      <!-- advertisers -->
      <ContactForm />
      <!-- end form -->
      <footer
      class="bg-gradient-to-r from-yellow-700 lg:rounded lg:mt-0  to-red-600 via-yellow-600"
    >
      <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0">
            <a
              href="https://tazama.co.ke/"
              class="flex flex-col gap-1 items-center"
            >
              <span
                class="self-center uppercase text-2xl text-white whitespace-nowrap"
                >Tazama</span>
            </a>
          </div>
          <div class="grid grid-cols-2 gap-4 sm:gap-2 text-xs sm:grid-cols-4">
            <div>
              <h2 class="mb-6 text-sm font-semibold text-whiteuppercase">
                Resources
              </h2>
              <ul class="text-white font-medium">
                <li class="mb-4">
                  <a href="/faqs" class="hover:underline">FAQs</a>
                </li>
                <li class="mb-4">
                  <a href="/register" class="hover:underline">Get started</a>
                </li>
                <li>
                  <a href="/shop" class="hover:underline">Shop</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-sm font-semibold text-whiteuppercase">
                Follow us
              </h2>
              <ul class="text-white font-medium">
                <li class="mb-4">
                  <a
                    href="https://web.facebook.com/tazama"
                    class="hover:underline"
                    >Facebook</a
                  >
                </li>
                <li class="mb-4">
                  <a
                    href="https://www.instagram.com/uniform_yetu/"
                    class="hover:underline"
                    >Instagram</a
                  >
                </li>
                <li>
                  <a href="https://x.com/tazama" class="hover:underline"
                    >Twitter</a
                  >
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-sm font-semibold text-whiteuppercase">
                Legal
              </h2>
              <ul class="text-white font-medium">
                <li class="mb-4">
                  <a href="/faqs" class="hover:underline">Privacy Policy</a>
                </li>
                <li>
                  <a href="/faqs" class="hover:underline"
                    >Terms &amp; Conditions</a
                  >
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-sm font-semibold text-whiteuppercase">
                Contact Us
              </h2>
              <ul class="text-white font-medium">
                <li class="mb-4">
                  <a href="#" class="hover:underline">+254727 000 273</a>
                </li>
                <li>
                  <a href="#" class="hover:underline"
                    >info@tazama@co.ke</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr
          class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"
        />
        <div class="sm:flex sm:items-center sm:justify-center">
          <span class="text-sm sm:text-center text-white"
            >© 2024
            <a href="https://tazama.co.ke/" class="hover:underline"
              >tazama™</a
            >. All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  
      <!-- <AccountsLogin /> -->
    </div>
  </template>
  
  <script setup>
  
  </script>
  
  <style lang="scss" scoped></style>