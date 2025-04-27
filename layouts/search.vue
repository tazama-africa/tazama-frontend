<template>
    <VitePwaManifest />
    <Head>
        <Title>Tazama - Search</Title>
    </Head>

    <div class="flex lg:bg-slate-100 lg:gap-10 gap-4 h-screen overflow-y-hidden">
        <div class="lg:w-[25%] w-full lg:block hidden">
            <SideNav />
        </div>
        <div class="lg:w-[75%] w-full lg:m-4 lg:space-y-4 ">
            <div
                class="lg:bg-white bg-gradient-to-r from-blue-500 to-blue-600 border-b py-3 w-full h-10 flex justify-between  items-center text-sm p-4 px-2 lg:rounded-full">
                <div class="flex pl-5 gap-1">
                    <div class="flex gap-2 items-center">
                        <!-- <NuxtImg src="/logo-long-1.png" class="lg:w-[80%] h-12 object-cover" /> -->
                        <p class="text-gray-300 ">Search songs</p>
                    </div>
                </div>
                <!-- <div>
                    <SearchSongs />
                </div> -->

                <div>
                    <div class="flex gap-2 items-center py-2 text-gray-900 pr-4">
                        <div
                            class="flex items-center justify-center w-8 h-8 overflow-hidden bg-blue-500 text-white  rounded-full">
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