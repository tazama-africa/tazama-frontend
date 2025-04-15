<script setup>
import { storeToRefs } from "pinia";
import { useAuthStore } from "@/stores/auth"; // Import store
import { onMounted } from "vue";

const authStore = useAuthStore();
const { playlist } = storeToRefs(authStore);

// Fetch playlists when the component is mounted
onMounted(() => {
    authStore.fetchPlaylist();
});
</script>


<template>
    <div class="w-full m-0 px-1 lg:px-4">
        <h3 class="text-white text-lg  font-bold p-4 pb-2">
            Trending Playlists
            <br>
            For You
        </h3>
        <div v-if="playlist.length > 0" class="scroll-container flex gap-6 px-4 pt-2 overflow-x-auto scrollbar-hide">
            <div v-for="(p, index) in playlist" :key="index"
                class="shrink-0 min-w-max bg-white/5 backdrop-blur-md rounded-xl text-white text-sm shadow-md transition-all hover:scale-105 hover:bg-white/10">
                <a :href="p.url" target="_blank" class="block w-52">
                    <img v-if="p.image" :src="p.image" :alt="p.name" class="rounded-t-xl w-full  h-32 object-cover" />
                    <p class="mt-2 px-3 pb-3 text-sm text-left text-white truncate" title="{{ p.name }}">
                        {{ p.name }}
                    </p>
                </a>
            </div>
        </div>
        <p v-else class="text-gray-500 animate-pulse">Loading Recommended Playlists</p>
    </div>


</template>

<style scoped></style>
