<template>
    <div class="rounded-2xl h-screen">
        <div
            class="bg-gradient-to-b px-4 gap-4 from-blue-500 via-blue-400 pb-[4%] to-blue-300 flex xs:h-72 h-40 lg:rounded-t-2xl">
            <div class="lg:w-[30%] lg:flex items-center justify-center hidden">
                <img src="https://thumbnails.production.thenounproject.com/E4BrN-FHH0zruVnoXkCy5WMSgsE=/fit-in/1000x1000/photos.production.thenounproject.com/photos/2C9BB9E6-0AC8-453B-9063-9D5AB903C158.jpg"
                    alt="Landing" class="opacity-90 max-h-[20vh] lg:max-h-[20vh] object-cover" />
            </div>
            <div class="lg:w-[70%] w-full flex pt-8 px-4 lg:px-0 items-start justify-between flex-col">
                <div class="underline font-bold lg:text-xl text-xl text-blue-600 lg:w-full w-[70%]">
                    Search for Songs & Artists
                </div>
                <!-- Search Input -->

                <form class="w-[100%]">
                    <div class="relative">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-gray-500 " viewBox="0 0 24 24">
                                <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2">
                                    <path stroke-dasharray="40" stroke-dashoffset="40"
                                        d="M10.76 13.24c-2.34 -2.34 -2.34 -6.14 0 -8.49c2.34 -2.34 6.14 -2.34 8.49 0c2.34 2.34 2.34 6.14 0 8.49c-2.34 2.34 -6.14 2.34 -8.49 0Z">
                                        <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s"
                                            values="40;0" />
                                    </path>
                                    <path stroke-dasharray="12" stroke-dashoffset="12" d="M10.5 13.5l-7.5 7.5">
                                        <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s"
                                            values="12;0" />
                                    </path>
                                </g>
                            </svg>
                        </div>
                        <input type="text" id="email-address-icon"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 py-1"
                            placeholder="search songs">
                    </div>
                </form>
            </div>
        </div>
        <div class="flex  h-40 text-gray-500 justify-center items-center">
            <div>
                Search coming soon!
            </div>
        </div>
    </div>

    <!-- <div>
        <TableSort />
    </div> -->
</template>
<script setup>
import { useAuthStore } from "@/stores/auth";
import { onMounted } from "vue";
// import { ref } from 'vue';

// Search functionality
const searchQuery = ref('');

const performSearch = () => {
    if (searchQuery.value) {
        console.log(`Searching for: ${searchQuery.value}`);
        // Add your search logic here
    }
};
// Load user data when the dashboard mounts
const authStore = useAuthStore();

import { watchEffect, ref } from "vue";

const username = ref("Guest");

watchEffect(() => {
    username.value = authStore.user?.username || "Guest";
});


// Define the page layout
definePageMeta({
    layout: "search",
});
</script>

<style lang="scss" scoped></style>
