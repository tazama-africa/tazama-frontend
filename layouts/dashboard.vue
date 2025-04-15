<template>

    <Head>
        <Title>Tazama - Dashboard</Title>
    </Head>

    <div class="flex lg:bg-slate-100 lg:gap-10 gap-4 h-screen overflow-y-hidden">
        <div class="lg:w-[25%] w-full lg:block hidden">
            <SideNav />
        </div>
        <div class="lg:w-[75%]  w-full lg:m-4 lg:space-y-4 ">
            
            <div style="background-color: #030303" class="h-[95%]  overflow-y-scroll lg:rounded-2xl shadow-xl lg:p-0 p-0 ">
                <slot />
                <BottomNav />
            </div>
        </div>
    </div>
</template>

<script setup>
import { useAuthStore } from "@/stores/auth";
import { onMounted } from "vue";

const authStore = useAuthStore();

// Load user data on app start
onMounted(() => {
    authStore.loadAuthData();
});
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');
</style>
