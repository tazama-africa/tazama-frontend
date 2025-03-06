<template>
    <div class="flex justify-between flex-col items-center h-screen">
        <div></div>
        <form @submit.prevent="handleLogin"
            class="lg:w-[30%] w-[100%] flex flex-col justify-between mx-auto lg:bg-white px-6 lg:px-8 lg:py-4 py-10 pt-5 lg:border lg:shadow-xl rounded-xl">
            <div v-if="step === 1">
                <div class="flex items-center text-2xl font-bold lg:mb-1 my-10 lg:my-4 mb-3 justify-center">
                    <NuxtImg src="/logo-long-t.png" class="lg:w-[60%] w-[80%] h-32 object-cover" />
                </div>
                <div class="text-center">
                    <h2 class="text-gray-800 text-2xl font-bold">Create Account</h2>
                    <p class="text-xs border-b border-orange-200 w-full pb-2 mb-4">
                        Connect with us in just a few seconds
                    </p>
                </div>

                <div>
                    <ol
                        class="flex items-center  justify-center  bg-white lg:py-1  p-3 space-x-2 text-sm font-medium text-center text-gray-500  rounded-lg shadow-sm  sm:p-4 sm:space-x-4 rtl:space-x-reverse">
                        <li @click="step = 1"
                            class="flex hover:text-orange-400 items-center text-orange-600 dark:text-orange-500">
                            <span
                                class="flex items-center justify-center w-5 h-5 me-2 text-xs border border-orange-600 rounded-full shrink-0 dark:border-orange-500">
                                1
                            </span>
                            Personal <span class="hidden sm:inline-flex sm:ms-2">Info</span>
                            <svg class="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="m7 9 4-4-4-4M1 9l4-4-4-4" />
                            </svg>
                        </li>
                        <li @click="step = 2" class="flex items-center  hover:text-orange-500">
                            <span
                                class="flex items-center justify-center w-5 h-5 me-2 text-xs border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
                                2
                            </span>
                            Music <span class="hidden sm:inline-flex sm:ms-2">Preference</span>
                            <svg class="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="m7 9 4-4-4-4M1 9l4-4-4-4" />
                            </svg>
                        </li>
                        <li @click="step = 3" class="flex items-center  hover:text-orange-500">
                            <span
                                class="flex items-center justify-center w-5 h-5 me-2 text-xs border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
                                3
                            </span>
                            Enjoy
                        </li>
                    </ol>
                </div>
                <div class="w-full " id="registerForm" method="post">
                    <!-- Email -->

                    <!-- Names -->
                    <div class="my-3">
                        <label for="name-icon" class="block mb-2 text-sm font-medium text-gray-700 ">Full Name</label>
                        <div class="relative w-full">
                            <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                <!-- class="w-4 h-4 text-gray-500 dark:text-gray-400" -->
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-500 dark:text-gray-400"
                                    viewBox="0 0 24 24">
                                    <path fill="currentColor" fill-rule="evenodd"
                                        d="M12 20a7.97 7.97 0 0 1-5.002-1.756l.002.001v-.683c0-1.794 1.492-3.25 3.333-3.25h3.334c1.84 0 3.333 1.456 3.333 3.25v.683A7.97 7.97 0 0 1 12 20M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10c0 5.5-4.44 9.963-9.932 10h-.138C6.438 21.962 2 17.5 2 12m10-5c-1.84 0-3.333 1.455-3.333 3.25S10.159 13.5 12 13.5c1.84 0 3.333-1.455 3.333-3.25S13.841 7 12 7"
                                        clip-rule="evenodd" />
                                </svg>
                            </div>
                            <input type="text" id="name-icon" name="username" v-model="username"
                                class="bg-gray-50  border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-orange-500 focus:border-blue-500 block w-full ps-10 p-2.5 "
                                placeholder="Your name" />
                        </div>
                    </div>
                    <!-- phone number -->
                    <div class='grid grid-cols-2 gap-4'>
                        <div>
                            <label for="email-address-icon" class="block mb-2 text-sm font-medium text-gray-700 ">Your
                                Email</label>
                            <div class="relative w-full">
                                <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                        <path
                                            d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                                        <path
                                            d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                                    </svg>
                                </div>
                                <input type="text" id="email-address-icon" name="email" v-model="email"
                                    class="bg-gray-50  border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 "
                                    placeholder="name@gmail.com" />
                            </div>
                        </div>
                        <div class="">
                            <label for="phone" name="phone_number"
                                class="block mb-2 text-sm font-medium text-gray-700 ">Phone Number</label>
                            <div class="relative w-full">
                                <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        class="w-5 h-5 text-gray-500 dark:text-gray-400" viewBox="0 0 24 24">
                                        <path fill="currentColor" fill-rule="evenodd"
                                            d="m10.687 6.48l-.65-1.164c-.884-1.585-3.106-1.772-4.5-.379c-.836.837-1.487 1.863-1.53 2.996c-.056 1.47.217 3.728 1.83 6.173l4.278-4.278c.922-.923 1.157-2.3.572-3.349m3.485 7.405l-4.278 4.279c2.445 1.612 4.704 1.885 6.173 1.83c1.133-.043 2.159-.695 2.996-1.532c1.393-1.393 1.206-3.615-.38-4.5l-1.162-.649c-1.05-.585-2.426-.35-3.349.572"
                                            clip-rule="evenodd" />
                                        <path fill="currentColor"
                                            d="M11.025 12.976c-2.03-2.029-.91-3.148-.91-3.148l-4.279 4.278a14.247 14.247 0 0 0 1.832 2.227a14.167 14.167 0 0 0 2.226 1.83l4.278-4.277s-1.119 1.119-3.148-.91"
                                            opacity="0.5" />
                                    </svg>
                                </div>
                                <input type="text" id="phone-icon" name="phone_number" v-model="phone"
                                    class="bg-gray-50  border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 "
                                    placeholder="0721 **** **" />
                            </div>
                        </div>
                    </div>
                    <!-- Password 1 -->
                    <div class="my-3">
                        <label for="password" name="password"
                            class="block mb-2 text-sm font-medium text-gray-700 ">Enter
                            Password</label>
                        <div class="relative w-full">
                            <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-500 dark:text-gray-400"
                                    viewBox="0 0 24 24">
                                    <path fill="currentColor"
                                        d="M2 16c0-2.828 0-4.243.879-5.121C3.757 10 5.172 10 8 10h8c2.828 0 4.243 0 5.121.879C22 11.757 22 13.172 22 16c0 2.828 0 4.243-.879 5.121C20.243 22 18.828 22 16 22H8c-2.828 0-4.243 0-5.121-.879C2 20.243 2 18.828 2 16"
                                        opacity="0.5" />
                                    <path fill="currentColor"
                                        d="M8 17a1 1 0 1 0 0-2a1 1 0 0 0 0 2m4 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2m5-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0M6.75 8a5.25 5.25 0 0 1 10.5 0v2.004c.567.005 1.064.018 1.5.05V8a6.75 6.75 0 0 0-13.5 0v2.055a23.57 23.57 0 0 1 1.5-.051z" />
                                </svg>
                            </div>
                            <input type="password" id="phone-icon" name="password" v-model="password"
                                class="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 "
                                placeholder="4 digits or more" />
                        </div>
                    </div>
                    <p class="my-1 text-gray-600 text-xs">
                        By creating account, you agree to
                        <a href="/terms-conditions" class="text-orange-600">Terms & Conditions</a>
                    </p>

                </div>

                <div @click="step = 2" class="text-white hover:bg-gradient-to-r hover:from-yellow-950 hover:to-orange-500 focus:ring-4 mt-6 focus:outline-none focus:ring-orange-300 font-medium rounded-full text-sm w-full px-5 py-2.5 text-center bg-gradient-to-l from-orange-600 to-orange-500 
                    transition-all duration-300 ease-in-out hover:shadow-lg">
                    Next
                </div>
                <p class="my-4 text-gray-500 text-xs">
                    Already have an account?
                    <nuxt-link to="/accounts/login" class="text-orange-600 hover:text-green-400">
                        login
                    </nuxt-link>
                </p>

            </div>
            <!-- music -->
            <div v-if="step === 2">
                <div class="flex items-center text-2xl font-bold my-10 justify-center">
                    <NuxtImg src="/logo-long.png" class="lg:w-[60%] w-[80%] h-32 object-cover hidden" />
                    TAZAMA
                </div>

                <div class="text-center">
                    <h2 class="text-gray-800 text-2xl font-bold">Music Preference</h2>
                    <p class="text-xs border-b border-orange-200 w-full pb-2 mb-4">
                        Connect with us in just a few seconds
                    </p>
                </div>

                <div>
                    <ol
                        class="flex items-center  justify-center  bg-white  p-3 space-x-2 text-sm font-medium text-center text-gray-500   rounded-lg shadow-sm  sm:p-4 sm:space-x-4 rtl:space-x-reverse">
                        <li @click="step = 1" class="flex items-center  hover:text-orange-500">
                            <span
                                class="flex items-center justify-center w-5 h-5 me-2 text-xs border border-gray-500 rounded-full shrink-0 dark:border-orange-500">
                                1
                            </span>
                            Personal <span class="hidden sm:inline-flex sm:ms-2">Info</span>
                            <svg class="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="m7 9 4-4-4-4M1 9l4-4-4-4" />
                            </svg>
                        </li>
                        <li @click="step = 2" class="flex items-center text-orange-600 dark:text-orange-500">
                            <span
                                class="flex items-center justify-center w-5 h-5 me-2 text-xs border border-orange-600 rounded-full shrink-0 dark:border-orange-500">
                                2
                            </span>
                            Music <span class="hidden sm:inline-flex sm:ms-2">Preference</span>
                            <svg class="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="m7 9 4-4-4-4M1 9l4-4-4-4" />
                            </svg>
                        </li>
                        <li @click="step = 3" class="flex items-center text-gray-600 dark:text-orange-500">
                            <span
                                class="flex items-center justify-center w-5 h-5 me-2 text-xs border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
                                3
                            </span>
                            Enjoy
                        </li>
                    </ol>
                </div>

                <!-- Genre Selection -->
                <div class="flex flex-wrap justify-center gap-3 mt-4">
                    <div v-for="genre in genres" :key="genre.id"
                        class="flex items-center text-gray-500 text-xs border border-gray-400 rounded-full p-2 px-4 cursor-pointer transition-all duration-300"
                        :class="{ 'bg-orange-500 text-white border-orange-600': selectedGenres.includes(genre.id) }">
                        <input type="checkbox" :id="'checkbox-' + genre.id" class="hidden" v-model="selectedGenres"
                            @change="toggleGenre(genre)" :value="genre.id" />
                        <label :for="'checkbox-' + genre.id" class="flex items-center gap-2 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-4" viewBox="0 0 24 24">
                                <g fill="none" stroke="currentColor" stroke-width="1.5">
                                    <path d="M12.25 2.75a9.5 9.5 0 1 1 0 19a9.5 9.5 0 0 1 0-19Z" />
                                    <path d="M14.62 12.25a2.37 2.37 0 1 0-4.74 0a2.37 2.37 0 0 0 4.74 0Z" />
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M12.25 18.93a6.7 6.7 0 0 1-5.24-2.53m7.24-10.53a6.69 6.69 0 0 1 4.4 4.48" />
                                </g>
                            </svg>
                            {{ genre.label }}
                        </label>
                    </div>
                </div>

                <div @click="step = 3" class="text-white hover:bg-gradient-to-r hover:from-yellow-950 hover:to-orange-500 focus:ring-4 mt-6 focus:outline-none focus:ring-orange-300 font-medium rounded-full text-sm w-full px-5 py-2.5 text-center bg-gradient-to-l from-orange-600 to-orange-500 
                    transition-all duration-300 ease-in-out hover:shadow-lg">
                    Personalize
                </div>
            </div>
            <!-- Congrats -->
            <div v-if="step === 3">
                <div class="flex items-center text-2xl font-bold my-10 justify-center">
                    <NuxtImg src="/logo-long.png" class="lg:w-[60%] w-[80%] h-32 object-cover hidden" />
                    TAZAMA
                </div>
                <div class="text-center">
                    <h2 class="text-gray-800 text-2xl font-bold">Create Account</h2>
                    <p class="text-xs border-b border-orange-200 w-full pb-2 mb-4">
                        Connect with us in just a few seconds
                    </p>
                </div>

                <div>
                    <ol
                        class="flex items-center  justify-center  bg-white  p-3 space-x-2 text-sm font-medium text-center text-gray-500   rounded-lg shadow-sm  sm:p-4 sm:space-x-4 rtl:space-x-reverse">
                        <li @click="step = 1" class="flex items-center  hover:text-orange-500">
                            <span
                                class="flex items-center justify-center w-5 h-5 me-2 text-xs border border-gray-500 rounded-full shrink-0 dark:border-orange-500">
                                1
                            </span>
                            Personal <span class="hidden sm:inline-flex sm:ms-2">Info</span>
                            <svg class="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="m7 9 4-4-4-4M1 9l4-4-4-4" />
                            </svg>
                        </li>
                        <li @click="step = 2" class="flex items-center  hover:text-orange-500">
                            <span
                                class="flex items-center justify-center w-5 h-5 me-2 text-xs border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
                                2
                            </span>
                            Music <span class="hidden sm:inline-flex sm:ms-2">Preference</span>
                            <svg class="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="m7 9 4-4-4-4M1 9l4-4-4-4" />
                            </svg>
                        </li>
                        <li @click="step = 3" class="flex items-center text-orange-600 dark:text-orange-500">
                            <span
                                class="flex items-center justify-center w-5 h-5 me-2 text-xs border border-orange-600 rounded-full shrink-0 dark:border-orange-500">
                                3
                            </span>
                            Enjoy
                        </li>
                    </ol>
                </div>
                <div class="text-center">
                    <div class="flex items-center justify-center py-5">
                        <div>
                            <NuxtImg src="/success.svg" class="h-28" alt="Login Icon" />
                        </div>
                    </div>
                    <h2 class="text-lg font-bold">You're all set!</h2>
                    <div class="space-y-1 mt-1">
                        <p class="text-gray-600 text-sm">Enjoy unlimited music with Tazama.</p>
                        <p class="text-gray-600 text-sm">Connect to session and join the party!</p>
                    </div>
                </div>

                <UButton block
                    class="w-full  hover:bg-orange-200 hover:text-orange-600 bg-green-600 text-white   py-3  px-6 flex items-center  transition"
                    type="submit">
                    Finish
                </UButton>

            </div>
            <!-- congrats end -->
        </form>

        <div class="flex gap-2 items-center text-sm mb-8 justify-center text-gray-500">
            <nuxt-link to="/"
                class="border-r pr-2 border-gray-400 hover:underline hover:text-orange-600">Home</nuxt-link>
            <nuxt-link to="/about" class="hover:underline hover:text-orange-600">About</nuxt-link>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useAuthStore } from "@/stores/auth";
import Swal from "sweetalert2";

const step = ref(1);
definePageMeta({
    layout: "accounts",
});

const genres = [
    { id: 1, label: "Rock" },
    { id: 2, label: "Pop" },
    { id: 3, label: "Jazz" },
    { id: 4, label: "Hip Hop" },
    { id: 5, label: "Reggae" },
    { id: 6, label: "Urban Tone" },
    { id: 7, label: "Caribbean" },
];

const authStore = useAuthStore();
const email = ref("");
const username = ref("");
const password = ref("");
const phone = ref("");
const errorMessage = ref("");
const selectedGenres = ref([]);

// Toggle genre selection (store genre label instead of ID)
const toggleGenre = (genre) => {
    const genreIndex = selectedGenres.value.findIndex((g) => g === genre.label);

    if (genreIndex !== -1) {
        selectedGenres.value.splice(genreIndex, 1); // Remove if already selected
    } else {
        selectedGenres.value.push(genre.label); // Add new selection
    }
};

const handleLogin = async () => {
    errorMessage.value = ""; // Clear previous errors
    console.log("Selected Genres:", selectedGenres.value);

    if (!email.value || !password.value) {
        console.log("Enter email and password");
        return;
    }

    try {
        await authStore.registerUser(email.value, phone.value, password.value, selectedGenres.value);
    } catch (error) {
        errorMessage.value = error.message || "Registration failed. Please try again.";
    }
};
</script>
