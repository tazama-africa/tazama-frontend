<script setup>
import { ref, computed, onMounted, resolveComponent } from "vue";
import Swal from "sweetalert2";

const UBadge = resolveComponent("UBadge");

const playlist = ref([]);
const listenerCount = ref(0);
const sessionId = "1234"; // Replace with actual session ID
let ws = null;

const likedSongs = ref(new Set());

onMounted(() => {
  if (process.client) {
    connectWebSocket();
  }
});

const connectWebSocket = () => {
  ws = new WebSocket(`ws://127.0.0.1:8000/ws/session/${sessionId}/`);

  ws.onmessage = (event) => {
    const data = JSON.parse(event.data);
    if (data.playlist) {
      playlist.value = data.playlist;
    }
    if (data.listener_count !== undefined) {
      listenerCount.value = data.listener_count;
    }
  };

  ws.onclose = () => {
    console.log("WebSocket disconnected, reconnecting...");
    setTimeout(connectWebSocket, 3000);
  };
};

const toggleLike = (songId) => {
  if (likedSongs.value.has(songId)) {
    likedSongs.value.delete(songId);
  } else {
    likedSongs.value.add(songId);
  }
};

const columns = [
  { key: "title", label: "Song" },
  { key: "artist", label: "Artist" },
  { key: "genre", label: "Genre" },
  { key: "options", label: "Actions", class: "text-center" }
];

</script>

<template>
  <div class="p-4">
    <h2 class="text-xl font-bold mb-2">Live Playlist</h2>
    <p class="mb-3">👥 Listeners: {{ listenerCount }}</p>

    <UTable :rows="playlist" :columns="columns" hover>
      <template #title-data="{ row }">
        <span class="font-medium">{{ row.title }}</span>
      </template>

      <template #artist-data="{ row }">
        <span class="text-gray-600">{{ row.artist }}</span>
      </template>

      <template #genre-data="{ row }">
        <UBadge>{{ row.genre }}</UBadge>
      </template>

      <template #options-data="{ row }">
        <button @click="toggleLike(row.id)" class="focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
            :fill="likedSongs.has(row.id) ? 'orange' : 'none'"
            :stroke="likedSongs.has(row.id) ? 'orange' : 'currentColor'"
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21l7.78-7.78z"/>
          </svg>
        </button>
      </template>
    </UTable>
  </div>
</template>
