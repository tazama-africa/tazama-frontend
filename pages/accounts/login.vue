<template>
    <div class="flex justify-between flex-col items-center h-screen">
      <div></div>
      <form @submit.prevent="handleLogin"
        class="lg:w-[30%] w-[100%] flex flex-col justify-between mx-auto lg:bg-white px-6 lg:px-8 py-10 lg:py-2 pt-5 lg:border lg:shadow-xl rounded-xl">
        <div>
          <div class="flex items-center text-2xl font-bold my-10 justify-center">
            <NuxtImg src="/logo-block-t.png" class="lg:w-[60%] w-[80%] h-32 object-cover" />
          </div>
          <h2 class="text-gray-800 text-2xl font-bold">Sign in</h2>
          <p class="text-xs border-b border-orange-200 w-full pb-2 mb-4">
            Connect with us in just a few seconds
          </p>
  
          <label for="email" class="block mb-2 mt-2 text-sm font-medium text-gray-700">
            Your Email
          </label>
          <div class="relative mb-2">
            <input type="email" id="email" v-model="email"
              class="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5"
              placeholder="name@gmail.com" 
              :disabled="isLoading"
            />
          </div>
  
          <label for="password" class="block mb-2 text-sm font-medium text-gray-700">Password</label>
          <div class="relative mb-2">
            <input type="password" id="password" v-model="password"
              class="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5"
              placeholder="6-digit password" 
              :disabled="isLoading"
            />
          </div>
  
          <nuxt-link to="/accounts/forgot-password" class="text-orange-500 text-xs my-4 font-bold">
            Forgot password?
          </nuxt-link>
  
          <button 
            type="submit" 
            class="relative text-white hover:bg-gradient-to-r hover:from-yellow-950 hover:to-orange-500 focus:ring-4 mt-6 focus:outline-none focus:ring-orange-300 font-medium rounded-full text-sm w-full px-5 py-2.5 text-center bg-gradient-to-l from-orange-600 to-orange-500 transition-all duration-300 ease-in-out hover:shadow-lg disabled:opacity-75 disabled:cursor-not-allowed"
            :disabled="isLoading"
          >
            <span class="flex items-center justify-center">
              <svg v-if="isLoading" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              {{ isLoading ? 'Signing in...' : 'Sign in' }}
            </span>
          </button>
  
          <p class="my-4 text-gray-500 text-xs">
            Don't have an account?
            <nuxt-link to="/accounts/register" class="text-orange-600 hover:text-green-400">
              Create Account
            </nuxt-link>
          </p>
        </div>
      </form>
  
      <div class="flex gap-2 items-center text-sm mb-8 justify-center text-gray-500">
        <nuxt-link to="/" class="border-r pr-2 border-gray-400 hover:underline hover:text-orange-600">Home</nuxt-link>
        <nuxt-link to="/about" class="hover:underline hover:text-orange-600">About</nuxt-link>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import { useAuthStore } from "@/stores/auth";
  import Swal from "sweetalert2";
  
  definePageMeta({
    layout: "accounts",
  });
  
  const authStore = useAuthStore();
  const email = ref("");
  const password = ref("");
  const errorMessage = ref("");
  const isLoading = ref(false);
  
  const handleLogin = async () => {
    if (isLoading.value) return; // Prevent multiple clicks
  
    errorMessage.value = ""; // Clear previous errors
    isLoading.value = true; // Start loading
  
    if (!email.value || !password.value) {
      errorMessage.value = "Please enter both email and password.";
      isLoading.value = false;
      return;
    }
  
    try {
      await authStore.login(email.value, password.value);
      
    } catch (error) {
      errorMessage.value = error.message || "Login failed. Please try again.";
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: errorMessage.value,
      });
    } finally {
      isLoading.value = false; // Stop loading regardless of success or failure
    }
  };
  </script>