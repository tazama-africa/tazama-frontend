<template>
    <div v-if="!hasFleetNo"
        class="absolute mt-4   left-4 right-4 p-1 bg-gradient-to-r from-gray-7 00/90 to-gray-800/90 opa backdrop-blur-md rounded-2xl text-white shadow-lg border border-white/10">
        <div class="flex p-3 items-center gap-4">
            <!-- Left Section: Connect Info -->
            <div class="">
                <div class="flex items-center gap-3 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-orange-400" viewBox="0 0 32 32">
                        <path fill="currentColor"
                            d="M22 12a3.98 3.98 0 0 0-2.891 1.25l-3.16-1.755c.028-.162.05-.325.05-.495c0-1.654-1.345-3-3-3s-3 1.346-3 3a2.99 2.99 0 0 0 1.468 2.565l-.896 4.478A2.995 2.995 0 0 0 8 21c0 1.654 1.346 3 3 3s3-1.346 3-3c0-.087-.018-.168-.026-.253l4.932-2.243C19.64 19.41 20.746 20 22 20c2.206 0 4-1.794 4-4s-1.794-4-4-4m-9.001-2a1 1 0 1 1-.001 2.002a1 1 0 0 1 0-2.002m-2 12a1 1 0 1 1 .92-1.39l.001.002q.077.18.079.388a1 1 0 0 1-1 1m2.156-3.078a3 3 0 0 0-.624-.487l.897-4.478c.59-.086 1.12-.34 1.546-.716L18.143 15A4 4 0 0 0 18 16c0 .235.03.462.07.687zM22.002 18c-1.103 0-2-.897-2-2s.897-2 2-2s2 .898 2 2s-.897 2-2 2m5.089-6.592c.617 1.49.912 3.05.909 4.592a12.1 12.1 0 0 1-.9 4.548l1.792.896A14.1 14.1 0 0 0 30 16a13.9 13.9 0 0 0-1.061-5.357C26.71 5.263 21.492 2.007 16 2a13.9 13.9 0 0 0-5.36 1.066l.766 1.848A11.9 11.9 0 0 1 16 4c4.707.006 9.18 2.797 11.09 7.408m-6.497 15.679c-1.503.622-3.06.915-4.594.913c-4.707-.006-9.18-2.797-11.09-7.408A11.9 11.9 0 0 1 4 16c.003-1.563.313-3.108.9-4.547l-1.793-.897A14.1 14.1 0 0 0 2 16a13.96 13.96 0 0 0 8.643 12.928A14.1 14.1 0 0 0 16 30c1.789.002 3.606-.34 5.36-1.066zM25 23c-1.12 0-2 .88-2 2s.88 2 2 2s2-.88 2-2s-.88-2-2-2M7 5c-1.12 0-2 .88-2 2s.88 2 2 2s2-.88 2-2s-.88-2-2-2" />
                    </svg>
                    <p class="text-xl font-semibold">Connect & Vibe</p>
                </div>
                <ul class="space-y-2 px-2">
                    <li class="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-orange-400" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                        </svg>
                        <span class="text-xs">Enjoy Music | AI DJ Experience</span>
                    </li>
                    <li class="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-orange-400" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />
                        </svg>
                        <span class="text-xs">Pay Fare Seamlessly</span>
                    </li>
                    <li class="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-orange-400" fill="none"
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
                class="bg-orange-500 hover:bg-orange-600 text-white text-xs font-medium px-4 py-2 rounded-lg transition-colors">
                Connect
            </button>
        </form>
    </div>
    <div v-else
        class="absolute mt-4   left-4 right-4 p-1 bg-gradient-to-r from-gray-7 00/90 to-gray-800/90 opa backdrop-blur-md rounded-2xl text-white shadow-lg border border-white/10">
        <div class="flex items-center px-2 justify-between">
            <div>
                <div class="flex  pt-4 items-center gap-3 mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-orange-400" viewBox="0 0 32 32">
                        <path fill="currentColor"
                            d="M22 12a3.98 3.98 0 0 0-2.891 1.25l-3.16-1.755c.028-.162.05-.325.05-.495c0-1.654-1.345-3-3-3s-3 1.346-3 3a2.99 2.99 0 0 0 1.468 2.565l-.896 4.478A2.995 2.995 0 0 0 8 21c0 1.654 1.346 3 3 3s3-1.346 3-3c0-.087-.018-.168-.026-.253l4.932-2.243C19.64 19.41 20.746 20 22 20c2.206 0 4-1.794 4-4s-1.794-4-4-4m-9.001-2a1 1 0 1 1-.001 2.002a1 1 0 0 1 0-2.002m-2 12a1 1 0 1 1 .92-1.39l.001.002q.077.18.079.388a1 1 0 0 1-1 1m2.156-3.078a3 3 0 0 0-.624-.487l.897-4.478c.59-.086 1.12-.34 1.546-.716L18.143 15A4 4 0 0 0 18 16c0 .235.03.462.07.687zM22.002 18c-1.103 0-2-.897-2-2s.897-2 2-2s2 .898 2 2s-.897 2-2 2m5.089-6.592c.617 1.49.912 3.05.909 4.592a12.1 12.1 0 0 1-.9 4.548l1.792.896A14.1 14.1 0 0 0 30 16a13.9 13.9 0 0 0-1.061-5.357C26.71 5.263 21.492 2.007 16 2a13.9 13.9 0 0 0-5.36 1.066l.766 1.848A11.9 11.9 0 0 1 16 4c4.707.006 9.18 2.797 11.09 7.408m-6.497 15.679c-1.503.622-3.06.915-4.594.913c-4.707-.006-9.18-2.797-11.09-7.408A11.9 11.9 0 0 1 4 16c.003-1.563.313-3.108.9-4.547l-1.793-.897A14.1 14.1 0 0 0 2 16a13.96 13.96 0 0 0 8.643 12.928A14.1 14.1 0 0 0 16 30c1.789.002 3.606-.34 5.36-1.066zM25 23c-1.12 0-2 .88-2 2s.88 2 2 2s2-.88 2-2s-.88-2-2-2M7 5c-1.12 0-2 .88-2 2s.88 2 2 2s2-.88 2-2s-.88-2-2-2" />
                    </svg>
                    <p class="text-xl font-semibold">Connected: {{ fleetNo }}</p>
                </div>
            </div>
            <nuxt-link :to="`/player/${fleetNo}`"
                class="flex justify-center items-center text-xs p-1 pl-2 gap-1 hover:underline hover:text-blue-400  border rounded-full  ">
                Join
                <span><svg xmlns="http://www.w3.org/2000/svg" class="h-4" viewBox="0 0 24 24">
                        <path fill="currentColor" d="m13.292 12l-4.6-4.6l.708-.708L14.708 12L9.4 17.308l-.708-.708z" />
                    </svg></span>
            </nuxt-link>
        </div>
        <NowNext />
        <h5 class="text-xs pl-2">
            Connect & Vibe
        </h5>
        <form @submit.prevent="handleSubmit"
            class="flex mt-2 justify-between items-center bg-gray-700/50 rounded-xl p-1 border border-white/10">
            <input type="text" placeholder="Enter Code" v-model="playerNo" id="player" name="player_no"
                class="bg-transparent text-white text-sm flex-1 min-w-0 px-3 py-1 focus:outline-none placeholder-gray-400" />
            <button type="submit" id="submitBtn"
                class="bg-orange-500 hover:bg-orange-600 text-white text-xs font-medium px-4 py-2 rounded-lg transition-colors">
                Connect
            </button>
        </form>
    </div>

</template>



<script setup>
import { ref } from 'vue';
import { usePlayerStore } from "@/stores/playerdata";
import NowNext from './NowNext.vue';

const playerStore = usePlayerStore();

const playerNo = ref('');
const fleetNo = ref('');

const hasFleetNo = computed(() => {
    fleetNo.value = localStorage.getItem('fleet_no')
    return !!localStorage.getItem('fleet_no'); // Returns true if fleet_no exists, false otherwise
});

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