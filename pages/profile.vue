<template>
    <div class="rounded-2xl">

        <div class="lg:px-4 px-0 p-0 border-b pb-5 mt-10">
            <div class="font-bold flex items-center justify-center h-28 w-28  text-center rounded-full  bg-orange-200 text-orange-600 gap-2 ml-5 text-xl mb-2 font-monospace">
                <div class="" >
                    <UserProfile />
                </div>
                <!-- <p>
                    <UserProfile />
                </p> -->
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
const authStore = useAuthStore();

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
