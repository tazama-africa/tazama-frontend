<template>

    <div class="min-h-screen   overflow-y-scroll text-gray-800  ">
      <!-- header -->
      <div
        class="lg:bg-white bg-transparent relative pt-4 w-full h-10 flex justify-between items-center text-sm lg:px-2 lg:rounded-full z-5">
        <div class="flex gap-1">
          <div class="flex gap-2 items-start">
            <!-- <NuxtImg src="/logo-long-t.png" class="lg:w-[60%] w-[80%] h-24 object-cover" alt="Logo" width="200"
                height="96" loading="lazy" /> -->
            <h2 class="text-white px-4 text-xl">Profile</h2>
          </div>
        </div>
  
      </div>
      <div class="max-w-lg flex flex-col h-screen mx-auto p-4 ">
        <!-- User Info Section -->
        <div class="flex border-b pb-4 border-gray-500 items-center gap-3 mb-8">
          <div
            class="h-12 w-12 rounded-full bg-gradient-to-r from-gray-600 to-gray-500 flex items-center justify-center border-2 border-blue-600">
            <span class="text-lg truncate   text-white">
              {{ username.charAt(0).toUpperCase() }}
            </span>
          </div>
          <div>
            <h2 class="text-sm text-white font-bold w-60 truncate">{{ username }}</h2>
            <p class="text-xs text-gray-50 mt-0.5">{{ authStore.user?.email || 'No email provided' }}</p>
          </div>
        </div>
  
        <!-- HISTORY -->
        <div>
          <h2 class="text-white px-2 mb-1 text-lg">History</h2>
          <div class="grid lg:grid-cols-4 grid-cols-2 gap-4   ">
            <!-- reports -->
            <nuxt-link to="/reports"
              class="flex pt-5 text-white hover:translate-x-1 transition-700  flex-col items-center justify-center rounded-xl shadow"
              style="background-color: #212121;">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" class=" h-12" viewBox="0 0 24 24">
                  <path fill="currentColor"
                    d="m6 16.5l-3 2.94V11h3m5 3.66l-1.57-1.34L8 14.64V7h3m5 6l-3 3V3h3m2.81 9.81L17 11h5v5l-1.79-1.79L13 21.36l-3.47-3.02L5.75 22H3l6.47-6.34L13 18.64" />
                </svg>
              </div>
              <div class="text-center border-t pt-2 mt-2 ">
                <p style="font-size: 10px ;">
                  Give anonymous feedback
                </p> 
                <h3 class="text-xs items-center justify-center my-4 flex gap-2">
                  <span>Report</span>
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="text-white h-4" viewBox="0 0 24 24">
                      <path fill="none" stroke="currentColor" stroke-width="2" d="M2 12h20m-9-9l9 9l-9 9" />
                    </svg>
                  </span>
                </h3>
              </div>
            </nuxt-link>
  
            <!-- History -->
            <nuxt-link to="/history"
              class="flex pt-5 text-white hover:translate-x-1 transition-700  flex-col items-center justify-center rounded-xl shadow"
              style="background-color: #212121;">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" class=" h-12" viewBox="0 0 24 24">
                  <path fill="currentColor"
                    d="M21 11.11V5a2 2 0 0 0-2-2h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14a2 2 0 0 0 2 2h6.11c1.26 1.24 2.98 2 4.89 2c3.87 0 7-3.13 7-7c0-1.91-.76-3.63-2-4.89M12 3c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1M5 19V5h2v2h10V5h2v4.68c-.91-.43-1.92-.68-3-.68H7v2h4.1c-.6.57-1.06 1.25-1.42 2H7v2h2.08c-.05.33-.08.66-.08 1c0 1.08.25 2.09.68 3zm11 2c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5m.5-4.75l2.86 1.69l-.75 1.22L15 17v-5h1.5z" />
                </svg>
              </div>
              <div class="text-center border-t pt-2 mt-2 ">
                <p style="font-size: 10px ;">
                  Travel History
                </p> 
                <h3 class="text-xs items-center justify-center my-4 flex gap-2">
                  <span>History</span>
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="text-white h-4" viewBox="0 0 24 24">
                      <path fill="none" stroke="currentColor" stroke-width="2" d="M2 12h20m-9-9l9 9l-9 9" />
                    </svg>
                  </span>
                </h3>
              </div>
            </nuxt-link>
          </div>
        </div>
  
        <!-- Settings Options -->
        <h2 class="text-white px-2 mt-4 border-b border-gray-500 pb-2 mb-2 text-xl">Account</h2>
        <div class="space-y-6">
          <nuxt-link to='/profile/settings' class="flex gap-2 justify-between text-sm my-2 mb-4 text-white items-center">
            <div class="flex gap-2 items-center">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-7 text-gray-300" viewBox="0 0 24 24">
                  <g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd">
                    <path d="M16 9a4 4 0 1 1-8 0a4 4 0 0 1 8 0m-2 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0" />
                    <path
                      d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11s11-4.925 11-11S18.075 1 12 1M3 12c0 2.09.713 4.014 1.908 5.542A8.99 8.99 0 0 1 12.065 14a8.98 8.98 0 0 1 7.092 3.458A9 9 0 1 0 3 12m9 9a8.96 8.96 0 0 1-5.672-2.012A6.99 6.99 0 0 1 12.065 16a6.99 6.99 0 0 1 5.689 2.92A8.96 8.96 0 0 1 12 21" />
                  </g>
                </svg>
              </div>
              <div>
                Profile settings
              </div>
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5" viewBox="0 0 24 24">
                <path fill="currentColor" d="M10 6L8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6z" />
              </svg>
            </div>
          </nuxt-link>
          <nuxt-link to="/profile/liked-songs"
            class="flex gap-2 justify-between text-sm my-2 mb-4 text-white items-center">
            <div class="flex gap-2 items-center">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-7 text-gray-300" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M19.285 12.645a3.8 3.8 0 0 0-5.416-5.332q-.288.288-.732.707l-.823.775l-.823-.775q-.445-.42-.733-.707a3.8 3.8 0 0 0-5.374 0c-1.468 1.469-1.485 3.844-.054 5.32l6.984 6.984l6.97-6.972zm-14.75-6.18a5 5 0 0 1 7.072 0q.273.274.707.682q.432-.408.707-.683a5 5 0 0 1 7.125 7.017l-7.125 7.126a1 1 0 0 1-1.414 0L4.48 13.48a5 5 0 0 1 .055-7.017z"/></svg>
              </div>
              <div>
                Liked Songs
              </div>
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5" viewBox="0 0 24 24">
                <path fill="currentColor" d="M10 6L8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6z" />
              </svg>
            </div>
          </nuxt-link>
  
          <nuxt-link to="/profile/suggested-songs"
            class="flex gap-2 justify-between text-sm my-2 mb-4 text-white items-center">
            <div class="flex gap-2 items-center">
              <div> 
                <svg xmlns="http://www.w3.org/2000/svg" class="h-7 text-gray-300" viewBox="0 0 24 24"><path fill="currentColor" d="M14 10H3v2h11zm0-4H3v2h11zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2zM3 16h7v-2H3z"/></svg>
              </div>
              <div>
                Suggested Songs
              </div>
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5" viewBox="0 0 24 24">
                <path fill="currentColor" d="M10 6L8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6z" />
              </svg>
            </div>
          </nuxt-link>
  
          <nuxt-link to="profile/liked-songs"
            class="flex gap-2 justify-between text-sm my-2 mb-4 text-white items-center">
            <div class="flex gap-2 items-center">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg"  class="h-7 text-gray-300" viewBox="0 0 24 24"><path fill="currentColor" d="M12.028 17.23q.332 0 .56-.228t.228-.56t-.23-.56q-.228-.228-.56-.228t-.56.229t-.227.56q0 .332.228.56q.23.228.561.228m-.517-3.312h.966q.038-.652.245-1.06q.207-.407.851-1.04q.67-.669.996-1.199t.327-1.226q0-1.182-.83-1.884q-.831-.702-1.966-.702q-1.079 0-1.832.586q-.753.587-1.103 1.348l.92.381q.24-.546.687-.965q.447-.42 1.29-.42q.972 0 1.42.534q.449.534.449 1.174q0 .52-.281.928q-.28.409-.73.822q-.87.802-1.14 1.36t-.269 1.363M12.003 21q-1.866 0-3.51-.708q-1.643-.709-2.859-1.924t-1.925-2.856T3 12.003t.709-3.51Q4.417 6.85 5.63 5.634t2.857-1.925T11.997 3t3.51.709q1.643.708 2.859 1.922t1.925 2.857t.709 3.509t-.708 3.51t-1.924 2.859t-2.856 1.925t-3.509.709M12 20q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"/></svg>
              </div>
              <div>
                Help and Feedback
              </div>
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5" viewBox="0 0 24 24">
                <path fill="currentColor" d="M10 6L8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6z" />
              </svg>
            </div>
          </nuxt-link>
  
          <button @click="handleLogout" class="flex gap-3 justify-between text-sm my-2 mb-4 text-white items-center">
            <div class="flex gap-2 items-center">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 text-gray-300"  viewBox="0 0 24 24"><path fill="currentColor" d="M5 11h8v2H5v3l-5-4l5-4zm-1 7h2.708a8 8 0 1 0 0-12H4a9.99 9.99 0 0 1 8-4c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.99 9.99 0 0 1-8-4"/></svg>
              </div>
              <div>
                Logout
              </div>
            </div>
          </button>
  
  
        </div>
        <div>
  
        <!-- terms and conditions -->
        <div  class="items-center text-xs my-10 text-gray-400 justify-center flex " >
          <div>Terms and conditions .</div>
          <div> &nbsp Privacy Policy</div>
        </div>
  
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useAuthStore } from "@/stores/auth";
  import { ref, watchEffect } from "vue";
  
  // Auth store and reactive username
  const authStore = useAuthStore();
  const username = ref("Guest");
  
  watchEffect(() => {
    username.value = authStore.user?.username || "Guest";
  });
  
  // Logout handler
  const handleLogout = () => {
    authStore.logout();
    navigateTo("/accounts/login");
  };
  
  // Page layout
  definePageMeta({
    layout: "profile",
  });
  </script>
  
  <style scoped>
  /* No additional CSS needed with Tailwind */
  </style>