<template>
    <div>
        <form @submit.prevent="handleSubmit" class='flex gap-2 w-full'>
            <label for="player" class="mb-2 text-sm font-medium text-gray-900 sr-only">Enter Code</label>
            <div class="relative w-full">
                <input v-model="playerNo" type="text" id="player" name="player_no"
                    class="block w-full p-4 py-2 ps-4 text-sm text-gray-900 border border-yellow-600 rounded-full bg-transparent focus:ring--500 focus:border--500 pl-5"
                    placeholder="Enter Code" required />
            </div>
            <button type="submit" id="submitBtn"
                class="bg-yellow-600 w-48 text-white flex gap-2 items-center ps-3 pointer-cursor rounded-full px-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 48 48">
                    <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="4">
                        <path
                            d="M8 12a4 4 0 1 0 0-8a4 4 0 0 0 0 8m2 30a6 6 0 1 0 0-12a6 6 0 0 0 0 12m28 2a6 6 0 1 0 0-12a6 6 0 0 0 0 12M22 28a8 8 0 1 0 0-16a8 8 0 0 0 0 16m12-16a4 4 0 1 0 0-8a4 4 0 0 0 0 8"
                            clip-rule="evenodd" />
                        <path d="m11 11l4 4m15-3l-2 2m6 19.5L28 26m-14 5l4-4" />
                    </g>
                </svg>
                <div class="text-xs">
                    Connect jam
                </div>
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

<style lang="scss" scoped>

</style>