<template>
    <div class="flex justify-between flex-col items-center h-screen">
        <div></div>
        <div class="lg:w-[25%] w-[100%] mx-auto lg:bg-white px-6 lg:px-8 py-10 pt-5 lg:border lg:shadow-xl rounded-xl">
    <div v-if="!isSubmitted" class="flex flex-col justify-between">
        <div class="flex items-center text-2xl font-bold my-10 justify-center">
            <NuxtImg src="/logo-block-t.png" class="lg:w-[60%] w-[80%] h-32 object-cover" />
          </div>
      <h2 class="text-gray-800 text-2xl font-bold">Forgot password</h2>
      <p class="text-xs border-b border-orange-200 w-full pb-2 mb-2">
        An email with a reset link will be sent
      </p>

      <form @submit.prevent="handleSubmit">
        <label
          for="email-address-icon"
          class="block mt-5 text-sm font-medium text-gray-700"
        >
          Your Email
        </label>
        <div class="relative mb-2">
          <div
            class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"
          >
            <svg
              class="w-4 h-4 text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 16"
            >
              <path
                d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"
              />
              <path
                d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"
              />
            </svg>
          </div>
          <input
            type="email"
            id="email-address-icon"
            v-model="email"
            class="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full ps-10 p-2.5"
            placeholder="name@gmail.com"
            required
          />
        </div>

        <NuxtLink
          to="/accounts/login"
          class="text-orange-500 text-xs my-4 font-bold"
        >
          Back to Login
        </NuxtLink>
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
      <h2 class="text-gray-800 text-2xl font-bold mb-4">Email Sent</h2>
      <p class="text-gray-700 text-sm mb-6">
        The email has been sent successfully! Check your inbox for the reset link.
      </p>
      <NuxtLink
        to="/accounts/login"
        class="text-orange-500 text-xs my-4 font-bold"
      >
        Back to Login
      </NuxtLink>
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

const authStore = useAuthStore();

const email = ref('');
const isSubmitted = ref(false);

const handleSubmit = async () => {
  try {
    isSubmitted.value = true;    
    // Send to store API
    try {
      await authStore.recoverPassword(email.value);  
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