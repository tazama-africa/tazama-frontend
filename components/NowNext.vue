
<script setup>
import { useAuthStore } from "@/stores/auth";
import { useMusicStore } from "@/stores/musicstore";
import { ref, computed, onMounted, onUnmounted } from "vue";

const authStore = useAuthStore();
const musicStore = useMusicStore();
const currentIndex = ref(0); // Track the current song index in the carousel

onMounted(async () => {
    await musicStore.getNowNextData();
    console.log(musicStore.nownextsongs);
    // Set up interval to fetch data every 10 seconds
    const intervalId = setInterval(async () => {
        await musicStore.getNowNextData();
        console.log('Fetched now/next data:', musicStore.nownextsongs);
    }, 10000);
    // Store intervalId in a ref to clear it on unmount
    const intervalRef = ref(intervalId);
    onUnmounted(() => {
        clearInterval(intervalRef.value);
    });
});

const username = ref("G");

// Update username based on authStore
watchEffect(() => {
    const email = authStore.user?.email || "Guest";
    username.value = email.charAt(0).toUpperCase();
});

// Define the songs array for the carousel
const songs = computed(() => {
    const now = musicStore.nownextsongs?.playing_now || {};
    const next = musicStore.nownextsongs?.playing_next || {};
    return [now, next].filter(song => song.title); // Only include valid songs
});

// Navigate to the previous song
const goToPrevious = () => {
    if (songs.value.length > 1) {
        currentIndex.value = (currentIndex.value - 1 + songs.value.length) % songs.value.length;
    }
};

// Navigate to the next song
const goToNext = () => {
    if (songs.value.length > 1) {
        currentIndex.value = (currentIndex.value + 1) % songs.value.length;
    }
};

// Compute the label for the toggle button
const toggleButtonLabel = computed(() => {
    return currentIndex.value === 0 ? "Next" : "Playing now";
});
</script>

<template>
    <div class="text-white py-2 p-4 h-28">
        <!-- Fixed Components (Unaffected by Carousel) -->
        <!-- Carousel Container -->
        <div class='text-xs '>
            <div v-if="currentIndex === 0" class="text-blue-500">
                Playing now
            </div>
            <div v-else class="text-orange-500">
                Playing next
            </div>
        </div>
        <div class="overflow-hidden relative w-full h-10 ">
            <div class="flex transition-transform duration-400 ease-in-out"
                :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
                <div v-for="(song, index) in songs" :key="index" class="min-w-full h-10 flex-shrink-0">
                    <h2 class="text-sm">{{ song.title || 'No Title' }}</h2>
                </div>
            </div>
        </div>

        <div class="flex justify-between items-center -mt-1  ">
            <div class="flex items-center gap-3 text-xs ">
                <div>
                    <div class='text-xs m'>
                        <div v-if="currentIndex === 0" class="">
                            <div
                                class="w-7 h-7  bg-blue-500 rounded-full flex items-center justify-center cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24">
                                    <path fill="currentColor" fill-opacity="0" stroke="currentColor"
                                        stroke-dasharray="40" stroke-dashoffset="40" stroke-linecap="round"
                                        stroke-linejoin="round" stroke-width="2" d="M8 6l10 6l-10 6Z">
                                        <animate fill="freeze" attributeName="fill-opacity" begin="0.5s" dur="0.5s"
                                            values="0;1" />
                                        <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s"
                                            values="40;0" />
                                    </path>
                                </svg>
                            </div>
                        </div>
                        <div v-else class="">
                            <div
                                class="w-7 h-7  bg-orange-500 rounded-full flex items-center justify-center cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24">
                                    <path fill="currentColor" fill-opacity="0" stroke="currentColor"
                                        stroke-dasharray="40" stroke-dashoffset="40" stroke-linecap="round"
                                        stroke-linejoin="round" stroke-width="2" d="M8 6l10 6l-10 6Z">
                                        <animate fill="freeze" attributeName="fill-opacity" begin="0.5s" dur="0.5s"
                                            values="0;1" />
                                        <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s"
                                            values="40;0" />
                                    </path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div>{{ songs[currentIndex]?.artist || 'Unknown Artist' }}</div>
            </div>
            <!-- Toggle Button -->
            <div class='text-xs mb-1'>
                <div v-if="currentIndex === 0" >
                    <button @click="songs.length > 1 ? (currentIndex === 0 ? goToNext() : goToPrevious()) : null"
                        class="bg-blue-600 text-white px-4 py-1 rounded-full text-xs hover:bg-blue-700 transition"
                        :disabled="songs.length <= 1">
                        {{ toggleButtonLabel }}
                    </button>
                </div>
                <div v-else >
                    <button @click="songs.length > 1 ? (currentIndex === 0 ? goToNext() : goToPrevious()) : null"
                        class="bg-orange-600 text-white px-4 py-1 rounded-full text-xs hover:bg-blue-700 transition"
                        :disabled="songs.length <= 1">
                        {{ toggleButtonLabel }}
                    </button>
                </div>
            </div>
        </div>

        <!-- Additional Fixed Components -->
        <div class="flex w-20 mt-2  hidden rounded-full divide-x-2 px-4 py-0">
            <div class="w-1/2">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7  pr-2" viewBox="0 0 1024 1024">
                    <path fill="currentColor"
                        d="M885.9 533.7c16.8-22.2 26.1-49.4 26.1-77.7c0-44.9-25.1-87.4-65.5-111.1a67.67 67.67 0 0 0-34.3-9.3H572.4l6-122.9c1.4-29.7-9.1-57.9-29.5-79.4A106.62 106.62 0 0 0 471 99.9c-52 0-98 35-111.8 85.1l-85.9 311H144c-17.7 0-32 14.3-32 32v364c0 17.7 14.3 32 32 32h601.3c9.2 0 18.2-1.8 26.5-5.4c47.6-20.3 78.3-66.8 78.3-118.4c0-12.6-1.8-25-5.4-37c16.8-22.2 26.1-49.4 26.1-77.7c0-12.6-1.8-25-5.4-37c16.8-22.2 26.1-49.4 26.1-77.7c-.2-12.6-2-25.1-5.6-37.1M184 852V568h81v284zm636.4-353l-21.9 19l13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 16.5-7.2 32.2-19.6 43l-21.9 19l13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 16.5-7.2 32.2-19.6 43l-21.9 19l13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 22.4-13.2 42.6-33.6 51.8H329V564.8l99.5-360.5a44.1 44.1 0 0 1 42.2-32.3c7.6 0 15.1 2.2 21.1 6.7c9.9 7.4 15.2 18.6 14.6 30.5l-9.6 198.4h314.4C829 418.5 840 436.9 840 456c0 16.5-7.2 32.1-19.6 43" />
                </svg>
            </div>
            <div class="w-1/2">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7  pl-2" viewBox="0 0 1024 1024">
                    <path fill="currentColor"
                        d="M885.9 490.3c3.6-12 5.4-24.4 5.4-37c0-28.3-9.3-55.5-26.1-77.7c3.6-12 5.4-24.4 5.4-37c0-28.3-9.3-55.5-26.1-77.7c3.6-12 5.4-24.4 5.4-37c0-51.6-30.7-98.1-78.3-118.4a66.1 66.1 0 0 0-26.5-5.4H144c-17.7 0-32 14.3-32 32v364c0 17.7 14.3 32 32 32h129.3l85.8 310.8C372.9 889 418.9 924 470.9 924c29.7 0 57.4-11.8 77.9-33.4c20.5-21.5 31-49.7 29.5-79.4l-6-122.9h239.9c12.1 0 23.9-3.2 34.3-9.3c40.4-23.5 65.5-66.1 65.5-111c0-28.3-9.3-55.5-26.1-77.7M184 456V172h81v284zm627.2 160.4H496.8l9.6 198.4c.6 11.9-4.7 23.1-14.6 30.5c-6.1 4.5-13.6 6.8-21.1 6.7a44.28 44.28 0 0 1-42.2-32.3L329 459.2V172h415.4a56.85 56.85 0 0 1 33.6 51.8c0 9.7-2.3 18.9-6.9 27.3l-13.9 25.4l21.9 19a56.76 56.76 0 0 1 19.6 43c0 9.7-2.3 18.9-6.9 27.3l-13.9 25.4l21.9 19a56.76 56.76 0 0 1 19.6 43c0 9.7-2.3 18.9-6.9 27.3l-14 25.5l21.9 19a56.76 56.76 0 0 1 19.6 43c0 19.1-11 37.5-28.8 48.4" />
                </svg>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Ensure the carousel container is properly bounded */
.carousel-container {
    overflow: hidden;
    position: relative;
    width: 100%;
}

/* Smooth transition for the sliding cards */
.carousel-track {
    display: flex;
    transition: transform 0.4s ease-in-out;
}

/* Ensure each card takes up the full width */
.carousel-card {
    min-width: 100%;
    flex-shrink: 0;
}

/* Disable button when only one song is available */
button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}
</style>
