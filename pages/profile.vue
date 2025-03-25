<template>
    <div class="min-h-screen bg-white text-gray-800  ">
      <div class="max-w-lg flex flex-col h-screen mx-auto p-6">
        <!-- User Info Section -->
        <div class="flex border-b pb-4 border-gray-300 items-center gap-6 mb-8">
          <div class="h-24 w-24 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 flex items-center justify-center border-2 border-blue-600">
            <span class="text-4xl truncate  font-bold text-orange-500">
              {{ username.charAt(0).toUpperCase() }}
            </span>
          </div>
          <div>
            <h2 class="text-2xl font-bold w-60 truncate">{{ username }}</h2>
            <p class="text-sm text-gray-400">{{ authStore.user?.email || 'No email provided' }}</p>
          </div>
        </div>
  
        <!-- Settings Options -->
        <div class="space-y-2">
          <a 
            href="#" 
            class="block w-full py-3 px-4 rounded-lg bg-gray-200 hover:bg-gray-700 transition-colors text-gray-800"
          >
            Edit Profile
          </a>
          <a 
            href="#" 
            class="block w-full py-3 px-4 rounded-lg bg-gray-200 hover:bg-gray-700 transition-colors text-gray-800"
          >
            Privacy Settings
          </a>
          <button 
            @click="handleLogout"
            class="block w-full py-3 px-4 rounded-lg bg-gray-200 hover:bg-red-900 transition-colors text-red-400 text-left font-medium"
          >
            Log Out
          </button>
        </div>
        <div>

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
    navigateTo("/login");
  };
  
  // Page layout
  definePageMeta({
    layout: "profile",
  });
  </script>
  
  <style scoped>
  /* No additional CSS needed with Tailwind */
  </style>