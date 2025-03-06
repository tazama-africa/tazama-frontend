<template>
    <div class="lg:rounded-t-2xl">
        <div class="ease-in-out" data-carousel-item>
            <div
                class="relative duration-1000 p-3 lg:rounded-t-2xl h-full rounded-none bg-gradient-to-b from-orange-700 via-orange-500 to-orange-300">
                <!-- Background image with overlay -->

                <!-- Content on top of the image -->
                <div class="relative z-10 py-6 p-4 h-full">
                    <div class="text-center text-white">
                        <div class="text-xl mt-1 flex justify-between items-center gap-2  text-gray-600" style="
                            font-weight: 700;
                            margin: 10px 0;
                            font-family: Fredoka, sans-serif;
                            text-align: left;
                        ">
                            <div class="flex -mt-4">
                                <svg xmlns="http://www.w3.org/2000/svg" class="text-gray-100" width="24" height="24"
                                    viewBox="0 0 20 20">
                                    <g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd">
                                        <path
                                            d="M10.646 7.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0" />
                                        <path
                                            d="M17.354 7.354a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 .708-.708l3 3a.5.5 0 0 1 0 .708" />
                                        <path
                                            d="M14 4a.5.5 0 0 1 .5.5V14a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 14 4m-4.646 8.646a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708l3-3a.5.5 0 0 1 .708 0" />
                                        <path
                                            d="M2.646 12.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708" />
                                        <path d="M6 16a.5.5 0 0 1-.5-.5V6a.5.5 0 0 1 1 0v9.5a.5.5 0 0 1-.5.5" />
                                    </g>
                                </svg>
                                <div class="text-xl ml-2 font-bold text-green-50">Jam Session</div>
                            </div>
                        </div>
                        <div class="text-xl px-4 my-4 flex justify-between items-center gap-2  text-gray-600" style="
                            font-weight: 700;
                            margin: 10px 0;
                            font-family: Fredoka, sans-serif;
                            text-align: left;
                        ">
                            <div class="flex mt-1">
                                <div></div>
                                <div class="text-xs ml-2 space-y-2 text-green-50">
                                    <p class="font-bold">
                                        Enjoy the full experience today
                                    </p>
                                    <p class="font-normal">
                                        Search and suggest songs to playlist, Like to alter song position on playlist!
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="text-white  w-full py-5 text-lg rounded-lg  transition-colors duration-300">
                            <div class="flex items-start px-2 -mt-4">

                                <a a href="" target="blank"
                                    class="text-xs hover:bg-red-600 hover:text-white   ml-2 px-3 lg:px-10 py-2 border rounded-full text-green-50">
                                    Play Video Mix
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div class="lg:px-4 mx-1">
                <div>
                    <div class="flex pl-1 lg:flex-wrap justify-center pb-2 gap-3 mt-4 overflow-x-auto max-h-40 ">
                        <div v-for="(genre, index) in genredata" :key="index"
                            class="flex items-center text-gray-500 text-xs border border-gray-400 rounded-full py-1 px-3 cursor-pointer transition-all duration-300 min-w-max">
                            <label class="flex items-center gap-2 cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-4" viewBox="0 0 24 24">
                                    <g fill="none" stroke="currentColor" stroke-width="1.5">
                                        <path d="M12.25 2.75a9.5 9.5 0 1 1 0 19a9.5 9.5 0 0 1 0-19Z" />
                                        <path d="M14.62 12.25a2.37 2.37 0 1 0-4.74 0a2.37 2.37 0 0 0 4.74 0Z" />
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M12.25 18.93a6.7 6.7 0 0 1-5.24-2.53m7.24-10.53a6.69 6.69 0 0 1 4.4 4.48" />
                                    </g>
                                </svg>
                                {{ genre.genre__title }} . {{ genre.count }}
                            </label>
                        </div>
                    </div>

                </div>
            </div>
            <!-- <SuggestedGenres /> -->
            <ConnectSessionTable />
        </div>
        <div class="lg:px-4 px-0 p-0  mt-10">
            <div class="font-bold flex gap-2 text-xl mb-2 font-monospace text-yellow-600">
                <p class="pl-2">
                    Made For
                </p>
                <p>
                    <UserProfile />
                </p>
            </div>
            <div class="p-0">
                <PreferredPlaylist />
            </div>
            <br><br><br><br><br><br>
        </div>
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


// Load user data when the dashboard mounts
const authStore = useAuthStore();
const playerStore = usePlayerStore();
const { genredata } = storeToRefs(playerStore);

import { watchEffect, ref } from "vue";

const username = ref("Guest");

watchEffect(() => {
    username.value = authStore.user?.username || "Guest";
});


onMounted(async () => {
    await playerStore.postPlayerData();
});
console.log(playerStore.genredata)


// Define the page layout
definePageMeta({
    layout: "player",
});
</script>

<style lang="scss" scoped></style>
