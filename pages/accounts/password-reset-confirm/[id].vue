<template>
    <div class="flex justify-between flex-col items-center h-screen">
        <div></div>
        <div class="lg:w-[25%] w-[100%] mx-auto lg:bg-white px-6 lg:px-8 py-10 pt-5 lg:border lg:shadow-xl rounded-xl">
            <div v-if="!isSubmitted" class="flex flex-col justify-between">
                <div class="flex items-center text-2xl font-bold my-10 justify-center">
                    <NuxtImg src="/logo-block-t.png" class="lg:w-[60%] w-[80%] h-32 object-cover" />
                </div>
                <h2 class="text-gray-800 text-2xl font-bold">Setup New Password</h2>
                <p class="text-xs border-b border-orange-200 w-full pb-2 mb-2">
                    Setup a memorable and secure password
                </p>

                <form @submit.prevent="handleSubmit">
    <label for="password" class="block mb-2 text-sm font-medium text-gray-700">Password</label>
    <div class="relative mb-2">
      <input 
        :type="showPassword ? 'text' : 'password'" 
        id="password" 
        v-model="password"
        class="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 pr-10"
        :disabled="isLoading" 
      />
      <button 
        type="button" 
        class="absolute inset-y-0 right-0 flex items-center pr-3"
        @click="togglePassword"
      >
        <svg 
          class="w-5 h-5 text-gray-500" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
          :class="{ 'hidden': showPassword }"
        >
          <path 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            stroke-width="2" 
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            stroke-width="2" 
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
          />
        </svg>
        <svg 
          class="w-5 h-5 text-gray-500" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
          :class="{ 'hidden': !showPassword }"
        >
          <path 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            stroke-width="2" 
            d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
          />
        </svg>
      </button>
    </div>

    <label for="password2" class="block mb-2 text-sm font-medium text-gray-700">Confirm Password</label>
    <div class="relative mb-2">
      <input 
        :type="showPassword ? 'text' : 'password'" 
        id="password2" 
        v-model="password2"
        class="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 pr-10"
        :disabled="isLoading" 
      />
      <button 
        type="button" 
        class="absolute inset-y-0 right-0 flex items-center pr-3"
        @click="togglePassword"
      >
        <svg 
          class="w-5 h-5 text-gray-500" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
          :class="{ 'hidden': showPassword }"
        >
          <path 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            stroke-width="2" 
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            stroke-width="2" 
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
          />
        </svg>
        <svg 
          class="w-5 h-5 text-gray-500" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
          :class="{ 'hidden': !showPassword }"
        >
          <path 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            stroke-width="2" 
            d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
          />
        </svg>
      </button>
    </div>

    <button 
      type="submit"
      class="text-white hover:bg-gradient-to-r hover:from-yellow-950 hover:to-orange-500 focus:ring-4 mt-6 focus:outline-none focus:ring-orange-300 font-medium rounded-full text-sm w-full px-5 py-2.5 text-center bg-gradient-to-l from-orange-600 to-orange-500 transition-all duration-300 ease-in-out hover:shadow-lg"
    >
      Send
    </button>
  </form>
            </div>

            <div v-else class="text-center">
                <div class="flex items-center text-2xl font-bold my-10 justify-center">
                    <NuxtImg src="/logo-block-t.png" class="lg:w-[60%] w-[80%] h-32 object-cover" />
                </div>
                <h2 class="text-gray-800 text-2xl font-bold mb-4">Password Reset successfully</h2>
                <p class="text-gray-700 text-sm mb-6">
                    The passwor has been set successfully! 
                </p>
                
            </div>
        </div>
        <div class="flex gap-2 items-center text-sm mb-8 justify-center text-gray-500">
            <nuxt-link to="/"
                class="border-r pr-2 border-gray-400 hover:underline hover:text-orange-600">Home</nuxt-link>
            <nuxt-link to="/about" class="hover:underline hover:text-orange-600">About</nuxt-link>
        </div>
    </div>
</template>

<script setup>
import { useAuthStore } from "@/stores/auth";
import Swal from "sweetalert2";
import { useRoute } from 'vue-router'
import { ref } from 'vue'

const authStore = useAuthStore();
const password = ref('')
const password2 = ref('')
const isLoading = ref(false)
const showPassword = ref(false)


const togglePassword = () => {
  showPassword.value = !showPassword.value
}

const route = useRoute()
const id = route.params.id

const isSubmitted = ref(false);

const handleSubmit = async () => {
    try {
        isSubmitted.value = true;
        // Send to store API
        console.log(password.value, id)
        try {
            if (password.value==password2.value) {
                await authStore.confirmPassword(password.value, id);
            }
            else {
                Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: "Confirm Password",
            });
            }
        } catch (error) {
            errorMessage.value = error.message || "Login failed. Please try again.";
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: errorMessage.value,
            });
        }

    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
    }
};
definePageMeta({
    layout: 'accounts'

})
</script>

<style lang="scss" scoped></style>