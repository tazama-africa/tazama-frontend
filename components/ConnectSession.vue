<template>
    <div
        class="absolute mt-8   left-4 right-4 p-1 bg-gradient-to-r from-gray-900/90 to-gray-800/90 backdrop-blur-md rounded-2xl text-white shadow-lg border border-white/10">
        <div class="flex p-3 items-center gap-4">
            <!-- Left Section: Connect Info -->
            <div class="">
                <div class="flex items-center gap-3 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-sky-400" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M9 17V7a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2M3 12h18" />
                    </svg>
                    <p class="text-xl font-semibold">Connect to Vehicle</p>
                </div>
                <ul class="space-y-2 px-2">
                    <li class="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-sky-400" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                        </svg>
                        <span class="text-xs">Enjoy Music | AI DJ Experience</span>
                    </li>
                    <li class="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-sky-400" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />
                        </svg>
                        <span class="text-xs">Pay Fare Seamlessly</span>
                    </li>
                    <li class="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-sky-400" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.915a1 1 0 00.95-.69l1.519-4.674z" />
                        </svg>
                        <span class="text-xs">Rate Your Ride</span>
                    </li>
                </ul>
            </div>

            <!-- Right Section: Input -->
            <div class="w-1/3 hidden flex items-center justify-center">
                <div class="flex flex-col items-center   rounded-xl ">
                    <div class="text-xs">
                        View previously connected vehicles
                    </div>
                    <button
                        class="bg-sky-500 hover:bg-sky-600 text-white text-xs font-medium  w-full px-4 py-2 rounded-lg transition-colors">
                        History
                    </button>
                </div>
            </div>
        </div>
        <form @submit.prevent="handleSubmit"
            class="flex mt-2 justify-between items-center bg-gray-700/50 rounded-xl p-1 border border-white/10">
            <input type="text" placeholder="Enter Code" v-model="playerNo" id="player" name="player_no"
                class="bg-transparent text-white text-sm flex-1 min-w-0 px-3 py-1 focus:outline-none placeholder-gray-400" />
            <button type="submit" id="submitBtn"
                class="bg-sky-500 hover:bg-sky-600 text-white text-xs font-medium px-4 py-2 rounded-lg transition-colors">
                Connect
            </button>
        </form>
    </div>

</template>



<script setup>
import { ref } from 'vue';
import { usePlayerStore } from "@/stores/playerdata";


const playerStore = usePlayerStore();



const playerNo = ref('');

const handleSubmit = async () => {
    if (!playerNo.value) return;
    try {
        await playerStore.postPlayerData(playerNo.value)
    } catch (error) {
        console.error("Error submitting data:", error);
    }
};
</script>

<style lang="scss" scoped></style>