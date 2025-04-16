<template>
  <div class="relative w-full h-[48vh] bg-cover bg-center overflow-x-hidden"
    style="background-image: url('https://img.freepik.com/free-photo/modern-futuristic-sci-fi-background_35913-2150.jpg?t=st=1744694304~exp=1744697904~hmac=85fb1773ee36764b792946df0e61d3106f8dd7e3a7063b5d5ff53a39d70a52d3&w=996');">
    <!-- Gradient Overlay -->
    <div class="absolute inset-0 bg-gradient-to-t from-black via-black/70 via-40% to-transparent opacity-90 z-0"></div>

    <!-- Header Section -->
    <div
      class="lg:bg-white bg-transparent relative pt-4 w-full h-10 flex justify-between items-center text-sm lg:px-2 lg:rounded-full z-5">
      <div class="flex gap-1">
        <div class="flex gap-2 items-start">
          <NuxtImg src="/logo-long-t.png" class="lg:w-[60%] w-[80%] h-24 object-cover" alt="Logo" width="200"
            height="96" loading="lazy" />
        </div>
      </div>
      <div>
        <div class="flex gap-4 items-center py-2 pr-4">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-white" viewBox="0 0 24 24">
              <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"
                d="m21 21l-3.5-3.5M17 10a7 7 0 1 1-14 0a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <div
            class="flex items-center justify-center w-6 text-xs h-6 overflow-hidden bg-blue-500 text-white rounded-full">
            <nuxt-link to="/profile">
              <!-- Placeholder for UserProfile -->
              <span>
                <UserProfile />
              </span>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>

    <!-- Scrollable Genre Tags -->
    <div class="scroll-container flex gap-3 px-4 pt-5">
      <div
        class="shrink-0 min-w-max bg-white/10 backdrop-blur-md border border-white/20 text-white py-1 px-4 rounded text-sm shadow-sm">
        Pop
      </div>
      <div
        class="shrink-0 min-w-max bg-white/10 backdrop-blur-md border border-white/20 text-white py-1 px-4 rounded text-sm shadow-sm">
        Reggae
      </div>
      <div
        class="shrink-0 min-w-max bg-white/10 backdrop-blur-md border border-white/20 text-white py-1 px-4 rounded text-sm shadow-sm">
        Country
      </div>
      <div
        class="shrink-0 min-w-max bg-white/10 backdrop-blur-md border border-white/20 text-white py-1 px-4 rounded text-sm shadow-sm">
        Mugithi
      </div>
      <div
        class="shrink-0 min-w-max bg-white/10 backdrop-blur-md border border-white/20 text-white py-1 px-4 rounded text-sm shadow-sm">
        Afro Beats
      </div>
    </div>

    <!-- connect Session -->
    <ConnectSession />
  </div>

  <!-- trending genres -->
  <div>
    <PreferredPlaylist />
  </div>


  <h3 class="text-white text-lg  font-bold   mt-5 border-t border-gray-600 pt-2 mx-4 ">
    Suggested Songs
  </h3>
  <p class="text-white text-xs p-2 px-4 ">
    Based on your preferences
  </p>
  <SuggestedSongs />
</template>


<script setup>
import { useAuthStore } from "@/stores/auth";
import { onMounted } from "vue";

// Load user data when the dashboard mounts
const authStore = useAuthStore();

import { watchEffect, ref } from "vue";

const username = ref("Guest");

watchEffect(() => {
  username.value = authStore.user?.username || "Guest";
});


// Define the page layout
definePageMeta({
  layout: "dashboard",
});
</script>

<style>
/* Avoid 'scoped' to ensure styles apply globally */
.scroll-container {
  width: 100%;
  max-width: 100%;
  overflow-x: auto;
  white-space: nowrap;
  position: relative;
  z-index: 5;
  scrollbar-width: none;
  /* Firefox */
  -ms-overflow-style: none;
  /* IE/Edge */
}

.scroll-container::-webkit-scrollbar {
  display: none;
  /* Chrome, Safari */
}
</style>