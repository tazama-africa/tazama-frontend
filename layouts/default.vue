<template>
    <!-- <VitePwaManifest /> -->

    <Head>
        <Title>Tazama</Title>
    </Head>

    <div class="flex lg:bg-slate-100 lg:gap-10 gap-4 h-screen overflow-y-hidden">
        <!-- <div class="lg:w-[25%] w-full lg:block hidden">
            <SideNav />
        </div> -->
        <div class="lg:w-[100%]  w-full   lg:space-y-4 ">

            <div style="background-color: #030303"
                class="lg:h-[100%] h-[95%]  overflow-y-scroll   shadow-xl lg:p-0 p-0 ">
                <slot />
                <div :class="{ 'hidden': route.path === '/accounts/login' || route.path === '/accounts/forgot-password' || route.path === '/accounts/register' || route.path === '/get-started' }">
                    <BottomNav />
                </div>

            </div>
        </div>
    </div>
</template>

<script setup>
import { useAuthStore } from "@/stores/auth";
import { onMounted } from "vue";
import { useRoute } from 'vue-router';
// import { Home, Search, User } from 'lucide-vue-next';

const route = useRoute();


const authStore = useAuthStore();

// Load user data on app start
onMounted(() => {
    authStore.loadAuthData();
});
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');
</style>


<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap');

.font-custom {
    font-family: 'Inter', sans-serif;
}
</style>