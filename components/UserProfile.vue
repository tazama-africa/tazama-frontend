<script setup>
import { useAuthStore } from "@/stores/auth";
import { watchEffect, ref, computed } from "vue";

const authStore = useAuthStore();
const username = ref("G");

watchEffect(() => {
  const email = authStore.user?.email || "Guest";
  username.value = email.charAt(0).toUpperCase(); // Get the first letter and ensure it's uppercase
});
</script>

<template>
  <div>
    {{ username }}
  </div>
</template>
