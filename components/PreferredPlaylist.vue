<!-- <script setup>
import { storeToRefs } from "pinia";
import { useAuthStore } from "@/stores/auth"; // Import store

const authStore = useAuthStore();
const { playlist } = storeToRefs(authStore); // Reactive state
</script> -->


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
    <div class="w-full m-0 px-2 lg:px-4">
        <div v-if="playlist.length > 0" class="grid grid-cols-2 lg:grid-cols-4 gap-4 pb-4">
            <div v-for="(p, index) in playlist" :key="index"
                class="playlist-item bg-transparent lg:p-2 rounded-lg hover:bg-orange-200 hover:shadow-orange-200 hover:shadow shadow-none">
                <a :href="p.url" target="_blank" class="block">
                    <img v-if="p.image" :src="p.image" :alt="p.name" class="rounded-t-sm h-40   w-full object-cover" />
                    <p class="mt-2 font-semibold text-gray-700 truncate text-left overflow-hidden whitespace-nowrap">
                        {{ p.name }}
                    </p>
                </a>
            </div>
        </div>
        <p v-else class="text-gray-500 animate-pulse">Loading Recommended Playlists</p>
    </div>

</template>

<style scoped></style>
