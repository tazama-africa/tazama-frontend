<template>

    <Head>
        <Title>Jam Music - Tazama </Title>
    </Head>

    <div class="flex lg:bg-slate-100 lg:gap-10 gap-4 h-screen overflow-y-hidden">
        <div class="lg:w-[25%] w-full lg:block hidden">
            <SideNav />
        </div>
        <div class="lg:w-[75%] w-full lg:m-4 lg:space-y-4 ">
            <div
                class="lg:bg-white  border-b py-3 w-full h-10 flex justify-between  items-center text-sm p-4 px-2 lg:rounded-full">
                <div class="flex pl-5 gap-1">
                    <nuxt-link to="/dashboard"  class="flex gap-2 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20 11H7.83l5.59-5.59L12 4l-8 8l8 8l1.41-1.41L7.83 13H20z"/></svg>
                    </nuxt-link> 
                </div>
                <!-- <div>
                    <SearchSongs />
                </div> -->

                <div>
                    <div class="flex gap-2 items-center py-2 text-gray-900 pr-4">
                        <div
                            class="flex items-center justify-center w-8 h-8 overflow-hidden bg-orange-500 text-white  rounded-full">
                            <div>
                                <UserProfile />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="h-[93%] bg-white overflow-y-scroll  lg:rounded-2xl shadow-xl lg:p-0 p-0 ">
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

<style lang="scss" scoped></style>