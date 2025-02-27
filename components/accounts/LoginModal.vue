<script setup lang="ts">
import { ref } from "vue";
import { useAuthStore } from "@/stores/auth"; // Import the Pinia store

const isOpen = ref(false);
const email = ref("");
const phone = ref("");
const password = ref("");
const confirmPassword = ref("");
const selectedGenres = ref<string[]>([]);
const authStore = useAuthStore(); // Initialize the store
const loading = ref(false); // Track login request state
const errorMessage = ref("");
const currentView = ref("landing"); // Tracks which form is displayed
const registrationStep = ref(1); // Tracks registration step

// genres
const genres = [
  { id: 1, label: 'Rock' },
  { id: 2, label: 'Pop' },
  { id: 3, label: 'Jazz' },
  { id: 4, label: 'Hip-Hop' },
  { id: 5, label: 'Reggae' },
  { id: 6, label: 'Urban Tone' },
  { id: 7, label: 'Carribean' }
]

const selected = ref([genres[3]])

const links = [{
  label: 'Home',
  icon: 'i-heroicons-home',
  to: '/'
}, {
  label: 'Navigation',
  icon: 'i-heroicons-square-3-stack-3d'
}, {
  label: 'Breadcrumb',
  icon: 'i-heroicons-link'
}]


// Login
const handleLogin = async () => {
    errorMessage.value = ""; // Clear previous errors
    loading.value = true;

    try {
        await authStore.login(email.value, password.value);
        // isOpen.value = false; // Close modal on success
    } catch (error) {
        errorMessage.value = "Invalid email or password"; // Show error message
    } finally {
        loading.value = false;
    }
};

const submitForm = async () => {
    errorMessage.value = "" // Clear previous errors
    loading.value = true

    try {
        await authStore.registerUser(email.value ,phone.value, password.value, selected.value.map(g => g.label) )
    } catch (error) {
        errorMessage.value = "Failed to register. Please try again."
    } finally {
        loading.value = false
    }
}
    
</script>

<template>
    <div>
        <!-- Open Modal Button -->
        <UButton
            class="bg-gradient-to-r from-orange-500 w-60 to-yellow-500 hover:bg-gradient-to-l text-white py-3 px-8 rounded-lg"
            label="Get Started" @click="isOpen = true" />

        <!-- Authentication Modal -->
        <UModal v-model="isOpen" prevent-close>
            <UCard class="bg-white text-gray-900 p-4 rounded-lg">
                <!-- Modal Header -->
                <template #header>
                    <div class="flex items-center justify-between -my-5">
                        <h3 v-if="currentView === 'landing'" class="text-lg font-semibold hidden text-gray-700"></h3>
                        <!-- <h3 v-else class="text-lg font-semibold text-gray-700">
                            <UButton class="text-gray-600 bg-white" @click="currentView = 'landing'">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 12 24">
                                    <path fill="currentColor"
                                        d="m3.343 12l7.071 7.071L9 20.485l-7.778-7.778a1 1 0 0 1 0-1.414L9 3.515l1.414 1.414z" />
                                </svg>
                            </UButton>
                        </h3> -->
                        <h3 v-if="registrationStep === 1" class="text-lg font-semibold text-gray-700">
                            <UButton class="text-gray-600 bg-white" @click="currentView = 'landing'">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 12 24">
                                    <path fill="currentColor"
                                        d="m3.343 12l7.071 7.071L9 20.485l-7.778-7.778a1 1 0 0 1 0-1.414L9 3.515l1.414 1.414z" />
                                </svg>
                            </UButton>
                        </h3>

                        <template v-if="registrationStep === 1">
                            <div class="flex gap-1">
                                <input id="default-radio-1" type="radio" value="true" name="default-radio"  checked class="lg:w-4  lg:h-4 w-3 h-3 text-green-600 bg-green-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                <input id="default-radio-1" type="radio" value="" name="default-radio" class="lg:w-4  lg:h-4 w-3 h-3 cursor-not-allowed text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                <input id="default-radio-1" type="radio" value="" name="default-radio" class="lg:w-4  lg:h-4 w-3 h-3 cursor-not-allowed text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                <input id="default-radio-1" type="radio" value="" name="default-radio" class="lg:w-4  lg:h-4 w-3 h-3 cursor-not-allowed text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            </div>                            
                        </template>

                        <h3 v-if="registrationStep === 2" class="text-lg font-semibold text-gray-700">
                            <UButton class="text-gray-600 bg-white" @click="registrationStep = 1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 12 24">
                                    <path fill="currentColor"
                                        d="m3.343 12l7.071 7.071L9 20.485l-7.778-7.778a1 1 0 0 1 0-1.414L9 3.515l1.414 1.414z" />
                                </svg>
                            </UButton>
                        </h3>
                        <template v-if="registrationStep === 2">
                            <div class="flex gap-1">
                                <input id="default-radio-1" type="radio" value="true" name="default-radio"   class="lg:w-4  lg:h-4 w-3 h-3 text-green-600 bg-green-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                <input id="default-radio-1" type="radio" value="" name="default-radio" checked class="lg:w-4  lg:h-4 w-3 h-3 cursor-not-allowed text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                <input id="default-radio-1" type="radio" value="" name="default-radio" class="lg:w-4  lg:h-4 w-3 h-3 cursor-not-allowed text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                <input id="default-radio-1" type="radio" value="" name="default-radio" class="lg:w-4  lg:h-4 w-3 h-3 cursor-not-allowed text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            </div>                            
                        </template>

                        <h3 v-if="registrationStep === 3" class="text-lg font-semibold text-gray-700">
                            <UButton class="text-gray-600 bg-white" @click="registrationStep = 2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 12 24">
                                    <path fill="currentColor"
                                        d="m3.343 12l7.071 7.071L9 20.485l-7.778-7.778a1 1 0 0 1 0-1.414L9 3.515l1.414 1.414z" />
                                </svg>
                            </UButton>
                        </h3>
                        <template v-if="registrationStep === 3">
                            <div class="flex gap-1">
                                <input id="default-radio-1" type="radio" value="true" name="default-radio"   class="lg:w-4  lg:h-4 w-3 h-3 text-green-600 bg-green-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                <input id="default-radio-1" type="radio" value="" name="default-radio"   class="lg:w-4  lg:h-4 w-3 h-3 cursor-not-allowed text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                <input id="default-radio-1" type="radio" value="" name="default-radio"  checked class="lg:w-4  lg:h-4 w-3 h-3 cursor-not-allowed text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                <input id="default-radio-1" type="radio" value="" name="default-radio" class="lg:w-4  lg:h-4 w-3 h-3 cursor-not-allowed text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            </div>                            
                        </template>

                        <h3 v-if="registrationStep === 4" class="text-lg font-semibold text-gray-700">
                            <UButton class="text-gray-600 bg-white" @click="registrationStep = 3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 12 24">
                                    <path fill="currentColor"
                                        d="m3.343 12l7.071 7.071L9 20.485l-7.778-7.778a1 1 0 0 1 0-1.414L9 3.515l1.414 1.414z" />
                                </svg>
                            </UButton>
                        </h3>
                        <template v-if="registrationStep === 4">
                            <div class="flex gap-1">
                                <input id="default-radio-1" type="radio" value="true" name="default-radio"   class="lg:w-4  lg:h-4 w-3 h-3 text-green-600 bg-green-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                <input id="default-radio-1" type="radio" value="" name="default-radio" class="lg:w-4  lg:h-4 w-3 h-3 cursor-not-allowed text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                <input id="default-radio-1" type="radio" value="" name="default-radio" class="lg:w-4  lg:h-4 w-3 h-3 cursor-not-allowed text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                <input id="default-radio-1" type="radio" value="" name="default-radio"  checked class="lg:w-4  lg:h-4 w-3 h-3 cursor-not-allowed text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            </div>                            
                        </template>
                        

                        <!-- v-if="currentView === 'login'" -->
                        <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid"
                            @click="isOpen = false" />
                    </div>
                </template>

                <!-- Landing View -->
                <div v-if="currentView === 'landing'" class="text-center">
                    <h3 class="text-2xl font-bold mb-4 text-gray-700">TAZAMA</h3>
                    <h2 class="text-xl text-gray-600 font-semibold">Enjoy unlimited music with Tazama</h2>
                    <p class="text-gray-500 mt-2">Create an account, select your favorite genres, and enjoy music with
                        friends.</p>
                    <div class="mt-6 space-y-2">
                        <UButton block
                            class="w-full border border-green-600 hover:bg-green-200 hover:text-green-600 text-green-600 bg-white   py-3  px-6 flex items-center  transition"
                            @click="currentView = 'register'">
                            Create Account
                        </UButton>
                        <div class="flex items-center my-4">
                            <div class="flex-1 border-t border-gray-200"></div>
                            <span class="mx-4 text-gray-500">or</span>
                            <div class="flex-1 border-t border-gray-200"></div>
                        </div>
                        <UButton block
                            class="w-full  border border-orange-600 hover:bg-orange-200 hover:text-orange-600 text-orange-600 bg-white   py-3  px-6 flex items-center  transition"
                            @click="currentView = 'login'">
                            Login
                        </UButton>
                    </div>
                </div>

                <!-- Login Form -->
                <form v-if="currentView === 'login'" @submit.prevent="handleLogin">
                    <div class="space-y-4">
                        <div class="flex items-center justify-center">
                            <div>
                                <NuxtImg src="/login.svg" class="h-20" alt="Login Icon" />
                            </div>
                        </div>
                        <div>
                            <h2 class="text-center text-lg text-gray-800 font-bold">
                                Login
                            </h2>
                            <h3 class="text-center text-sm text-gray-600">
                                Welcome back to Tazama
                            </h3>
                        </div>
                        <UInput class="border border-gr" v-model="email" placeholder="Email" type="email" required />
                        <UInput v-model="password" placeholder="Password" type="password"  required />
                        <nuxt-link to="/accounts/forgot-password" class="text-orange-500 text-xs  font-bold">
                            Forgot password?
                        </nuxt-link>
                        <!-- Error Message -->
                        <p v-if="errorMessage" class="text-red-500 text-sm">{{ errorMessage }}</p>
                        <UButton block
                            class="w-full  hover:bg-orange-200 hover:text-orange-600 bg-orange-600 text-white   py-3  px-6 flex items-center  transition"
                            type='submit' :loading="loading">
                            <div>
                                Login
                            </div>
                        </UButton>
                    </div>
                </form>

                <!-- Multi-Step Registration Form -->
                <form v-if="currentView === 'register'" @submit.prevent="submitForm">
                    <div v-if="registrationStep === 1" class="space-y-4">
                        <div class="flex items-center justify-center">
                            <div>
                                <NuxtImg src="/email-signup.svg" class="h-28" alt="Login Icon" />
                            </div>
                        </div>
                        <div>
                            <h2 class="text-center text-lg text-gray-800 font-bold">
                                Create Profile
                            </h2>
                            <h3 class="text-center text-sm text-gray-600">
                                Signup
                            </h3>
                        </div>

                        <UInput v-model="email" placeholder="Your Email*" type="email" required />
                        <UInput v-model="phone" placeholder="Phone Number - (0712*****)" type="tel" required />
                        <UButton
                            class="w-full  hover:bg-orange-200 hover:text-orange-600 bg-green-600 text-white   py-3  px-6 flex items-center  transition"
                            block @click="registrationStep = 2">Next</UButton>
                    </div>
                    <div v-if="registrationStep === 2" class="space-y-4">
                        <div class="flex items-center justify-center">
                            <div>
                                <NuxtImg src="/password.svg" class="h-28" alt="Login Icon" />
                            </div>
                        </div>
                        <div>
                            <h2 class="text-center text-lg text-gray-800 font-bold">
                                Create a password
                            </h2>
                            <h3 class="text-center text-sm text-gray-600">
                                Enter a secure password
                            </h3>
                        </div>
                        <UInput v-model="password" placeholder="Password with 4 or more characters" type="password"
                            required />
                        <UInput v-model="confirmPassword" placeholder="Confirm Password" class="hidden" type="password"
                            required />
                        <div class="'flex gap-2'">
                            <UButton block class='hidden' @click="registrationStep = 1">Back</UButton>
                            <UButton block
                                class="w-full  hover:bg-orange-200 hover:text-orange-600 bg-green-600 text-white   py-3  px-6 flex items-center  transition"
                                @click="registrationStep = 3">Next</UButton>

                        </div>
                    </div>
                    <div v-if="registrationStep === 3" class="space-y-4">
                        <div class="flex items-center justify-center">
                            <div>
                                <NuxtImg src="/music-signup.svg" class="h-28" alt="Login Icon" />
                            </div>
                        </div>
                        <div>
                            <h2 class="text-center text-lg text-gray-800 font-bold">
                                Select three or more genres
                            </h2>
                            <h3 class="text-center text-sm text-gray-600">
                                Select Your Favorite Genres
                            </h3>
                        </div>

                        <UCommandPalette v-model="selected" multiple nullable :autoselect="false"
                            :groups="[{ key: 'genres', commands: genres }]"
                            :fuse="{ resultLimit: 5, fuseOptions: { threshold: 0.1 } }"
                            class="border border-gray-400 h-60 rounded-lg p-2">
                            <template #selected>
                                <div class="flex flex-wrap gap-2 mt-2">
                                    <span v-for="item in selected" :key="item.id"
                                        class="px-3 py-1 bg-green-200 text-green-800 rounded-lg">
                                        {{ item.label }}
                                    </span>
                                </div>
                            </template>
                        </UCommandPalette>

                        <UButton block
                            class="w-full  hover:bg-orange-200 hover:text-orange-600 bg-green-600 text-white   py-3  px-6 flex items-center  transition"
                            @click="registrationStep = 4">Next</UButton>
                    </div>
                    <div v-if="registrationStep === 4" class="text-center space-y-4">
                        <div class="flex items-center justify-center">
                            <div>
                                <NuxtImg src="/success.svg" class="h-28" alt="Login Icon" />
                            </div>
                        </div>
                        <h2 class="text-lg font-bold">You're all set!</h2>
                        <div>
                            <p class="text-gray-600 text-sm">Enjoy unlimited music with Tazama.</p>
                            <p class="text-gray-600 text-sm">Connect to session and join the party!</p>
                        </div>
                        <UButton block class="hidden" @click="registrationStep = 3">Back</UButton>
                        <UButton block
                            class="w-full  hover:bg-orange-200 hover:text-orange-600 bg-green-600 text-white   py-3  px-6 flex items-center  transition"
                            type="submit">Finish</UButton>
                    </div>
                </form>
            </UCard>
        </UModal>
    </div>
</template>
