<template>
    <div class="min-h-screen flex flex-col">
        <!-- Top Navigation -->
        <div class="fixed top-0 left-0 w-full h-[13vh] bg-cover bg-center overflow-x-hidden z-10"
            style="background-image: url('/suggested-songs.png'); background-position: top;">
            <!-- Gradient Overlay -->
            <div class="absolute inset-0 bg-gradient-to-t from-black via-black/70 via-60% to-transparent opacity-80">
            </div>

            <!-- Header Section -->
            <div
                class="lg:bg-white bg-transparent relative pt-4 w-full h-10 flex justify-between items-center text-sm lg:px-2 lg:rounded-full z-20">
                <div class="flex gap-1">
                    <nuxt-link to="/profile" class="flex gap-2 items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 pl-4" viewBox="0 0 24 24">
                            <path fill="currentColor"
                                d="M19 11H7.83l4.88-4.88c.39-.39.39-1.03 0-1.42a.996.996 0 0 0-1.41 0l-6.59 6.59a.996.996 0 0 0 0 1.41l6.59 6.59a.996.996 0 1 0 1.41-1.41L7.83 13H19c.55 0 1-.45 1-1s-.45-1-1-1" />
                        </svg>
                    </nuxt-link>
                </div>
                <div class="flex gap-4 items-center py-2 pr-4">
                    <div
                        class="flex items-center justify-center w-6 h-6 text-xs overflow-hidden bg-blue-500 text-white rounded-full">
                        <span>
                            <UserProfile />
                        </span>
                    </div>
                </div>
            </div>

            <div class="pl-5 mt-3 font-bold text-white text-xl absolute bottom-2">
                <div>
                    Suggested Songs
                </div>
                <p class="text-xs text-gray-300 font-normal mt-1">
                    {{  filteredSongs.length }} songs
                </p>
            </div>

        </div>

        <div class="mb-4 px-4 mt-[14vh]">
            <div class="relative  mt-1">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                </div>
                <input v-model="search" type="text" placeholder="Search song, artist, genre"
                    class="block w-full p-4 py-2 ps-10 text-sm text-gray-50 border border-gray-600 rounded-2xl focus:ring-blue-500 focus:border-blue-500 bg-slate-800" />
                <button type="submit"
                    class="text-white absolute end-1.5 bottom-1.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-1 ">Search</button>
            </div>
        </div>
        <div v-for="item in filteredSongs" :key="item.id">
            <div class="flex items-center justify-between p-4 px-4 cursor-pointer" @click="toggleTrip(index)">
                <div class="flex items-center space-x-4">
                    <div v-if="!item.image_url"
                        class="w-8 text-xs h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                        {{ item.title?.slice(0, 1) || '' }}
                    </div>
                    <NuxtImg v-else :src="item.image_url"
                        class="w-8 text-xs h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold"
                        alt="Logo" width="200" height="96" loading="lazy" />

                    <div>
                        <p class=" text-sm font-semibold flex-wrap whitespace-nowrap w-64 truncate ">{{ item.title }}
                        </p>
                        <h3 class=" text-xs text-gray-500 font-semibold">{{ item.artist }}</h3>
                    </div>
                </div>

            </div>
        </div>

        <!-- List of Trips -->

    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useReportStore } from '@/stores/reports'
import { ref } from 'vue'
import UserProfile from '~/components/UserProfile.vue' // Ensure this component exists

const reportStore = useReportStore()
const search = ref('') // 🔍 reactive search input



onMounted(async () => {
    await reportStore.getLikedSongsStore()
})

// Filtered liked songs based on search input
const filteredSongs = computed(() => {
    if (!search.value) return reportStore.liked_songs
    const query = search.value.toLowerCase()
    return reportStore.liked_songs.filter(song =>
        song.title.toLowerCase().includes(query) ||
        song.artist.toLowerCase().includes(query) ||
        (song.genre?.toLowerCase?.().includes?.(query))
    )
})
const columns = [
    { key: 'title', label: 'Up Next', class: 'pl-4 text-white' },
    { key: 'artist', label: 'Artist', class: 'hidden lg:table-cell text-white' },
    { key: "genre", label: "Genre", class: 'hidden lg:table-cell text-left text-white' },
    { key: 'options', label: 'Options', class: 'text-center hidden lg:table-cell text-left text-white' }
];
</script>
