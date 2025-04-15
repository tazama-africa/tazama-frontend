<template>
    <div class="relative w-full h-[30vh] bg-cover bg-center overflow-x-hidden"
        style="background-image: url('https://img.freepik.com/free-photo/abstract-dark-background-with-flowing-colouful-waves_1048-13124.jpg?t=st=1744703664~exp=1744707264~hmac=d21c02e20279a3ba40a5d2f22207b4fe0223fb8a174648eb16490b8e0028968f&w=826');">
        <!-- Gradient Overlay -->
        <div class="absolute inset-0 bg-gradient-to-t from-black via-black/70 via-40% to-transparent opacity-90 z-0">
        </div>

        <!-- Header Section -->
        <div
            class="lg:bg-white bg-transparent relative pt-4 w-full h-10 flex justify-between items-center text-sm lg:px-2 lg:rounded-full z-5">
            <div class="flex gap-1">
                <nuxt-link to="/" class="flex gap-2 items-start text-white">
                    <!-- <NuxtImg src="/logo-long-t.png" class="lg:w-[60%] w-[80%] h-24 object-cover" alt="Logo" width="200"
                        height="96" loading="lazy" /> -->
                        <svg xmlns="http://www.w3.org/2000/svg" class="lg:w-[60%] w-[80%] h-10 pl-3 object-cover"  viewBox="0 0 24 24"><path fill="currentColor" d="M20 11H7.83l5.59-5.59L12 4l-8 8l8 8l1.41-1.41L7.83 13H20z"/></svg>
                </nuxt-link>
            </div>
            <div>
                <div class="flex gap-4 items-center py-2 pr-4">

                    <div
                        class="flex items-center justify-center w-6 text-xs h-6 overflow-hidden bg-blue-500 text-white rounded-full">
                        <div>
                            <!-- Placeholder for UserProfile -->
                            <span>
                                <UserProfile />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Scrollable Genre Tags -->
        <div class="scroll-container flex gap-3 px-4 pt-5">
            <div v-for="(genre, index) in genredata" :key="index">
                <div
                    class="shrink-0 min-w-max bg-white/10 backdrop-blur-md border border-white/20 text-white py-1 px-4 rounded text-sm shadow-sm">
                    {{ genre.genre__title }} . {{ genre.count }}
                </div>
            </div>
        </div>

        <!-- Current track -->
        <div class="flex items-center justify-center mt-10">
            <!-- Left waveform -->
            <div class="flex items-center mr-4">
                <div v-for="n in 3" :key="'left-' + n" class="w-1 h-5 bg-orange-500 mx-1 rounded animate-wave"
                    :style="{ animationDelay: `${n * 0.1}s` }"></div>
            </div>

            <!-- Play button -->
            <div
                class="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-orange-400 transition-colors duration-300">
                <div
                    class="w-0 h-0 border-l-[18px] border-l-white border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1">
                </div>
            </div>

            <!-- Right waveform -->
            <div class="flex items-center ml-4">
                <div v-for="n in 3" :key="'right-' + n" class="w-1 h-5 bg-orange-500 mx-1 rounded animate-wave"
                    :style="{ animationDelay: `${n * 0.1}s` }"></div>
            </div>
        </div>

        <!-- Vehicle Info -->
        <div style="background-color: #212121;"
            class="text-white absolute bottom-0 px-2 gap-2  flex items-center justify-between w-full  text-lg py-2 transition-colors duration-300">
            <div class="flex gap-2 items-center">
                <div class='text-xs '>
                    {{ sessionId }}
                </div>
                <div class="flex flex-col justify-around border-l pl-2" style="font-size: 12px;">
                    <div class="-mb-2"> KAV 433B</div>
                    <div class="-mb-2">Nairobi - Thika</div>
                </div>

            </div>
            <div class='flex flex-row-reverse  gap-1'>
                <div class='flex flex-col'>
                    <div class="flex items-start bg-green-600 rounded-full">
                        <div class=" px-3 py-2 text-xs">
                            Pay Now
                        </div>
                        <button @click="copyNumber"
                            class="text-xs hidden hover:bg-red-600 gap-2 hover:text-white bg-orange-300 px-3 py-2  rounded-full text-orange-600">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-4" viewBox="0 0 24 24">
                                    <g fill="none" stroke="currentColor" stroke-width="1.5">
                                        <path
                                            d="M6 11c0-2.828 0-4.243.879-5.121C7.757 5 9.172 5 12 5h3c2.828 0 4.243 0 5.121.879C21 6.757 21 8.172 21 11v5c0 2.828 0 4.243-.879 5.121C19.243 22 17.828 22 15 22h-3c-2.828 0-4.243 0-5.121-.879C6 20.243 6 18.828 6 16z" />
                                        <path
                                            d="M6 19a3 3 0 0 1-3-3v-6c0-3.771 0-5.657 1.172-6.828S7.229 2 11 2h4a3 3 0 0 1 3 3"
                                            opacity="0.5" />
                                    </g>
                                </svg>
                            </div>
                        </button>
                    </div>
                </div>
                <div class="flex flex-col">
                    <ReportIncident />
                </div>
            </div>
        </div>
    </div>
    <div class="lg:rounded-t-2xl">
        <div class="text-white p-4 pb-2">
            <h2>
                This is Love
            </h2>
            <div class="flex justify-between items-center">
                <div class="flex items-center gap-3 text-xs mt-1">
                    <div>
                        <div
                            class="w-7 h-7 bg-blue-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-orange-400 transition-colors duration-300">
                            <div
                                class="w-0 h-0 border-l-[6px] border-l-white border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent ml-1">
                            </div>
                        </div>
                    </div>
                    <div>
                        Bob Marley
                    </div>
                </div>
                <div>
                    <div class="flex hidden justify-between  rounded-full border divide-x-2 px-4 py-0">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg"  class="w-7 h-7  pr-2" viewBox="0 0 1024 1024"><path fill="currentColor" d="M885.9 533.7c16.8-22.2 26.1-49.4 26.1-77.7c0-44.9-25.1-87.4-65.5-111.1a67.67 67.67 0 0 0-34.3-9.3H572.4l6-122.9c1.4-29.7-9.1-57.9-29.5-79.4A106.62 106.62 0 0 0 471 99.9c-52 0-98 35-111.8 85.1l-85.9 311H144c-17.7 0-32 14.3-32 32v364c0 17.7 14.3 32 32 32h601.3c9.2 0 18.2-1.8 26.5-5.4c47.6-20.3 78.3-66.8 78.3-118.4c0-12.6-1.8-25-5.4-37c16.8-22.2 26.1-49.4 26.1-77.7c0-12.6-1.8-25-5.4-37c16.8-22.2 26.1-49.4 26.1-77.7c-.2-12.6-2-25.1-5.6-37.1M184 852V568h81v284zm636.4-353l-21.9 19l13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 16.5-7.2 32.2-19.6 43l-21.9 19l13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 16.5-7.2 32.2-19.6 43l-21.9 19l13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 22.4-13.2 42.6-33.6 51.8H329V564.8l99.5-360.5a44.1 44.1 0 0 1 42.2-32.3c7.6 0 15.1 2.2 21.1 6.7c9.9 7.4 15.2 18.6 14.6 30.5l-9.6 198.4h314.4C829 418.5 840 436.9 840 456c0 16.5-7.2 32.1-19.6 43"/></svg>                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 pl-2" viewBox="0 0 1024 1024"><path fill="currentColor" d="M885.9 490.3c3.6-12 5.4-24.4 5.4-37c0-28.3-9.3-55.5-26.1-77.7c3.6-12 5.4-24.4 5.4-37c0-28.3-9.3-55.5-26.1-77.7c3.6-12 5.4-24.4 5.4-37c0-51.6-30.7-98.1-78.3-118.4a66.1 66.1 0 0 0-26.5-5.4H144c-17.7 0-32 14.3-32 32v364c0 17.7 14.3 32 32 32h129.3l85.8 310.8C372.9 889 418.9 924 470.9 924c29.7 0 57.4-11.8 77.9-33.4c20.5-21.5 31-49.7 29.5-79.4l-6-122.9h239.9c12.1 0 23.9-3.2 34.3-9.3c40.4-23.5 65.5-66.1 65.5-111c0-28.3-9.3-55.5-26.1-77.7M184 456V172h81v284zm627.2 160.4H496.8l9.6 198.4c.6 11.9-4.7 23.1-14.6 30.5c-6.1 4.5-13.6 6.8-21.1 6.7a44.28 44.28 0 0 1-42.2-32.3L329 459.2V172h415.4a56.85 56.85 0 0 1 33.6 51.8c0 9.7-2.3 18.9-6.9 27.3l-13.9 25.4l21.9 19a56.76 56.76 0 0 1 19.6 43c0 9.7-2.3 18.9-6.9 27.3l-13.9 25.4l21.9 19a56.76 56.76 0 0 1 19.6 43c0 9.7-2.3 18.9-6.9 27.3l-14 25.5l21.9 19a56.76 56.76 0 0 1 19.6 43c0 19.1-11 37.5-28.8 48.4"/></svg>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div>
            <ConnectSessionTable />
        </div>
        <div class="px-2">
            <PreferredPlaylist />
        </div>
        <br><br><br>
    </div>

    <!-- <div>
                <TableSort />
            </div> -->
</template>
<script setup>
import { useAuthStore } from "@/stores/auth";
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import { usePlayerStore } from "@/stores/playerdata";
import Swal from "sweetalert2";
import { watchEffect, ref } from "vue";

const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
});

// Load user data when the dashboard mounts
const authStore = useAuthStore();
const playerStore = usePlayerStore();
const { genredata } = storeToRefs(playerStore);


const playerNo = window.location.pathname.split('/player/')[1] || 'default';
const sessionId = playerNo;


const open = ref(false)

const username = ref("Guest");
const playlist = ref([])

const vehicleNumber = ref('0712345678');

const copyNumber = async () => {
    try {
        await navigator.clipboard.writeText(vehicleNumber.value);
        // alert(`Copied: ${vehicleNumber.value}`);
        Toast.fire({
            icon: "success",
            title: "Copied Successully",
        });
    } catch (err) {
        console.error('Failed to copy: ', err);
    }
};
watchEffect(() => {
    username.value = authStore.user?.username || "Guest";
});


onMounted(async () => {
    // await playerStore.postPlayerData();
});
console.log(playerStore.genredata)


// Define the page layout
definePageMeta({
    layout: "player",
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

@keyframes wave {
    0% {
        transform: scaleY(0.4);
    }

    100% {
        transform: scaleY(1);
    }
}

.animate-wave {
    animation: wave 0.5s ease-in-out infinite alternate;
}
</style>