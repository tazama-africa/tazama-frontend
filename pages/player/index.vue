<template>
    <div class="relative w-full h-72 bg-cover bg-center overflow-x-hidden"
        style="background-image: url('https://images.pexels.com/photos/1114690/pexels-photo-1114690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');">
        <!-- Gradient Overlay -->
        <div class="absolute inset-0 bg-gradient-to-t from-black via-black/70 via-40% to-transparent opacity-90 z-0">
        </div>

        <!-- Header Section -->
        <div
            class="lg:bg-white bg-transparent relative pt-4 w-full h-10 flex justify-between items-center text-sm lg:px-2 lg:rounded-full z-5">
            <div class="flex gap-1">
                <div class="flex gap-2 items-start">
                    <!-- <NuxtImg src="/logo-long-t.png" class="lg:w-[60%] w-[80%] h-24 object-cover" alt="Logo" width="200"
              height="96" loading="lazy" /> -->
                    <h2 class="text-white px-4 text-xl">Player</h2>
                </div>
            </div>
            <div>
                <div class="flex gap-4 items-center py-2 pr-4">

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

        <!-- connect Session -->
        <ConnectSession />
    </div>
    <div class="p-2 mt-2 mb-5">
        <h3 class='text-white px-2 text-lg'>
            Dashboard
        </h3>
        <div>
            <div class="grid lg:grid-cols-4 grid-cols-2 gap-4 p-2 ">
                <!-- reports -->
                <nuxt-link to="/reports"
                    class="flex pt-5 text-white hover:translate-x-1 transition-700  flex-col items-center justify-center rounded-xl shadow"
                    style="background-color: #212121;">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class=" h-16" viewBox="0 0 24 24">
                            <path fill="currentColor"
                                d="m6 16.5l-3 2.94V11h3m5 3.66l-1.57-1.34L8 14.64V7h3m5 6l-3 3V3h3m2.81 9.81L17 11h5v5l-1.79-1.79L13 21.36l-3.47-3.02L5.75 22H3l6.47-6.34L13 18.64" />
                        </svg>
                    </div>
                    <div class="text-center border-t pt-2 mt-2 ">
                        <p style="font-size: 10px ;">
                            Give anonymous feedback
                        </p>
                        <p style="font-size: 10px ;">
                            Rate your ride
                        </p>
                        <h3 class="text-xs items-center justify-center my-4 flex gap-2">
                            <span>Report</span>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" class="text-white h-4" viewBox="0 0 24 24">
                                    <path fill="none" stroke="currentColor" stroke-width="2"
                                        d="M2 12h20m-9-9l9 9l-9 9" />
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
                        <svg xmlns="http://www.w3.org/2000/svg" class=" h-16" viewBox="0 0 24 24">
                            <path fill="currentColor"
                                d="M21 11.11V5a2 2 0 0 0-2-2h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14a2 2 0 0 0 2 2h6.11c1.26 1.24 2.98 2 4.89 2c3.87 0 7-3.13 7-7c0-1.91-.76-3.63-2-4.89M12 3c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1M5 19V5h2v2h10V5h2v4.68c-.91-.43-1.92-.68-3-.68H7v2h4.1c-.6.57-1.06 1.25-1.42 2H7v2h2.08c-.05.33-.08.66-.08 1c0 1.08.25 2.09.68 3zm11 2c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5m.5-4.75l2.86 1.69l-.75 1.22L15 17v-5h1.5z" />
                        </svg>
                    </div>
                    <div class="text-center border-t pt-2 mt-2 ">
                        <p style="font-size: 10px ;">
                            Travel History
                        </p>
                        <p style="font-size: 10px ;">
                            Insight on Previous Trips
                        </p>
                        <h3 class="text-xs items-center justify-center my-4 flex gap-2">
                            <span>History</span>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" class="text-white h-4" viewBox="0 0 24 24">
                                    <path fill="none" stroke="currentColor" stroke-width="2"
                                        d="M2 12h20m-9-9l9 9l-9 9" />
                                </svg>
                            </span>
                        </h3>
                    </div>
                </nuxt-link>

                <!-- Pay -->
                <nuxt-link to="/payments"
                    class="flex pt-5 text-white hover:translate-x-1 transition-700  flex-col items-center justify-center rounded-xl shadow"
                    style="background-color: #212121;">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                            class="filter grayscale contrast-125 brightness-110 h-16" viewBox="0 0 48 48">
                            <path fill="#aed580"
                                d="M31.003,7.001l-0.001-5.5c0-0.828,0.672-1.5,1.5-1.5	c0.828,0,1.5,0.672,1.5,1.5v5.5H31.003z">
                            </path>
                            <path fill="#aed580"
                                d="M14.964,47.999h18.073c0.533,0,0.965-0.432,0.965-0.965V4.964c0-0.533-0.432-0.965-0.965-0.965	H14.964c-0.533,0-0.965,0.432-0.965,0.965v42.07C13.999,47.567,14.431,47.999,14.964,47.999z">
                            </path>
                            <path fill="#fff" fill-rule="evenodd"
                                d="M17.739,29.001h12.524c0.962,0,1.741-0.78,1.741-1.741V10.743	c0-0.962-0.78-1.741-1.741-1.741H17.739c-0.962,0-1.741,0.78-1.741,1.741V27.26C15.997,28.222,16.777,29.001,17.739,29.001z"
                                clip-rule="evenodd"></path>
                            <path fill="#9b2310" fill-rule="evenodd"
                                d="M12.001,22.001	c3.643-0.7,5.865-2.448,7-5c1.135,2.552,3.357,4.3,7,5H12.001z"
                                clip-rule="evenodd"></path>
                            <path fill="#e60023" fill-rule="evenodd"
                                d="M12.001,22.001	c4.273,0.867,6.476,1,11,1c5.076,0,11.712-1.939,14-6l-9-4C24.039,18.139,21.863,22.001,12.001,22.001z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </div>
                    <div class="text-center border-t pt-2 mt-2 ">
                        <p style="font-size: 10px ;">
                            Route based pricing
                        </p>
                        <p style="font-size: 10px ;">
                            Make payments easily
                        </p>
                        <h3 class="text-xs items-center justify-center my-4 flex gap-2">
                            <span>Pay</span>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" class="text-white h-4" viewBox="0 0 24 24">
                                    <path fill="none" stroke="currentColor" stroke-width="2"
                                        d="M2 12h20m-9-9l9 9l-9 9" />
                                </svg>
                            </span>
                        </h3>
                    </div>
                </nuxt-link>

                <!-- Premium -->
                <nuxt-link to="/premium"
                    class="flex pt-5 text-white border border-gray-500  hover:translate-x-1 transition-700  flex-col items-center justify-center rounded-xl shadow"
                    style="background-color: #030303;">
                    <div>
                        <NuxtImg src="/logo-icon.png"  class="filter p-1 rounded-full grayscale object-contain contrast-40 brightness-125 h-16" alt="Logo"
                             loading="lazy" />
                    </div>
                    <div class="text-center border-t pt-2 mt-2 ">
                        <p style="font-size: 10px ;">
                            Travel History
                        </p>
                        <p style="font-size: 10px ;">
                            Insight on Previous Trips
                        </p>
                        <h3 class="text-xs items-center justify-center my-4 flex gap-2">
                            <span>Premium</span>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" class="text-white h-4" viewBox="0 0 24 24">
                                    <path fill="none" stroke="currentColor" stroke-width="2"
                                        d="M2 12h20m-9-9l9 9l-9 9" />
                                </svg>
                            </span>
                        </h3>
                    </div>
                </nuxt-link>


            </div>
        </div>
    </div>

    <!-- trending genres -->

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