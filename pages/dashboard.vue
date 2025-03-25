<template>
    <div class="rounded-2xl">
        <div 
      class="relative bg-cover bg-center px-4 gap-4 pb-[4%] flex xs:h-72 h-72 lg:rounded-t-2xl"
      style="background-image: url('https://static.vecteezy.com/system/resources/thumbnails/035/565/791/small_2x/ai-generated-empty-stage-with-blue-lighting-spotlight-effects-and-dark-atmosphere-ideal-for-concert-and-event-backgrounds-photo.jpg')"
    >
      <!-- Overlay -->
      <div class="absolute inset-0 bg-black bg-opacity-40 z-0"></div>
      
      <div class="lg:w-[30%] lg:flex items-center justify-center hidden relative z-10">
        <img 
          src="https://media.istockphoto.com/id/1357914666/photo/shot-of-a-handsome-young-man-dancing-against-a-blue-background.jpg?s=612x612&w=0&k=20&c=k4nTtrjn17LwAAMbjlpzLDT-qyG-2_7RyLDXecKGewY="
          alt="Landing" 
          class="opacity-90 max-h-[20vh] lg:max-h-[20vh] object-cover"
        />
      </div>
      <div class="lg:w-[70%] flex pt-10 px-4 lg:px-0 items-start justify-between flex-col relative z-10">
        <div class="text-sm text-white text-left drop-shadow-md">
          Playlist
        </div>
        <div class="underline font-bold lg:text-5xl text-4xl text-white lg:w-full w-[70%] drop-shadow-lg">
          Connect to Session
        </div>
        <div class="space-y-2">
          <div class="uppercase font-bold text-sm text-white drop-shadow-md">
            Listen now
          </div>
          <ConnectSession />
        </div>
      </div>
    </div>
        <div class="lg:px-4 px-0 p-0  mt-10">
            <div class="font-bold flex gap-2 text-xl mb-2 font-monospace text-blue-600">
                <p class="pl-2">
                    Made For
                </p>
                <p>
                    <UserProfile />
                </p>
            </div>
            <div class="p-0 overflow-y-scroll h-[60vh]  ">
                <PreferredPlaylist />  
               <div class="lg-hidden">
                 <br><br><br><br><br><br><br><br>
               </div> 
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
