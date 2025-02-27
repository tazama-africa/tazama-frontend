<template>
    <div class="rounded-2xl">
        <div
            class="bg-gradient-to-b px-4 gap-4 from-yellow-400 via-yellow-300  pb-[4%] -px-5 to-yellow-200  flex xs:h-72 h-72  lg:rounded-t-2xl">
            <div class="lg:w-[30%] lg:flex items-center justify-center hidden">
                <img src="https://thumbnails.production.thenounproject.com/E4BrN-FHH0zruVnoXkCy5WMSgsE=/fit-in/1000x1000/photos.production.thenounproject.com/photos/2C9BB9E6-0AC8-453B-9063-9D5AB903C158.jpg"
                    alt="Landing" 
                    class=" opacity-90 max-h-[20vh] lg:max-h-[20vh]  object-cover"
                    />
            </div>
            <div class="lg:w-[70%] flex pt-10 px-4 lg:px-0 items-start justify-between flex-col">
                <div class=" text-sm text-yellow-600 text-left">
                    Playlist
                </div>
                <div class=" underline font-bold lg:text-5xl text-4xl text-yellow-600 lg:w-full w-[70%]">
                    Connect to Session
                </div>
                <div class="space-y-2">
                    <div class="uppercase font-bold text-sm text-yellow-600">
                        Listen now
                    </div>
                    <ConnectSession />
                </div>
            </div>
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
        </div>
    </div>

    <!-- <div>
        <TableSort />
    </div> -->
</template>
<script setup>
import { useAuthStore } from "@/stores/auth";
import { onMounted } from "vue";

// Load user data when the dashboard mounts
const authStore =   useAuthStore();

import { watchEffect, ref } from "vue";

const username = ref("Guest");

watchEffect(() => {
  username.value = authStore.user?.username || "Guest";
});


// Define the page layout
definePageMeta({
    layout: "dashboard",
});
</script>

<style lang="scss" scoped></style>
