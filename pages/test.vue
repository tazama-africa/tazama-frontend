<script setup>
import { ref, computed, onMounted, h, resolveComponent } from "vue";
import { useAuthStore } from "@/stores/auth";
import { usePlayerStore } from "@/stores/playerdata";
import { storeToRefs } from "pinia";

const UBadge = resolveComponent("UBadge");

const authStore = useAuthStore();
const playerStore = usePlayerStore();
const { songs } = storeToRefs(playerStore);

const playlist_now = ref([]);
const globalFilter = ref("");

onMounted(async () => {
  authStore.loadAuthData();
  await playerStore.getPlaylistDataStore();
  console.log("Fetched songs:", songs.value); // Debugging log
});

// Define table columns
const columns = [
  { key: "title", label: "Title" },
  { key: "artist", label: "Artist" },
  {
    key: "genre",
    label: "Genre",
    sortable: true,
    cell: (row) => h(UBadge, { class: "capitalize", variant: "subtle", color: "primary" }, () => row.genre),
  },
];

// **Fix: Computed filtered songs list**
const filteredSongs = computed(() => {
  if (!globalFilter.value) return songs.value;
  return songs.value.filter((song) =>
    Object.values(song).some((field) =>
      String(field).toLowerCase().includes(globalFilter.value.toLowerCase())
    )
  );
});
</script>

<template>
  <div class="flex flex-col flex-1 w-full">
    <div v-if="playerStore.loading">Loading...</div>
    <div v-else-if="playerStore.error">{{ playerStore.error }}</div>
    <div v-else>
      <h2>Playlist Songs</h2>

      <UInput v-model="globalFilter" class="max-w-sm mb-4" placeholder="Search..." />

      <!-- **Fix: Bind `filteredSongs` instead of `songs`** -->
      <!-- <UTable :rows="filteredSongs" :columns="columns" /> -->

      <ConnectSessionTable />

    </div>
  </div>
</template>
