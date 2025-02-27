<script setup>
import { useAuthStore } from "@/stores/auth";
import { computed, onMounted } from "vue";

const authStore = useAuthStore();

import { watchEffect, ref } from "vue";

const username = ref("Guest");

watchEffect(() => {
  username.value = authStore.user?.email || "Guest";
});

</script>

<template>
  <div class=''>
      {{ username }}
  </div>
</template>
  