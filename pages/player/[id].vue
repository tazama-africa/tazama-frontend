<template>
    <div class="fixed z-10 top-0 w-full h-[20%] bg-cover bg-center overflow-x-hidden"
        style="background-image: url('https://videos.openai.com/vg-assets/assets%2Ftask_01jsxxs8h9fkk9dp2eqh7pj9jp%2F1745834874_img_0.webp?st=2025-04-28T08%3A29%3A55Z&se=2025-05-04T09%3A29%3A55Z&sks=b&skt=2025-04-28T08%3A29%3A55Z&ske=2025-05-04T09%3A29%3A55Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=MCQvdlQGhcXuIKsWAWufPWXStyaFC0IF9uQhRD7trAg%3D&az=oaivgprodscus'); background-position: 500px  ;">
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
                <div class="flex flex-col">
                    <PayFareModal :playerNo="sessionId" />
                </div>
                <div class="flex flex-col">
                    <ReportIncident  :playerNo="sessionId"/>
                </div>
            </div>
        </div>
    </div>
    <div class="lg:rounded-t-2xl z-20 mt-[20vh]">
        <NowNext />
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