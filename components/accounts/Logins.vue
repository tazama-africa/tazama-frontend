<script setup lang="ts">
import { ref } from "vue";
import { useAuthStore } from "@/stores/auth"; // Import the Pinia store

const isOpen = ref(false);
const email = ref("");
const password = ref("");
const authStore = useAuthStore(); // Initialize the store
const loading = ref(false); // Track login request state
const errorMessage = ref("");
const currentView = ref("landing"); // Tracks which form is displayed

const handleLogin = async () => {
    errorMessage.value = ""; // Clear previous errors
    loading.value = true;

    try {
        await authStore.login(email.value, password.value);
        isOpen.value = false; // Close modal on success
    } catch (error) {
        errorMessage.value = "Invalid email or password"; // Show error message
    } finally {
        loading.value = false;
    }
};
</script>

<template>
    <div>
        <!-- Open Modal Button -->
        <UButton
            class="bg-gradient-to-r from-orange-500 w-60 to-yellow-500 text-white py-3 px-8 rounded-lg hover:from-yellow-600 hover:bg-gradient-to-l transition duration-300"
            label="Get Started" @click="isOpen = true" />

        <!-- Authentication Modal -->
        <UModal v-model="isOpen" prevent-close>
            <UCard
                :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800', base: 'bg-white text-gray-900 p-1 py-1  rounded-lg' }">
                <!-- Modal Header -->
                <template #header>
                    <div class="flex items-center justify-between -my-3">
                        <h3 v-if="currentView === 'landing'" class="text-lg font-semibold text-gray-700">

                        </h3>
                        <h3 v-if="currentView === 'login'" class="text-lg font-semibold text-gray-700">
                            <!-- Back to Landing -->
                            <UButton class="w-full text-gray-600 hover:text-gray-700 shadow:none bg-white"
                                @click="currentView = 'landing'">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 12 24">
                                    <path fill="currentColor" fill-rule="evenodd"
                                        d="m3.343 12l7.071 7.071L9 20.485l-7.778-7.778a1 1 0 0 1 0-1.414L9 3.515l1.414 1.414z" />
                                </svg>
                            </UButton>
                        </h3>

                        <h3 v-if="currentView === 'register'" class="text-lg font-semibold text-gray-700">
                            <UButton class="w-full text-gray-600 hover:text-gray-700 shadow:none bg-white"
                                @click="currentView = 'landing'">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 12 24">
                                    <path fill="currentColor" fill-rule="evenodd"
                                        d="m3.343 12l7.071 7.071L9 20.485l-7.778-7.778a1 1 0 0 1 0-1.414L9 3.515l1.414 1.414z" />
                                </svg>
                            </UButton>
                        </h3>

                        <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1"
                            @click="isOpen = false" />
                    </div>
                </template>

                <!-- Landing View -->
                <div v-if="currentView === 'landing'" class="text-center ">
                    <div class="mt-6 space-y-2">
                        <UButton block
                            class="w-full border border-2xl border-green-600 hover:text-green-100 text-green-600 bg-white   py-4  px-6 flex items-center  transition"
                            @click="currentView = 'register'">
                            <div>
                                Create Account
                            </div>
                        </UButton>
                        <div class="flex items-center my-4">
                            <div class="flex-1 border-t border-gray-200"></div>
                            <span class="mx-4 text-gray-500">or</span>
                            <div class="flex-1 border-t border-gray-200"></div>
                        </div>
                        <UButton block
                            class="w-full border border-2xl border-orange-600 hover:bg-orange-200 text-orange-600 bg-white   py-4  px-6 flex items-center  transition"
                            @click="currentView = 'login'">
                            <div>
                                Login
                            </div>
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
                        <UInput v-model="email" placeholder="Email" type="email" required />
                        <UInput v-model="password" placeholder="Password" type="password" required />

                        <!-- Error Message -->
                        <p v-if="errorMessage" class="text-red-500 text-sm">{{ errorMessage }}</p>

                        <!-- Submit Button -->
                        <!-- <UButton type="submit"
                            class="w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition"
                            :loading="loading">
                            Login
                        </UButton> -->
                        <UButton block
                            class="w-full border border-2xl border-orange-600 hover:bg-orange-200 hover:text-orange-600 bg-orange-600 text-white   py-4  px-6 flex items-center  transition"
                            type='submit' :loading="loading">
                            <div>
                                Login
                            </div>
                        </UButton>
                    </div>
                </form>

                <!-- Registration Form -->
                <form v-if="currentView === 'register'" @submit.prevent="console.log('Register')">
                    <div class="space-y-4">
                        <UInput placeholder="Full Name" type="text" required />
                        <UInput placeholder="Email" type="email" required />
                        <UInput placeholder="Password" type="password" required />
                        <UInput placeholder="Confirm Password" type="password" required />

                        <!-- Submit Button -->
                        <UButton block
                            class="w-full border border-2xl border-orange-600 hover:bg-orange-200 text-orange-600 bg-white   py-2  px-6 flex items-center  transition"
                            type='submit'>
                            <div>
                                Register
                            </div>
                        </UButton>


                        <!-- Back to Landing -->
                        <UButton class="w-full bg-white shadow-none py-0 my-0 text-gray-600 "
                            @click="currentView = 'landing'">
                            <div>
                                Already have an account? Login
                            </div>
                        </UButton>
                    </div>
                </form>
            </UCard>
        </UModal>
    </div>
</template>